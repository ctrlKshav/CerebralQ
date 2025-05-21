import type { OceanTraitKey, OceanTraitScores } from "@/types/tests/ocean/traits";

// Interface for the SLOAN type result
interface SloanTypeResult {
  sloanCode: string;
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

export function calculateSloanType(oceanScore: OceanTraitScores): SloanTypeResult {
  const traitScores = oceanScore
  const sloanLetters: string[] = [];

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
    } else {
      sloanLetters.push(mapping.low);
    }
  });

  const sloanCode = sloanLetters.join("");

  return {
    sloanCode,
  };
}
