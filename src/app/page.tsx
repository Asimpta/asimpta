import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Deliverables from "@/components/Deliverables";
import Process from "@/components/Process";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Differentials from "@/components/Differentials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Deliverables />
        <Process />
        <Solutions />
        <About />
        <Differentials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
