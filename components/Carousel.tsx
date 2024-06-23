import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Image from 'next/image';
 
export function CarouselPlugin() {
 
  return (
    <Carousel
        plugins={[
        Autoplay({
          delay: 5000,
        }),
        ]}
        className="w-full"
    >
      <CarouselContent>
          <CarouselItem>
            <div>
                <Image
                src="/mina-1.jpg"
                alt="Mina 1"
                width={1200}
                height={300}
                className="rounded-lg shadow-lg"
                />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
                <Image
                src="/mina-2.jpg"
                alt="Mina 2"
                width={1200}
                height={300}
                className="rounded-lg shadow-lg"
                />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
                <Image
                src="/mina-3.jpg"
                alt="Mina 3"
                width={1200}
                height={300}
                className="rounded-lg shadow-lg"
                />
            </div>
          </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}