import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Zap, Award, Lock } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Affordability",
    description: "Plans starting at $497 vs competitor's $773+",
    detail: "Get premium quality without the premium price tag"
  },
  {
    icon: Zap,
    title: "Speed",
    description: "Guaranteed delivery within 24 hours",
    detail: "Starter plan delivers 1 video daily, Scale delivers multiple videos"
  },
  {
    icon: Award,
    title: "Quality",
    description: "Dedicated editors + project managers",
    detail: "Professional team focused on your success"
  },
  {
    icon: Lock,
    title: "Trust",
    description: "Grandfather pricing promise",
    detail: "Lock your rate forever — no surprise increases"
  }
];

const WhyUs = () => {
  return (
    <section className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose 
            <span className="bg-gradient-brand bg-clip-text text-transparent"> RebelUp?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built for creators, coaches, and brands who want high-quality short-form content without bloated agency pricing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-brand group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2 font-medium">
                  {benefit.description}
                </p>
                <p className="text-xs text-muted-foreground/80">
                  {benefit.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
