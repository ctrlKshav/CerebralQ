import * as React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { TraitScores } from "@/types/tests/mbti";

interface TraitDetailProps {
  traitKey: keyof TraitScores;
  score: any;
  traitInfo: any;
  themedColor: string;
}

// Component for displaying trait details
export const TraitDetail = ({
  traitKey,
  score,
  traitInfo,
  themedColor,
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
          <div className="flex items-center justify-start gap-4">
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
              <span className="text-sm text-muted-foreground">
                {traitInfo.title}
              </span>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            {dominant.description}
          </p>
        </div>
      </div>

      <div className="relative aspect-square w-full max-h-[200px] mx-auto mt-4">
        <Image
          src="/career_paths.jpeg"
          alt={`${traitInfo.title} trait illustration`}
          fill
          sizes="(max-width: 768px) 200px, (max-width: 1200px) 200px, 280px"
          className="object-cover rounded-lg"
          quality={85}
          priority={false}
        />
      </div>
    </div>
  );
};

export default TraitDetail;
