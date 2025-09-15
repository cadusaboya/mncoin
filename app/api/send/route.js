import { NextResponse } from 'next/server';
import { Connection, Keypair, VersionedTransaction } from '@solana/web3.js';

export async function POST(request) {
    try {
        const { signedTransaction } = await request.json();

        if (!signedTransaction) {
            return NextResponse.json({ error: 'Transação assinada não fornecida.' }, { status: 400 });
        }

        // Desserializar a transação recebida do frontend (assinada pelo comprador)
        const transactionBuffer = Buffer.from(signedTransaction, 'base64');
        const tx = VersionedTransaction.deserialize(transactionBuffer);

        // **CORREÇÃO CRÍTICA: ADICIONAR A ASSINATURA DO VENDEDOR AQUI**
        const sellerSecretKey = JSON.parse(process.env.SELLER_SECRET_KEY);
        const sellerKeypair = Keypair.fromSecretKey(new Uint8Array(sellerSecretKey));
        
        // Assinar com a chave do vendedor para completar as assinaturas
        tx.sign([sellerKeypair]);

        const connection = new Connection(process.env.SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com", "confirmed" );

        // Enviar a transação agora totalmente assinada
        const txid = await connection.sendTransaction(tx, {
            skipPreflight: true,
        });

        console.info(`[API/SEND] Transação enviada com sucesso. Assinatura: ${txid}`);

        return NextResponse.json({ txid });

    } catch (error) {
        const errorMessage = (error instanceof Error) ? error.message : 'Ocorreu um erro desconhecido.';
        console.error(`[API/SEND] Erro ao enviar transação:`, errorMessage, error);
        return NextResponse.json({ error: 'Ocorreu um erro ao processar a sua transação.' }, { status: 500 });
    }
}
