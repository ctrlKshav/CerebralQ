import * as React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { TraitDescription, TraitScore, TraitScores } from "@/types/tests/mbti/traits";
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
  dashboardView
}: TraitDetailProps) => {
  const dominant = score.dominant === "left" ? traitInfo.left : traitInfo.right;
  const imageName = dominant.name.toLowerCase();
  const [imageError, setImageError] = useState(false);
  
  // Function to get the correct image path with format fallback
  const getImagePath = () => {
    // If first format failed, try the alternative
    if (imageError) {
      return `/images/personalityTraits/${imageName}.jpeg`;
    }
    // Default format to try first
    return `/images/personalityTraits/${imageName}.jpg`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className=" font-bold text-muted-foreground">
          {traitInfo.title}
        </span>
        <h3
          className="text-3xl font-bold"
          style={{ color: themedColor }}
        >
          {score[`${score.dominant}Percentage`].toFixed(0)}%{" "}
          <span className="text-base font-medium">
            {score.dominant === "left" ? traitInfo.leftLabel : traitInfo.rightLabel}
          </span>
        </h3>
      </div>

      {/* Main Card */}
      <div className="bg-background shadow-lg rounded-xl overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full h-[18rem]">
          <Image 
            src={getImagePath()}
            alt={`${dominant.name} trait illustration`}
            fill
            className="object-cover"
            onError={() => !imageError && setImageError(true)}
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
