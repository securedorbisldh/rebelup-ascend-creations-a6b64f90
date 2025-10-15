import { Button } from "@/components/ui/button";

const comparisons = [
  {
    label: "Pricing",
    others: "$773–$3,773/mo",
    rebelup: "$497/mo"
  },
  {
    label: "Add-ons",
    others: "$137–$173 each",
    rebelup: "$97 flat"
  },
  {
    label: "Output",
    others: "Vague 'active requests'",
    rebelup: "Guaranteed daily"
  },
  {
    label: "Plans",
    others: "Bloated, locked-in",
    rebelup: "Lean & scalable"
  }
];

const OurStandard = () => {
  return (
    <section className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">The Comparison</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-20 leading-tight">
            Our standard
            <span className="text-primary"> vs competitors</span>
          </h2>

          {/* Comparison Table */}
          <div className="space-y-6 mb-16">
            {comparisons.map((item, index) => (
              <div 
                key={index}
                className="grid md:grid-cols-3 gap-6 p-6 border border-border/50 rounded-lg"
              >
                <div className="font-bold text-lg">{item.label}</div>
                <div className="text-muted-foreground">Others: {item.others}</div>
                <div className="text-primary font-semibold">RebelUp: {item.rebelup}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full font-semibold"
              onClick={() => window.open('https://calendly.com/rebelupteam/30min', '_blank')}
            >
              Lock in This Month's Rate
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Grandfather pricing promise — your rate stays locked forever
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStandard;
