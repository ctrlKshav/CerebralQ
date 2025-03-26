import * as React from "react";
import { cn } from "@/lib/utils";

interface TraitBarProps {
  trait: string;
  score: any;
  description: any;
  isSelected: boolean;
  onClick: () => void;
  onHover?: () => void;
  themedColor: string;
}

// Component for rendering trait score visualization bar
export const TraitBar = ({
  trait,
  score,
  description,
  isSelected,
  onClick,
  onHover,
  themedColor,
}: TraitBarProps) => {
  const leftPercentage = score.leftPercentage;
  const rightPercentage = score.rightPercentage;

  return (
    <div
      className={cn(
        "space-y-3 transition-opacity cursor-pointer",
        isSelected ? "opacity-100" : "opacity-80 hover:opacity-100"
      )}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <div className="flex justify-between text-sm font-medium">
        <span className="text-muted-foreground">
          {description.leftLabel}
        </span>
        <span className="text-muted-foreground">
          {description.rightLabel}
        </span>
      </div>

      <div className="relative h-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full transition-all duration-300"
          style={{
            width: `${leftPercentage}%`,
            backgroundColor: themedColor,
            opacity: 0.2,
          }}
        />
        <div
          className="absolute top-0 right-0 h-full transition-all duration-300"
          style={{
            width: `${rightPercentage}%`,
            backgroundColor: themedColor,
            opacity: 0.2,
          }}
        />

        <div
          className="absolute top-0 h-full transition-all duration-300"
          style={{
            left: score.dominant === "left" ? 0 : "auto",
            right: score.dominant === "right" ? 0 : "auto",
            width: `${score.dominant === "left" ? leftPercentage : rightPercentage}%`,
            backgroundColor: themedColor,
          }}
        />

        <div className="absolute inset-0 flex justify-between items-center px-3">
          <span className="text-sm font-medium text-foreground">
            {Math.round(leftPercentage)}%
          </span>
          <span className="text-sm font-medium text-foreground">
            {Math.round(rightPercentage)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default TraitBar;
