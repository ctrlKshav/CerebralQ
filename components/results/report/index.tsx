"use client";

import { useEffect, useState } from "react";
import { ResultData } from "@/types/tests/mbti";
import {
  getCareerSuggestions,
  getSimilarPersonalities,
} from "@/lib/mbti/results";
import {
  getPersonalityDescription,
  getPersonalityInsights,
  personalityDescriptions,
} from "@/data/mbti/personalityInformation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import our components
import { getCurrentUser, saveTestResults } from "@/lib/supabaseOperations";
import { TEST_RESULTS_KEY, SAVED_RESULTS_KEY } from "@/lib/constants";
import { sampleResultData } from "@/data/mbti/mbtiResultData";

import HeroSection from "@/components/results/result/HeroSection";
import PersonalityTraits from "@/components/results/report/personality-traits";
import CareerPathSection from "@/components/results/report/CareerPathSection";
import RelationshipSection from "@/components/results/report/RelationshipSection";
import GrowthSection from "@/components/results/report/GrowthSection";
import DailyHabitsSection from "@/components/results/report/DailyHabitsSection";
import ValuesMotivatorSection from "@/components/results/report/ValuesMotivatorsSection";
import CommunitySection from "@/components/results/report/CommunitySection";
import ActionPlanSection from "@/components/results/report/ActionPlanSection";
import { getPersonalityData } from "@/data/mbti/mbtiResultData";

// Import sidebar components
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconBrain,
  IconBriefcase,
  IconHeart,
  IconPlant,
  IconCalendar,
  IconStar,
  IconUsers,
  IconClipboardList,
} from "@tabler/icons-react";

export default function Report() {
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userID, setUserId] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  // Destructure result data

  const { personalityType, traitScores } = resultData || sampleResultData;
  // Create sidebar navigation links
  const sidebarLinks = [
    {
      label: "Personality Traits",
      href: "#explore-traits",
      icon: <IconBrain size={24} />,
    },
    {
      label: "Career Path",
      href: "#career-path",
      icon: <IconBriefcase size={24} />,
    },
    {
      label: "Relationships",
      href: "#relationships",
      icon: <IconHeart size={24} />,
    },
    {
      label: "Growth Journey",
      href: "#growth-journey",
      icon: <IconPlant size={24} />,
    },
    {
      label: "Daily Habits",
      href: "#daily-habits",
      icon: <IconCalendar size={24} />,
    },
    {
      label: "Values & Motivators",
      href: "#values-motivators",
      icon: <IconStar size={24} />,
    },
    { label: "Community", href: "#community", icon: <IconUsers size={24} /> },
    {
      label: "Action Plan",
      href: "#action-plan",
      icon: <IconClipboardList size={24} />,
    },
  ];

  useEffect(() => {
    // Get data from localStorage and handle saving to database
    const loadResultsAndSaveToDatabase = async () => {
      try {
        // Get the current user
        const user = await getCurrentUser();

        // Get stored test results
        const storedData = localStorage.getItem(TEST_RESULTS_KEY);

        if (!storedData) {
          setError("No test results found. Please take the test first.");
          setLoading(false);
          return;
        }

        const data = JSON.parse(storedData);

        // Extract required data from localStorage format
        const personalityType = data.raw_score?.personalityType;
        const traitScores = data.traitScores || data.raw_score?.traitScores;
        const testId = data.testId || data.test_type_id;
        const completionDate =
          data.completionDate ||
          (data.timestamp
            ? new Date(data.timestamp).toLocaleDateString()
            : data.taken_at
              ? new Date(data.taken_at).toLocaleDateString()
              : new Date().toLocaleDateString());

        if (!personalityType) {
          setError("Invalid test result data. Please retake the test.");
          setLoading(false);
          return;
        }

        const personalityData = getPersonalityData(personalityType);
        const personalityDescription =
          getPersonalityDescription(personalityType);

        // Set all result data at once
        setResultData({
          firstname: user?.first_name || null,
          username: user?.username || null,
          personalityType: personalityType,
          personalityDescription: personalityDescription,
          completionDate,
          traitScores,
          personalityData,
        });

        setLoading(false);
      } catch (error) {
        console.error("Error parsing result data:", error);
        setError("Failed to load test results. Please retake the test.");
        setLoading(false);
      }
    };

    loadResultsAndSaveToDatabase();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="p-8 text-center shadow">
          <CardContent className="p-6">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-lg text-card-foreground">
              Loading your results...
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="text-center max-w-md mx-auto shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">
              No Results Available
            </h2>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <a href="/">Take the Test</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody>
          <div className="flex flex-col h-full pt-4">
            <div className="h-24">
              {open ? (
                <h2 className="text-xl font-bold mb-2">Results Navigation</h2>
              ) : (
                <>CQ</>
              )}

              {open && (
                <p className="text-sm">
                  Explore your {personalityType} profile
                </p>
              )}
            </div>
            <div className="space-y-2">
              {sidebarLinks.map((link) => (
                <SidebarLink key={link.href} link={link} className="" />
              ))}
            </div>
          </div>
        </SidebarBody>

        <div className="min-h-screen">
          <main className="mx-auto transition-all duration-300 space-y-8 p-4">
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
              actionItems={
                resultData?.personalityData.actionItems ||
                sampleResultData.personalityData.actionItems
              }
              sectionNumber={8}
              id="action-plan"
            />
          </main>
        </div>
      </Sidebar>
    </div>
  );
}
