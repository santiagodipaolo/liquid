import Hero from "./components/Hero";
import Services from "./components/Services";
import Comparison from "./components/Comparison";
import Process from "./components/Process";
import WhyWeibull from "./components/WhyWeibull";
import Transparency from "./components/Transparency";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Comparison />
      <Process />
      <WhyWeibull />
      <Transparency />
      <FAQ />
      <CTA />
    </>
  );
}
