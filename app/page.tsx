"use client"
import Header from "@/components/Header";
import { Button } from "@/components/ui/button"
import Main from "@/components/Main";
import Goals from "@/components/Goals";
import Roadmap from "@/components/Roadmap";
import Founders from "@/components/Founders";
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function Home() {
  const [showVideo, setShowVideo] = useState(true); // State to toggle video

  const handleButtonClick = () => {
    setShowVideo(false); // Hide video and show main content
  };

  return (
    <main>
      {showVideo && (
        <div className="video-background">
          <video autoPlay muted loop playsInline className="video">
            <source src="/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Button variant="ghost" className="centered-button" onClick={handleButtonClick}>Enter the Mining World <MdOutlineKeyboardArrowRight className="ml-2 h-6 w-6" />
          </Button>  
        </div>
      )}
      {!showVideo && (
        <div className="main-content">
      <header>
        <Header />
      </header>
      
        <section id="about" className="pt-16">
          <Main />
        </section>

        <section className="mt-10">
          <Goals />
        </section>        

        <section id="roadmap" className="mt-10">
          <Roadmap />
        </section>

        <section id="team" className="mt-10">
          <Founders />
        </section>
        </div>
      )}

      </main>
  );
}
