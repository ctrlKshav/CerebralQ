"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Brain, Timer, Users, Target, Award, BookOpen } from "lucide-react";
import { User } from "@supabase/supabase-js";
import {
  MBTIRawScore,
  FormattedTestResult,
} from "@/types/supabase/user-test-history";
import { FeatureBadge } from "./badges";
import { TestOverviewCard } from "@/components/test-info/mbti/TestOverviewCard";
import { TestDimensionsCard } from "@/components/test-info/mbti/TestDimensionsCard";
import { TestResultSection } from "@/components/test-info/mbti/TestResultSection";
import { TestCitationsCard } from "@/components/test-info/mbti/CitationsCard";
import { MBTI_TEST_ID } from "@/lib/constants";
import { personalityDescriptions } from "@/data/tests/mbti/personalityDescription";
import { getOrderedMBTITraitsObject } from "@/lib/utils";
import { TeamGrid } from "@/components/team/TeamGrid";
import { SectionHeader } from "@/components/test-info/mbti/SectionHeader";
import { teamMembers } from "@/data/team";
import { mbtiTestInfo } from "@/data/tests/mbti/testInfo";

export default function MBTITestInformation() {
  const supabase = createClient();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [latestResult, setLatestResult] = useState<FormattedTestResult | null>(
    null
  );

  useEffect(() => {
    // Check if user is authenticated and fetch their latest test result
    async function fetchUserAndTestData() {
      try {
        setLoading(true);

        // Get current authenticated user
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) return setLoading(false);

        setUser(user);

        // If user is authenticated, fetch their latest test result
        if (user) {
          // Get the most recent MBTI test result
          const { data: testData, error: testError } = await supabase
            .from("user_test_history")
            .select(
              `
              *,
              test_type:test_type_id (
                name,
                short_code,
                description,
                category
              )
            `
            )
            .eq("user_id", user.id)
            .eq("test_type_id", MBTI_TEST_ID) // Using MBTI test ID from constants
            .order("taken_at", { ascending: false })
            .limit(1)
            .single();

          if (testError && testError.code !== "PGRST116") {
            // PGRST116 means no rows returned
            console.error("Error fetching test data:", testError);
          }

          if (testData) {
            // Format the test result for display
            const orderedTraitScores = getOrderedMBTITraitsObject(
              testData.raw_score.traitScores
            );
            const mbtiResult = {
              traitScores: orderedTraitScores,
              personalityType: testData.raw_score.personalityType,
            } as MBTIRawScore;
            const personalityType = mbtiResult?.personalityType || "Unknown";

            setLatestResult({
              id: testData.id,
              type: testData.test_type?.short_code || "MBTI",
              personalityType: personalityType,
              label:
                personalityDescriptions[personalityType].alias || "Unknown",
              description:
                personalityDescriptions[personalityType].description(null, false),
              date: testData.taken_at || new Date().toISOString(),
              traitScores: mbtiResult?.traitScores,
              details: testData.raw_score,
            });
          }
        }
      } catch (error) {
        console.error("Unexpected error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserAndTestData();
  }, []);

  // Utility function to format description with line breaks
  const formatDescriptionWithLineBreaks = (description: string) => {
    const segments = description.split("\n");
    return (
      <>
        {segments.map((segment, index) => (
          <span key={index}>
            {segment}
            {index < segments.length - 2 && (
              <>
                <br />
                <br />
              </>
            )}
          </span>
        ))}
      </>
    );
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section className="px-4 py-4 sm:py-0 min-h-screen flex flex-col justify-start sm:justify-center">
        <div className="mb-12 max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
            {mbtiTestInfo.name}{" "}
            <span className="text-2xl">
              ({mbtiTestInfo.short_code.toUpperCase()})
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {formatDescriptionWithLineBreaks(mbtiTestInfo.description)}
          </p>
          <div className="flex flex-wrap justify-center gap-3 ">
            {mbtiTestInfo.features.map((feature, index) => (
              <FeatureBadge
                key={index}
                Icon={feature.icon}
                label={feature.label}
                color={feature.color}
              />
            ))}
          </div>
          <div className="pt-4 ">
            <Link href={`/start-test`}>
              <Button size="lg" className="text-lg px-8 py-6">
                Begin Test →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-36 mb-12"
        id="test-details-section"
      >
        {/* Team Section */}
        <SectionHeader
          title="About the Test"
          description="Explore the science and structure behind this assessment, including major benefits and personality dimensions."
        />
        <div className="grid gap-12 md:gap-6 md:grid-cols-2 text-md">
          {/* Test Overview Card */}
          <TestOverviewCard testData={mbtiTestInfo} />
          {/* Personality Dimensions Card */}
          <TestDimensionsCard dimensions={mbtiTestInfo.personality_dimensions} />
        </div>
      </section>

      {user && latestResult && !loading && (
        <section
          className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-36 mb-12"
          id="latest-result"
        >
          <SectionHeader
            title="Your Latest Result"
            description="Pick up where you left off and rediscover your unique personality type. A quick flashback to your previous insights."
          />
          {/* Past Results Section - Only show if user is logged in and has results */}
          <TestResultSection
            result={latestResult}
          />
        </section>
      )}

      <section
        className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-36 mb-12"
        id="team"
      >
        {/* Team Section */}
        <SectionHeader
          title="The CQ Crew"
          description="A group of builders, thinkers, and problem-solvers making cool things happen. We turn ideas into reality."
        />

        <TeamGrid members={teamMembers} />
      </section>
      <section
        className="max-w-7xl mx-auto px-4 pb-20 scroll-mt-36 mb-12"
        id="citations-section"
      >
        {/* Citations Section */}
        <SectionHeader
          title="Academic Citations"
          description="Peer-reviewed sources informing our methodology and assessment design"
        />
        <TestCitationsCard citations={mbtiTestInfo.citations} />
      </section>

      {/* Related Tests Section */}
      {/* <TestRecommendationsSection recommendations={MBTI_TEST.complementary_tests} /> */}
    </div>
  );
}
