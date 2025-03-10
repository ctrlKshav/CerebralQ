"use client";

import { Trophy, Award, Clock, Star } from "lucide-react";

interface AssessmentProgressProps {
  tests_taken: number;
  last_test_date: string;
}

export function AssessmentProgress({
  tests_taken,
  last_test_date,
}: AssessmentProgressProps) {
  const totalTests = 20;
  const progress = (tests_taken / totalTests) * 100;
  const levels = [
    { milestone: 5, title: "Novice Explorer", color: "from-blue-500" },
    { milestone: 10, title: "Cognitive Adept", color: "from-purple-500" },
    { milestone: 15, title: "Mind Master", color: "from-yellow-500" },
    { milestone: 20, title: "Elite Analyst", color: "from-emerald-500" },
  ];

  const currentLevel = levels.reduce((acc, level) => {
    if (tests_taken >= level.milestone) return level;
    return acc;
  }, levels[0]);

  const nextLevel =
    levels.find((level) => level.milestone > tests_taken) ||
    levels[levels.length - 1];

  return (
    <div className="bg-slate-900/30 rounded-xl p-6 backdrop-blur-sm border border-slate-800/50 hover:bg-slate-900/40 transition-all">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold text-slate-100">
          Assessment Journey
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Award className="h-4 w-4" />
            <span className="text-sm">Current Level</span>
          </div>
          <p className="text-2xl font-bold bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
            {currentLevel.title}
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="h-4 w-4" />
            <span className="text-sm">Last Assessment</span>
          </div>
          <p className="text-lg text-slate-200">
            {new Date(last_test_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="relative pt-2">
        <div className="flex mb-2 items-center justify-between">
          <div className="flex items-center">
            <span className="text-3xl font-bold text-primary mr-2">
              {tests_taken}
            </span>
            <span className="text-sm text-slate-400">tests completed</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-slate-400">Next Level:</div>
            <div className="text-sm font-semibold text-slate-200">
              {nextLevel.title}
            </div>
          </div>
        </div>

        <div className="h-4 bg-slate-800/50 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full bg-primary transition-all duration-500`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-xs text-slate-400 mt-4 flex items-center gap-2">
          <Star className="h-3 w-3 text-primary" />
          {tests_taken >= totalTests
            ? "Congratulations! You've reached Elite Analyst status!"
            : `${totalTests - tests_taken} more tests until Elite Analyst`}
        </p>
      </div>
    </div>
  );
}
