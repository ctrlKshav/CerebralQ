"use client";

import { Badge } from "@/components/ui/badge";
import { Brain, Star, Shield } from "lucide-react";

interface UserBadgesProps {
  rank: string;
  isInsider: boolean;
}

export function UserBadges({ rank, isInsider }: UserBadgesProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="outline" className="text-sm font-normal bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800">
        <Brain className="w-3 h-3 mr-1" />
        {rank}
      </Badge>
      {isInsider && (
        <Badge variant="outline" className="text-sm font-normal bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
          <Shield className="w-3 h-3 mr-1" />
          C4E Insider
        </Badge>
      )}
    </div>
  );
}