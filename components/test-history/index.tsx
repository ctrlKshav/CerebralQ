"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EmptyState from "./empty-state";
import TestCard from "./test-card";
import { mockResults } from "./mock-data";

export default function ResultsPage() {
  const [sortBy, setSortBy] = useState("date");

  const sortedResults = [...mockResults].sort((a, b) => {
    if (sortBy === "date") return b.date.getTime() - a.date.getTime();
    return a.type.localeCompare(b.type);
  });

  if (mockResults.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-screen mt-24 bg-gradient-to-b from-background to-background/80 overflow-x-hidden">
      <div className="relative w-full">
        <div className="relative w-full px-6 sm:px-8 pt-12">
          <div className="flex flex-col gap-12">
            <div className="space-y-7 flex flex-col items-center text-center">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 animate-gradient">
                  Your MBTI Journey
                </span>
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl text-muted-foreground/90 leading-relaxed">
                Track your personal growth and discover how your personality evolves over time through the lens of MBTI
              </p>
            </div>
            <div className="self-end relative group">
              <div className="absolute rounded-xl blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="relative w-[220px] bg-white/8 backdrop-blur-md border-white/15 hover:border-white/30 transition-colors">
                  <SelectValue placeholder="Sort results by..." />
                  <ChevronDown className="w-4 h-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Sort by Date</SelectItem>
                  <SelectItem value="type">Sort by Type</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Cards */}
      <div className="w-full px-6 sm:px-8 py-16 bg-gradient-to-b from-background/90 to-background">
        <div className="space-y-12">
          {sortedResults.map((result) => (
            <TestCard key={result.id} result={result} />
          ))}
        </div>
      </div>
    </div>
  );
}