import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const comparisons = [
  {
    category: "Pricing",
    competitor: "Competitors charge $773–$3,773/mo",
    rebelup: "RebelUp starts at $497",
    highlight: true
  },
  {
    category: "Add-ons",
    competitor: "Competitor add-ons $137–$173 each",
    rebelup: "RebelUp $97 flat",
    highlight: true
  },
  {
    category: "Transparency",
    competitor: "Competitors vague with 'active requests'",
    rebelup: "RebelUp guarantees daily output",
    highlight: false
  },
  {
    category: "Flexibility",
    competitor: "Competitors lock you into bloated plans",
    rebelup: "RebelUp gives lean, scalable options",
    highlight: false
  }
];

const OurStandard = () => {
  return (
    <section className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-brand rounded-full opacity-10 blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-brand bg-clip-text text-transparent">Our Standard</span> vs Competitors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See why creators choose RebelUp over expensive alternatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {comparisons.map((comparison, index) => (
            <Card 
              key={index}
              className={`bg-gradient-to-br from-card to-card/50 border-primary/20 transition-all duration-300 ${
                comparison.highlight ? 'border-primary/40 shadow-brand' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  {/* Category */}
                  <div className="text-center md:text-left">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {comparison.category}
                    </h3>
                  </div>

                  {/* Competitor */}
                  <div className="text-center md:text-left">
                    <p className="text-sm text-muted-foreground mb-1 font-medium">Others:</p>
                    <p className="text-sm text-muted-foreground/80">{comparison.competitor}</p>
                  </div>

                  {/* RebelUp */}
                  <div className="text-center md:text-right">
                    <div className="flex items-center justify-center md:justify-end gap-2">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-bold text-primary mb-1">RebelUp:</p>
                        <p className="text-sm font-medium">{comparison.rebelup}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-gradient-brand hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            onClick={() => window.open('https://calendly.com/rebelupteam/30min', '_blank')}
          >
            Lock in This Month's Rate
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Grandfather pricing promise — your rate stays locked forever
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStandard;
