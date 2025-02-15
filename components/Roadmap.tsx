"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Roadmap = () => {
  return (
    <div className="pb-2 pt-40 mx-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-4xl font-serif text-white pb-12">Roadmap</h1>

      <div>
        <Image
          src="/roadmap.png"
          alt="Roadmap Image"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default Roadmap;