"use client";

import { useEffect, useState } from "react";
import { ResultData } from "@/types/tests/mbti";
import {
  getCareerSuggestions,
  getSimilarPersonalities,
} from "@/lib/mbti/results";
import { getPersonalityInsights } from "@/data/mbti/test";

// Import our components
import { Hero } from "@/components/results/hero";
import { PersonalityTraits } from "@/components/results/personality-traits";
import { CareerSuggestions } from "@/components/results/career-suggestions";
import { SimilarPersonalities } from "@/components/results/similar-personalities";
import { DetailedPersonalityInsights } from "@/components/results/detailed-personality-insights";
import AboutPersonalityType from "@/components/profile/about-personality-type";
import { personalityDescriptions } from "@/data/mbti/personalityDescriptions";
import { getCurrentUser, saveTestResults } from "@/lib/supabaseOperations";

// Local storage key
const TEST_RESULTS_KEY = "cerebralq_mbti_results";

export default function Results() {
  const [resultData, setResultData] = useState<ResultData>({
    personalityType: "",
    personalityDescription: { alias: "", description: "" },
    testId: "",
    completionDate: "",
    traitScores: null,
    careerSuggestions: [],
    similarPersonalities: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userID, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const func = async () => {
      const user = await getCurrentUser();
      console.log(user)
      user && setUserId(user.id);
    };
    func();
  }, []);

  useEffect(() => {
    // Get data from localStorage
    const func = async () => {
      try {
        const storedData = localStorage.getItem(TEST_RESULTS_KEY);

        if (!storedData) {
          setError("No test results found. Please take the test first.");
          setLoading(false);
          return;
        }

        const data = JSON.parse(storedData);
        data.user_id = userID;
        console.log(userID)
        console.log(data)

        if(userID !== null)
          await saveTestResults(data);

        // Extract required data from localStorage format
        const personalityType =
          data.personalityType || data.raw_score?.personalityType;
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

        // Set all result data at once
        setResultData({
          personalityType,
          personalityDescription: personalityDescriptions[personalityType],
          testId,
          completionDate,
          traitScores,
          careerSuggestions: getCareerSuggestions(personalityType),
          similarPersonalities: getSimilarPersonalities(personalityType),
        });

        setLoading(false);
      } catch (error) {
        console.error("Error parsing result data:", error);
        setError("Failed to load test results. Please retake the test.");
        setLoading(false);
      }
    };
    func();

  }, [userID]);

  // Destructure properties from resultData for easier access in JSX
  const {
    personalityType,
    personalityDescription,
    completionDate,
    traitScores,
    careerSuggestions,
    similarPersonalities,
  } = resultData;

  // Get the alias for the current personality type
  const personalityAlias = personalityDescription.alias;

  // Get personality insights
  const personalityInsights = getPersonalityInsights(personalityType);

  const typeInfo = personalityDescriptions[personalityType] || {
    title: "Personality Type",
    description:
      "A detailed analysis of cognitive preferences and behavioral patterns.",
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
          <p className="mb-6">{error}</p>
          <a
            href="/tests/mbti/start-test"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90"
          >
            Take the Test
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <Hero
          personalityType={personalityType}
          personalityAlias={personalityAlias}
          personalityDescription={personalityDescription}
          completionDate={completionDate}
          userId={userID}
        />

        {/* About Personality Type Card */}
        <AboutPersonalityType
          personalityType={personalityType}
          alias={typeInfo.alias}
          description={typeInfo.description}
        />

        {/* Personality Traits */}
        {traitScores && <PersonalityTraits traitScores={traitScores} />}

        {/* Career Suggestions */}
        <CareerSuggestions
          personalityType={personalityType}
          careerSuggestions={careerSuggestions}
        />

        {/* Similar Personalities */}
        <SimilarPersonalities
          personalityType={personalityType}
          similarPersonalities={similarPersonalities}
        />

        {/* Detailed Personality Insights */}
        <DetailedPersonalityInsights
          personalityType={personalityType}
          personalityAlias={personalityAlias}
          personalityInsights={personalityInsights}
        />
      </main>
    </div>
  );
}
