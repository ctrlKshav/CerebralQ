import React from "react";
import { Brain, Zap, Activity, BrainCog } from "lucide-react";
import { CongitiveStatsType } from "@/data/account";

export function CognitiveStats({ stats }: { stats: CongitiveStatsType }) {
    return (
      <div className="bg-card/80 dark:bg-card/30 rounded-xl p-6 backdrop-blur-sm border border-border shadow-sm hover:bg-accent/10 dark:hover:bg-card/40 transition-all">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Cognitive Profile</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-sm">IQ Score</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-yellow-500 dark:text-yellow-400">{stats.iq_score}</span>
              <span className="text-sm text-muted-foreground">points</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <BrainCog className="h-4 w-4 text-purple-500" />
              <span className="text-sm">Personality</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-purple-600 dark:text-purple-500">{stats.personality_type}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Activity className="h-4 w-4 text-emerald-500" />
              <span className="text-sm">Processing Speed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-500">{stats.processing_speed}</span>
              <span className="text-sm text-muted-foreground">percentile</span>
            </div>
          </div>
        </div>
      </div>
    );
  }