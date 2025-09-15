'use client';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { VersionedTransaction } from '@solana/web3.js';
import { useState, useEffect, useCallback } from 'react'; // Adicionado useCallback
import { FiCopy } from 'react-icons/fi';
import { LazyVideo } from './LazyVideo';

// Componente reutilizável para a barra de progresso (do seu código original)
const ProgressBar = ({ progress }) => (
  <div style={{ width: '100%', backgroundColor: '#333', borderRadius: '5px', overflow: 'hidden', marginTop: '10px', border: '1px solid #444' }}>
    <div style={{ width: `${progress}%`, backgroundColor: '#4CAF50', padding: '8px 0', textAlign: 'center', color: 'white', transition: 'width 0.5s ease-in-out', fontWeight: 'bold' }}>
      {progress.toFixed(2)}%
    </div>
  </div>
);

export const BuyInterface = () => {
  // --- ESTADOS (do seu código original, com pequenas adições) ---
  const { connection } = useConnection();
  // Importante: Trocamos sendTransaction por signTransaction
  const { publicKey, signTransaction } = useWallet(); 
  const [amount, setAmount] = useState(1000);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState(''); // Adicionado para mensagens de erro claras
  const [txid, setTxid] = useState(''); // Usaremos txid para a assinatura final
  const [saleData, setSaleData] = useState(null);
  const [hasMounted, setHasMounted] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');

  const saleIsActive = process.env.NEXT_PUBLIC_SALE_IS_ACTIVE === 'true';
  const contractAddress = "9rTErETHWFccYwYc7zunvpfPgc5VWhRBPMdHhYEtVRwr";
  const MNT_PRICE_USD = 0.006;
  const totalCostUSD = (amount * MNT_PRICE_USD).toFixed(2);

  // --- LÓGICA DE BUSCA DE DADOS (do seu código original) ---
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
          setError("Couldn't fetch sale status.");
        }
      };
      fetchSaleStatus();
      const interval = setInterval(fetchSaleStatus, 60000);
      return () => clearInterval(interval);
    }
  }, [saleIsActive]);

  // --- NOVA FUNÇÃO handleBuy (LÓGICA DE 4 PASSOS) ---
  const handleBuy = useCallback(async () => {
    if (!publicKey || !signTransaction) {
      setError('Por favor, conecte a sua carteira primeiro.');
      return;
    }
    if (!amount || amount <= 0) {
      setError('Por favor, insira uma quantidade válida.');
      return;
    }

    setIsLoading(true);
    setStatus('');
    setError('');
    setTxid('');

    try {
      // Passo 1: Chamar a API /api/buy para obter a transação parcialmente assinada
      setStatus('1/4 - A preparar a transação...');
      const response = await fetch('/api/buy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          buyerPublicKey: publicKey.toBase58(),
          amount: Number(amount),
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Falha ao preparar a transação.');

      const transactionBuffer = Buffer.from(data.transaction, 'base64');
      const transaction = VersionedTransaction.deserialize(transactionBuffer);

      // Passo 2: Pedir ao utilizador para assinar a transação
      setStatus('2/4 - Por favor, aprove a transação na sua carteira...');
      const signedTransaction = await signTransaction(transaction);

      // Passo 3: Enviar a transação totalmente assinada para a API /api/send
      setStatus('3/4 - A enviar a transação para a blockchain...');
      const signedTransactionBuffer = Buffer.from(signedTransaction.serialize());
      const sendResponse = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ signedTransaction: signedTransactionBuffer.toString('base64') }),
      });
      const sendData = await sendResponse.json();
      if (!sendResponse.ok) throw new Error(sendData.error || 'Falha ao enviar a transação.');

      // Passo 4: Sucesso!
      setStatus(`Sucesso! Compra de ${amount.toLocaleString()} MNT confirmada.`);
      setTxid(sendData.txid);
      
      // Atualizar o status da venda após a compra
      const newStatus = await fetch('/api/sale-status').then(res => res.json());
      setSaleData(newStatus);

    } catch (err) {
      console.error("Erro na compra:", err);
      const errorMessage = (err instanceof Error) ? err.message : 'Ocorreu um erro desconhecido.';
      setError(`Falha na compra: ${errorMessage}`);
      setStatus(''); // Limpa o status para não confundir
    } finally {
      setIsLoading(false);
    }
  }, [publicKey, signTransaction, amount, connection]);


  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus(''), 2000);
  };

  if (!hasMounted) {
    return null;
  }

  const saleEnded = saleData && saleData.saleProgress >= 100;

  // --- SEU JSX ORIGINAL (sem alterações de layout) ---
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl mx-auto px-4 py-16">
      <div className="w-full lg:w-1/2">
        <div className="w-full h-full max-h-[600px] lg:max-h-full overflow-hidden rounded-lg shadow-2xl">
          <LazyVideo src="/launch-video.mp4"/>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div style={{ background: '#1a1a1a', color: 'white', padding: '40px', borderRadius: '10px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h2 className="text-2xl font-bold">MnToken Public Sale</h2>
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
          {/* Lógica de exibição de status e erro melhorada */}
          {(status || error || txid) && (
            <div style={{ marginTop: '20px', wordBreak: 'break-all', backgroundColor: '#222', padding: '10px', borderRadius: '5px' }}>
              {status && <p style={{ margin: 0, color: '#61dafb' }}>{status}</p>}
              {error && <p style={{ margin: 0, color: '#ff6b6b' }}>{error}</p>}
              {txid && (
                <a href={`https://solscan.io/tx/${txid}`} target="_blank" rel="noopener noreferrer" style={{ color: '#4CAF50', textDecoration: 'underline', display: 'block', marginTop: '8px' }}>
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
