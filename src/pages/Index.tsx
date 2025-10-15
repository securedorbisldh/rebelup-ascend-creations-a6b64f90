import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import WhyUs from "@/components/ui/why-us";
import HowItWorks from "@/components/ui/how-it-works";
import Pricing from "@/components/ui/pricing";
import Portfolio from "@/components/ui/portfolio";
import OurStandard from "@/components/ui/our-standard";
import CalendlySection from "@/components/ui/calendly";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <OurStandard />
        <CalendlySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
