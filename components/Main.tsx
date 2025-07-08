"use client"

import { Button } from "@/components/ui/button"
import  { CarouselPlugin }  from './Carousel';
import Link from 'next/link';
import { FaDiscord } from "react-icons/fa";

const Main = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:px-8 py-32">
      <div className="flex-1 lg:mb-0 md:mr-8 px-8">
        <h1 className="text-center lg:text-left text-6xl lg:text-8xl font-serif text-white">The future of Manganese is now</h1>
        <p className="text-center lg:text-justify mt-2 lg:text-lg opacity-75 text-gray-100 lg:pr-10 py-8">
          MnToken is a decentralized manganese ore mine operations powered by blockchain technology. Our mission is to open investments in the ore mining sector to the average investor and also create a hub for buyers and sellers to trade Manganese safely.
        </p>
        <div className="flex justify-center lg:justify-start">
        <a href="https://orebit.gitbook.io/docs" target="_blank" rel="noopener noreferrer">
        <Button variant="outline" className="shadow-md px-3 py-6">
          Read Whitepaper
        </Button>
        </a>
        <Button variant="outline" className="shadow-md ml-5 px-3 py-6" asChild>
          <Link href="https://discord.gg/K5Tcw2NbXU" target="_blank" rel="noopener noreferrer"><FaDiscord className="w-6 h-6 mr-2" />Join our Discord</Link>
        </Button>
        </div>
        
      </div>
      <div className="flex-1 px-8 pt-12">
        {/* Placeholder for Image or Video */}
        <CarouselPlugin />
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