import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhyUs = () => {
  return (
    <section className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Why RebelUp</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-24 leading-[1.1] max-w-3xl">
            Built for creators who
            <span className="text-primary"> demand more</span>
          </h2>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border-l-2 border-primary pl-6 py-4">
              <h3 className="text-2xl font-bold mb-3">Affordability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plans starting at $497 vs competitor's $773+. Premium quality without the premium price tag.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6 py-4">
              <h3 className="text-2xl font-bold mb-3">Speed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Guaranteed delivery within 24 hours. Starter delivers 1 video daily, Scale delivers multiple.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6 py-4">
              <h3 className="text-2xl font-bold mb-3">Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dedicated editors + project managers. Professional team focused on your success.
              </p>
            </div>

            <div className="border-l-2 border-border pl-6 py-4">
              <h3 className="text-2xl font-bold mb-3">Trust</h3>
              <p className="text-muted-foreground leading-relaxed">
                Grandfather pricing promise. Lock your rate forever — no surprise increases.
              </p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 rounded-full font-semibold px-8 py-6 text-base group"
            onClick={() => window.open('https://calendly.com/rebelupteam/30min', '_blank')}
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
