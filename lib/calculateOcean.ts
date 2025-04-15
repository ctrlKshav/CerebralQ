import { Answers } from "@/schema/ocean";
import type { OceanTraitScores } from "@/types/tests/ocean/traits";
import { TestQuestionsData } from "@/types/tests/testQuestions";

export type OceanResult = {
  personalityType: string;
  traitScores: OceanTraitScores;
};

export function calculateOcean(
  answers: Answers,
  questionsData: TestQuestionsData
): OceanResult {
  const questions = questionsData.questions;
  
  // Initialize dimensions with scoring
  const dimensions: Record<string, { left: number; right: number; dominant: 'left' | 'right'; leftPercentage: number; rightPercentage: number }> = {
    "openness": { left: 0, right: 0, dominant: 'left', leftPercentage: 0, rightPercentage: 0 },
    "conscientiousness": { left: 0, right: 0, dominant: 'left', leftPercentage: 0, rightPercentage: 0 },
    "extraversion": { left: 0, right: 0, dominant: 'left', leftPercentage: 0, rightPercentage: 0 },
    "agreeableness": { left: 0, right: 0, dominant: 'left', leftPercentage: 0, rightPercentage: 0 },
    "neuroticism": { left: 0, right: 0, dominant: 'left', leftPercentage: 0, rightPercentage: 0 },
  };

  // Process answers for each dimension
  questions.forEach(question => {
    const answer = answers[question.id];
    if (answer === undefined) return;

    const dimension = question.dimension;
    // Convert selectedScore from string to number
    const numericScore = Number(answer.selectedScore);
    
    if (question.type === "likert") {
      // For reversed questions (questions 3, 6, 9, 12, 15), we invert the scoring
      // These are questions that represent the opposite of the trait
      const reversedQuestions = ["3", "6", "9", "12", "15"];
      
      if (reversedQuestions.includes(question.id)) {
        // For reversed questions: high score means lower trait
        if (numericScore > 3) {
          dimensions[dimension].left += (numericScore - 3);
        } else if (numericScore < 3) {
          dimensions[dimension].right += (3 - numericScore);
        }
      } else {
        // For normal questions: high score means higher trait
        if (numericScore > 3) {
          dimensions[dimension].right += (numericScore - 3);
        } else if (numericScore < 3) {
          dimensions[dimension].left += (3 - numericScore);
        }
      }
    }
  });

  // Calculate percentages and dominant sides for each dimension
  Object.keys(dimensions).forEach(dim => {
    const scores = dimensions[dim];
    const total = scores.left + scores.right;
    
    scores.leftPercentage = total === 0 ? 50 : (scores.left / total) * 100;
    scores.rightPercentage = total === 0 ? 50 : (scores.right / total) * 100;
    scores.dominant = scores.left >= scores.right ? 'left' : 'right';
  });

  // Create the personality type code
  const personalityType = [
    dimensions.openness.dominant === 'right' ? 'O+' : 'O-',
    dimensions.conscientiousness.dominant === 'right' ? 'C+' : 'C-',
    dimensions.extraversion.dominant === 'right' ? 'E+' : 'E-',
    dimensions.agreeableness.dominant === 'right' ? 'A+' : 'A-',
    dimensions.neuroticism.dominant === 'right' ? 'N+' : 'N-'
  ].join("");

  // Convert to trait scores format
  const traitScores: OceanTraitScores = {
    openness: {
      dominant: dimensions.openness.dominant,
      leftPercentage: dimensions.openness.leftPercentage,
      rightPercentage: dimensions.openness.rightPercentage
    },
    conscientiousness: {
      dominant: dimensions.conscientiousness.dominant,
      leftPercentage: dimensions.conscientiousness.leftPercentage,
      rightPercentage: dimensions.conscientiousness.rightPercentage
    },
    extraversion: {
      dominant: dimensions.extraversion.dominant,
      leftPercentage: dimensions.extraversion.leftPercentage,
      rightPercentage: dimensions.extraversion.rightPercentage
    },
    agreeableness: {
      dominant: dimensions.agreeableness.dominant,
      leftPercentage: dimensions.agreeableness.leftPercentage,
      rightPercentage: dimensions.agreeableness.rightPercentage
    },
    neuroticism: {
      dominant: dimensions.neuroticism.dominant,
      leftPercentage: dimensions.neuroticism.leftPercentage,
      rightPercentage: dimensions.neuroticism.rightPercentage
    }
  };

  return {
    personalityType,
    traitScores
  };
} 