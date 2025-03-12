"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TraitScores } from "@/types/tests/mbti";
import { traitDescriptions } from "@/data/mbti/traitDescriptions";
import { useTheme } from "next-themes";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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
          })}
        </Card>

        <Card className="p-8 flex flex-col">
          <div className="space-y-6 flex flex-col h-full ">
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

            <div className="mt-4 p-4 bg-primary/5 rounded-lg flex-grow ">
              {(() => {
                const traitKey = selectedTrait;
                const score = traitScores[traitKey];
                const traitInfo = traitDescriptions[traitKey];
                const dominant = score.dominant === "left" ? traitInfo.left : traitInfo.right;

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

            <div className="relative aspect-square w-full max-h-[280px] mx-auto mt-4">
              <Image
                src="/ENTJ.jpeg"
                alt={`${traitDescriptions[selectedTrait].title} trait illustration`}
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 250px, 280px"
                className="object-cover"
                quality={85}
                priority={false}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
