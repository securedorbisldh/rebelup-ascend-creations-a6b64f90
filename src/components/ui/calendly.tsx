import { Button } from "@/components/ui/button";

const CalendlySection = () => {
  return (
    <section className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Book Your Call</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to
            <span className="text-primary"> transform</span> your content?
          </h2>

          <p className="text-xl text-muted-foreground mb-12">
            Schedule a free consultation and discover how RebelUp can revolutionize your creative workflow.
          </p>

          {/* Calendly Widget */}
          <div 
            className="calendly-inline-widget bg-card rounded-lg overflow-hidden border border-border/50 mb-8" 
            data-url="https://calendly.com/rebelupteam/30min?hide_gdpr_banner=1&primary_color=ef4444"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>

          {/* CTA */}
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 rounded-full font-semibold"
            onClick={() => window.open('https://calendly.com/rebelupteam/30min', '_blank')}
          >
            Book Your Free Call Now
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            No sales pitch. Just valuable insights for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
