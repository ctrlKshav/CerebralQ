"use client";

import { useEffect, useState } from "react";
import { ResultData } from "@/types/tests/mbti";
import { getCareerSuggestions, getSimilarPersonalities } from "@/lib/mbti/results";
import { getPersonalityInsights } from "@/data/mbti";

// Import our components
import { Hero } from "@/components/results/hero";
import { PersonalityTraits } from "@/components/results/personality-traits";
import { CareerSuggestions } from "@/components/results/career-suggestions";
import { SimilarPersonalities } from "@/components/results/similar-personalities";
import { DetailedPersonalityInsights } from "@/components/results/detailed-personality-insights";

// Define personality type descriptions
const personalityDescriptions: Record<string, string> = {
  INTJ: "Strategic thinkers with a plan for everything. Independent and analytical problem-solvers who drive innovation.",
  INTP: "Innovative inventors with an unquenchable thirst for knowledge. Bright and curious thinkers focused on solving complex problems.",
  ENTJ: "Bold, imaginative leaders who are always finding ways to improve systems. Natural-born leaders who see possibilities everywhere.",
  ENTP: "Quick-thinking debaters who love to push boundaries. Enthusiastic innovators constantly generating new ideas.",
  INFJ: "Quiet idealists with deep insight and conviction. Creative nurturers with strong value systems.",
  INFP: "Poetic, kind, and altruistic individuals who seek authenticity. Idealistic mediators guided by their core values.",
  ENFJ: "Charismatic inspirers dedicated to others' growth. Natural mentors who bring out the best in others.",
  ENFP: "Enthusiastic, creative free spirits who can connect with just about anyone. Warmly enthusiastic idea generators.",
  ISTJ: "Practical, fact-minded individuals who value reliability. Detail-oriented organizers who maintain order.",
  ISFJ: "Warm protectors with excellent analytical abilities. Devoted caretakers who enjoy serving others.",
  ESTJ: "Efficient organizers who bring order to environments. Practical managers focused on getting things done.",
  ESFJ: "Caring, social individuals concerned with maintaining harmony. Warm-hearted helpers who put others first.",
  ISTP: "Bold, practical experimenters who master tools. Logical problem-solvers who excel in crisis situations.",
  ISFP: "Gentle, sensitive artists who live in the moment. Quiet experimenters who express themselves through action.",
  ESTP: "Energetic thrill-seekers who solve problems practically. Smart, energetic doers who value immediate results.",
  ESFP: "Spontaneous, energetic entertainers who enjoy life to the fullest. Fun-loving performers who brighten their environments.",
};

// Define personality type aliases
const personalityAliases: Record<string, string> = {
  INTJ: "The Architect",
  INTP: "The Logician",
  ENTJ: "The Commander",
  ENTP: "The Debater",
  INFJ: "The Advocate",
  INFP: "The Mediator",
  ENFJ: "The Protagonist",
  ENFP: "The Campaigner",
  ISTJ: "The Logistician",
  ISFJ: "The Defender",
  ESTJ: "The Executive",
  ESFJ: "The Consul",
  ISTP: "The Virtuoso",
  ISFP: "The Adventurer",
  ESTP: "The Entrepreneur",
  ESFP: "The Entertainer",
};

// Local storage key
const TEST_RESULTS_KEY = "cerebralq_mbti_results";

export default function Results() {
  const [resultData, setResultData] = useState<ResultData>({
    personalityType: "",
    personalityDescription: "",
    testId: "",
    completionDate: "",
    traitScores: null,
    careerSuggestions: [],
    similarPersonalities: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get data from localStorage
    try {
      const storedData = localStorage.getItem(TEST_RESULTS_KEY);
      
      if (!storedData) {
        setError("No test results found. Please take the test first.");
        setLoading(false);
        return;
      }
      
      const data = JSON.parse(storedData);
      
      // Extract required data from localStorage format
      const personalityType = data.personalityType || data.raw_score?.personalityType;
      const traitScores = data.traitScores || data.raw_score?.traitScores;
      const testId = data.testId || data.test_type_id;
      const completionDate = data.completionDate || 
        (data.timestamp ? new Date(data.timestamp).toLocaleDateString() : 
        (data.taken_at ? new Date(data.taken_at).toLocaleDateString() : new Date().toLocaleDateString()));
      
      if (!personalityType) {
        setError("Invalid test result data. Please retake the test.");
        setLoading(false);
        return;
      }

      // Set all result data at once
      setResultData({
        personalityType,
        personalityDescription: personalityDescriptions[personalityType] || "",
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
  const personalityAlias = personalityAliases[personalityType] || "";

  // Get personality insights
  const personalityInsights = getPersonalityInsights(personalityType);

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
