import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Upload, Sparkles } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Choose Your Plan",
    description: "Pick the perfect subscription for your creative needs.",
    details: "You'll get instant access to your personalized dashboard — your command center for limitless design and video.",
    icon: CheckCircle,
  },
  {
    id: "02", 
    title: "Submit Unlimited Requests",
    description: "Easily upload your assets and brief.",
    details: "Prioritize what matters most — we'll work on one project at a time, with laser focus and unmatched speed.",
    icon: Upload,
  },
  {
    id: "03",
    title: "Perfect Every Pixel", 
    description: "Review, refine, and revise until it's flawless.",
    details: "Only once you're 100% satisfied, we move on to the next masterpiece.",
    icon: Sparkles,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-brand-subtle border border-primary/20 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-mono font-medium">🔁 How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              The RebelUp Flow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to transform your creative workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={step.id} 
              className="relative bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-brand group"
            >
              <CardContent className="p-8">
                {/* Step Number */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-brand rounded-full flex items-center justify-center mr-4 group-hover:shadow-glow transition-all duration-300">
                    <span className="text-white font-bold font-mono">{step.id}</span>
                  </div>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {step.details}
                </p>

                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;