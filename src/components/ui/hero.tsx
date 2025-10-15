import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Stop Overpaying for Content</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            Scale Smarter
            <br />
            <span className="text-primary">with RebelUp</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl">
            Why pay $3,773/mo when RebelUp gives you more at $497?
          </p>

          <p className="text-lg text-muted-foreground/80 mb-12 max-w-2xl">
            Creators First. Unlimited Edits. Lightning Fast.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 text-lg px-10 py-7 rounded-full font-semibold group"
            onClick={() => window.open('https://calendly.com/rebelupteam/30min', '_blank')}
          >
            Book a Free Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-border/50">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="text-3xl font-bold">8+ Figures</div>
              </div>
              <div className="text-sm text-muted-foreground">Generated Total</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="text-3xl font-bold">24h</div>
              </div>
              <div className="text-sm text-muted-foreground">Turnaround Time</div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="text-3xl font-bold">100%</div>
              </div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
