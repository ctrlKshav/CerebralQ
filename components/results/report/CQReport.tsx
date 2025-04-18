import React, { useEffect } from "react";
import { sampleResultData } from "@/data/mbti/mbtiResultData";
import { ResultData } from "@/types/tests/mbti/results";
import { TraitScores } from "@/types/tests/mbti/traits";
import PersonalityTraits from "@/components/results/report/sections/personality-traits";
import CareerPathSection from "@/components/results/report/sections/CareerPathSection";
import RelationshipSection from "@/components/results/report/sections/RelationshipSection";
import GrowthSection from "@/components/results/report/sections/GrowthSection";
import DailyHabitsSection from "@/components/results/report/sections/DailyHabitsSection";
import ValuesMotivatorSection from "@/components/results/report/sections/ValuesMotivatorsSection";
import CommunitySection from "@/components/results/report/sections/CommunitySection";
import ActionPlanSection from "@/components/results/report/sections/ActionPlanSection";
import { useSidebar } from "@/components/ui/sidebar-custom";
import { sidebarNavData } from "@/data/report/sidebarNav";
export function CQReport({
  traitScores,
  personalityType,
  resultData,
}: {
  traitScores: TraitScores | null;
  personalityType: string;
  resultData: ResultData;
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

      {/* Relationship Insights */}
      <RelationshipSection
        firstname={resultData?.firstname || null}
        relationships={
          resultData?.personalityData?.relationships ||
          sampleResultData.personalityData?.relationships
        }
        sectionNumber={4}
        id="relationships"
      />

      {/* Growth Journey */}
      <GrowthSection
        firstname={resultData?.firstname || null}
        growth={
          resultData?.personalityData?.growth ||
          sampleResultData.personalityData?.growth
        }
        sectionNumber={5}
        id="growth-journey"
      />

      {/* Daily Habits */}
      <DailyHabitsSection
        firstname={resultData?.firstname || null}
        dailyHabits={
          resultData?.personalityData?.dailyHabits ||
          sampleResultData.personalityData?.dailyHabits
        }
        sectionNumber={6}
        id="daily-habits"
      />

      {/* Community Connection */}
      <CommunitySection
        firstname={resultData?.firstname ?? null}
        communityConnection={
          resultData?.personalityData.communityConnection ||
          sampleResultData.personalityData.communityConnection
        }
        sectionNumber={7}
        id="community"
      />

      {/* Action Plan */}
      <ActionPlanSection
        username={resultData?.username || null}
        firstname={resultData?.firstname || null}
        personalityType={personalityType}
        resultData={resultData || sampleResultData}
        actionItems={
          resultData?.personalityData.actionItems ||
          sampleResultData.personalityData.actionItems
        }
        sectionNumber={8}
        id="action-plan"
      />
    </main>
  );
}
