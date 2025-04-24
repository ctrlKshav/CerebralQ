import * as React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type {
  TraitDescription,
  TraitScore,
  TraitScores,
} from "@/types/tests/mbti/traits";
import { useState } from "react";

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
  dashboardView,
}: TraitDetailProps) => {
  const dominant = score.dominant === "left" ? traitInfo.left : traitInfo.right;

  // Use high-quality professional Unsplash images for each personality type
  const traitImages: Record<string, string> = {
    E: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745491076/extraversion_m9nqlf.jpg",
    I: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745491070/introversion_n86qkf.jpg",
    S: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745491070/sensing_ndbcqi.jpg",
    N: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745491069/intuition_gqrpcc.jpg",
    T: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745491072/thinking_duqsog.jpg",
    F: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745491070/feeling_tnw8ce.jpg",
    J: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745491069/judging_wfluvv.jpg",
    P: "https://res.cloudinary.com/dhix3y82h/image/upload/v1745491069/perceiving_awrm6c.jpg",
    default:
      "https://res.cloudinary.com/dhix3y82h/image/upload/v1745491069/perceiving_awrm6c.jpg",
  };

  const imagePath = traitImages[dominant.letter] || traitImages.default;
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className=" font-bold text-muted-foreground">
          {traitInfo.title}
        </span>
        <h3 className="text-3xl font-bold" style={{ color: themedColor }}>
          {score[`${score.dominant}Percentage`].toFixed(0)}%{" "}
          <span className="text-base font-medium">
            {score.dominant === "left"
              ? traitInfo.leftLabel
              : traitInfo.rightLabel}
          </span>
        </h3>
      </div>

      {/* Main Card */}
      <div className="bg-background shadow-lg rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-[18rem]">
          <Image
            src={imagePath}
            alt={`${dominant.name} trait illustration`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>

          {/* Trait Badge - Displayed on image */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-3">
            <Badge
              style={{ backgroundColor: themedColor }}
              className="text-white py-1 px-3 text-xs font-bold"
            >
              {dominant.letter}
            </Badge>
            <h5 className="text-white text-xl font-bold drop-shadow-md">
              {dominant.name}
            </h5>
          </div>
        </div>

        {/* Description Section */}
        <div className="p-5">
          <p className="text-muted-foreground leading-relaxed">
            {traitInfo.getDominantTraitDescription(firstname, dashboardView)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TraitDetail;
