// components/BuyInterface.jsx (Versão Final com Fluxo de Assinatura Corrigido)
'use client';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { VersionedTransaction } from '@solana/web3.js';
import { useState, useEffect } from 'react';
import { FiCopy } from 'react-icons/fi';
import { LazyVideo } from './LazyVideo';

// Componente reutilizável para a barra de progresso
const ProgressBar = ({ progress }) => (
  <div style={{ width: '100%', backgroundColor: '#333', borderRadius: '5px', overflow: 'hidden', marginTop: '10px', border: '1px solid #444' }}>
    <div style={{ width: `${progress}%`, backgroundColor: '#4CAF50', padding: '8px 0', textAlign: 'center', color: 'white', transition: 'width 0.5s ease-in-out', fontWeight: 'bold' }}>
      {progress.toFixed(2)}%
    </div>
  </div>
);

export const BuyInterface = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [amount, setAmount] = useState(1000);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [signature, setSignature] = useState('');
  const [saleData, setSaleData] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const saleIsActive = process.env.NEXT_PUBLIC_SALE_IS_ACTIVE === 'true';
  const contractAddress = "9rTErETHWFccYwYc7zunvpfPgc5VWhRBPMdHhYEtVRwr";
  const MNT_PRICE_USD = 0.006;
  const totalCostUSD = (amount * MNT_PRICE_USD).toFixed(2);

  useEffect(() => {
    setHasMounted(true);
    if (saleIsActive) {
      const fetchSaleStatus = async () => {
        try {
          const response = await fetch('/api/sale-status');
          const data = await response.json();
          if (data.error) throw new Error(data.error);
          setSaleData(data);
        } catch (error) {
          console.error("Falha ao buscar status da venda:", error);
          setStatus("Couldn't fetch sale status.");
        }
      };
      fetchSaleStatus();
      const interval = setInterval(fetchSaleStatus, 60000);
      return () => clearInterval(interval);
    }
  }, [saleIsActive]);

  // NOVA FUNÇÃO handleBuy COM O FLUXO CORRETO
  const handleBuy = async () => {
    if (!publicKey) {
      setStatus('Please, connect your wallet.');
      return;
    }
    setIsLoading(true);
    setStatus('1/5 - Preparing transaction...');
    setSignature('');
    try {
      // ETAPA 1: Chamar a API /api/buy para obter a transação não assinada
      const prepResponse = await fetch('/api/buy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ buyerPublicKey: publicKey.toBase58(), amount }),
      });
      const prepData = await prepResponse.json();
      if (!prepResponse.ok) throw new Error(prepData.error || 'Failed to prepare transaction.');
      
      setStatus('2/5 - Please, approve the transaction in your wallet...');
      
      // ETAPA 2: Pedir à Phantom para assinar (primeira assinatura)
      const tx = VersionedTransaction.deserialize(Buffer.from(prepData.transaction, 'base64'));
      
      // O `sendTransaction` da wallet-adapter na verdade assina e envia, mas não podemos usá-lo diretamente
      // porque precisamos da segunda assinatura do backend. Em vez disso, usamos `signTransaction`.
      // Verificamos se a função existe para compatibilidade.
      if (!window.solana.signTransaction) throw new Error('Wallet does not support signTransaction. Please update your wallet.');
      
      const signedTx = await window.solana.signTransaction(tx);
      
      setStatus('3/5 - Sending your signature to the server...');

      // ETAPA 3: Enviar a transação assinada pelo comprador para a nova API /api/send
      const sendResponse = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signedTransaction: Buffer.from(signedTx.serialize()).toString('base64') }),
      });
      const sendData = await sendResponse.json();
      if (!sendResponse.ok) throw new Error(sendData.error || 'Failed to send transaction.');

      const sig = sendData.signature;
      setSignature(sig);
      setStatus('4/5 - Waiting for confirmation...');

      // ETAPA 4: Confirmar a transação
      await connection.confirmTransaction({
        signature: sig,
        blockhash: prepData.blockhash,
        lastValidBlockHeight: (await connection.getLatestBlockhash()).lastValidBlockHeight
      });

      setStatus(`5/5 - Success! Purchase of ${amount.toLocaleString()} MNT confirmed.`);
      
      // Atualiza o status da venda
      const newStatus = await fetch('/api/sale-status').then(res => res.json());
      setSaleData(newStatus);

    } catch (error) {
      console.error("Purchase Error:", error);
      setStatus(`Failed to purchase: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus(''), 2000);
  };

  if (!hasMounted) {
    return null;
  }

  const saleEnded = saleData && saleData.saleProgress >= 100;

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto px-4 py-16">
      
      <div className="w-full lg:w-1/2">
        <div className="w-full h-full max-h-[600px] lg:max-h-full overflow-hidden rounded-lg shadow-2xl">
          <LazyVideo src="/launch-video.mp4"/>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div style={{ background: '#1a1a1a', color: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          
          <h2 className="mb-2 text-4xl font-bold">MnToken Public Sale</h2>
          <p style={{ color: '#aaa', marginTop: 0 }}>Be a part of our manganese ore extraction project.</p>
          
          <div style={{ margin: '20px 0', fontSize: '12px', color: '#888', wordBreak: 'break-all' }}>
            <span>Official Contract Address:</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '5px', backgroundColor: '#222', padding: '8px', borderRadius: '5px' }}>
              <a href={`https://solscan.io/token/${contractAddress}`} target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', textDecoration: 'none' }}>
                {contractAddress}
              </a>
              <button onClick={handleCopy} title="Copy Address" style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
                <FiCopy size={16} />
              </button>
            </div>
            {copyStatus && <span style={{ color: '#4CAF50', fontSize: '12px', marginTop: '5px', display: 'block' }}>{copyStatus}</span>}
          </div>

          <div style={{ margin: '20px 0', padding: '10px', backgroundColor: '#222', borderRadius: '5px', border: '1px solid #444' }}>
            <p style={{ margin: 0, fontWeight: 'bold', color: '#ccc' }}>Price: 1 MNT = ${MNT_PRICE_USD}</p>
          </div>

          {!saleIsActive ? (
            <div style={{ margin: '20px 0', padding: '20px', backgroundColor: '#222', borderRadius: '5px' }}>
              <p style={{ color: '#FFC107', fontWeight: 'bold', fontSize: '18px' }}>The public sale has not started yet. Stay tuned!</p>
            </div>
            ) : saleData ? (
            <div style={{ margin: '20px 0' }}>
              <p style={{ margin: 0, color: '#ccc' }}>
                {Math.floor(saleData.tokensSold).toLocaleString()} / {saleData.tokensForSale.toLocaleString()} sold
              </p>
              <ProgressBar progress={saleData.saleProgress} />
            </div>
          ) : (
            <p>Tracking sale status...</p>
          )}

          <div style={{ margin: '30px 0' }}>
            <WalletMultiButton />
          </div>

          {publicKey && saleIsActive && (
            <>
              {saleEnded ? (
                <p style={{ color: '#FFC107', fontWeight: 'bold', fontSize: '18px' }}>Public sale has ended. Thank you for joining!</p>
              ) : (
                <div>
                  <div style={{ margin: '20px 0' }}>
                    <label htmlFor="amount" style={{ display: 'block', marginBottom: '10px', textAlign: 'left' }}>MNT Amount:</label>
                    <input type="number" id="amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))} style={{ padding: '12px', width: '100%', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#333', color: 'white', fontSize: '16px' }} disabled={isLoading} />
                  
                    <div style={{ textAlign: 'right', marginTop: '10px', color: '#aaa' }}>
                      <p style={{ margin: 0 }}>Total Cost: <span style={{ fontWeight: 'bold', color: 'white' }}>${totalCostUSD}</span></p>
                      <p style={{ margin: 0, fontSize: '12px' }}>(Price in SOL will be calculated at checkout)</p>
                    </div>
                  </div>

                  <button onClick={handleBuy} disabled={isLoading || amount <= 0 || !saleData} style={{ padding: '15px 30px', backgroundColor: isLoading || !saleData ? '#555' : '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '18px', width: '100%', transition: 'background-color 0.3s' }}>
                    {isLoading ? 'Processing...' : `Buy ${amount.toLocaleString()} MNT`}
                  </button>
                </div>
              )}
            </>
          )}

          {status && (
            <div style={{ marginTop: '20px', wordBreak: 'break-all', backgroundColor: '#222', padding: '10px', borderRadius: '5px' }}>
              <p style={{ margin: 0 }}>{status}</p>
              {signature && (
                <a href={`https://solscan.io/tx/${signature}`} target="_blank" rel="noopener noreferrer" style={{ color: '#4CAF50', textDecoration: 'underline' }}>
                  See transaction on Solscan
                </a>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
