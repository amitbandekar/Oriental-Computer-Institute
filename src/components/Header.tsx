import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-card border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Main Header */}
        <div className="flex items-center justify-between">
          {/* Logo and Institute Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-ganpati rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl transition-smooth hover:scale-105">
              OCI
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading text-lg md:text-2xl text-foreground leading-tight">
                Oriental Computer Institute
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground font-body">
                Learn More, Pay Less – Limited Time!
              </p>
            </div>
            {/* Mobile Institute Name */}
            <div className="block sm:hidden">
              <h1 className="font-heading text-lg text-foreground leading-tight">
                OCI
              </h1>
              <p className="text-xs text-muted-foreground font-body">
                Limited Time Offer!
              </p>
            </div>
          </div>

          {/* Desktop Contact & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span className="font-body">8826853976 / 8108378214</span>
            </div>
            <Button variant="ganpati" size="sm" className="whitespace-nowrap shadow-card hover:shadow-ganpati">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ganpati" size="sm" className="px-3">
              Call
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 border-primary/20 hover:bg-primary/5"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 text-primary" />
              ) : (
                <Menu className="w-4 h-4 text-primary" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                <Phone className="w-4 h-4 text-primary" />
                <span className="font-body">8826853976 / 8108378214</span>
              </div>
              <Button 
                variant="ganpati" 
                size="sm" 
                className="w-full shadow-card hover:shadow-ganpati"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;