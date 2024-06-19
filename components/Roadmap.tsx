"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';

const Roadmap = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          } else {
            entry.target.classList.remove('fade-in-visible');
          }
        });
      },
      {
        threshold: 0, // Trigger when 10% of the image is in the viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="pb-2 pt-5 mx-8 flex flex-col items-center">
      <h1 className="text-4xl md:text-4xl font-extrabold text-purple-900">Roadmap</h1>

      <div className="mt-5">
        <Image
          src="/roadmap.png"
          alt="Roadmap Image"
          width={1000}
          height={1000}
          className="fade-in"
          ref={imgRef}
        />
      </div>
    </div>
  );
};

export default Roadmap;