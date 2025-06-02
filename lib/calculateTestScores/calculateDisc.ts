import {
  DISCResponse,
  DISCScores,
  DISCResult,
  DISCType,
} from "@/types/tests/disc/testQuestions";
import { discGroups } from "@/data/tests/disc/questions/discFull";

/**
 * Calculate DISC scores from user responses
 * @param responses Array of user responses for each group
 * @returns DISCResult containing scores and analysis
 */
export function calculateDISCScores(responses: DISCResponse[]): DISCResult {
  // Initialize scores
  const scores: DISCScores = {
    Dominant: 0,
    Influential: 0,
    Steady: 0,
    Conscientious: 0,
  };

  // Validate responses
  if (responses.length !== discGroups.length) {
    throw new Error(
      `Expected ${discGroups.length} responses, received ${responses.length}`
    );
  }

  // Calculate scores for each response
  responses.forEach((response) => {
    const group = discGroups.find((g) => g.id === response.groupId);
    if (!group) {
      throw new Error(`Invalid group ID: ${response.groupId}`);
    }

    // Validate that all adjectives in the group have rankings
    const expectedAdjectives = group.adjectives.map((adj) => adj.text);
    const providedAdjectives = Object.keys(response.rankings);

    if (expectedAdjectives.length !== providedAdjectives.length) {
      throw new Error(`Missing rankings for group ${response.groupId}`);
    }

    // Validate that rankings use values 1-4 exactly once
    const rankingValues = Object.values(response.rankings);
    const expectedValues = [1, 2, 3, 4];
    const sortedValues = [...rankingValues].sort();

    if (!arraysEqual(sortedValues, expectedValues)) {
      throw new Error(
        `Invalid rankings for group ${response.groupId}. Must use values 1-4 exactly once.`
      );
    }

    // Add scores based on rankings (lower ranking = higher score)
    group.adjectives.forEach((adjective) => {
      const ranking = response.rankings[adjective.text];
      if (ranking === undefined) {
        throw new Error(`Missing ranking for adjective: ${adjective.text}`);
      }

      // Convert ranking to score (1=4pts, 2=3pts, 3=2pts, 4=1pt)
      const points = 5 - ranking;
      scores[adjective.type] += points;
    });
  });

  // Determine primary and secondary types
  const sortedTypes = (Object.entries(scores) as [DISCType, number][]).sort(
    ([, a], [, b]) => b - a
  );

  const primaryType = sortedTypes[0][0];
  const secondaryType = sortedTypes[1][0];

  // Check if personality is balanced (all scores within 10 points)
  const scoreValues = Object.values(scores);
  const maxScore = Math.max(...scoreValues);
  const minScore = Math.min(...scoreValues);
  const isBalanced = maxScore - minScore <= 10;

  return {
    scores,
    primaryType,
    secondaryType:
      sortedTypes[0][1] - sortedTypes[1][1] > 5 ? secondaryType : undefined,
    isBalanced,
  };
}

/**
 * Get percentage breakdown of DISC scores
 * @param scores DISCScores object
 * @returns Object with percentage for each type
 */
export function getDISCPercentages(
  scores: DISCScores
): Record<DISCType, number> {
  const total = Object.values(scores).reduce((sum, score) => sum + score, 0);

  return {
    Dominant: Math.round((scores.Dominant / total) * 100),
    Influential: Math.round((scores.Influential / total) * 100),
    Steady: Math.round((scores.Steady / total) * 100),
    Conscientious: Math.round((scores.Conscientious / total) * 100),
  };
}

/**
 * Validate a single group's responses
 * @param groupId Group ID to validate
 * @param rankings Rankings object for the group
 * @returns Boolean indicating if rankings are valid
 */
export function validateGroupRankings(
  groupId: number,
  rankings: { [adjective: string]: number }
): boolean {
  const group = discGroups.find((g) => g.id === groupId);
  if (!group) return false;

  const expectedAdjectives = group.adjectives.map((adj) => adj.text);
  const providedAdjectives = Object.keys(rankings);

  // Check all adjectives are present
  if (expectedAdjectives.length !== providedAdjectives.length) return false;
  if (!expectedAdjectives.every((adj) => providedAdjectives.includes(adj)))
    return false;

  // Check rankings use 1-4 exactly once
  const rankingValues = Object.values(rankings);
  const expectedValues = [1, 2, 3, 4];
  const sortedValues = [...rankingValues].sort();

  return arraysEqual(sortedValues, expectedValues);
}

/**
 * Get DISC type label with short code
 * @param type DISC type
 * @returns Formatted string like "Dominant (D)"
 */
export function getDISCTypeLabel(type: DISCType): string {
  const labels = {
    Dominant: "Dominant (D)",
    Influential: "Influential (I)",
    Steady: "Steady (S)",
    Conscientious: "Conscientious (C)",
  };
  return labels[type];
}

/**
 * Utility function to check if two arrays are equal
 */
function arraysEqual(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
}

/**
 * Generate a summary description based on DISC results
 * @param result DISCResult object
 * @returns String summary of the personality profile
 */
export function generateDISCSummary(result: DISCResult): string {
  const { primaryType, secondaryType, isBalanced } = result;

  if (isBalanced) {
    return "You have a balanced DISC profile, showing fairly equal strengths across all personality types. This versatility allows you to adapt well to different situations and work effectively with various personality types.";
  }

  if (secondaryType) {
    return `Your primary personality type is ${getDISCTypeLabel(primaryType)}, with strong secondary characteristics of ${getDISCTypeLabel(secondaryType)}. This combination gives you a unique blend of traits that can be highly effective in various situations.`;
  }

  return `You have a strong ${getDISCTypeLabel(primaryType)} personality profile, with this type being your dominant characteristic in how you approach work and relationships.`;
}
