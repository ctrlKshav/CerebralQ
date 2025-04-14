import { useRef, useState, useEffect } from "react";
import { traits } from "@/data/test-info/ocean/traits";
import MobileTraitsAccordion from "./MobileTraitsAccordion";
import DesktopTraitsTabs from "./DesktopTraitsTabs";
import { ChevronRight, Info } from "lucide-react";
import TraitSvgIcon from "./TraitSvgIcon";

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
            <div
              className={`hidden lg:block transition-all duration-500 ${
                isSectionInView
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="fixed top-1/2 left-10 transform -translate-y-1/2 z-20 w-72 max-w-[32vw]">
                <div className="bg-card rounded-lg shadow-md p-4 border border-muted transition-all duration-300 hover:shadow-lg">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3 px-1">
                    Explore Traits:
                  </h3>
                  <div className="flex flex-col space-y-1.5">
                    {traits.map((trait, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(index)}
                        className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 
                          ${
                            activeTraitIndex === index
                              ? `${trait.gradient} text-white shadow-sm`
                              : "hover:bg-muted/80 text-card-foreground"
                          }`}
                      >
                        <div
                          className={`mr-4 flex items-center justify-center w-10 h-10 rounded-md text-white transition-all duration-200
                    ${activeTraitIndex === index ? `  bg-white/20` : `${trait.gradient}`}
                    `}
                        >
                          <TraitSvgIcon
                            traitName={trait.name}
                            size={20}
                            className="text-white"
                          />
                        </div>
                        <span className="font-medium">{trait.name}</span>
                        {activeTraitIndex === index && (
                          <div className="ml-auto">
                            <ChevronRight className="h-4 w-4" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

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

// Component for rendering trait content (used in both desktop and mobile views)
const TraitContent = ({ trait }: { trait: (typeof traits)[0] }) => (
  <div>
    {/* Trait image */}
    <div className="mb-6 overflow-hidden rounded-lg">
      <img
        src={trait.image}
        alt={trait.alt}
        className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-700"
      />
    </div>

    {/* Tags */}
    <div className="flex flex-wrap gap-2 mb-4">
      {trait.tags.map((tag, idx) => (
        <span
          key={idx}
          className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/5 hover-lift"
        >
          {tag}
        </span>
      ))}
    </div>

    {/* Description */}
    <div className="prose prose-sm max-w-none">
      <p className="text-muted-foreground leading-relaxed mb-4">
        {trait.description}
      </p>

      <div className="bg-muted/50 p-4 rounded-lg border border-muted/80 mb-5 transition-soft hover:border-primary/30">
        <h4 className="text-base font-medium text-foreground mb-2 flex items-center">
          <Info className="w-4 h-4 text-primary mr-2" />
          What This Means For You
        </h4>
        <p className="text-sm text-muted-foreground">
          Your score on {trait.name.toLowerCase()} provides insight into how you{" "}
          {trait.name === "Openness"
            ? "process new information and experiences"
            : trait.name === "Conscientiousness"
              ? "approach responsibilities and maintain order in your life"
              : trait.name === "Extraversion"
                ? "interact with others and gain energy from social situations"
                : trait.name === "Agreeableness"
                  ? "approach relationships and consider the needs of others"
                  : "experience and regulate emotions, particularly negative ones"}
          .
        </p>
      </div>

      <div>
        <h4 className="text-base font-medium text-foreground mb-2">
          Potential Strengths
        </h4>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mb-0">
          {trait.name === "Openness" &&
            [
              "Creative problem-solving abilities",
              "Appreciation for art, beauty, and innovation",
              "Intellectual curiosity and love of learning",
            ].map((item, i) => <li key={i}>{item}</li>)}

          {trait.name === "Conscientiousness" &&
            [
              "Strong work ethic and attention to detail",
              "Reliability and dependability",
              "Goal-oriented with good planning abilities",
            ].map((item, i) => <li key={i}>{item}</li>)}

          {trait.name === "Extraversion" &&
            [
              "Strong social skills and networking abilities",
              "Energetic and enthusiastic approach to life",
              "Leadership potential and persuasiveness",
            ].map((item, i) => <li key={i}>{item}</li>)}

          {trait.name === "Agreeableness" &&
            [
              "Ability to maintain harmonious relationships",
              "Empathy and understanding of others' needs",
              "Cooperative approach to conflict resolution",
            ].map((item, i) => <li key={i}>{item}</li>)}

          {trait.name === "Neuroticism" &&
            [
              "Heightened awareness of potential problems",
              "Emotional depth and sensitivity",
              "Self-awareness and attentiveness to feelings",
            ].map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  </div>
);

// Function to render a trait header
const TraitHeader = ({ trait }: { trait: (typeof traits)[0] }) => (
  <div className="bg-card rounded-lg shadow-sm border border-muted overflow-hidden transition-soft hover:border-primary/20 hover:shadow-md h-full">
    {/* Header section with solid color background */}
    <div
      className={`${trait.gradient} text-white p-6 relative overflow-hidden`}
    >
      <div className="absolute right-0 top-0 w-40 h-40 opacity-10">
        <TraitSvgIcon
          traitName={trait.name}
          size={160}
          className="text-white"
        />
      </div>

      <div className="flex items-center gap-4 relative z-10">
        <div className="w-14 h-14 rounded-md bg-white/20 flex items-center justify-center">
          <TraitSvgIcon
            traitName={trait.name}
            size={32}
            className="text-white"
          />
        </div>
        <div>
          <h3 className="text-2xl font-medium mb-1">
            {trait.name}
          </h3>
          <p className="text-sm opacity-90">{trait.tagline}</p>
        </div>
      </div>
    </div>
  </div>
);


