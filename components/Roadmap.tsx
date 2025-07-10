"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Roadmap = () => {
  return (
    <div className="pb-2 pt-40 mx-8 flex flex-col items-center">
      <div>
        <Image
          src="/5.png"
          alt="Roadmap Image"
          width={2000}
          height={2000}
        />
      </div>
      <div>
        <Image
          src="/13.png"
          alt="Roadmap Image"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default Roadmap;