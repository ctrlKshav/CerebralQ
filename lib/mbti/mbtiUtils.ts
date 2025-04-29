import { MBTIRawScore } from "@/types/supabase/user-test-history";
import { personalityDescriptions } from "@/data/mbti/personalityDescription";
import { FormattedTestResult } from "@/types/supabase/user-test-history";

/**
 * Formats raw MBTI test result data into a display-friendly format
 */
export function formatMBTIResult(data: any): FormattedTestResult | null {
  if (!data) return null;
  
  const mbtiResult = data.raw_score as MBTIRawScore;
  const personalityType = mbtiResult?.personalityType || "Unknown";
  
  // Get description from our data file or use a default
  const description = personalityDescriptions[personalityType]?.description(null, false) || 
    "A unique combination of psychological preferences";
  
  // Get the type alias from our data file or constants
  const label = personalityDescriptions[personalityType]?.alias || 
    "The Explorer";
  
  return {
    id: data.id,
    type: data.test_type?.short_code || "MBTI",
    personalityType,
    label,
    description,
    date: data.taken_at || new Date().toISOString(),
    traitScores: mbtiResult?.traitScores,
    details: data.raw_score
  };
}

/**
 * Maps trait score data to display labels and percentages
 */
export function mapTraitScoreToLabel(traitKey: string, traitScore: any): {
  label: string;
  percentage: number;
  dominantTrait: string;
  dominantLabel: string;
} {
  const traitLabels: Record<string, { left: string; right: string }> = {
    "E-I": { left: "Extrovert", right: "Introvert" },
    "S-N": { left: "Sensing", right: "Intuition" },
    "T-F": { left: "Thinking", right: "Feeling" },
    "J-P": { left: "Judging", right: "Perceiving" }
  };
  
  const isDominantLeft = traitScore.dominant === "left";
  const percentage = isDominantLeft ? traitScore.leftPercentage : traitScore.rightPercentage;
  const dominantTrait = traitKey.charAt(isDominantLeft ? 0 : 2);
  const dominantLabel = isDominantLeft ? traitLabels[traitKey].left : traitLabels[traitKey].right;
  
  return {
    label: `${traitLabels[traitKey].left} - ${traitLabels[traitKey].right}`,
    percentage,
    dominantTrait,
    dominantLabel
  };
}

/**
 * Gets the full meaning of each MBTI letter
 */
export function getPersonalityTypeBreakdown(type: string): string[] {
  if (!type || type.length !== 4) return [];
  
  const meanings = {
    I: "Introverted",
    E: "Extraverted",
    S: "Sensing",
    N: "Intuitive",
    T: "Thinking",
    F: "Feeling",
    J: "Judging",
    P: "Perceiving"
  };
  
  return type.split('').map(letter => meanings[letter as keyof typeof meanings] || letter);
}
