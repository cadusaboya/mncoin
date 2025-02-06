import Header from "@/components/Header";
import Main from "@/components/Main";
import Goals from "@/components/Goals";
import Roadmap from "@/components/Roadmap";
import Founders from "@/components/Founders";
import MainMine from "@/components/Mine/Main_Mine";
import VideoSection from "@/components/Mine/VideoSection";
import Location from "@/components/Mine/Location";
import FAQ from "@/components/Mine/FAQ";
import React from 'react';



export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      
        <section id="about" className="pt-16 bg-gray-900">
          <Main />
        </section>

        <section className="py-10 bg-purple-950">
          <Goals />
        </section>        

        <section className="bg-gray-900">
          <MainMine />
        </section>

        <section className="bg-gray-900">
          <VideoSection />
        </section>

        <section className="bg-gray-900">
          <Location />
        </section>
        
        <section id="roadmap" className="py-10 bg-gray-900">
          <Roadmap />
        </section>

        <section id="team" className="py-10 bg-gray-900">
          <Founders />
        </section>
      </main>
  );
}
