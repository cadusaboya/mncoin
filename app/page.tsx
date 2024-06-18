import Image from "next/image";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Goals from "@/components/Goals";

export default function Home() {
  return (
    <main>
      <header>
        <Header />
      </header>
      
        <section className="pt-16">
          <Main />
        </section>

        <section className="mt-10">
          <Goals />
        </section>        
      </main>
  );
}
