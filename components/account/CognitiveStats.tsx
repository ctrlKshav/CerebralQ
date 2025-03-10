import React from "react";
import { Brain, Zap, Activity, BrainCog } from "lucide-react";
import { CongitiveStatsType } from "@/data/account";

export function CognitiveStats({ stats }: { stats: CongitiveStatsType }) {
    return (
      <div className="bg-slate-900/30 rounded-xl p-6 backdrop-blur-sm border border-slate-800/50 hover:bg-slate-900/40 transition-all">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-slate-100">Cognitive Profile</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-400">
              <Zap className="h-4 w-4 text-yellow-500" />
              <span className="text-sm">IQ Score</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-yellow-500">{stats.iq_score}</span>
              <span className="text-sm text-slate-400">points</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-400">
              <BrainCog className="h-4 w-4 text-purple-500" />
              <span className="text-sm">Personality</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-purple-500">{stats.personality_type}</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-400">
              <Activity className="h-4 w-4 text-emerald-500" />
              <span className="text-sm">Processing Speed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-emerald-500">{stats.processing_speed}</span>
              <span className="text-sm text-slate-400">percentile</span>
            </div>
          </div>
        </div>
      </div>
    );
  }