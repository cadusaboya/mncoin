const YoutubeVid = ({ width = "560", height = "315" }) => {
    return (
      <div style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden', maxWidth: '100%', height: 'auto' }}>
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/VU3F018_l3s`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        ></iframe>
      </div>
    );
  };
  
  export default YoutubeVid;