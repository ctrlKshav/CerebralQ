"use client";
import { format } from "date-fns";
import { Calendar, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExtendedUserTestHistory } from ".";

interface TestCardProps {
  result: ExtendedUserTestHistory;
}

export default function TestCard({ result }: TestCardProps) {

  const dateObj = new Date((result.created_at ?? Date.now())).toLocaleDateString()
  // Get badge color classes based on personality type
  const getBadgeClasses = (type: string, index: number) => {
    switch (type) {
      case "INFJ":
        return index % 2 === 0
          ? "bg-violet-100/80 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 border-violet-200 dark:border-violet-700/20"
          : "bg-purple-100/80 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border-purple-200 dark:border-purple-700/20";
      case "ENFP":
        return index % 2 === 0
          ? "bg-amber-100/80 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-200 dark:border-amber-700/20"
          : "bg-orange-100/80 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 border-orange-200 dark:border-orange-700/20";
      case "INTJ":
        return index % 2 === 0
          ? "bg-blue-100/80 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-700/20"
          : "bg-indigo-100/80 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-700/20";
      case "ENTP":
        return index % 2 === 0
          ? "bg-emerald-100/80 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/20"
          : "bg-teal-100/80 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 border-teal-200 dark:border-teal-700/20";
      default:
        return "bg-gray-100/80 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-700/20";
    }
  };

  const formattedDescription =
    result.test_types?.description || "No description";

  return (
    <Card className="group relative overflow-hidden border-0 bg-background/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ease-out w-full min-h-[350px] hover:scale-[1.01] dark:border-white/5 border-black/10 shadow-lg">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${result.color} dark:opacity-15 opacity-20 group-hover:opacity-25 transition-opacity duration-500`}
      ></div>
      <div
        className="absolute inset-0 dark:opacity-10 opacity-20 group-hover:opacity-25 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${result.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="absolute inset-0 bg-white/25 dark:bg-black/30"></div>

      <CardHeader className="relative z-10 pb-6 pt-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              {/* Personality Type */}
              <div
                className={`text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${result.color}`}
              >
                {result.raw_score && typeof result.raw_score === "object"
                  ? (result.raw_score as any)["personalityType"]
                  : "Unknown"}
              </div>

              {/* Personality Alias */}
              <h3 className="text-2xl font-semibold dark:text-white/90 text-black/80">
                {result.alias}
              </h3>
            </div>

            {/* Date Badge */}
            <Badge
              variant="outline"
              className="text-sm text-muted-foreground flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 shadow-md border dark:border-white/10 border-black/10 whitespace-nowrap"
            >
              <Calendar className="h-4 w-4" />
              {dateObj}
            </Badge>
          </div>

          {/* Trait Badges */}
          <div className="flex flex-wrap gap-2">
            {result.traits.map((trait, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`${getBadgeClasses(
                  result.raw_score && typeof result.raw_score === "object"
                    ? (result.raw_score as any)["personalityType"]
                    : "Unknown",
                  index
                )} px-4 py-1.5 border-[0.5px] rounded-full shadow-sm backdrop-blur-sm
                  hover:scale-105 transition-all duration-300`}
              >
                {trait}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 px-8 py-2">
        <p className="text-base text-muted-foreground leading-relaxed">
          {formattedDescription}
        </p>
      </CardContent>

      <CardFooter className="relative z-10 pt-4 px-8 pb-10 flex justify-center md:justify-end">
        <Button
          className={`relative overflow-hidden group/button bg-gradient-to-r ${result.color} text-white shadow-lg hover:shadow-xl border-0 px-6 py-6`}
        >
          <span className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-10 transition-opacity"></span>
          <span className="flex items-center gap-2">
            View Detailed Report
            <ExternalLink className="w-4 h-4" />
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
}
