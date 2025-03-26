"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TraitScores } from "@/types/tests/mbti";
import { traitDescriptions } from "@/data/mbti/traitDescriptions";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import SectionHeader from "./shared/SectionHeader";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface PersonalityTraitsProps {
  traitScores: TraitScores;
  sectionNumber: number;
  username?: string;
}

// Component for rendering trait score visualization bar
const TraitBar = ({ 
  trait, 
  score, 
  description, 
  isSelected, 
  onClick, 
  themedColor 
}: { 
  trait: string;
  score: any;
  description: any;
  isSelected: boolean;
  onClick: () => void;
  themedColor: string;
}) => {
  const leftPercentage = score.leftPercentage;
  const rightPercentage = score.rightPercentage;

  return (
    <div
      className={cn(
        "space-y-3 transition-opacity cursor-pointer",
        isSelected ? "opacity-100" : "opacity-80 hover:opacity-100"
      )}
      onClick={onClick}
    >
      <div className="flex justify-between text-sm font-medium">
        <span className="text-muted-foreground">
          {description.leftLabel}
        </span>
        <span className="text-muted-foreground">
          {description.rightLabel}
        </span>
      </div>

      <div className="relative h-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full transition-all duration-300"
          style={{
            width: `${leftPercentage}%`,
            backgroundColor: themedColor,
            opacity: 0.2,
          }}
        />
        <div
          className="absolute top-0 right-0 h-full transition-all duration-300"
          style={{
            width: `${rightPercentage}%`,
            backgroundColor: themedColor,
            opacity: 0.2,
          }}
        />

        <div
          className="absolute top-0 h-full transition-all duration-300"
          style={{
            left: score.dominant === "left" ? 0 : "auto",
            right: score.dominant === "right" ? 0 : "auto",
            width: `${score.dominant === "left" ? leftPercentage : rightPercentage}%`,
            backgroundColor: themedColor,
          }}
        />

        <div className="absolute inset-0 flex justify-between items-center px-3">
          <span className="text-sm font-medium text-foreground">
            {Math.round(leftPercentage)}%
          </span>
          <span className="text-sm font-medium text-foreground">
            {Math.round(rightPercentage)}%
          </span>
        </div>
      </div>
    </div>
  );
};

// Component for displaying trait details
const TraitDetail = ({ 
  traitKey, 
  score, 
  traitInfo, 
  themedColor 
}: { 
  traitKey: keyof TraitScores;
  score: any;
  traitInfo: any;
  themedColor: string;
}) => {
  const dominant = score.dominant === "left" ? traitInfo.left : traitInfo.right;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <span className="text-base text-muted-foreground">
          {traitInfo.title}
        </span>
        <h3
          className="text-3xl font-bold"
          style={{ color: themedColor }}
        >
          {score[`${score.dominant}Percentage`].toFixed(0)}%{" "}
          {score.dominant === "left"
            ? traitInfo.leftLabel
            : traitInfo.rightLabel}
        </h3>
      </div>

      <div className="mt-4 p-4 bg-primary/5 rounded-lg">
        <div className="space-y-4">
          <div className="flex items-center justify-start gap-4">
            <Badge
              variant="outline"
              className="text-sm py-0.5 px-2 font-semibold"
            >
              {dominant.letter}
            </Badge>
            <div>
              <h5 className="text-base font-medium">
                {dominant.name}
              </h5>
              <span className="text-sm text-muted-foreground">
                {traitInfo.title}
              </span>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            {dominant.description}
          </p>
        </div>
      </div>

      <div className="relative aspect-square w-full max-h-[200px] mx-auto mt-4">
        <Image
          src="/career_paths.jpeg"
          alt={`${traitInfo.title} trait illustration`}
          fill
          sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 280px"
          className="object-cover rounded-lg"
          quality={85}
          priority={false}
        />
      </div>
    </div>
  );
};

// Component that combines trait bar and detail with accordion behavior
const TraitCard = ({ 
  trait, 
  score, 
  isSelected, 
  onSelect, 
  isMobile 
}: { 
  trait: keyof TraitScores;
  score: any;
  isSelected: boolean;
  onSelect: (trait: keyof TraitScores) => void;
  isMobile: boolean;
}) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isLightTheme = currentTheme === "light";
  
  const description = traitDescriptions[trait];
  const themedColor = !isLightTheme ? description.lightColor : description.darkColor;

  return (
    <div className="w-full">
      <TraitBar
        trait={trait}
        score={score}
        description={description}
        isSelected={isSelected}
        onClick={() => onSelect(trait)}
        themedColor={themedColor}
      />
      
      {/* Show details directly below the trait on mobile when selected */}
      {isMobile && isSelected && (
        <div className="mt-8 mb-8 ml-2 animate-fadeIn">
          <TraitDetail
            traitKey={trait}
            score={score}
            traitInfo={description}
            themedColor={themedColor}
          />
        </div>
      )}
    </div>
  );
};

export default function PersonalityTraits({
  traitScores,
  sectionNumber,
  username,
}: PersonalityTraitsProps) {
  const [selectedTrait, setSelectedTrait] = React.useState<keyof TraitScores>("E-I");
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isLightTheme = currentTheme === "light";
  
  // Media query hook to determine if we're on mobile
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      className="py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background scroll-mt-24"
      id="explore-traits"
    >
      {/* Section header */}
      <SectionHeader
        title="Personality Blueprint"
        subtitle="Let's break down what makes you tick—it's like a little guide to understanding yourself better!"
        sectionNumber={sectionNumber}
      />

      <div className={cn(
        "grid gap-8",
        isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
      )}>
        {/* Trait scores list */}
        <Card className="border-0 py-8 sm:p-8 md:border space-y-10 flex flex-col justify-between">
          {Object.entries(traitScores).map(([trait, score]) => {
            const typedTrait = trait as keyof TraitScores;
            
            return (
              <TraitCard
                key={trait}
                trait={typedTrait}
                score={score}
                isSelected={selectedTrait === typedTrait}
                onSelect={setSelectedTrait}
                isMobile={isMobile}
              />
            );
          })}
        </Card>

        {/* Trait details card - only show on desktop */}
        {!isMobile && (
          <Card className="p-8 flex flex-col">
            <div className="space-y-6 flex flex-col h-full">
              {(() => {
                const traitKey = selectedTrait;
                const score = traitScores[traitKey];
                const traitInfo = traitDescriptions[traitKey];
                const themedColor = !isLightTheme 
                  ? traitInfo.lightColor 
                  : traitInfo.darkColor;

                return (
                  <TraitDetail
                    traitKey={traitKey}
                    score={score}
                    traitInfo={traitInfo}
                    themedColor={themedColor}
                  />
                );
              })()}
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}
