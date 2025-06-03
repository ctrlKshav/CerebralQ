"use client";
import React from "react";
import { motion } from "framer-motion";
import { testDetails } from "@/data/test-info/disc/test-overview";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import AnimatedCard from "../shared/AnimatedCard";

const DISCTraitsSection = () => {
  const { traits } = testDetails;
  
  const traitColors = {
    red: "bg-red-500 dark:bg-red-600",
    yellow: "bg-yellow-500 dark:bg-yellow-600",
    green: "bg-green-500 dark:bg-green-600",
    blue: "bg-blue-500 dark:bg-blue-600",
  };
  
  const traitBgColors = {
    red: "bg-red-50 dark:bg-red-900/20",
    yellow: "bg-yellow-50 dark:bg-yellow-900/20",
    green: "bg-green-50 dark:bg-green-900/20",
    blue: "bg-blue-50 dark:bg-blue-900/20",
  };
  
  const traitTextColors = {
    red: "text-red-700 dark:text-red-400",
    yellow: "text-yellow-700 dark:text-yellow-400",
    green: "text-green-700 dark:text-green-400",
    blue: "text-blue-700 dark:text-blue-400",
  };

  return (
    <SectionContainer id="traits" withDecorations>
      <SectionHeader
        badge="The Four Dimensions"
        title="Understanding DISC Traits"
        highlightWord="DISC"
        description="Each dimension represents a different behavioral style that influences how you communicate, make decisions, and interact with others."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {traits.map((trait, index) => (
          <AnimatedCard key={index} delay={0.1 * index}>
            <div className={`rounded-xl shadow-md border border-muted overflow-hidden h-full ${traitBgColors[trait.color as keyof typeof traitBgColors]}`}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full ${traitColors[trait.color as keyof typeof traitColors]} flex items-center justify-center text-white font-bold text-xl`}>
                    {trait.letter}
                  </div>
                  <h3 className={`text-xl font-bold ml-3 ${traitTextColors[trait.color as keyof typeof traitTextColors]}`}>
                    {trait.name}
                  </h3>
                </div>
                
                <p className="text-card-foreground mb-6">
                  {trait.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-card-foreground mb-2">
                    Key Characteristics:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {trait.characteristics.map((characteristic, i) => (
                      <span 
                        key={i} 
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${traitBgColors[trait.color as keyof typeof traitBgColors]} ${traitTextColors[trait.color as keyof typeof traitTextColors]} border border-current/20`}
                      >
                        {characteristic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
      
      <div className="mt-16 max-w-4xl mx-auto">
        <AnimatedCard delay={0.5}>
          <div className="bg-card rounded-xl shadow-md border border-muted p-6">
            <h3 className="text-xl font-bold text-card-foreground mb-4">
              How to Interpret Your DISC Profile
            </h3>
            <p className="text-card-foreground mb-6">
              Your DISC profile isn't about labeling you as just one type. Most people are a blend of all four dimensions, with one or two being more dominant. Your unique combination creates your personal behavioral style.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-card-foreground">
                  Primary Style
                </h4>
                <p className="text-muted-foreground">
                  Your most dominant dimension reveals your natural behavioral tendencies—how you instinctively act when you're comfortable and not adapting to others.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-card-foreground">
                  Secondary Style
                </h4>
                <p className="text-muted-foreground">
                  Your second highest dimension shows how you adapt your behavior in different situations, especially when your primary style isn't effective.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-card-foreground">
                  Low Dimensions
                </h4>
                <p className="text-muted-foreground">
                  Lower scores don't indicate weaknesses—they simply represent behaviors that require more conscious effort for you to display.
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-card-foreground">
                  Balanced Profile
                </h4>
                <p className="text-muted-foreground">
                  If you score similarly across all dimensions, you likely adapt easily to different situations and can flex your behavioral style as needed.
                </p>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </SectionContainer>
  );
};

export default DISCTraitsSection;
