import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">Hot Inbox</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            How it works
          </a>
          <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About Us
          </a>
          <a href="#faqs" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            FAQs
          </a>
        </div>
        
        <Button asChild>
          <a href="https://calendly.com/hot-inbox/intro" target="_blank" rel="noopener noreferrer">
            Book a Free Call
          </a>
        </Button>
      </div>
    </nav>
  );
};
