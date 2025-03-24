import React from "react";
import { Brain, PersonStanding } from "lucide-react";
import { CognitiveMetricsType } from "@/types/supabase/user-profile";

export function CognitiveMetrics({
  mbti_personality_type,
}: CognitiveMetricsType) {
  return (
    <div className="bg-card/80 dark:bg-card/30 rounded-xl p-6 backdrop-blur-sm border border-border shadow-sm hover:bg-accent/10 dark:hover:bg-card/40 transition-all">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-foreground">
          Personality Type
        </h3>
      </div>
      
      <div className="flex flex-col  p-4">
        <span className="text-3xl font-bold text-purple-600 dark:text-purple-500">
          {mbti_personality_type ? mbti_personality_type : "N/A"}
        </span>
      </div>
    </div>
  );
}