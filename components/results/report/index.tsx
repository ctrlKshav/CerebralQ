import { ResultData } from "@/types/tests/mbti/results";
import { sampleResultData } from "@/data/mbti/mbtiResultData";

import PersonalityTraits from "@/components/results/report/sections/personality-traits";
import CareerPathSection from "@/components/results/report/sections/CareerPathSection";
import RelationshipSection from "@/components/results/report/sections/RelationshipSection";
import GrowthSection from "@/components/results/report/sections/GrowthSection";
import DailyHabitsSection from "@/components/results/report/sections/DailyHabitsSection";
import ValuesMotivatorSection from "@/components/results/report/sections/ValuesMotivatorsSection";
import CommunitySection from "@/components/results/report/sections/CommunitySection";
import ActionPlanSection from "@/components/results/report/sections/ActionPlanSection";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar-custom";
import { ReportHeader } from "@/components/results/report/SiteHeader";
import { ReportSidebar } from "@/components/results/report/Sidebar";
import { User } from "@/types/supabase/users";

export interface ReportComponentProps {
  userData: User | null;
  resultData: ResultData | null;
}
export default function Report({userData, resultData}: ReportComponentProps) {
  const {
    personalityType,
    personalityDescription,
    completionDate,
    traitScores,
  } = resultData || sampleResultData;
  return (
    <div className="min-h-screen bg-background [--header-height:6rem]">
      <SidebarProvider className="flex flex-col">
        <ReportHeader firstname={resultData?.firstname} />
        <div className="flex flex-1">
          <ReportSidebar />
          <SidebarInset>
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

              {/* Career Path */}
              <CareerPathSection
                firstname={resultData?.firstname || null}
                career={
                  resultData?.personalityData?.career ||
                  sampleResultData.personalityData?.career
                }
                sectionNumber={2}
                id="career-path"
              />

              {/* Relationship Insights */}
              <RelationshipSection
                firstname={resultData?.firstname || null}
                relationships={
                  resultData?.personalityData?.relationships ||
                  sampleResultData.personalityData?.relationships
                }
                sectionNumber={3}
                id="relationships"
              />

              {/* Growth Journey */}
              <GrowthSection
                firstname={resultData?.firstname || null}
                growth={
                  resultData?.personalityData?.growth ||
                  sampleResultData.personalityData?.growth
                }
                sectionNumber={4}
                id="growth-journey"
              />

              {/* Daily Habits */}
              <DailyHabitsSection
                firstname={resultData?.firstname || null}
                dailyHabits={
                  resultData?.personalityData?.dailyHabits ||
                  sampleResultData.personalityData?.dailyHabits
                }
                sectionNumber={5}
                id="daily-habits"
              />

              {/* Values & Motivators */}
              <ValuesMotivatorSection
                firstname={resultData?.firstname || null}
                valuesAndMotivators={
                  resultData?.personalityData?.valuesAndMotivators ||
                  sampleResultData.personalityData?.valuesAndMotivators
                }
                sectionNumber={6}
                id="values-motivators"
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
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
