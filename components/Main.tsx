import Image from 'next/image';

const Main = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-gray-100">
      <div className="flex-1 mb-8 md:mb-0 md:mr-8 px-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-purple-900">The future of Manganese is here</h1>
        <p className="mt-2 md:text-x1 max-w-xl text-purple-800 text-justify">
          MnCoin is a decentralized Manganese Ore Mine powered by blockchain technology. Our mission is to open investments in the ore mining sector to the average investor and also create a hub for buyers and sellers to trade Manganese safely.
        </p>
      </div>
      <div className="flex-1">
        {/* Placeholder for Image or Video */}
        <Image
          src="/mina-placeholder.jpg"
          alt="Main Image"
          width={500}
          height={300}
          className="rounded-lg shadow-lg border-2 border-purple-900"
        />
        {/* If you decide to use a video, you can replace the above Image component with the below video tag */}
        {/* <video
          src="/placeholder-video.mp4"
          controls
          className="rounded-lg shadow-lg"
          width="500"
          height="300"
        /> */}
      </div>
    </div>
  );
};

export default Main;