import * as React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { TraitDescription, TraitScore, TraitScores } from "@/types/tests/mbti/traits";

interface TraitDetailProps {
  traitKey: keyof TraitScores;
  score: TraitScore;
  traitInfo: TraitDescription;
  themedColor: string;
  firstname: string | undefined;
  dashboardView?: boolean;
}

// Component for displaying trait details
export const TraitDetail = ({
  traitKey,
  score,
  traitInfo,
  themedColor,
  firstname,
  dashboardView
}: TraitDetailProps) => {
    const dominant = score.dominant === "left" ? traitInfo.left : traitInfo.right;

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <span className="text-base text-muted-foreground">
          {traitInfo.title}
        </span>
        <h3
          className="text-3xl font-bold"
          style={{ color: themedColor }}
        >
          {score[`${score.dominant}Percentage`].toFixed(0)}%{" "}
          {score.dominant === "left"
            ? traitInfo.leftLabel
            : traitInfo.rightLabel}
        </h3>
      </div>

      <div className="mt-4 p-4 bg-primary/5 rounded-lg">
        <div className="space-y-4">
          <div className="flex items-start justify-start gap-4">
            <Badge
              variant="outline"
              className="text-sm py-0.5 px-2 font-semibold"
            >
              {dominant.letter}
            </Badge>
            <div>
              <h5 className="text-base font-medium">
                {dominant.name}
              </h5>
           
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            {traitInfo.getDominantTraitDescription(firstname, dashboardView)}
          </p>
        </div>
      </div>

     
    </div>
  );
};

export default TraitDetail;
