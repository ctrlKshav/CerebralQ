"use client";
import { Info } from "lucide-react";
import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
} from "@/components/ui/tooltip-hybrid";

export interface MatchingTrait {
  title: string;
  description: string;
}

interface MatchingTraitBadgeProps {
  trait: MatchingTrait;
}

export function MatchingTraitBadge({ trait }: MatchingTraitBadgeProps) {
  return (
    <HybridTooltip>
      <HybridTooltipTrigger asChild>
        <div
          className={`inline-flex items-center gap-1.5 p-1.5 rounded-md bg-muted hover:bg-opacity-70 transition-colors relative w-fit whitespace-nowrap`}
        >
          <span className="text-xs font-medium">
            {trait.title}
          </span>
          <Info className="h-3 w-3 ml-0.5 opacity-50 shrink-0" />
        </div>
      </HybridTooltipTrigger>
      <HybridTooltipContent
        side="top"
        className="max-w-[280px] p-4 text-sm"
      >
        <p className="font-medium">{trait.title}</p>
        <p className="mt-1.5">{trait.description}</p>
      </HybridTooltipContent>
    </HybridTooltip>
  );
} 