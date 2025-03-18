"use client";

import { Badge } from "@/components/ui/badge";
import { Brain, Star, Shield } from "lucide-react";
import InsiderBadge from "@/components/insider-badge";

interface UserBadgesProps {
  rank?: string | null;
  isInsider?: boolean | null;
}

export function UserBadges({ rank, isInsider }: UserBadgesProps) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
      <Badge variant="outline" className="text-sm font-normal bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800">
        <Brain className="w-3 h-3 mr-1" />
        {rank}
      </Badge>
      {isInsider && (
        <InsiderBadge />
      )}
    </div>
  );
}