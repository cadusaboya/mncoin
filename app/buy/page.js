// app/buy/page.js
'use client'; // A página que usa hooks de cliente precisa de ser um client component

import { BuyInterface } from '../../components/BuyInterface'; // Ajuste o caminho se necessário
import Head from 'next/head';

export default function BuyPage() {
  return (
    <div>
      <Head>
        <title>Buy MnToken (MNT)</title>
        <meta name="description" content="Be an owner of a Manganese Ore Production now!" />
      </Head>

      <main style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#0D0D0D' }}>
        <BuyInterface />
      </main>
    </div>
  );
}
