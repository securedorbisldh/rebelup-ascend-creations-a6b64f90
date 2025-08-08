import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ExternalLink } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-brand bg-clip-text text-transparent">Creations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Videos from our portfolio that drive results
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3, 4, 5, 6].map((video) => (
            <Card key={video} className="group overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-0 relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  {/* Video Placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50"></div>
                  
                  {/* Play Button */}
                  <Button 
                    size="lg" 
                    className="relative z-10 bg-gradient-brand hover:shadow-glow transition-all duration-300 transform group-hover:scale-110"
                  >
                    <Play className="w-6 h-6" />
                  </Button>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-mono">View Project</span>
                    </div>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-bold mb-2">Project {video}</h3>
                  <p className="text-sm text-muted-foreground">
                    High-converting video content that drove measurable results
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-gradient-brand hover:shadow-glow">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;