import HeaderOthers from "@/components/Mine/HeaderOthers";
import Main from "@/components/Mine/Main_Mine";
import VideoSection from "@/components/Mine/VideoSection";
import Location from "@/components/Mine/Location";
import FAQ from "@/components/Mine/FAQ";

import React from 'react';



export default function Home() {
  return (
    <main>
      <header>
        <HeaderOthers />
      </header>
      
        <section className="pt-16">
          <Main />
        </section>

        <section className="pt-16">
          <VideoSection />
        </section>

        <section className="pt-16">
          <Location />
        </section>

        <section className="pt-16">
          <FAQ />
        </section>
      </main>
  );
}
