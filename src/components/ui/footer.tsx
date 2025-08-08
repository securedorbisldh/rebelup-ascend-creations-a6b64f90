import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/8ae731fd-889d-4926-b7ed-0f06b632699f.png" 
                alt="RebelUp Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold font-mono">RebelUp</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium creative solutions for limitless brands. Transform your content strategy with elite production on autopilot.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Video Production</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Thumbnail Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Publishing Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AI Content Strategy</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Get Started</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to revolutionize your content?
            </p>
            <Button className="bg-gradient-brand hover:shadow-glow w-full">
              Schedule Free Call
            </Button>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 RebelUp. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;