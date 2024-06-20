import Image from 'next/image';
import { DialogDemo } from './Dialog';

const Main = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:px-8 py-16">
      <div className="flex-1 mb-8 lg:mb-0 md:mr-8 px-20">
        <h1 className="text-center lg:text-left text-4xl lg:text-6xl font-extrabold text-purple-900">The future of Manganese is now</h1>
        <p className="text-center lg:text-justify mt-2 lg:text-lg text-purple-800 lg:pr-10">
          MnCoin is a decentralized Manganese Ore Mine powered by blockchain technology. Our mission is to open investments in the ore mining sector to the average investor and also create a hub for buyers and sellers to trade Manganese safely.
        </p>
        <div className="flex justify-center lg:justify-start">
          <DialogDemo />
        </div>
        
      </div>
      <div className="flex-1 px-8">
        {/* Placeholder for Image or Video */}
        <Image
          src="/mina-placeholder.jpg"
          alt="Main Image"
          width={1200}
          height={300}
          className="rounded-lg shadow-lg"
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