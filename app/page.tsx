import Image from "next/image";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      
        <section className="min-h-screen pt-16">
          <Main />
        </section>
      </main>


  );
}
