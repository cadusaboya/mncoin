// app/api/sale-status/route.js
import { NextResponse } from 'next/server';
import { Connection, PublicKey } from '@solana/web3.js';
import { getAssociatedTokenAddress } from '@solana/spl-token';

// Esta função GET é pública e pode ser chamada por qualquer pessoa.
export async function GET() {
  try {
    // Substitua estes valores pelos seus dados reais
    const MINT = new PublicKey("9rTErETHWFccYwYc7zunvpfPgc5VWhRBPMdHhYEtVRwr");
    const SELLER_PUBLIC_KEY = new PublicKey("BEMLYbQRywaFYB7d4MfXAhsDgUKBZeHzbwuiQ1AanpGW");
    const RPC_URL = "https://api.mainnet-beta.solana.com";

    const connection = new Connection(RPC_URL, "confirmed" );
    const sellerATA = await getAssociatedTokenAddress(MINT, SELLER_PUBLIC_KEY);

    let sellerBalance = 0;
    try {
        const sellerBalanceResponse = await connection.getTokenAccountBalance(sellerATA);
        sellerBalance = sellerBalanceResponse.value.uiAmount || 0;
    } catch (e) {
        // Se a conta de token do vendedor estiver vazia, pode dar erro. Tratamos como 0.
        console.log("Conta de token do vendedor provavelmente vazia, tratando saldo como 0.");
    }

    const TOTAL_SUPPLY = 1_000_000_000;
    const TOKENS_FOR_SALE = 500_000_000;
    
    const tokensSold = TOTAL_SUPPLY - sellerBalance;
    const saleProgress = (tokensSold / TOKENS_FOR_SALE) * 100;

    return NextResponse.json({
      tokensSold: tokensSold,
      tokensForSale: TOKENS_FOR_SALE,
      saleProgress: Math.min(saleProgress, 100), // Garante que não passa de 100%
    });

  } catch (error) {
    console.error("Erro na API de status:", error);
    return NextResponse.json({ error: 'Falha ao obter o status da venda.' }, { status: 500 });
  }
}
