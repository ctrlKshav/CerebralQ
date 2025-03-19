import React from "react";
import { Brain, Zap, Activity, BrainCog, User } from "lucide-react";
import { CognitiveMetricsType } from "@/types/supabase/user-profile";

export function CognitiveMetrics({
  mbti_personality_type,
  iq,
  ocean_type,
}: CognitiveMetricsType) {
  return (
    <div className="bg-card/80 dark:bg-card/30 rounded-xl p-6 backdrop-blur-sm border border-border shadow-sm hover:bg-accent/10 dark:hover:bg-card/40 transition-all">
      <div className="flex items-start gap-2 mb-6">
        <Brain className="h-7 w-7 text-primary" />
        <h3 className="text-xl font-semibold text-foreground">
          Cognitive Profile
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-5 w-5 text-yellow-500" />
            <span className="text-lg">IQ Score</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-yellow-500 dark:text-yellow-400">
              {iq ? (
                <>
                  {iq}
                  <span className="text-sm text-muted-foreground">points</span>
                </>
              ) : (
                "N/A"
              )}
            </span>
          </div>
        </div> */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <User className="h-5 w-5 text-purple-500" />
            <span className="text-lg">Personality Type</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-purple-600 dark:text-purple-500">
              {mbti_personality_type ? mbti_personality_type : "N/A"}
            </span>
          </div>
        </div>
        {/* <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Activity className="h-5 w-5 text-emerald-500" />
            <span className="text-lg">OCEAN Profile</span>
          </div>
          {ocean_type ? (
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Openness</span>
                  <span>{ocean_type.openness}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: `${ocean_type.openness || 0}%` }}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Conscientiousness</span>
                  <span>{ocean_type.conscientiousness}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${ocean_type.conscientiousness || 0}%` }}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Extraversion</span>
                  <span>{ocean_type.extraversion}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{ width: `${ocean_type.extraversion || 0}%` }}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Agreeableness</span>
                  <span>{ocean_type.agreeableness}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-pink-500 rounded-full"
                    style={{ width: `${ocean_type.agreeableness || 0}%` }}
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Neuroticism</span>
                  <span>{ocean_type.neuroticism}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 rounded-full"
                    style={{ width: `${ocean_type.neuroticism || 0}%` }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-emerald-600 dark:text-emerald-500">
                {"N/A"}
              </span>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
}
