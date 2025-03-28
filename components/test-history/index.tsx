"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Sparkles, Brain, Zap, Flame, ChevronDown } from "lucide-react";
import { format } from "date-fns";

const mockResults = [
  {
    id: 1,
    date: new Date("2024-03-20"),
    type: "INFJ",
    highlight: "Introspective visionary with strong empathetic abilities",
    image: "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=1000",
    color: "from-violet-500 to-purple-500",
    traits: ["Introverted", "Intuitive", "Feeling", "Judging"],
    description: "The Counselor • Imaginative • Determined • Sensitive"
  },
  {
    id: 2,
    date: new Date("2024-03-15"),
    type: "ENFP",
    highlight: "Enthusiastic innovator with creative problem-solving skills",
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=1000",
    color: "from-amber-500 to-orange-500",
    traits: ["Extroverted", "Intuitive", "Feeling", "Perceiving"],
    description: "The Champion • Creative • Enthusiastic • Free-Spirited"
  },
  {
    id: 3,
    date: new Date("2024-03-10"),
    type: "INTJ",
    highlight: "Strategic thinker with exceptional analytical abilities",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000",
    color: "from-blue-500 to-indigo-500",
    traits: ["Introverted", "Intuitive", "Thinking", "Judging"],
    description: "The Architect • Analytical • Strategic • Independent"
  },
  {
    id: 4,
    date: new Date("2024-03-05"),
    type: "ENTP",
    highlight: "Innovative explorer with quick-thinking adaptability",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000",
    color: "from-emerald-500 to-teal-500",
    traits: ["Extroverted", "Intuitive", "Thinking", "Perceiving"],
    description: "The Visionary • Innovative • Versatile • Charismatic"
  }
];

export default function ResultsPage() {
  const [sortBy, setSortBy] = useState("date");

  const sortedResults = [...mockResults].sort((a, b) => {
    if (sortBy === "date") return b.date.getTime() - a.date.getTime();
    return a.type.localeCompare(b.type);
  });

  if (mockResults.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 space-y-4 text-center">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
              <Brain className="w-12 h-12 absolute inset-0 m-auto text-primary" />
            </div>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Begin Your Journey
            </h2>
            <p className="text-muted-foreground">
              Take your first MBTI personality test to unlock insights about yourself.
            </p>
            <button className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg px-4 py-2 font-medium hover:opacity-90 transition-opacity">
              Take the Test
            </button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen mt-24  bg-gradient-to-b from-background to-background/80 overflow-x-hidden">


      <div className="relative w-full ">
        
        <div className="relative w-full px-6 sm:px-8 pt-28 pb-24">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="space-y-7">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-blue-500 to-emerald-500 animate-gradient">
                  Your MBTI Journey
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-3xl leading-relaxed">
                Track your personal growth and discover how your personality evolves over time through the lens of MBTI
              </p>
            </div>
            <div className="relative group">
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

      {/* Results Cards with enhanced styling */}
      <div className="w-full px-6 sm:px-8 py-16 bg-gradient-to-b from-background/90 to-background">
        <div className="space-y-12">
          {sortedResults.map((result) => (
            <Card
              key={result.id}
              className="group relative overflow-hidden border-0 bg-background/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ease-out w-full min-h-[350px] hover:scale-[1.01] dark:border-white/5 border-black/10 shadow-lg"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${result.color} dark:opacity-15 opacity-20 group-hover:opacity-25 transition-opacity duration-500`}
              ></div>
              <div
                className="absolute inset-0 dark:opacity-10 opacity-20 group-hover:opacity-25 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${result.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="absolute inset-0 bg-white/25 dark:bg-black/30"></div>
              <CardHeader className="relative z-10 pb-8 pt-12">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${result.color}`}>
                          {result.type}
                        </div>
                      </div>
                      <p className="text-md dark:text-muted-foreground/90 text-muted-foreground/70">{result.description}</p>
                    </div>
                    <span className="text-sm text-muted-foreground flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border dark:border-white/10 border-black/10">
                      <Calendar className="h-4 w-4" />
                      {format(result.date, "MMM d, yyyy")}
                    </span>
                  </div>
                  <p className="text-2xl font-medium leading-relaxed dark:text-white/90 text-black/80">
                    {result.highlight}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 pt-0 pb-14 px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
                  {result.traits.map((trait, i) => (
                    <div
                      key={trait}
                      className={`relative group/trait overflow-hidden rounded-xl bg-background/70 backdrop-blur-sm border dark:border-white/10 border-black/10 p-6
                        hover:bg-gradient-to-br ${result.color} hover:border-transparent transition-all duration-300
                        hover:scale-105 hover:shadow-xl hover:text-white`}
                    >
                      <div className="flex items-center gap-3">
                        {i === 0 && <Brain className="w-5 h-5" />}
                        {i === 1 && <Sparkles className="w-5 h-5" />}
                        {i === 2 && <Zap className="w-5 h-5" />}
                        {i === 3 && <Flame className="w-5 h-5" />}
                        <span className="font-medium text-md">{trait}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}