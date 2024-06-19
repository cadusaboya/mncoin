import Header from "@/components/Header";
import Main from "@/components/Main";
import Goals from "@/components/Goals";
import Roadmap from "@/components/Roadmap";

export default function Home() {
  return (
    <main>
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
      </main>
  );
}
