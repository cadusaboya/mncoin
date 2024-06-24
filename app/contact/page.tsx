import HeaderOthers from "@/components/Mine/HeaderOthers";
import MainContact from "@/components/Contact/Main_Contact";
import ContactForm from "@/components/Contact/ContactForm";
import React from 'react';



export default function Home() {
  return (
    <main>
      <header>
        <HeaderOthers />
      </header>
      
        <section className="pt-16">
          <MainContact />
        </section>

        <section className="pt-8">
          <ContactForm />
        </section>
      </main>
  );
}
