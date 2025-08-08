import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-gradient-glow opacity-20 animate-pulse-glow"></div>
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-brand rounded-full opacity-20 animate-float blur-xl"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-accent rounded-full opacity-30 animate-float blur-lg" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary rounded-full opacity-25 animate-float blur-md" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-brand-subtle border border-primary/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono font-medium">Premium Solutions for Limitless Brands</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-brand bg-clip-text text-transparent animate-gradient">
              RebelUp Ascend
            </span>
          </h1>

          {/* Subheadline */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-mono font-medium">
            Forget freelancers. Skip the overhead.
            <br />
            <span className="text-foreground">Tap into elite creative on autopilot.</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Skip the sourcing. Skip the stress. Scale with RebelUp.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-brand hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              View Portfolio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">8+</div>
              <div className="text-sm text-muted-foreground font-mono">Figures Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground font-mono">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24h</div>
              <div className="text-sm text-muted-foreground font-mono">Avg Turnaround</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;