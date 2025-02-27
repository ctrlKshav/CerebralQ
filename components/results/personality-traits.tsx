"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { TraitScores } from "@/types/tests/mbti"
import { traitDescriptions } from "@/data/traitDescriptions"
import { useTheme } from "next-themes"

interface PersonalityTraitsProps {
  traitScores: TraitScores
}

export function PersonalityTraits({ traitScores }: PersonalityTraitsProps) {
  const [selectedTrait, setSelectedTrait] = React.useState<keyof TraitScores>("E-I")
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === 'system' ? resolvedTheme : theme;
  const isLightTheme = currentTheme === "light";
  console.log(traitScores)

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
          <span className="text-lg font-medium">1</span>
        </div>
        <h2 className="text-3xl font-semibold text-foreground">Personality Traits</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 space-y-10">
          {Object.entries(traitScores).map(([trait, score]) => {
            const typedTrait = trait as keyof TraitScores;
            const description = traitDescriptions[typedTrait];
            const isSelected = selectedTrait === typedTrait;
            const themedColor = !isLightTheme ? description.lightColor : description.darkColor;
            
            // Calculate percentages for left and right traits
            const leftPercentage = score.leftPercentage;
            const rightPercentage = score.rightPercentage;
            
            return (
              <div
                key={trait}
                className={cn(
                  "space-y-3 transition-opacity",
                  isSelected ? "opacity-100" : "opacity-80 hover:opacity-100",
                )}
                onMouseEnter={() => setSelectedTrait(typedTrait)}
              >
                {/* Trait Labels */}
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-muted-foreground">{description.leftLabel}</span>
                  <span className="text-muted-foreground">{description.rightLabel}</span>
                </div>

                {/* Bar Chart Container */}
                <div className="relative h-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  {/* Background bars with reduced opacity */}
                  <div
                    className="absolute top-0 left-0 h-full transition-all duration-300"
                    style={{
                      width: `${leftPercentage}%`,
                      backgroundColor: themedColor,
                      opacity: 0.2
                    }}
                  />
                  <div
                    className="absolute top-0 right-0 h-full transition-all duration-300"
                    style={{
                      width: `${rightPercentage}%`,
                      backgroundColor: themedColor,
                      opacity: 0.2
                    }}
                  />

                  {/* Active bar for dominant trait */}
                  <div
                    className="absolute top-0 h-full transition-all duration-300"
                    style={{
                      left: score.dominant === 'left' ? 0 : 'auto',
                      right: score.dominant === 'right' ? 0 : 'auto',
                      width: `${score.dominant === 'left' ? leftPercentage : rightPercentage}%`,
                      backgroundColor: themedColor,
                    }}
                  />

                  {/* Percentage Labels - Always visible for both sides */}
                  <div className="absolute inset-0 flex justify-between items-center px-3">
                    <span 
                      className={cn(
                        "text-sm font-medium text-foreground",
                        
                      )}
                      
                    >
                      {Math.round(leftPercentage)}%
                    </span>
                    <span 
                      className={cn(
                        "text-sm font-medium text-foreground",
                        
                      )}
                      
                    >
                      {Math.round(rightPercentage)}%
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </Card>

        <Card className="p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-base text-muted-foreground">{traitDescriptions[selectedTrait].title}</span>
              <h3 className="text-3xl font-bold" style={{ color: traitDescriptions[selectedTrait].lightColor }}>
                {traitScores[selectedTrait][`${traitScores[selectedTrait].dominant}Percentage`].toFixed(0)}%{" "}
                {traitScores[selectedTrait].dominant === "left"
                  ? traitDescriptions[selectedTrait].leftLabel
                  : traitDescriptions[selectedTrait].rightLabel}
              </h3>
            </div>
            
          
            
            <div className="relative aspect-square w-full max-w-[280px] mx-auto">
              <img
                src="/placeholder.svg"
                alt="Personality trait illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              {traitDescriptions[selectedTrait].description}
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

