import { useRef, useState, useEffect } from "react";
import { traits } from "@/data/test-info-new/ocean/traits";
import { ChevronRight, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BigFiveTraitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedTrait, setSelectedTrait] = useState<string | null>(null);
  
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

  // Auto-select the first trait on component mount
  useEffect(() => {
    setSelectedTrait("Openness");
  }, []);
  
  const selectedTraitData = traits.find(trait => trait.name === selectedTrait);

  // Component for rendering trait content (used in both desktop and mobile views)
  const TraitContent = ({ trait }: { trait: typeof traits[0] }) => (
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
        <p className="text-muted-foreground leading-relaxed mb-4">{trait.description}</p>
        
        <div className="bg-muted/50 p-4 rounded-lg border border-muted/80 mb-5 transition-soft hover:border-primary/30">
          <h4 className="text-base font-medium text-foreground mb-2 flex items-center">
            <Info className="w-4 h-4 text-primary mr-2" />
            What This Means For You
          </h4>
          <p className="text-sm text-muted-foreground">
            Your score on {trait.name.toLowerCase()} provides insight into how you {
              trait.name === "Openness" ? "process new information and experiences" :
              trait.name === "Conscientiousness" ? "approach responsibilities and maintain order in your life" :
              trait.name === "Extraversion" ? "interact with others and gain energy from social situations" :
              trait.name === "Agreeableness" ? "approach relationships and consider the needs of others" :
              "experience and regulate emotions, particularly negative ones"
            }.
          </p>
        </div>
        
        <div>
          <h4 className="text-base font-medium text-foreground mb-2">Potential Strengths</h4>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mb-0">
            {trait.name === "Openness" && [
              "Creative problem-solving abilities",
              "Appreciation for art, beauty, and innovation",
              "Intellectual curiosity and love of learning"
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
            
            {trait.name === "Conscientiousness" && [
              "Strong work ethic and attention to detail",
              "Reliability and dependability",
              "Goal-oriented with good planning abilities"
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
            
            {trait.name === "Extraversion" && [
              "Strong social skills and networking abilities",
              "Energetic and enthusiastic approach to life",
              "Leadership potential and persuasiveness"
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
            
            {trait.name === "Agreeableness" && [
              "Ability to maintain harmonious relationships",
              "Empathy and understanding of others' needs",
              "Cooperative approach to conflict resolution"
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
            
            {trait.name === "Neuroticism" && [
              "Heightened awareness of potential problems",
              "Emotional depth and sensitivity",
              "Self-awareness and attentiveness to feelings"
            ].map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

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
        {isMobile && (
          <div className="mb-10">
            <Accordion type="single" collapsible className="space-y-4">
              {traits.map((trait, index) => (
                <div key={index}>
                  <AccordionItem 
                    value={trait.name}
                    className="bg-card rounded-xl shadow-sm border border-muted overflow-hidden transition-all duration-300 hover:shadow-md"
                  >
                    <AccordionTrigger 
                      className={`${trait.gradient} text-white px-6 py-4 hover:no-underline`}
                    >
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center mr-3">
                          <div className="w-4 h-4" dangerouslySetInnerHTML={{ __html: trait.imageSvg }}></div>
                        </div>
                        <div className="text-left">
                          <h3 className="font-medium text-base">{trait.name}</h3>
                          <p className="text-xs font-normal opacity-90">{trait.tagline}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent 
                      className="px-4 pb-6 overflow-hidden"
                    >
                      <div className="content-wrapper">
                        <TraitContent trait={trait} />
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        )}
        
        {/* Desktop View - Side tabs */}
        {!isMobile && (
          <div className="grid grid-cols-12 gap-6">
            {/* Trait selector column */}
            <div className="col-span-3 bg-card rounded-lg shadow-sm p-4 border border-muted h-fit transition-soft hover:shadow-md">
              <div className="flex flex-col space-y-1">
                {traits.map((trait, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedTrait(trait.name)}
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 
                      ${selectedTrait === trait.name 
                        ? `${trait.gradient} text-white shadow-sm` 
                        : 'hover:bg-muted/80 text-card-foreground'}`}
                  >
                    <div 
                      className={`mr-3 flex items-center justify-center w-7 h-7 rounded-md 
                        ${selectedTrait === trait.name 
                          ? 'bg-white/20' 
                          : `${trait.gradient} text-white`}`}
                    >
                      <div className="w-4 h-4" dangerouslySetInnerHTML={{ __html: trait.imageSvg }}></div>
                    </div>
                    <span className="font-medium">{trait.name}</span>
                    {selectedTrait === trait.name && (
                      <div className="ml-auto">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Trait details column */}
            <div className="col-span-9">
              {selectedTraitData && (
                <div className="h-full">
                  <div className="bg-card rounded-lg shadow-sm border border-muted overflow-hidden transition-soft hover:border-primary/20 hover:shadow-md h-full">
                    {/* Header section with gradient background - smaller and less intense */}
                    <div className={`${selectedTraitData.gradient} text-white p-5 relative overflow-hidden`}>
                      <div className="absolute right-0 top-0 w-40 h-40 opacity-10">
                        <div dangerouslySetInnerHTML={{ __html: selectedTraitData.imageSvg }}></div>
                      </div>
                      
                      <div className="flex items-center gap-4 relative z-10">
                        <div className="w-12 h-12 rounded-md bg-white/20 flex items-center justify-center">
                          <div className="w-6 h-6" dangerouslySetInnerHTML={{ __html: selectedTraitData.imageSvg }}></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-1">{selectedTraitData.name}</h3>
                          <p className="text-sm opacity-90">{selectedTraitData.tagline}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Trait content section with 2-row layout */}
                    <div className="p-6">
                      <TraitContent trait={selectedTraitData} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BigFiveTraitsSection;