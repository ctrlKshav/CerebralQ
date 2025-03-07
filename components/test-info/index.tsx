"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Brain, Timer, Users, Target, Award, BookOpen } from "lucide-react";
import { User } from "@supabase/supabase-js";
import { MBTIRawScore, FormattedTestResult } from "@/types/supabase/user-test-history";
import {
  TestTypeBadge,
  DifficultyBadge,
  ResultTypeBadge,
  FeatureBadge,
  TestOverviewCard,
  TestDimensionsCard,
  TestResultSection,
  TestCitationsCard,
  TestRecommendationsSection,
} from "./test-components";
import { MBTI_TEST_ID } from "@/lib/constants";
import { personalityDescriptions } from "@/data/mbti/personalityDescriptions";

const MBTI_TEST = {
  name: "Myers-Briggs Type Indicator",
  short_code: "mbti",
  description:
    "Discover how you're wired with the MBTI—the world's most trusted personality framework. Get your 4-letter type (like ENFP or ISTJ) and finally understand why you thrive in chaos, hate small talk, or obsess over to-do lists.",
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
      name: " Myers, I. B., & McCaulley, M. H. (1985). Manual: A guide to the development and use of the Myers-Briggs Type Indicator. Consulting Psychologists Press.",
      link: "https://psycnet.apa.org/record/2013-29682-000",
    },
    {
      name: " Myers Briggs Type Indicator Score Reliability Across Studies A Meta-Analytic Reliability Generalization Study",
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
      title: "Mind",
      description: "How you interact with the world and direct your energy",
      types: ["Extrovert (E)", "Introvert (I)"],
    },
    {
      title: "Information",
      description: "How you process and gather information",
      types: ["Sensing (S)", "Intuition (N)"],
    },
    {
      title: "Decisions",
      description: "How you make decisions and cope with emotions",
      types: ["Thinking (T)", "Feeling (F)"],
    },
    {
      title: "Structure",
      description: "How you approach work, planning and decision-making",
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
  const [latestResult, setLatestResult] = useState<FormattedTestResult | null>(null);

  useEffect(() => {
    // Check if user is authenticated and fetch their latest test result
    async function fetchUserAndTestData() {
      try {
        setLoading(true);
        
        // Get current authenticated user
        const { data: { user }, error: userError } = await supabase.auth.getUser();
        
        if(userError) return setLoading(false)
        
        setUser(user);
        
        // If user is authenticated, fetch their latest test result
        if (user) {
          // Get the most recent MBTI test result
          const { data: testData, error: testError } = await supabase
            .from("user_test_history")
            .select(`
              *,
              test_type:test_type_id (
                name,
                short_code,
                description,
                category
              )
            `)
            .eq("user_id", user.id)
            .eq("test_type_id", MBTI_TEST_ID) // Using MBTI test ID from constants
            .order("taken_at", { ascending: false })
            .limit(1)
            .single();
          
          if (testError && testError.code !== 'PGRST116') { // PGRST116 means no rows returned
            console.error("Error fetching test data:", testError);
          }
          
          if (testData) {
            // Format the test result for display
            const mbtiResult = testData.raw_score as MBTIRawScore;
            const personalityType = mbtiResult?.personalityType || "Unknown";
          
            setLatestResult({
              id: testData.id,
              type: testData.test_type?.short_code || "MBTI",
              personalityType: personalityType,
              label: personalityDescriptions[personalityType].alias || "Unknown",
              description: personalityDescriptions[personalityType].description || "Unknown",
              date: testData.taken_at || new Date().toISOString(),
              traitScores: mbtiResult?.traitScores,
              details: testData.raw_score
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
            {MBTI_TEST.name}{" "}
            <span className="text-2xl">({MBTI_TEST.short_code})</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {MBTI_TEST.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {MBTI_TEST.features.map((feature, index) => (
              <FeatureBadge
                key={index}
                Icon={feature.icon}
                label={feature.label}
                color={feature.color}
              />
            ))}
          </div>
          <div className="pt-4">
            <Link href={`/tests/${MBTI_TEST.short_code}/start-test`}>
              <Button size="lg" className="text-lg px-8 py-6">
                Begin Test →
              </Button>
            </Link>
          </div>
          <button
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            onClick={() => {
              document
                .getElementById("test-details-section")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 pb-20"
        id="test-details-section"
      >
        <div className="grid gap-12 md:gap-6 md:grid-cols-2 text-md">
          {/* Test Overview Card */}
          <TestOverviewCard testData={MBTI_TEST} />

          {/* Personality Dimensions Card */}
          <TestDimensionsCard dimensions={MBTI_TEST.personality_dimensions} />
        </div>

        {/* Past Results Section - Only show if user is logged in and has results */}
        {user && latestResult && !loading && (
          <TestResultSection result={latestResult} testShortCode={MBTI_TEST.short_code} />
        )}

        <div className="mt-24 grid">
          {/* Citations Card */}
          <TestCitationsCard citations={MBTI_TEST.citations} />
        </div>
        
        {/* Related Tests Section */}
        <TestRecommendationsSection recommendations={MBTI_TEST.complementary_tests} />
      </section>
    </div>
  );
}
