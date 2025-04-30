import { Answers, OceanDimension } from "@/schema/ocean";
import type {
  OceanDimensionObject,
  OceanRawScore,
  OceanTraitKey,
  OceanTraitScores,
} from "@/types/tests/ocean/traits";
import { OceanTestQuestionsData } from "@/types/tests/testQuestions";

export function calculateOcean(
  answers: Answers,
  questionsData: OceanTestQuestionsData
): OceanRawScore {
  const questions = questionsData.questions;
  // Initialize dimensions with scoring
  const dimensions: Record<OceanTraitKey, OceanDimensionObject> = {
    openness: {
      score: 0,
      total: 5 * questionsData.sections["Openness"].totalQuestions,
      percentage: 0,
    },
    conscientiousness: {
      score: 0,
      total: 5 * questionsData.sections["Conscientiousness"].totalQuestions,
      percentage: 0,
    },
    extraversion: {
      score: 0,
      total: 5 * questionsData.sections["Extraversion"].totalQuestions,
      percentage: 0,
    },
    agreeableness: {
      score: 0,
      total: 5 * questionsData.sections["Agreeableness"].totalQuestions,
      percentage: 0,
    },
    neuroticism: {
      score: 0,
      total: 5 * questionsData.sections["Neuroticism"].totalQuestions,
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
      dimensions[dimension].score += (6 - numericScore);
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

  return {
    traitScores: dimensions,
  };
}
