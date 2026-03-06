import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import Services from "./components/Services";
import Comparison from "./components/Comparison";
import Process from "./components/Process";
import WhyLiquid from "./components/WhyLiquid";
import Transparency from "./components/Transparency";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Services />
      <Comparison />
      <Process />
      <WhyLiquid />
      <Transparency />
      <FAQ />
      <CTA />
    </>
  );
}
