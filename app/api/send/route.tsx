// app/api/send/route.js (Versão 2: Assinar e Enviar)
import { NextResponse } from 'next/server';
import { Connection, Keypair, VersionedTransaction } from '@solana/web3.js';

export async function POST(req) {
  try {
    const { signedTransaction } = await req.json();
    if (!signedTransaction) {
      return NextResponse.json({ error: 'Missing signedTransaction' }, { status: 400 });
    }

    const sellerSecretKey = JSON.parse(process.env.SELLER_SECRET_KEY);
    const sellerKeypair = Keypair.fromSecretKey(new Uint8Array(sellerSecretKey));

    // Desserializa a transação que veio do frontend
    const tx = VersionedTransaction.deserialize(Buffer.from(signedTransaction, 'base64'));

    // Adiciona a assinatura do vendedor (a segunda assinatura)
    tx.sign([sellerKeypair]);

    const connection = new Connection(process.env.RPC_URL, "confirmed");

    // Envia a transação finalizada para a blockchain
    const sig = await connection.sendTransaction(tx, { skipPreflight: false });

    return NextResponse.json({ signature: sig });

  } catch (error) {
    console.error("Erro na API /api/send:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
