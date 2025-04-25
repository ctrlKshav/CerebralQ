"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CareerSuggestion } from "@/types/tests/mbti/personalityDatabase";
import { MatchingTraitBadge } from "./MatchingTraitBadge";

interface CareerCardProps {
  career: CareerSuggestion;
  index: number;
}

const DEFAULT_IMAGE = "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393726/careerSuggestions_utvtsq.jpg";

export function CareerSuggestionCard({ career, index }: CareerCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center"
    >
      <Card className="group overflow-hidden border bg-card h-full w-full flex flex-col hover:shadow-xl transition-all duration-300">
        <div className="relative h-56 md:h-64 overflow-hidden">
          <Image
            src={DEFAULT_IMAGE}
            alt={career.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={index < 4}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-4 right-4">
            <Badge
              variant="secondary"
              className={`py-1.5 px-3 font-medium bg-background/90 backdrop-blur-sm text-sm ${
                career.matchPercentage >= 90
                  ? "bg-green-500/20 text-green-600"
                  : career.matchPercentage >= 80
                    ? "bg-blue-500/20 text-blue-600"
                    : "bg-orange-500/20 text-orange-600"
              }`}
            >
              {career.matchPercentage}% Match
            </Badge>
          </div>
        </div>

        <CardContent className="p-6 md:p-7 flex-grow flex flex-col">
          <h3 className="font-bold text-2xl tracking-tight mb-3 group-hover:text-primary transition-colors">
            {career.title}
          </h3>
          <p className="text-muted-foreground text-base mb-6 leading-relaxed">
            {career.description}
          </p>
          {career.qualityMatches && career.qualityMatches.length > 0 && (
            <div className="">
              <h4 className="text-sm font-medium mb-3 text-muted-foreground flex items-center gap-4">
                <span className="flex-none">Your Matching Traits</span>
                <span className="inline-block w-full h-px bg-border flex-grow" />
              </h4>

              <div className="flex flex-wrap gap-2">
                <TooltipProvider delayDuration={100}>
                  {career.qualityMatches.map((quality, i) => (
                    <MatchingTraitBadge key={i} trait={quality} />
                  ))}
                </TooltipProvider>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
} 