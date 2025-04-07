"use client";
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
import Link from "next/link";

interface TestCardProps {
  result: ExtendedUserTestHistory;
  onViewDetailedReport: (testHistoryID: string) => void;
}

export default function TestCard({ result, onViewDetailedReport }: TestCardProps) {
  const dateObj = new Date(result.takenAt ?? Date.now()).toLocaleDateString();
  // Get badge color classes based on personality type
  const getBadgeClasses = (type: string, index: number) => {
    switch (type) {
      
      default:
        return "bg-gray-100/80 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300 border-gray-200 dark:border-gray-700/20";
    }
  };


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
                {result.personalityType}
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
                  result.personalityType,
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
          {result.description}
        </p>
      </CardContent>

      <CardFooter className="relative z-10 pt-4 px-8 pb-10 flex justify-center md:justify-end">
        <Link href={"/account/result"}>
          <Button
            className={`relative overflow-hidden group/button bg-gradient-to-r ${result.color} text-white shadow-lg hover:shadow-xl border-0 px-6 py-6`}
            onClick={() => {
              onViewDetailedReport(result.id);
            }}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover/button:opacity-10 transition-opacity"></span>
            <span className="flex items-center gap-2">
              View Detailed Report
              <ExternalLink className="w-4 h-4" />
            </span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
