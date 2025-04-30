import { Answers } from "@/schema/mbti";
import type { TraitScores } from "@/types/tests/mbti/traits";
import { mbtiTestQuestionsData } from "@/data/tests/mbti/questions/mbtiFull";
import { CalculatedMBTIResult } from "@/types/tests/mbti/responseData";



export function calculateMBTI(answers: Answers): CalculatedMBTIResult {
  const questions = mbtiTestQuestionsData.questions;
  // Initialize dimensions with scoring
  const dimensions: Record<
    string,
    { left: number; right: number; leftLetter: string; rightLetter: string }
  > = {
    "E-I": { left: 0, right: 0, leftLetter: "E", rightLetter: "I" },
    "S-N": { left: 0, right: 0, leftLetter: "S", rightLetter: "N" },
    "T-F": { left: 0, right: 0, leftLetter: "T", rightLetter: "F" },
    "J-P": { left: 0, right: 0, leftLetter: "J", rightLetter: "P" },
  };

  // Calculate raw scores
  questions.forEach((question) => {
    const answer = answers[question.id];
    if (answer === undefined) return;

    if (question.dominantSide && question.dominantSide === "right") {
      const dimension = question.dimension;
      // Convert selectedScore from string to number
      const numericScore = Number(answer.selectedScore);
      if (numericScore > 3) {
        dimensions[dimension].right += numericScore - 3;
      } else if (numericScore < 3) {
        dimensions[dimension].left += 3 - numericScore;
      }
    } else {
      const dimension = question.dimension;
      // Convert selectedScore from string to number
      const numericScore = Number(answer.selectedScore);
      if (numericScore > 3) {
        dimensions[dimension].left += numericScore - 3;
      } else if (numericScore < 3) {
        dimensions[dimension].right += 3 - numericScore;
      }
    }
  });

  // Calculate trait scores and personality type
  const traitScores: TraitScores = {} as TraitScores;
  const personalityType = Object.entries(dimensions)
    .map(([dim, scores]) => {
      const total = scores.left + scores.right;
      const leftPercentage = total === 0 ? 50 : (scores.left / total) * 100;
      const rightPercentage = total === 0 ? 50 : (scores.right / total) * 100;

      traitScores[dim as keyof TraitScores] = {
        left: scores.left,
        right: scores.right,
        leftPercentage,
        rightPercentage,
        dominant: scores.left >= scores.right ? "left" : "right",
      };

      return scores.left >= scores.right
        ? scores.leftLetter
        : scores.rightLetter;
    })
    .join("");

  return {
    personalityType,
    traitScores,
  };
}
