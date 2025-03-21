"use client";

import { useEffect, useState } from "react";
import { ResultData } from "@/types/tests/mbti";
import {
  getCareerSuggestions,
  getSimilarPersonalities,
} from "@/lib/mbti/results";
import { getPersonalityInsights } from "@/data/mbti/personalityInformation";

// Import our components
import { Hero } from "@/components/results/hero";
import { PersonalityTraits } from "@/components/results/personality-traits";
import { CareerSuggestions } from "@/components/results/career-suggestions";
import { SimilarPersonalities } from "@/components/results/similar-personalities";
import { DetailedPersonalityInsights } from "@/components/results/detailed-personality-insights";
import AboutPersonalityType from "@/components/profile/AboutPersonalityType";
import { personalityDescriptions } from "@/data/mbti/personalityInformation";
import { getCurrentUser, saveTestResults } from "@/lib/supabaseOperations";
import { TEST_RESULTS_KEY, SAVED_RESULTS_KEY } from "@/lib/constants";
import HeroSection from "./extended-results/HeroSection";
import { sampleResultData } from "@/data/mbti";

export default function Results() {
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userID, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Get data from localStorage and handle saving to database
    const loadResultsAndSaveToDatabase = async () => {
      try {
        // Get the current user
        const user = await getCurrentUser();
        const userId = user?.id || null;
        setUserId(userId);

        // Get stored test results
        const storedData = localStorage.getItem(TEST_RESULTS_KEY);

        if (!storedData) {
          setError("No test results found. Please take the test first.");
          setLoading(false);
          return;
        }

        const data = JSON.parse(storedData);

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
          username: user?.username || null,
          personalityType: sampleResultData.personalityType,
          personalityDescription: sampleResultData.personalityDescription,
          completionDate,
          traitScores,
          career: sampleResultData.career,
          relationships: sampleResultData.relationships,
          growth: sampleResultData.growth,
          actionItems: sampleResultData.actionItems,
        });

        // Save results to database if user is logged in
        if (userId && testId) {
          // Generate a unique key for this test result to prevent duplicates
          const testKey = `${userId}_${testId}`;

          // Check if we've already saved this result
          const savedResults = JSON.parse(
            localStorage.getItem(SAVED_RESULTS_KEY) || "false"
          );

          // If result hasn't been saved yet, save it
          if (!savedResults) {
            try {
              // Prepare test data with correct user ID
              const testData = {
                ...data,
                user_id: userId,
              };

              // Save to Supabase
              await saveTestResults(testData);

              // Mark as saved in localStorage
              localStorage.setItem(SAVED_RESULTS_KEY, "true");
            } catch (error) {
              console.error("Error saving test results:", error);
            }
          }
        }

        setLoading(false);
      } catch (error) {
        console.error("Error parsing result data:", error);
        setError("Failed to load test results. Please retake the test.");
        setLoading(false);
      }
    };

    loadResultsAndSaveToDatabase();
  }, []);

  // Destructure properties from resultData for easier access in JSX with default values
  const {
    personalityType ,
    personalityDescription,
    completionDate ,
    traitScores ,
  } = resultData || sampleResultData;


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
        <div className="text-center max-w-md mx-auto p-6  rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold  mb-4">No Results Available</h2>
          <a
            href="/"
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
        <HeroSection
          personalityType={personalityType}
          personalityDescription={personalityDescription}
          completionDate={completionDate}
          username={resultData?.username || null}
          onExploreClick={() => console.log("Explore clicked")}
        />
        {/* Personality Traits */}
        {traitScores && (
          <PersonalityTraits traitScores={traitScores} sectionNumber={1} />
        )}
      </main>
    </div>
  );
}
