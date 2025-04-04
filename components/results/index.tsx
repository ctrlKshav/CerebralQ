﻿"use client";

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
import { getCurrentUser, saveTestResults, updatePersonalityType } from "@/lib/supabaseOperations";
import { TEST_RESULTS_KEY, SAVED_RESULTS_KEY } from "@/lib/constants";
import Link from "next/link";
import { useUserDataContext } from "@/context/user-data";

export default function Results() {

  const userDataContext = useUserDataContext();
  if (userDataContext === null) {
    return null;
  }
  const { userData } = userDataContext;
  const userId = userData?.id || null;
  
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
  
  const [showingAllSections, setShowingAllSections] = useState(false);

  useEffect(() => {
    // Get data from localStorage and handle saving to database
    const loadResultsAndSaveToDatabase = async () => {
      try {
       

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
          personalityType,
          personalityDescription: personalityDescriptions[personalityType],
          testId,
          completionDate,
          traitScores,
          careerSuggestions: getCareerSuggestions(personalityType),
          similarPersonalities: getSimilarPersonalities(personalityType),
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
              await updatePersonalityType(userId, personalityType);

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


  // Function to show all sections
  const handleShowAllSections = () => {
    setShowingAllSections(true);
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
        <div className="text-center max-w-md mx-auto p-6  rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold  mb-4">No Results Available</h2>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90"
          >
            Take the Test
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 space-y-8">
        

        {/* Hero Section */}
        <Hero
          resultData={resultData}
          userId={userId}
        />

        {/* About Personality Type Card */}
        <AboutPersonalityType
          personalityType={personalityType}
          sectionNumber={1}
        />

        {/* Personality Traits */}
        {traitScores && (
          <PersonalityTraits traitScores={traitScores} sectionNumber={2} />
        )}

        {/* Career Suggestions */}
        <CareerSuggestions
          personalityType={personalityType}
          careerSuggestions={careerSuggestions}
          sectionNumber={3}
        />

        {/* Similar Personalities */}
        <SimilarPersonalities
          personalityType={personalityType}
          similarPersonalities={similarPersonalities}
          sectionNumber={4}
        />

        {/* Additional sections or button to show them */}
        {!showingAllSections ? (
          <div className="flex justify-center py-6">
            <button
              onClick={handleShowAllSections}
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              View Detailed Analysis
            </button>
          </div>
        ) : (
          <>
            {/* Detailed Personality Insights */}
            <DetailedPersonalityInsights
              personalityType={personalityType}
              personalityAlias={personalityAlias}
              personalityInsights={personalityInsights}
              sectionNumber={5}
            />
          </>
        )}
      </main>
    </div>
  );
}
