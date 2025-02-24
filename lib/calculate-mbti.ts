import { Answers } from "@/shared/schema";
import type { TestQuestion } from "@/types/tests/mbti";

export type TraitScores = {
  [K in "E-I" | "S-N" | "T-F" | "J-P"]: {
    left: number;
    right: number;
    leftPercentage: number;
    rightPercentage: number;
    dominant: "left" | "right";
  };
};

export type MBTIResult = {
  personalityType: string;
  traitScores: TraitScores;
};

export function calculateMBTI(
  answers: Answers,
  questions: TestQuestion[]
): MBTIResult {
  // Initialize dimensions with scoring
  const dimensions: Record<string, { left: number; right: number; leftLetter: string; rightLetter: string }> = {
    "E-I": { left: 0, right: 0, leftLetter: "E", rightLetter: "I" },
    "S-N": { left: 0, right: 0, leftLetter: "S", rightLetter: "N" },
    "T-F": { left: 0, right: 0, leftLetter: "T", rightLetter: "F" },
    "J-P": { left: 0, right: 0, leftLetter: "J", rightLetter: "P" },
  };

  // Calculate raw scores
  questions.forEach(question => {
    const answer = answers[question.id];
    if (answer === undefined) return;

    const dimension = question.dimension;
    if (question.type === "likert" && typeof answer.selectedScore === "number") {
      if (answer.selectedScore > 3) dimensions[dimension].right += (answer.selectedScore - 3);
      else if (answer.selectedScore < 3) dimensions[dimension].left += (3 - answer.selectedScore);
    }
  });

  // Calculate trait scores and personality type
  const traitScores: TraitScores = {} as TraitScores;
  const personalityType = Object.entries(dimensions).map(([dim, scores]) => {
    const total = scores.left + scores.right;
    const leftPercentage = total === 0 ? 50 : (scores.left / total) * 100;
    const rightPercentage = total === 0 ? 50 : (scores.right / total) * 100;
    
    traitScores[dim as keyof TraitScores] = {
      left: scores.left,
      right: scores.right,
      leftPercentage,
      rightPercentage,
      dominant: scores.left >= scores.right ? "left" : "right"
    };

    return scores.left >= scores.right ? scores.leftLetter : scores.rightLetter;
  }).join("");

  return {
    personalityType,
    traitScores
  };
}
