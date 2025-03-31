"use client";

import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { TraitScore, TraitScores } from "@/types/tests/mbti";
import { getPersonalityTraitDescriptions } from "@/data/mbti/traitDescriptions";
import { useTheme } from "next-themes";
import SectionHeader from "../../../shared/SectionHeader";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import TraitCard from "./TraitCard";
import TraitDetail from "./TraitDetail";

interface PersonalityTraitsProps {
  personalityType: string;
  traitScores: TraitScores;
  sectionNumber: number;
  firstname?: string;
  dashboardView?: boolean;
  id?: string;
}

export default function PersonalityTraits({
  personalityType,
  traitScores,
  sectionNumber,
  firstname,
  dashboardView,
  id = "explore-traits",
}: PersonalityTraitsProps) {
  const [selectedTrait, setSelectedTrait] =
    React.useState<keyof TraitScores>("E-I");
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isLightTheme = currentTheme === "light";

  // Media query hook to determine if we're on mobile
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section
      className="py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background scroll-mt-8"
      id={id}
    >
      {/* Section header */}
      <SectionHeader
        title="Personality Blueprint"
        subtitle="Let's break down what makes you tick—it's like a little guide to understanding yourself better!"
        sectionNumber={sectionNumber}
      />

      <div
        className={cn(
          "grid gap-8 sm:px-8  lg:px-16",
          isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        )}
      >
        {/* Trait scores list */}
        <Card className="shadow-none border-0 py-8 sm:p-8 sm:border sm:shadow space-y-10 flex flex-col justify-between">
          {Object.entries(traitScores).map(
            ([trait, score]: [string, TraitScore]) => {
              const typedTrait = trait as keyof TraitScores;

              return (
                <TraitCard
                  key={trait}
                  trait={typedTrait}
                  score={score}
                  isSelected={selectedTrait === typedTrait}
                  onSelect={setSelectedTrait}
                  isMobile={isMobile}
                  personalityType={personalityType}
                  firstname={firstname}
                  dashboardView={dashboardView}
                />
              );
            }
          )}
        </Card>

        {/* Trait details card - only show on desktop */}
        {!isMobile && (
          <Card className="p-8 flex flex-col">
            <div className="space-y-6 flex flex-col h-full">
              {(() => {
                const traitKey = selectedTrait;
                const score = traitScores[traitKey];
                score;
                const traitInfo =
                  getPersonalityTraitDescriptions(personalityType)[traitKey];
                const themedColor = !isLightTheme
                  ? traitInfo.lightColor
                  : traitInfo.darkColor;

                return (
                  <TraitDetail
                    traitKey={traitKey}
                    score={score}
                    traitInfo={traitInfo}
                    themedColor={themedColor}
                    firstname={firstname}
                    dashboardView={dashboardView}
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
