import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/8ae731fd-889d-4926-b7ed-0f06b632699f.png" 
              alt="RebelUp Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">RebelUp</span>
          </div>

          {/* CTA */}
          <Button 
            className="bg-white text-black hover:bg-white/90 rounded-full font-semibold"
            onClick={() => window.open('https://calendly.com/rebelupteam/30min', '_blank')}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;