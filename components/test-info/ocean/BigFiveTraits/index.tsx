"use client";
import { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { traits } from "@/data/test-info/ocean/traits";
import MobileTraitsAccordion from "./MobileTraitsAccordion";
import TraitSidebar from "./TraitSidebar";
import TraitContent from "./TraitContent";
import TraitHeader from "./TraitHeader";
import { useIsMobile } from "@/hooks/use-mobile";

const BigFiveTraitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const isMobile = useIsMobile();

  // Refs for each trait section and IntersectionObserver for each trait
  const traitRefs = useRef<(HTMLDivElement | null)[]>([]);

  // State for active trait index
  const [activeTraitIndex, setActiveTraitIndex] = useState(0);

  // Ref for observing BigFiveTraitsSection itself
  const [bigFiveTraitsSectionRef, isBigFiveTraitsSectionInView] = useInView({
    threshold: 0.1, // Consider the section visible when at least 10% is visible
  });

  // Refs for observing TestOverviewSection and TestVariantsSection
  const [testOverviewRef, isTestOverviewInView] = useInView({
    threshold: 0,
    rootMargin: "-100px 0px 0px 0px", // Trigger when the overview section goes out of viewport
  });

  const [testVariantsRef, isTestVariantsInView] = useInView({
    threshold: 0,
    rootMargin: "0px 0px -100px 0px", // Trigger before variants section comes fully into view
  });

  // Determine sidebar visibility based on the visibility of all three sections
  const isSectionInView =
    isBigFiveTraitsSectionInView &&
    !isTestOverviewInView &&
    !isTestVariantsInView;

  // Setup refs for each trait with intersection observer
  const traitObservers = traits.map((_, index) => {
    // Create a separate observer for each trait
    const [ref, inView] = useInView({
      threshold: 0.5, // Trigger when 50% of the trait is visible
    });

    // Update active trait when it comes into view
    useEffect(() => {
      if (inView && !isMobile) {
        setActiveTraitIndex(index);
      }
    }, [inView]);

    return { ref, inView };
  });


  return (
    <section
      id="traits"
      className="py-20 md:py-28 bg-background dark:bg-background relative overflow-hidden"
      ref={(el: HTMLDivElement | null) => {
        // Set both the local ref and the intersection observer ref
        sectionRef.current = el;
        if (el) (bigFiveTraitsSectionRef as any)(el);
      }}
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
            {/* Fixed position sidebar that's vertically centered - only shown when all three conditions are met */}
            <TraitSidebar
              isSectionInView={isSectionInView}
              activeTraitIndex={activeTraitIndex}
            />

            {/* Sequential trait sections with ids for better navigation */}
            <div className="lg:ml-56">
              {traits.map((trait, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    // Store the element in traitRefs for direct DOM access
                    traitRefs.current[index] = el;
                    // Also pass the element to the IntersectionObserver ref
                    if (el) traitObservers[index].ref(el);
                  }}
                  id={`trait-${trait.name.toLowerCase()}`}
                  className="mb-14 last:mb-0 scroll-mt-24"
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
