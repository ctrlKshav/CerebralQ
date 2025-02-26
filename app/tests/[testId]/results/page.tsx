import Results from "@/components/results";

import { PersonalityTraits } from "@/components/results/personality-tests"

const traitScores = {
  "E-I": { left: 100, right: 0, leftPercentage: 100, rightPercentage: 0, dominant: "left" as const },
  "S-N": { left: 0, right:100, leftPercentage: 0, rightPercentage: 100, dominant: "right" as const },
  "T-F": { left: 77, right: 23, leftPercentage: 77, rightPercentage: 23, dominant: "left" as const },
  "J-P": { left: 44, right: 56, leftPercentage: 44, rightPercentage: 56, dominant: "right" as const },
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen p-4 bg-background">
      <PersonalityTraits traitScores={traitScores} />
    </div>
    // <div className="mt-16">
    //   <Results />
    // </div>
  );
}
