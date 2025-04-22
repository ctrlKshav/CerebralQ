"use client";

import { Badge } from "@/components/ui/badge";
import { Brain, Star, Shield } from "lucide-react";
import InsiderBadge from "@/components/InsiderBadge";

interface UserBadgesProps {
  rank?: string | null;
  isInsider?: boolean | null;
}

export function UserBadges({ rank, isInsider }: UserBadgesProps) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
      <Badge
        variant="default"
        className="text-sm border-none"
      >
        <Brain className="w-3 h-3 mr-1" />
        {rank ? rank?.charAt(0).toUpperCase() + rank?.slice(1).toLowerCase() : "NA"}
      </Badge>
      {isInsider && <InsiderBadge />}
    </div>
  );
}
