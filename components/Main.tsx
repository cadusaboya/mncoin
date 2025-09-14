// components/Main.jsx (com o botão "Buy Now")
"use client"

import { Button } from "@/components/ui/button"
import { CarouselPlugin } from './Carousel';
import Link from 'next/link';
import { FaDiscord } from "react-icons/fa";

const Main = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between lg:px-8 py-32">
      <div className="flex-1 lg:mb-0 md:mr-8 px-8">
        <h1 className="text-center lg:text-left text-6xl lg:text-8xl font-serif text-white">The future of Manganese is now</h1>
        <p className="text-center lg:text-justify mt-2 lg:text-lg opacity-75 text-gray-100 lg:pr-10 py-8">
          MnToken is building the world’s first blockchain-powered ecosystem backed by real manganese ore extraction. 
          Our mission is to bridge the gap between the mining industry and crypto investors, without the challenges that usually limit access.
        </p>
        
        {/* Container para os botões */}
        <div className="flex flex-col items-center lg:items-start gap-4">

          {/* Botões Secundários */}
          <div className="flex gap-4">
            <a href="https://mntoken.gitbook.io/docs" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="shadow-md px-4 py-6">
                Read Whitepaper
              </Button>
            </a>
            <Button variant="outline" className="shadow-md px-4 py-6" asChild>
              <Link href="https://discord.gg/K5Tcw2NbXU" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="w-6 h-6 mr-2" />
                Join our Discord
              </Link>
            </Button>
          </div>

                    {/* Botão Principal - Buy Now */}
            <a href="https://mntoken.xyz/buy" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="shadow-md px-14 py-6 text-xl">
                Public Sale is now LIVE!
              </Button>
            </a>

        </div>
        
      </div>
      <div className="flex-1 px-8 pt-12">
        <CarouselPlugin />
      </div>
    </div>
   );
};

export default Main;
