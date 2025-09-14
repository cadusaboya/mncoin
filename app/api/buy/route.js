// app/api/buy/route.js (com o switch de venda)
import { NextResponse } from 'next/server';
import { Connection, PublicKey, SystemProgram, Keypair, VersionedTransaction, TransactionMessage } from '@solana/web3.js';
import { getAssociatedTokenAddress, createTransferInstruction, createAssociatedTokenAccountInstruction } from '@solana/spl-token';

export async function POST(req) {
  try {
    // --- LÓGICA DO SWITCH DA VENDA ---
    // A variável de ambiente decidirá se a venda está ativa.
    // Se a variável não existir ou for diferente de "true", a venda está desligada.
    if (process.env.NEXT_PUBLIC_SALE_IS_ACTIVE !== 'true') {
      return NextResponse.json({ error: 'A venda pública não está ativa no momento.' }, { status: 403 }); // 403 Forbidden
    }
    // --- FIM DA LÓGICA DO SWITCH ---

    const { buyerPublicKey, amount } = await req.json();
    if (!buyerPublicKey || !amount || amount <= 0) {
      return NextResponse.json({ error: 'PublicKey do comprador e quantidade válida são necessários.' }, { status: 400 });
    }

    // ... (O resto do seu código funcional continua aqui, sem alterações)
    const MINT = new PublicKey("9rTErETHWFccYwYc7zunvpfPgc5VWhRBPMdHhYEtVRwr");
    const DECIMALS = 6;
    const sellerSecretKey = JSON.parse(process.env.SELLER_SECRET_KEY);
    const sellerKeypair = Keypair.fromSecretKey(new Uint8Array(sellerSecretKey));
    const sellerPublicKey = sellerKeypair.publicKey;
    const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed" );
    const sellerATA = await getAssociatedTokenAddress(MINT, sellerPublicKey);

    // Lógica do Hard Cap (usando BigInt)
    const SELLER_RESERVE_RAW = BigInt(200_000_000) * BigInt(10 ** DECIMALS);
    const amountToBuyRaw = BigInt(Math.floor(amount)) * BigInt(10 ** DECIMALS);
    const sellerBalanceResponse = await connection.getTokenAccountBalance(sellerATA);
    const sellerBalanceRaw = BigInt(sellerBalanceResponse.value.amount);
    if (sellerBalanceRaw <= SELLER_RESERVE_RAW) {
        return NextResponse.json({ error: `A venda terminou. Não há mais tokens disponíveis.` }, { status: 400 });
    }
    const newSellerBalanceRaw = sellerBalanceRaw - amountToBuyRaw;
    if (newSellerBalanceRaw < SELLER_RESERVE_RAW) {
      const availableToSellRaw = sellerBalanceRaw - SELLER_RESERVE_RAW;
      const availableToSellUi = Number(availableToSellRaw / BigInt(10 ** DECIMALS));
      return NextResponse.json({ error: `A quantidade solicitada excede o estoque. Apenas ${availableToSellUi.toLocaleString()} MNT estão disponíveis.` }, { status: 400 });
    }

    // Lógica de Preços com Pyth (via fetch)
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
    const PRICE_USD = 0.006;
    const pricePerTokenSOL = PRICE_USD / SOL_USD;
    const lamports = Math.floor(amount * pricePerTokenSOL * 1e9);

    // Construção da Transação
    const buyerPubkey = new PublicKey(buyerPublicKey);
    const buyerATA = await getAssociatedTokenAddress(MINT, buyerPubkey);
    const ixs = [];
    const buyerAtaInfo = await connection.getAccountInfo(buyerATA);
    if (!buyerAtaInfo) ixs.push(createAssociatedTokenAccountInstruction(buyerPubkey, buyerATA, buyerPubkey, MINT));
    ixs.push(SystemProgram.transfer({ fromPubkey: buyerPubkey, toPubkey: sellerPublicKey, lamports }));
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
