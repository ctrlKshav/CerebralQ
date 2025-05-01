import * as React from "react";
import { useTheme } from "next-themes";
import type { TraitScores } from "@/types/tests/mbti/traits";
import { getPersonalityTraitDescriptions } from "@/data/tests/mbti/traitDescriptions";
import TraitBar from "./TraitBar";
import TraitDetail from "./TraitDetail";

interface TraitCardProps {
  trait: keyof TraitScores;
  score: any;
  isSelected: boolean;
  onSelect: (trait: keyof TraitScores) => void;
  isMobile: boolean;
  personalityType: string;
  firstname?: string;
  dashboardView?: boolean;
}

// Component that combines trait bar and detail with accordion behavior
export const TraitCard = ({
  trait,
  score,
  isSelected,
  onSelect,
  isMobile,
  personalityType,
  firstname,
  dashboardView,
}: TraitCardProps) => {
  const { theme, resolvedTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isLightTheme = currentTheme === "light";

  const description = getPersonalityTraitDescriptions(personalityType)[trait];
  const themedColor = !isLightTheme
    ? description.lightColor
    : description.darkColor;

  return (
    <div className="w-full">
      <TraitBar
        trait={trait}
        score={score}
        description={description}
        isSelected={isSelected}
        onClick={() => onSelect(trait)}
        onHover={() => onSelect(trait)}
        themedColor={themedColor}
      />

      {/* Show details directly below the trait on mobile when selected */}
      {isMobile && isSelected && (
        <div className="mt-8 mb-8 ml-2 animate-fadeIn">
          <TraitDetail
            traitKey={trait}
            score={score}
            traitInfo={description}
            themedColor={themedColor}
            firstname={firstname}
            dashboardView={dashboardView}
          />
        </div>
      )}
    </div>
  );
};

export default TraitCard;
