"use client";
import React from "react";
import { motion } from "framer-motion";
import { testDetails } from "@/data/test-info/hexaco/test-overview";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import AnimatedCard from "../shared/AnimatedCard";

const HEXACOTraitsSection = () => {
  const { traits } = testDetails;
  
  const traitColors = {
    purple: "bg-purple-500 dark:bg-purple-600",
    red: "bg-red-500 dark:bg-red-600",
    yellow: "bg-yellow-500 dark:bg-yellow-600",
    green: "bg-green-500 dark:bg-green-600",
    blue: "bg-blue-500 dark:bg-blue-600",
    orange: "bg-orange-500 dark:bg-orange-600",
  };
  
  const traitBgColors = {
    purple: "bg-purple-50 dark:bg-purple-900/20",
    red: "bg-red-50 dark:bg-red-900/20",
    yellow: "bg-yellow-50 dark:bg-yellow-900/20",
    green: "bg-green-50 dark:bg-green-900/20",
    blue: "bg-blue-50 dark:bg-blue-900/20",
    orange: "bg-orange-50 dark:bg-orange-900/20",
  };
  
  const traitTextColors = {
    purple: "text-purple-700 dark:text-purple-400",
    red: "text-red-700 dark:text-red-400",
    yellow: "text-yellow-700 dark:text-yellow-400",
    green: "text-green-700 dark:text-green-400",
    blue: "text-blue-700 dark:text-blue-400",
    orange: "text-orange-700 dark:text-orange-400",
  };

  return (
    <SectionContainer id="traits" withDecorations>
      <SectionHeader
        badge="The Six Dimensions"
        title="Understanding HEXACO Traits"
        highlightWord="HEXACO"
        description="Each dimension represents a different aspect of your personality, with multiple facets that provide a nuanced understanding of who you are."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
    </SectionContainer>
  );
};

export default HEXACOTraitsSection;
