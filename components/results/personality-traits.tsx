"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TraitScores } from "@/types/tests/mbti";
import { traitDescriptions } from "@/data/mbti/traitDescriptions";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";

// Importing trait explanations for more detailed information
const traitExplanations = {
  "E-I": {
    title: "Energy Source",
    left: {
      letter: "E",
      name: "Extraversion",
      description:
        "You're energized by social interaction and external activities. You tend to think out loud, enjoy group work, and have a wide social circle.",
    },
    right: {
      letter: "I",
      name: "Introversion",
      description:
        "You recharge through solitude and reflection. You prefer deep one-on-one conversations, think before speaking, and value your private mental space.",
    },
  },
  "S-N": {
    title: "Information Processing",
    left: {
      letter: "S",
      name: "Sensing",
      description:
        "You focus on concrete facts and details. You trust direct experience, value practical solutions, and prefer to work with established methods.",
    },
    right: {
      letter: "N",
      name: "Intuition",
      description:
        "You look for patterns and possibilities. You're comfortable with abstract concepts, enjoy innovating, and often think about future implications.",
    },
  },
  "T-F": {
    title: "Decision Making",
    left: {
      letter: "T",
      name: "Thinking",
      description:
        "You make decisions based on logic and objective analysis. You value fairness through equality and tend to remain detached when solving problems.",
    },
    right: {
      letter: "F",
      name: "Feeling",
      description:
        "You consider people and special circumstances when making decisions. You value harmony in relationships and consider the personal impact of choices.",
    },
  },
  "J-P": {
    title: "Lifestyle Preference",
    left: {
      letter: "J",
      name: "Judging",
      description:
        "You prefer structure and planning. You like to have things settled, work steadily toward deadlines, and find comfort in order and organization.",
    },
    right: {
      letter: "P",
      name: "Perceiving",
      description:
        "You prefer flexibility and spontaneity. You adapt easily to new information, work in bursts of energy, and enjoy keeping your options open.",
    },
  },
};

interface PersonalityTraitsProps {
  traitScores: TraitScores;
  sectionNumber: number;
}

export function PersonalityTraits({
  traitScores,
  sectionNumber,
}: PersonalityTraitsProps) {
  const [selectedTrait, setSelectedTrait] =
    React.useState<keyof TraitScores>("E-I");
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isLightTheme = currentTheme === "light";

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
          <span className="text-lg font-medium">{sectionNumber}</span>
        </div>
        <h2 className="text-3xl font-semibold text-foreground">
          Personality Traits
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8 space-y-10 flex flex-col justify-between">
          {Object.entries(traitScores).map(([trait, score]) => {
            const typedTrait = trait as keyof TraitScores;
            const description = traitDescriptions[typedTrait];
            const isSelected = selectedTrait === typedTrait;
            const themedColor = !isLightTheme
              ? description.lightColor
              : description.darkColor;

            // Calculate percentages for left and right traits
            const leftPercentage = score.leftPercentage;
            const rightPercentage = score.rightPercentage;

            return (
              <div
                key={trait}
                className={cn(
                  "space-y-3 transition-opacity",
                  isSelected ? "opacity-100" : "opacity-80 hover:opacity-100"
                )}
                onMouseEnter={() => setSelectedTrait(typedTrait)}
              >
                {/* Trait Labels */}
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-muted-foreground">
                    {description.leftLabel}
                  </span>
                  <span className="text-muted-foreground">
                    {description.rightLabel}
                  </span>
                </div>

                {/* Bar Chart Container */}
                <div className="relative h-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  {/* Background bars with reduced opacity */}
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

                  {/* Active bar for dominant trait */}
                  <div
                    className="absolute top-0 h-full transition-all duration-300"
                    style={{
                      left: score.dominant === "left" ? 0 : "auto",
                      right: score.dominant === "right" ? 0 : "auto",
                      width: `${score.dominant === "left" ? leftPercentage : rightPercentage}%`,
                      backgroundColor: themedColor,
                    }}
                  />

                  {/* Percentage Labels - Always visible for both sides */}
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
          })}
        </Card>

        <Card className="p-8 flex flex-col">
          <div className="space-y-6 flex flex-col h-full">
            <div className="space-y-2">
              <span className="text-base text-muted-foreground">
                {traitDescriptions[selectedTrait].title}
              </span>
              <h3
                className="text-3xl font-bold"
                style={{ color: traitDescriptions[selectedTrait].lightColor }}
              >
                {traitScores[selectedTrait][
                  `${traitScores[selectedTrait].dominant}Percentage`
                ].toFixed(0)}
                %{" "}
                {traitScores[selectedTrait].dominant === "left"
                  ? traitDescriptions[selectedTrait].leftLabel
                  : traitDescriptions[selectedTrait].rightLabel}
              </h3>
            </div>

            {/* Enhanced trait explanation section */}
            <div className="mt-4 p-4 bg-primary/5 rounded-lg flex-grow">
              {(() => {
                const traitKey = selectedTrait;
                const score = traitScores[traitKey];
                const traitInfo =
                  traitExplanations[traitKey as keyof typeof traitExplanations];
                const dominant =
                  score.dominant === "left" ? traitInfo.left : traitInfo.right;

                return (
                  <div className="space-y-4">
                    <div className="flex items-center justify-start gap-4">
                      <Badge
                        variant="outline"
                        className="text-sm py-0.5 px-2 font-semibold"
                      >
                        {dominant.letter}
                      </Badge>
                      <div className="">
                        <h5 className="text-base font-medium">
                          {dominant.name}
                        </h5>
                        <span className="ml-auto text-sm text-muted-foreground">
                          {traitInfo.title}
                        </span>
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {dominant.description}
                    </p>
                  </div>
                );
              })()}
            </div>

            <div className="relative aspect-square w-full max-w-[280px] mx-auto mt-4">
              <img
                src="/placeholder.svg"
                alt="Personality trait illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
