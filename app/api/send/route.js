import { NextResponse } from 'next/server';
import { Connection } from '@solana/web3.js';

// A função POST recebe o objeto 'request' como primeiro argumento.
export async function POST(request) {
    try {
        // Extraímos o corpo (body) do pedido usando o método .json()
        const { signedTransaction } = await request.json();

        if (!signedTransaction) {
            return NextResponse.json({ error: 'Transação assinada não fornecida.' }, { status: 400 });
        }

        const connection = new Connection(process.env.SOLANA_RPC_URL || "https://api.mainnet-beta.solana.com", "confirmed" );

        // Desserializar a transação recebida do frontend
        const transactionBuffer = Buffer.from(signedTransaction, 'base64');

        // Enviar a transação bruta (raw), que já está assinada
        const txid = await connection.sendRawTransaction(transactionBuffer, {
            skipPreflight: true, // Pula a simulação da transação para um envio mais rápido
        });

        // Substituímos console.log por um método mais estruturado que pode ser expandido
        // para um serviço de logging (ex: Sentry, Logtail) no futuro.
        // Por enquanto, isto ainda irá para a consola do servidor.
        console.info(`[API/SEND] Transação enviada com sucesso. Assinatura: ${txid}`);

        // Retornar a assinatura da transação para o frontend
        return NextResponse.json({ txid });

    } catch (error) {
        // Capturamos o erro e registamo-lo no servidor.
        // O 'as Error' ajuda o TypeScript a entender o tipo do objeto de erro.
        const errorMessage = (error instanceof Error) ? error.message : 'Ocorreu um erro desconhecido.';
        console.error(`[API/SEND] Erro ao enviar transação:`, errorMessage, error);

        // Retornamos uma mensagem de erro genérica e limpa para o cliente.
        return NextResponse.json({ error: 'Ocorreu um erro ao processar a sua transação.' }, { status: 500 });
    }
}
