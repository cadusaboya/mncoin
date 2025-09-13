// app/api/buy/route.js (baseado na sua versão funcional, com Hard Cap corrigido)
import { NextResponse } from 'next/server';
import { Connection, PublicKey, SystemProgram, Keypair, VersionedTransaction, TransactionMessage } from '@solana/web3.js';
import { getAssociatedTokenAddress, createTransferInstruction, createAssociatedTokenAccountInstruction } from '@solana/spl-token';

// Não importamos NADA do @pythnetwork/client, como na sua versão.

export async function POST(req) {
  try {
    const { buyerPublicKey, amount } = await req.json();
    if (!buyerPublicKey || !amount || amount <= 0) {
      return NextResponse.json({ error: 'PublicKey do comprador e quantidade válida são necessários.' }, { status: 400 });
    }

    const MINT = new PublicKey("2uoVtdkbLjLvZRTc2uxaK8AztLhmjEXt67dDCCijPkJu"); // O seu mint
    const DECIMALS = 6;

    const sellerSecretKey = JSON.parse(process.env.SELLER_SECRET_KEY);
    const sellerKeypair = Keypair.fromSecretKey(new Uint8Array(sellerSecretKey));
    const sellerPublicKey = sellerKeypair.publicKey;

    const connection = new Connection("https://api.devnet.solana.com", "confirmed" );
    const sellerATA = await getAssociatedTokenAddress(MINT, sellerPublicKey);

    // --- LÓGICA DO HARD CAP (VERSÃO CORRIGIDA USANDO VALORES BRUTOS) ---
    
    // 1. Definir os limites em valores brutos (inteiros) usando BigInt para segurança
    const SELLER_RESERVE_RAW = BigInt(200_000_000) * BigInt(10 ** DECIMALS);
    const amountToBuyRaw = BigInt(Math.floor(amount)) * BigInt(10 ** DECIMALS);

    // 2. Obter o saldo bruto do vendedor
    const sellerBalanceResponse = await connection.getTokenAccountBalance(sellerATA);
    const sellerBalanceRaw = BigInt(sellerBalanceResponse.value.amount);

    // 3. Verificar se a venda já terminou (saldo do vendedor atingiu ou está abaixo da reserva)
    if (sellerBalanceRaw <= SELLER_RESERVE_RAW) {
        return NextResponse.json({ error: `A venda terminou. Não há mais tokens disponíveis.` }, { status: 400 });
    }

    // 4. Calcular o novo saldo e verificar se a compra é válida
    const newSellerBalanceRaw = sellerBalanceRaw - amountToBuyRaw;

    if (newSellerBalanceRaw < SELLER_RESERVE_RAW) {
      const availableToSellRaw = sellerBalanceRaw - SELLER_RESERVE_RAW;
      const availableToSellUi = Number(availableToSellRaw / BigInt(10 ** DECIMALS));
      return NextResponse.json({ error: `A quantidade solicitada excede o estoque. Apenas ${availableToSellUi.toLocaleString()} MNT estão disponíveis.` }, { status: 400 });
    }
    // --- FIM DA LÓGICA DO HARD CAP ---

    // --- LÓGICA DE PREÇOS COM PYTH (MÉTODO DIRETO COM FETCH) ---
    const solPriceFeedId = "ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d";
    const pythUrl = `https://hermes.pyth.network/v2/updates/price/latest?ids[]=${solPriceFeedId}`;
    const pythResponse = await fetch(pythUrl, { headers: { 'accept': 'application/json' } } );
    if (!pythResponse.ok) throw new Error(`Falha ao contactar o oráculo Pyth. Status: ${pythResponse.status}`);
    const pythData = await pythResponse.json();
    const parsedPriceData = pythData.parsed[0].price;
    if (!parsedPriceData) throw new Error("A resposta do Pyth não continha os dados de preço esperados.");
    const price = parseFloat(parsedPriceData.price);
    const expo = parsedPriceData.expo;
    const SOL_USD = price * (10 ** expo);
    console.log(`Preço do SOL em tempo real (Pyth via fetch): $${SOL_USD}`);
    const PRICE_USD = 0.006; // O seu preço
    const pricePerTokenSOL = PRICE_USD / SOL_USD;
    const lamports = Math.floor(amount * pricePerTokenSOL * 1e9);
    // --- FIM DA LÓGICA DE PREÇOS ---

    const buyerPubkey = new PublicKey(buyerPublicKey);
    const buyerATA = await getAssociatedTokenAddress(MINT, buyerPubkey);
    const ixs = [];
    const buyerAtaInfo = await connection.getAccountInfo(buyerATA);
    if (!buyerAtaInfo) ixs.push(createAssociatedTokenAccountInstruction(buyerPubkey, buyerATA, buyerPubkey, MINT));
    
    ixs.push(SystemProgram.transfer({ fromPubkey: buyerPubkey, toPubkey: sellerPublicKey, lamports }));
    
    // Usar o valor bruto que já calculámos para a transferência do token
    ixs.push(createTransferInstruction(sellerATA, buyerATA, sellerPublicKey, amountToBuyRaw));
    
    const { blockhash } = await connection.getLatestBlockhash("finalized");
    const message = new TransactionMessage({ payerKey: buyerPubkey, recentBlockhash: blockhash, instructions: ixs }).compileToV0Message();
    const tx = new VersionedTransaction(message);
    tx.sign([sellerKeypair]);
    
    const serializedTx = Buffer.from(tx.serialize()).toString('base64');
    return NextResponse.json({ transaction: serializedTx, blockhash: blockhash });

  } catch (error) {
    console.error("Erro na API:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
