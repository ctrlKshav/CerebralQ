"use client";

import { useEffect, useState } from "react";
import { ResultData } from "@/types/tests/mbti";
import { getPersonalityDescription } from "@/data/mbti/personalityInformation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import our components
import { getCurrentUser, saveTestResults } from "@/lib/supabaseOperations";
import { TEST_RESULTS_KEY, SAVED_RESULTS_KEY } from "@/lib/constants";
import { sampleResultData } from "@/data/mbti/mbtiResultData";

import HeroSection from "@/components/results/result/HeroSection";
import { getPersonalityData } from "@/data/mbti/mbtiResultData";

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

export default function Result() {
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Destructure result data

  const {
    personalityType,
    personalityDescription,
    completionDate,
    traitScores,
  } = resultData || sampleResultData;

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

        // Save results to database if user is logged in
        if (user && testId) {

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
                user_id: user.id,
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
      <main className="md:mt-14 lg:mt-4 mx-auto transition-all duration-300 space-y-8 p-4">
        <HeroSection
          personalityType={personalityType}
          personalityDescription={personalityDescription}
          completionDate={completionDate}
          firstname={resultData?.firstname || null}
          username={resultData?.username || null}
        />
      </main>
    </div>
  );
}
