"use client";
import { useRef, useState, useEffect } from "react";
import { traits } from "@/data/test-info/ocean/traits";
import MobileTraitsAccordion from "./MobileTraitsAccordion";
import TraitSidebar from "./TraitSidebar";
import TraitContent from "./TraitContent";
import TraitHeader from "./TraitHeader";
const BigFiveTraitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // For responsive design - detect mobile view
  const [isMobile, setIsMobile] = useState(false);

  // Refs for each trait section
  const traitRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Active trait for the sticky sidebar
  const [activeTraitIndex, setActiveTraitIndex] = useState(0);
  // Track whether the traits section is in view for sidebar visibility
  const [isSectionInView, setIsSectionInView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll to a trait section when clicking on a tab
  const scrollToSection = (index: number) => {
    if (traitRefs.current[index]) {
      // Get the element's position
      const element = traitRefs.current[index];
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;

      // Calculate target scroll position (center element in viewport)
      const offset = 120; // Account for header and some padding
      const targetScrollPos = elementTop - offset;

      // Set the active index before the scroll animation
      setActiveTraitIndex(index);

      // Scroll to position
      window.scrollTo({
        top: targetScrollPos,
        behavior: "smooth",
      });
    }
  };

  // Check if the Big Five Traits section is in view and update active trait
  useEffect(() => {
    if (isMobile) return; // Only run on desktop

    const handleScroll = () => {
      // Check if section is in view - we need to show/hide the sidebar
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionBottom = rect.bottom;

        // Show sidebar only when the section is visible on screen
        const buffer = 700; // Buffer to keep sidebar visible slightly past the section
        const isVisible =
          sectionTop < window.innerHeight - buffer && sectionBottom > buffer;
        setIsSectionInView(isVisible);
      }

      // Check which trait is most visible in the viewport to update active index
      let maxVisibility = 0;
      let mostVisibleIndex = activeTraitIndex;

      traitRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        // Calculate how much of the element is visible in the viewport
        const visibleHeight =
          Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
        const visibilityRatio = visibleHeight / rect.height;

        if (visibilityRatio > maxVisibility && visibilityRatio > 0.2) {
          // Element must be at least 20% visible
          maxVisibility = visibilityRatio;
          mostVisibleIndex = index;
        }
      });

      if (mostVisibleIndex !== activeTraitIndex) {
        setActiveTraitIndex(mostVisibleIndex);
      }
    };

    // Initial check
    setTimeout(handleScroll, 200);

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, activeTraitIndex]);

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
            Explore the five fundamental dimensions that shape who you are and
            how you interact with the world around you.
          </p>
        </div>

        {/* Mobile View - Accordion */}
        {isMobile && <MobileTraitsAccordion traits={traits} />}
        {!isMobile && (
          <div className="relative">
            {/* Fixed position sidebar that's vertically centered - only shown when the traits section is in view */}
            <TraitSidebar
              isSectionInView={isSectionInView}
              scrollToSection={scrollToSection}
              activeTraitIndex={activeTraitIndex}
            />

            {/* Sequential trait sections with ids for better navigation */}
            <div className="lg:ml-56">
              {traits.map((trait, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    traitRefs.current[index] = el;
                  }}
                  id={`trait-${trait.name.toLowerCase()}`}
                  className="mb-14 last:mb-0 scroll-mt-20"
                >
                  <div className="bg-card rounded-lg shadow-sm border border-muted overflow-hidden transition-all hover:border-primary/20 hover:shadow-md">
                    <TraitHeader trait={trait} />
                    <div className="p-6">
                      <TraitContent trait={trait} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BigFiveTraitsSection;




