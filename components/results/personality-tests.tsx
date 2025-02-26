"use client"

import * as React from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { TraitScores } from "@/types/tests/mbti"
import { traitDescriptions } from "@/data/traitDescriptions"

interface PersonalityTraitsProps {
  traitScores: TraitScores
}

export function PersonalityTraits({ traitScores }: PersonalityTraitsProps) {
  const [selectedTrait, setSelectedTrait] = React.useState<keyof TraitScores>("E-I")

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
            
            // Calculate the marker position (0-100)
            const markerPosition = score.dominant === "left" 
              ? 50 - (score.leftPercentage - 50) 
              : 50 + (score.rightPercentage - 50);
            
            // Determine which percentage to display based on dominant trait
            const dominantPercentage = score[`${score.dominant}Percentage`];
            
            // Calculate the deviation from 50% for proper visualization
            const deviation = Math.abs(dominantPercentage - 50);
            
            // Determine text alignment based on marker position to prevent overflow
            const textAlignment = markerPosition <= 10 ? "left" 
                               : markerPosition >= 90 ? "right" 
                               : "center";
            
            // Determine translation based on alignment
            const translateX = textAlignment === "center" ? "-50%" 
                            : textAlignment === "left" ? "0" 
                            : "-100%";
            
            return (
              <div
                key={trait}
                className={cn(
                  "space-y-3 transition-opacity",
                  isSelected ? "opacity-100" : "opacity-80 hover:opacity-100",
                )}
                onMouseEnter={() => setSelectedTrait(typedTrait)}
              >
                {/* Position the percentage label above the marker */}
                <div className="relative h-5">
                  {/* Label positioned above marker with adjusted alignment */}
                  <div
                    className={`absolute -top-5 whitespace-nowrap text-${textAlignment}`}
                    style={{ 
                      left: `${markerPosition}%`,
                      color: description.color,
                      transform: `translateX(${translateX})`,
                    }}
                  >
                    <span className="text-base font-semibold">
                      {dominantPercentage.toFixed(0)}% {score.dominant === "left" ? description.leftLabel : description.rightLabel}
                    </span>
                  </div>
                </div>
                
                {/* Custom progress bar with center point */}
                <div className="relative h-3 bg-gray-100 dark:bg-gray-800 rounded-full">
                  {/* Center line with z-index to ensure visibility */}
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-[1px] w-[1px] bg-gray-300 dark:bg-gray-600 z-10" />
                  
                  {/* 50% neutral label */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 dark:text-gray-500">
                    50% neutral
                  </div>
                  
                  {/* Custom progress fill that starts from center */}
                  {score.dominant === "left" && deviation > 0 && (
                    <div 
                      className="absolute top-0 h-full z-0 bg-gradient-to-l rounded-l-full"
                      style={{
                        right: "50%",
                        width: `${deviation}%`,
                        backgroundColor: description.color,
                      }}
                    />
                  )}
                  
                  {score.dominant === "right" && deviation > 0 && (
                    <div 
                      className="absolute top-0 h-full z-0 bg-gradient-to-r rounded-r-full"
                      style={{
                        left: "50%",
                        width: `${deviation}%`,
                        backgroundColor: description.color,
                      }}
                    />
                  )}
                  
                  {/* Marker dot with higher z-index to appear above the center line */}
                  <div
                    className={cn(
                      "absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300",
                      "bg-background z-20",
                    )}
                    style={{
                      left: `${markerPosition}%`,
                      borderColor: description.color,
                      transform: `translate(-50%, -50%) scale(${isSelected ? 1.2 : 1})`,
                    }}
                  />
                </div>
                
                {/* Labels with extra margin-top to make space for the 50% neutral label */}
                <div className="flex justify-between text-sm font-medium text-muted-foreground mt-5">
                  <span>{description.leftLabel}</span>
                  <span>{description.rightLabel}</span>
                </div>
              </div>
            )
          })}
        </Card>

        <Card className="p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-base text-muted-foreground">{traitDescriptions[selectedTrait].title}</span>
              <h3 className="text-3xl font-bold" style={{ color: traitDescriptions[selectedTrait].color }}>
                {traitScores[selectedTrait][`${traitScores[selectedTrait].dominant}Percentage`].toFixed(0)}%{" "}
                {traitScores[selectedTrait].dominant === "left"
                  ? traitDescriptions[selectedTrait].leftLabel
                  : traitDescriptions[selectedTrait].rightLabel}
              </h3>
            </div>
            
          
            
            <div className="relative aspect-square w-full max-w-[280px] mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20from%202025-02-26%2012-05-24-GFPCPRCg3E3ewcwwvGkZOwKbJxArKt.png"
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

