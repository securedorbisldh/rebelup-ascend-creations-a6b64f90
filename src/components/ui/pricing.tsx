import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Unlimited",
    price: "$497",
    period: "/month",
    badge: "Limited Offer",
    features: [
      "1 guaranteed video every 24 hours",
      "Unlimited requests & revisions",
      "Dedicated project manager",
      "Lightning-fast turnarounds"
    ]
  },
  {
    name: "Scale Unlimited",
    price: "$1,500",
    period: "/month",
    badge: "Most Popular",
    popular: true,
    features: [
      "Dedicated Editor + Project Manager",
      "5 active requests daily",
      "Unlimited revisions",
      "Priority handling"
    ]
  },
  {
    name: "Scale",
    price: "$1,000",
    period: "/month",
    badge: "Standard",
    features: [
      "30 short-form videos per month",
      "Unlimited revisions",
      "Dedicated project manager",
      "Fast turnaround times"
    ]
  },
  {
    name: "Rise",
    price: "$1,700",
    period: "/month",
    badge: "Standard",
    features: [
      "60 short-form videos per month",
      "Unlimited revisions",
      "Dedicated editor & PM",
      "Priority support"
    ]
  },
  {
    name: "Dominate",
    price: "$2,800",
    period: "/month",
    badge: "Standard",
    features: [
      "100 short-form videos per month",
      "Unlimited revisions",
      "Dedicated video team",
      "VIP priority support"
    ]
  },
  {
    name: "AI Lab",
    price: "$2,997",
    period: "/month",
    badge: "AI Powered",
    features: [
      "Unlimited AI video requests",
      "AI content strategy & automation",
      "Thumbnail design included",
      "Publishing service included"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Pricing</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-20 leading-tight">
            Choose your
            <span className="text-primary"> creative plan</span>
          </h2>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`border rounded-lg p-8 transition-all duration-300 ${
                  plan.popular 
                    ? "border-primary bg-primary/5" 
                    : "border-border/50 hover:border-border"
                }`}
              >
                {/* Badge */}
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-6">
                  {plan.badge}
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full rounded-full font-semibold ${
                    plan.popular 
                      ? "bg-white text-black hover:bg-white/90" 
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  onClick={() => window.open('https://calendly.com/rebelupteam/30min', '_blank')}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center pt-12 border-t border-border/50">
            <p className="text-muted-foreground mb-6">
              Not sure which plan fits your needs?
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="rounded-full font-semibold"
              onClick={() => window.open('https://calendly.com/rebelupteam/30min', '_blank')}
            >
              Book a Free Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
