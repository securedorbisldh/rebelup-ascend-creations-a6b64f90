import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 relative border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Our Work</span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl font-bold mb-20 leading-tight">
            Videos from our
            <span className="text-primary"> portfolio</span>
          </h2>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3, 4, 5, 6].map((video) => (
              <div 
                key={video} 
                className="group relative aspect-video bg-card border border-border/50 hover:border-primary/50 rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Video Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-black hover:bg-white/90 rounded-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                  >
                    <Play className="w-5 h-5 fill-current" />
                  </Button>
                </div>

                {/* Video Number */}
                <div className="absolute top-4 left-4 text-xs text-muted-foreground font-semibold">
                  PROJECT {video.toString().padStart(2, '0')}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="rounded-full font-semibold"
            >
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
