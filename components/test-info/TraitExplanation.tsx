﻿import { Badge } from "@/components/ui/badge";
import { getPersonalityTraitDescriptions } from "@/data/mbti/traitDescriptions";
import { TraitKey, TraitScore } from "@/types/tests/mbti/traits";

export const TraitExplanation = ({
  traitKey,
  score,
  personalityType,
}: {
  traitKey: TraitKey;
  score: TraitScore;
  personalityType?: string;
}) => {
  const traitInfo =
    getPersonalityTraitDescriptions(personalityType ?? "INTJ")[traitKey];
  const dominant = score.dominant === "left" ? traitInfo.left : traitInfo.right;

  return (
    <div className="mt-2 p-3 bg-primary/5 rounded-lg">
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="text-sm py-0.5 px-2 font-semibold">
          {dominant.letter}
        </Badge>
        <h5 className="text-sm font-medium">{dominant.name}</h5>
        <span className="ml-auto text-xs text-muted-foreground">
          {traitInfo.title}
        </span>
      </div>
      <p className="text-xs md:text-sm mt-1">{traitInfo.getDominantTraitDescription()}</p>
    </div>
  );
};
