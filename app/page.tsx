import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import Services from "./components/Services";
import Process from "./components/Process";
import WhyLiquid from "./components/WhyLiquid";
import Partners from "./components/Partners";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Services />
      <Process />
      <WhyLiquid />
      <Partners />
      <FAQ />
      <CTA />
    </>
  );
}
