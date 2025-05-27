import { Answers } from "@/schema/ocean";
import { CalculatedOceanResult } from "@/types/tests/ocean/responseData";
import type {
  OceanTraitKey,
  OceanTraitScores,
} from "@/types/tests/ocean/traits";
import { TestQuestionsData } from "@/types/tests/testQuestions";
import { calculateSloanType } from "./calculateSloan";

export function calculateOcean(
  answers: Answers,
  questionsData: TestQuestionsData
): CalculatedOceanResult {
  const questions = questionsData.questions;
  // Initialize dimensions with scoring
  const dimensions: OceanTraitScores = {
    openness: {
      score: 0,
      total: 5 * questionsData.sections["openness"].totalQuestions,
      percentage: 0,
    },
    conscientiousness: {
      score: 0,
      total: 5 * questionsData.sections["conscientiousness"].totalQuestions,
      percentage: 0,
    },
    extraversion: {
      score: 0,
      total: 5 * questionsData.sections["extraversion"].totalQuestions,
      percentage: 0,
    },
    agreeableness: {
      score: 0,
      total: 5 * questionsData.sections["agreeableness"].totalQuestions,
      percentage: 0,
    },
    neuroticism: {
      score: 0,
      total: 5 * questionsData.sections["neuroticism"].totalQuestions,
      percentage: 0,
    },
  };

  // Process answers for each dimension
  questions.forEach((question) => {
    const answer = answers[question.id];
    if (answer === undefined) return;

    if (question.dominantSide && question.dominantSide === "left") {
      const dimension = question.dimension.toLowerCase() as OceanTraitKey;
      // Convert selectedScore from string to number
      const numericScore = Number(answer.selectedScore);
      dimensions[dimension].score += 6 - numericScore;
    } else {
      const dimension = question.dimension.toLowerCase() as OceanTraitKey;
      // Convert selectedScore from string to number
      const numericScore = Number(answer.selectedScore);
      dimensions[dimension].score += numericScore;
    }
  });

  // Calculate percentages and dominant sides for each dimension
  Object.keys(dimensions).forEach((dim) => {
    const scores = dimensions[dim as OceanTraitKey];
    const percentage = (scores.score / scores.total) * 100;
    scores.percentage = percentage;
  });

  const sloanType = calculateSloanType(dimensions);

  return {
    sloanCode: sloanType.sloanCode,
    traitScores: dimensions,
  };
}
