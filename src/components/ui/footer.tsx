import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/8ae731fd-889d-4926-b7ed-0f06b632699f.png" 
                alt="RebelUp Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">RebelUp</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium creative solutions for limitless brands.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Video Production</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Thumbnail Design</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Publishing Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">AI Content Strategy</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Get Started</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to revolutionize your content?
            </p>
            <Button 
              className="bg-white text-black hover:bg-white/90 w-full rounded-full font-semibold"
              onClick={() => window.open('https://calendly.com/rebelupteam/30min', '_blank')}
            >
              Book Free Call
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>© 2024 RebelUp. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
