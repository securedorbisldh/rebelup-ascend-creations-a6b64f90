import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Crown, Rocket, Bot } from "lucide-react";

const plans = [
  {
    name: "Monthly Plan",
    description: "Ideal for creators and startups with light monthly needs — enjoy lightning-fast delivery and unlimited edits at an unbeatable monthly rate.",
    price: "$373",
    period: "/month",
    billing: "Billed monthly",
    icon: Zap,
    popular: false,
    features: [
      "🎬 Unlimited Video Requests",
      "🔁 Unlimited Revisions", 
      "👤 Dedicated Project Manager",
      "🔄 01 Active Request at a Time",
      "⚡ Lightning-Fast Turnarounds",
      "🗓️ Monday to Friday Delivery"
    ],
    addons: [
      "🖼️ Thumbnail Design — Add-on: $137/mo",
      "🚀 Publishing Service — Add-on: $137/mo"
    ]
  },
  {
    name: "6 Months Plan",
    description: "Designed for creators and teams with daily content demands. Get your own dedicated video editor at a fraction of the cost of hiring in-house.",
    price: "$1,773",
    period: "/month",
    billing: "Discounted from $2,238/month",
    icon: Crown,
    popular: true,
    features: [
      "🎬 Unlimited Video Requests",
      "🔁 Unlimited Revisions",
      "👤 Direct 1-on-1 contact with the co-founders for reports",
      "🧑‍💻 01 Dedicated Video Editor", 
      "⚡ Lightning-Fast Turnarounds",
      "🗓️ Monday–Sunday Delivery (FULL WEEK)"
    ],
    addons: [
      "🖼️ Thumbnail Design — Add-on: $173/mo",
      "🚀 Publishing Service — Add-on: $173/mo"
    ]
  },
  {
    name: "Yearly Plan",
    description: "Lock in long-term savings with premium support and maximum value over time.",
    price: "Custom",
    period: "",
    billing: "Best Value - Contact us",
    icon: Rocket,
    popular: false,
    features: [
      "🎬 Unlimited Video Requests",
      "🔁 Unlimited Revisions",
      "👤 Direct 1-on-1 contact with the co-founders for reports",
      "🧑‍💻 01 Dedicated Video Editor",
      "⚡ Lightning-Fast Turnarounds", 
      "🗓️ Monday–Sunday Delivery"
    ],
    addons: [
      "🖼️ Thumbnail Design — Add-on: $173/mo",
      "🚀 Publishing Service — Add-on: $173/mo"
    ]
  },
  {
    name: "AI Lab",
    description: "The future of content creation with AI-powered video production and strategic automation.",
    price: "$2,500",
    period: "/month",
    billing: "Premium AI Solution",
    icon: Bot,
    popular: false,
    features: [
      "🤖 Unlimited AI Video Requests",
      "🔁 Unlimited Revisions",
      "👤 Dedicated Project Manager",
      "🧑‍💻 01 Dedicated Video Editor",
      "⚡ Lightning Fast Delivery",
      "🗓️ Monday to Friday Workday",
      "🎯 AI Content Strategy & Automation",
      "🖼️ Thumbnail Design",
      "🚀 Publishing Service"
    ],
    addons: []
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-brand rounded-full opacity-10 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent rounded-full opacity-15 blur-2xl animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Choose Your 
            <span className="bg-gradient-brand bg-clip-text text-transparent"> Creative Plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Scalable solutions for every stage of your creative journey
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? "border-primary bg-gradient-to-br from-card to-primary/5 shadow-brand" 
                  : "border-border hover:border-primary/40"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-gradient-brand text-white">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <div className="text-center">
                  <div className="text-3xl font-bold">
                    {plan.price}
                    <span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {plan.billing}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start text-sm">
                      <span className="mr-2 mt-0.5 text-xs">{feature.split(' ')[0]}</span>
                      <span className="text-muted-foreground">{feature.substring(feature.indexOf(' ') + 1)}</span>
                    </div>
                  ))}
                </div>

                {/* Add-ons */}
                {plan.addons.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="text-sm font-medium text-muted-foreground">Add-ons:</div>
                    {plan.addons.map((addon, idx) => (
                      <div key={idx} className="flex items-start text-xs text-muted-foreground">
                        <span className="mr-2">{addon.split(' ')[0]}</span>
                        <span>{addon.substring(addon.indexOf(' ') + 1)}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Button */}
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-brand hover:shadow-glow" 
                      : "bg-secondary hover:bg-primary hover:text-primary-foreground"
                  }`}
                  size="lg"
                >
                  {plan.price === "Custom" ? "Contact Us" : "Subscribe Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Not sure which plan is right for you?
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;