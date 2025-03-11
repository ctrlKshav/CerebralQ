"use client";

import { Trophy, Award, Clock, Star } from "lucide-react";

interface AssessmentProgressProps {
  tests_taken?: number;
  last_test_date?: string;
}

export function AssessmentProgress({
  tests_taken = 0,
  last_test_date,
}: AssessmentProgressProps) {
  const totalTests = 20;
  const progress = ((tests_taken || 0) / totalTests) * 100;
  const levels = [
    { milestone: 5, title: "Novice Explorer", color: "from-blue-500" },
    { milestone: 10, title: "Cognitive Adept", color: "from-purple-500" },
    { milestone: 15, title: "Mind Master", color: "from-yellow-500" },
    { milestone: 20, title: "Elite Analyst", color: "from-emerald-500" },
  ];

  const currentLevel = levels.reduce((acc, level) => {
    if ((tests_taken || 0) >= level.milestone) return level;
    return acc;
  }, levels[0]);

  const nextLevel =
    levels.find((level) => level.milestone > (tests_taken || 0)) ||
    levels[levels.length - 1];

  return (
    <div className="bg-card/80 dark:bg-card/30 rounded-xl p-6 backdrop-blur-sm border border-border shadow-sm hover:bg-accent/10 dark:hover:bg-card/40 transition-all">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          Assessment Journey
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Award className="h-4 w-4" />
            <span className="text-sm">Current Level</span>
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
            {currentLevel.title}
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Last Assessment</span>
          </div>
          <p className="text-lg text-foreground">
            {last_test_date ? 
              new Date(last_test_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }) : 
              "No assessments yet"
            }
          </p>
        </div>
      </div>

      <div className="relative pt-2">
        <div className="flex mb-2 items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-primary mr-2">
              {tests_taken || 0}
            </span>
            <span className="text-sm text-muted-foreground">tests completed</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Next Level:</div>
            <div className="text-sm font-semibold text-foreground">
              {nextLevel.title}
            </div>
          </div>
        </div>

        <div className="h-4 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full bg-primary transition-all duration-500`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
          <Star className="h-3 w-3 text-primary" />
          {(tests_taken || 0) >= totalTests
            ? "Congratulations! You've reached Elite Analyst status!"
            : `${totalTests - (tests_taken || 0)} more tests until Elite Analyst`}
        </p>
      </div>
    </div>
  );
}
