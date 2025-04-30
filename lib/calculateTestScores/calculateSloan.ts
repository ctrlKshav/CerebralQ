import type { OceanRawScore, OceanTraitKey } from "@/types/tests/ocean/traits";

// Interface for the SLOAN type result
interface SloanTypeResult {
  sloanCode: string;
  alias?: string;
  notes?: string[];
}

// Mapping of trait scores to SLOAN letters
const sloanMapping: Record<
  OceanTraitKey,
  { high: string; low: string; trait: string }
> = {
  extraversion: { high: "S", low: "R", trait: "Extraversion" },
  neuroticism: { high: "L", low: "C", trait: "Neuroticism" },
  conscientiousness: { high: "O", low: "U", trait: "Conscientiousness" },
  agreeableness: { high: "A", low: "E", trait: "Agreeableness" },
  openness: { high: "I", low: "N", trait: "Openness" },
};

export function calculateSloanType(oceanScore: OceanRawScore): SloanTypeResult {
  const { traitScores } = oceanScore;
  const sloanLetters: string[] = [];
  const notes: string[] = [];

  // Process each trait in the order: Extraversion, Neuroticism, Conscientiousness, Agreeableness, Openness
  const traits: OceanTraitKey[] = [
    "extraversion",
    "neuroticism",
    "conscientiousness",
    "agreeableness",
    "openness",
  ];

  traits.forEach((trait) => {
    const score = traitScores[trait].percentage;
    const mapping = sloanMapping[trait];

    if (score > 50) {
      sloanLetters.push(mapping.high);
    } else if (score < 50) {
      sloanLetters.push(mapping.low);
    } else {
      // Handle edge case: score exactly at 50%
      sloanLetters.push("X");
      notes.push(
        `${mapping.trait} score is exactly 50%, which is ambiguous. Consider retesting for a clearer result.`
      );
    }
  });

  const sloanCode = sloanLetters.join("");

  return {
    sloanCode,
    notes: notes.length > 0 ? notes : undefined,
  };
}
