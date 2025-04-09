import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TraitContent from "./TraitContent";
import TraitIcon from "./TraitIcon";
import { useState, useEffect } from "react";
import { Trait } from "@/types/tests/test-info/ocean";

interface DesktopTraitsTabsProps {
  traits: Trait[];
  initialTrait: string;
}

const DesktopTraitsTabs = ({ traits, initialTrait }: DesktopTraitsTabsProps) => {
  const [selectedTrait, setSelectedTrait] = useState<string>(initialTrait);
  
  return (
    <Tabs 
      value={selectedTrait} 
      onValueChange={setSelectedTrait}
      className="grid grid-cols-12 gap-6"
    >
      <div className="col-span-3 relative">
        <div className="sticky top-24">
          <TabsList 
            className="flex flex-col h-auto w-full bg-card rounded-lg shadow-sm p-3 border border-muted transition-soft hover:shadow-md space-y-2"
            aria-label="Personality traits tabs"
          >
            {traits.map((trait) => {
              const isActive = selectedTrait === trait.name;
              return (
                <TabsTrigger
                  key={trait.name}
                  value={trait.name}
                  className={`flex h-auto w-full items-center justify-start p-4 rounded-lg transition-all duration-200 text-base data-[state=active]:text-white
                    ${isActive 
                      ? `${trait.gradient} shadow-sm`
                      : 'hover:bg-muted/80 text-foreground'}`}
                  aria-selected={isActive}
                >
                  <div 
                    className={`mr-4 flex items-center justify-center w-10 h-10 rounded-md
                      ${isActive 
                        ? 'bg-white/20' 
                        : `${trait.gradient} text-white`}`}
                  >
                    <TraitIcon 
                      traitName={trait.name} 
                      size={20} 
                      className="text-white" 
                    />
                  </div>
                  <span className="font-medium">{trait.name}</span>
                  {isActive && (
                    <div className="ml-auto">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
      </div>

      <div className="col-span-9">
        {traits.map((trait) => (
          <TabsContent 
            key={trait.name} 
            value={trait.name}
            className="mt-0 h-full"
          >
            <div className="h-full">
              <div className="bg-card rounded-lg shadow-sm border border-muted overflow-hidden transition-soft hover:border-primary/20 hover:shadow-md h-full">
                {/* Header section with gradient background */}
                <div className={`${trait.gradient} text-white p-6 relative overflow-hidden`}>
                  <div className="absolute right-0 top-0 w-40 h-40 opacity-10">
                    <TraitIcon traitName={trait.name} size={160} className="text-white" />
                  </div>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-md bg-white/20 flex items-center justify-center">
                      <TraitIcon traitName={trait.name} size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium mb-1">{trait.name}</h3>
                      <p className="text-sm opacity-90">{trait.tagline}</p>
                    </div>
                  </div>
                </div>
                
                {/* Trait content section */}
                <div className="p-6">
                  <TraitContent trait={trait} />
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
};

export default DesktopTraitsTabs;
