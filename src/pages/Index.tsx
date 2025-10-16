import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Problems } from "@/components/Problems";
import { WhyUs } from "@/components/WhyUs";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Testimonials } from "@/components/Testimonials";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problems />
      <WhyUs />
      <HowItWorks />
      <CTA />
      <Testimonials />
      <About />
      <FAQ />
    </div>
  );
};

export default Index;
