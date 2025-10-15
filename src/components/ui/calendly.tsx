import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";

const CalendlySection = () => {
  return (
    <section className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/20 overflow-hidden">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to <span className="bg-gradient-brand bg-clip-text text-transparent">Transform</span> Your Content?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Schedule a free consultation and discover how RebelUp can revolutionize your creative workflow
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center text-center">
                  <Clock className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">30-Minute Call</h3>
                  <p className="text-sm text-muted-foreground">Quick strategy session</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Expert Team</h3>
                  <p className="text-sm text-muted-foreground">Direct access to founders</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Calendar className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold mb-2">Free Audit</h3>
                  <p className="text-sm text-muted-foreground">Personalized recommendations</p>
                </div>
              </div>

              {/* Calendly Widget */}
              <div 
                className="calendly-inline-widget bg-background/50 rounded-lg overflow-hidden border border-border" 
                data-url="https://calendly.com/rebelupteam/30min?hide_gdpr_banner=1&primary_color=ef4444"
                style={{ minWidth: '320px', height: '700px' }}
              ></div>

              {/* Main CTA */}
              <Button 
                size="lg" 
                className="bg-gradient-brand hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 mt-8"
                onClick={() => window.open('https://calendly.com/rebelupteam/30min', '_blank')}
              >
                Book Your Free Call Now
              </Button>

              <p className="text-sm text-muted-foreground mt-4">
                No sales pitch. Just valuable insights for your business.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;