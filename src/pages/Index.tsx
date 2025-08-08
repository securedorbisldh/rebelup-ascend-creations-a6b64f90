import Navbar from "@/components/ui/navbar";
import Hero from "@/components/ui/hero";
import HowItWorks from "@/components/ui/how-it-works";
import Pricing from "@/components/ui/pricing";
import Portfolio from "@/components/ui/portfolio";
import CalendlySection from "@/components/ui/calendly";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-mono">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <CalendlySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
