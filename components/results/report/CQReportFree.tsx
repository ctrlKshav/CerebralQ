import React, { useEffect } from "react";
import { sampleResultData } from "@/data/mbti/mbtiResultData";
import { FreeResultData } from "@/types/tests/mbti/results";
import { TraitScores } from "@/types/tests/mbti/traits";
import PersonalityTraits from "@/components/results/report/sections/personality-traits";
import CareerPathSection from "@/components/results/report/sections/CareerPathSection";
import RelationshipSection from "@/components/results/report/sections/RelationshipSection";
import GrowthSection from "@/components/results/report/sections/GrowthSection";
import DailyHabitsSection from "@/components/results/report/sections/DailyHabitsSection";
import ValuesMotivatorSection from "@/components/results/report/sections/ValuesMotivatorsSection";
import CommunitySection from "@/components/results/report/sections/CommunitySection";
import ActionPlanSection from "@/components/results/report/sections/ActionPlanSection";
export function CQReportFree({
  traitScores,
  personalityType,
  resultData,
}: {
  traitScores: TraitScores | null;
  personalityType: string;
  resultData: FreeResultData;
}) {
 
  return (
    <main className="flex-1 mt-12 mx-auto transition-all duration-300 space-y-8 p-4">
      {/* Personality Traits */}
      {traitScores && (
        <PersonalityTraits
          personalityType={personalityType}
          traitScores={traitScores}
          sectionNumber={1}
          firstname={resultData?.firstname ?? undefined}
          id="explore-traits"
        />
      )}

      {/* Values & Motivators */}
      <ValuesMotivatorSection
        firstname={resultData?.firstname || null}
        valuesAndMotivators={
          resultData?.personalityData?.valuesAndMotivators ||
          sampleResultData.personalityData?.valuesAndMotivators
        }
        sectionNumber={2}
        id="values-motivators"
      />

      {/* Career Path */}
      <CareerPathSection
        firstname={resultData?.firstname || null}
        career={
          resultData?.personalityData?.career ||
          sampleResultData.personalityData?.career
        }
        sectionNumber={3}
        id="career-path"
      />
    </main>
  );
}
