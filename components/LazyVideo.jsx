// components/LazyVideo.jsx
'use client';
import { useState, useEffect } from 'react';

export const LazyVideo = ({ src }) => {
  const [videoSrc, setVideoSrc] = useState('');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    // Garante que este código só roda no cliente
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      // Define o src do vídeo apenas após a montagem,
      // o que permite que o resto da página carregue primeiro.
      setVideoSrc(src);
    }
  }, [hasMounted, src]);

  if (!hasMounted) {
    // Mostra um placeholder enquanto o componente não está montado
    // para evitar erros de hidratação e melhorar o LCP.
    return (
      <div style={{
        width: '100%',
        aspectRatio: '16 / 9', // Mantém a proporção do vídeo
        backgroundColor: '#222',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#555'
      }}>
        Loading video...
      </div>
    );
  }

  return (
    <video
      key={videoSrc} // Força a recriação do elemento quando o src muda
      src={videoSrc}
      controls
      width="100%"
      preload="metadata"
      style={{ borderRadius: '10px', border: '1px solid #444' }}
      autoPlay
      muted
      loop
      playsInline
    >
      Your browser does not support the video tag.
    </video>
  );
};
