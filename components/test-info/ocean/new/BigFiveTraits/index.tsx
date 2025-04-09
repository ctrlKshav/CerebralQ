import { useRef, useState, useEffect } from "react";
import { traits } from "@/data/test-info/ocean/traits";
import MobileTraitsAccordion from "./MobileTraitsAccordion";
import DesktopTraitsTabs from "./DesktopTraitsTabs";

const BigFiveTraitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // For responsive design - detect mobile view
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    // Check on mount
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section
      id="traits"
      className="py-20 md:py-28 bg-background dark:bg-background relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
            Personality Profile
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative inline-block">
            The Big Five Personality Traits
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -rotate-1 transform translate-y-2 z-0"></div>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the five fundamental dimensions that shape who you are and how you interact with the world around you.
          </p>
        </div>
        
        {/* Mobile View - Accordion */}
        {isMobile && <MobileTraitsAccordion traits={traits} />}
        
        {/* Desktop View - Side tabs */}
        {!isMobile && <DesktopTraitsTabs traits={traits} initialTrait="Openness" />}
      </div>
    </section>
  );
};

export default BigFiveTraitsSection;