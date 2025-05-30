﻿"use client";

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
import { TestOverviewCard } from "@/components/test-info/TestOverviewCard";
import { TestDimensionsCard } from "@/components/test-info/TestDimensionsCard";
import { TestResultSection } from "@/components/test-info/TestResultSection";
import { TestCitationsCard } from "@/components/test-info/CitationsCard";
import { MBTI_TEST_ID } from "@/lib/constants";
import { personalityDescriptions } from "@/data/mbti/personalityDescription";
import { getOrderedMBTITraitsObject } from "@/lib/utils";
import { TeamGrid } from "@/components/team/TeamGrid";
import { SectionHeader } from "@/components/test-info/SectionHeader";
import { teamMembers } from "@/data/team";

const MBTI_TEST = {
  name: "Myers-Briggs Type Indicator",
  short_code: "mbti",
  description:
    "You are about to go on a self-discovery journey. With MBTI—the world’s most beloved personality tool — let’s find out who you really are.\n Get your unique 4-letter type (like ENFP or ISTJ) and start to see why you light up in chaos, shy away from small talk, or love checking off those to-do lists.\n Ready?\n",
  features: [
    { icon: Timer, label: "12 mins", color: "bg-blue-100 text-blue-700" },
    {
      icon: Users,
      label: "2M+ people tested",
      color: "bg-purple-100 text-purple-700",
    },
  ],
  category: "personality",
  citations: [
    {
      name: "The Myers-Briggs Type Indicator: Manual (1962): A guide to the development and use of the Myers-Briggs Type Indicator. Consulting Psychologists Press.",
      link: "https://psycnet.apa.org/record/2013-29682-000",
    },
    {
      name: "Myers-Briggs Type Indicator Score Reliability Across Studies: A Meta-Analytic Reliability Generalization Study. ",
      link: "https://www.researchgate.net/publication/237444046_Myers-Briggs_Type_Indicator_Score_Reliability_Across_Studies_A_Meta-Analytic_Reliability_Generalization_Study",
    },
  ],
  difficulty_level: "intermediate",
  num_questions: 60,
  time_estimate_minutes: 12,
  validity_period_days: 365,
  min_age: 16,
  result_type: "type",
  reliability_score: 85,
  scientific_validity_score: 78,
  personality_dimensions: [
    {
      title: "How Do You Recharge? (Mind)",
      description:
        "Are you energized by people and action (Extrovert, E), or do you love your own space and deep thoughts (Introvert, I)?",
      types: ["Extrovert (E)", "Introvert (I)"],
    },
    {
      title: "How Do You See the World? (Information)",
      description:
        "Do you focus on the here-and-now details (Sensing, S), or do you dream about what could be (Intuition, N)?",
      types: ["Sensing (S)", "Intuition (N)"],
    },
    {
      title: "How Do You Decide? (Decisions)",
      description:
        "Do you lead with logic and facts (Thinking, T), or do you follow your heart and values (Feeling, F)?",
      types: ["Thinking (T)", "Feeling (F)"],
    },
    {
      title: "How Do You Roll? (Structure)",
      description:
        "Do you love plans and structure (Judging, J), or do you go with the flow (Perceiving, P)?",
      types: ["Judging (J)", "Perceiving (P)"],
    },
  ],
  complementary_tests: [
    {
      name: "Big Five Personality",
      description: "Measure five core personality dimensions",
      shortCode: "big5-neo",
      icon: Target,
    },
    {
      name: "DISC Assessment",
      description: "Understand your behavioral style",
      shortCode: "disc",
      icon: Award,
    },
    {
      name: "HEXACO",
      description: "Explore six personality dimensions",
      shortCode: "hexaco",
      icon: BookOpen,
    },
  ],
  test_benefits: [
    {
      icon: Brain,
      title: "Career Success",
      description: "Find your ideal career path and work environment",
    },
    {
      icon: Users,
      title: "Better Relationships",
      description: "Transform how you connect with others",
    },
    {
      icon: Target,
      title: "Personal Growth",
      description: "Unlock your true potential and strengths",
    },
  ],
};

export default function TestInformation({ testId }: { testId: string }) {
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
      <section className="px-4 py-8 min-h-screen ">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
            {MBTI_TEST.name}{" "}
            <span className="text-2xl">
              ({MBTI_TEST.short_code.toUpperCase()})
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {formatDescriptionWithLineBreaks(MBTI_TEST.description)}
          </p>
          <div className="flex flex-wrap justify-center gap-3 ">
            {MBTI_TEST.features.map((feature, index) => (
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
          <TestOverviewCard testData={MBTI_TEST} />
          {/* Personality Dimensions Card */}
          <TestDimensionsCard dimensions={MBTI_TEST.personality_dimensions} />
        </div>
      </section>

      {user && latestResult && !loading && (
        <section
          className="max-w-7xl mx-auto xs:px-4 pb-20 scroll-mt-36 mb-12"
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
        <TestCitationsCard citations={MBTI_TEST.citations} />
      </section>

      {/* Related Tests Section */}
      {/* <TestRecommendationsSection recommendations={MBTI_TEST.complementary_tests} /> */}
    </div>
  );
}
