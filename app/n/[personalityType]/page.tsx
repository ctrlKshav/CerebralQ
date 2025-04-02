"use client";
import ResultCertificate from "@/components/results/result";
import CQLogo from "@/components/CQLogo";
import Link from "next/link";
import { useUserDataContext } from "@/context/user-data";
import { useEffect, useState } from "react";
import { TEST_RESULTS_KEY, SAVED_RESULTS_KEY } from "@/lib/constants";
import { saveTestResults } from "@/lib/supabaseOperations";
import { Card, CardContent } from "@/components/ui/card";
import { ResultData, TraitScores, TraitScore } from "@/types/tests/mbti";
import { Button } from "@/components/ui/button";
import { getPersonalityData } from "@/data/mbti/mbtiResultData";
import { getPersonalityDescription } from "@/data/mbti/personalityDescription";
import { useParams } from "next/navigation";
import Report from "@/components/results/report";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar-custom";

// Function to generate mock trait scores for a given personality type
const generateMockTraitScores = (personalityType: string): TraitScores => {
  const createTraitScore = (
    leftTrait: string,
    rightTrait: string
  ): TraitScore => {
    const leftDominant = personalityType.includes(leftTrait);
    const rightDominant = personalityType.includes(rightTrait);

    // Set values based on which trait is dominant
    const leftValue = leftDominant ? 65 : 35;
    const rightValue = rightDominant ? 65 : 35;

    return {
      left: leftValue,
      right: rightValue,
      leftPercentage: leftValue,
      rightPercentage: rightValue,
      dominant: leftDominant ? "left" : "right",
    };
  };

  return {
    "E-I": createTraitScore("E", "I"),
    "S-N": createTraitScore("S", "N"),
    "T-F": createTraitScore("T", "F"),
    "J-P": createTraitScore("J", "P"),
  };
};

export default function ResultCertificatePage() {
  const params = useParams();
  const urlPersonalityType = params.personalityType as string;

  const userDataContext = useUserDataContext();
  if (userDataContext === null) {
    return null;
  }
  const { userData, loading: authLoading } = userDataContext;

  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to load results from URL parameter
    const loadResultsFromUrl = () => {
      try {
        if (urlPersonalityType) {
          const personalityType = urlPersonalityType.toUpperCase();

          // Validate the personality type format (should be 4 letters from MBTI types)
          const isValidType = /^[EI][NS][TF][JP]$/i.test(personalityType);

          if (!isValidType) {
            setError(
              "Invalid personality type in URL. Please use a valid MBTI type (e.g., INTJ)."
            );
            setLoading(false);
            return;
          }

          const traitScores = generateMockTraitScores(personalityType);
          const personalityData = getPersonalityData(personalityType);
          const personalityDescription =
            getPersonalityDescription(personalityType);

          // Create mock result data
          setResultData({
            firstname: "Demo",
            username: "demo_user",
            personalityType: personalityType,
            personalityDescription: personalityDescription,
            completionDate: new Date().toLocaleDateString(),
            traitScores,
            personalityData,
          });

          setLoading(false);
          return true;
        }
        return false;
      } catch (error) {
        console.error("Error creating demo data:", error);
        return false;
      }
    };

    // Get data from localStorage and handle saving to database
    const loadResultsAndSaveToDatabase = async () => {
      // First try to load from URL parameter
      const loadedFromUrl = loadResultsFromUrl();
      if (loadedFromUrl) return;

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
          firstname: userData?.first_name || null,
          username: userData?.username || null,
          personalityType: personalityType,
          personalityDescription: personalityDescription,
          completionDate,
          traitScores,
          personalityData,
        });

        // Save results to database if user is logged in
        if (userData && testId) {
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
                user_id: userData.id,
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

    if (!authLoading) loadResultsAndSaveToDatabase();
  }, [authLoading, urlPersonalityType]);

  if (loading || authLoading) {
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
            <p className="mb-4 text-muted-foreground">{error}</p>
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
    <div className="">
      <ResultCertificate userData={userData} resultData={resultData} />
      <Report userData={userData} resultData={resultData} />
    </div>
  );
}
