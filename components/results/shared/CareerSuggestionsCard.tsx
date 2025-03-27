"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
} from "@/components/ui/tooltip-hybrid";
import { CareerPath, CareerSuggestion, MBTITrait } from "@/types/tests/mbti";
// Add this near your imports
import { Info, ChevronDown } from "lucide-react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface CareerSuggestionsCardProps {
  careerSuggestions?: CareerSuggestion[];
  className?: string;
}

export default function CareerSuggestionsCard({
  careerSuggestions ,
  className = "",
}: CareerSuggestionsCardProps) {
  const careerData = careerSuggestions
  const isMobile = useMediaQuery("(max-width: 768px)");

  const getCareerImage = (title: string) => {
    const images: Record<string, string> = {
      "Business Management":
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      Entrepreneurship:
        "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=80",
      Law: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      Engineering:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    };

    return (
      images[title] ||
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
    );
  };


  const getTraitFullName = (trait: MBTITrait) => {
    const names: Record<MBTITrait, string> = {
      E: "Extraversion",
      I: "Introversion",
      S: "Sensing",
      N: "Intuition",
      T: "Thinking",
      F: "Feeling",
      J: "Judging",
      P: "Perceiving",
    };
    return names[trait];
  };

  return (
    <div className={`${className} py-12  mx-auto`}>
      {/* Add section header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
            Career Suggestions
          </h2>
        </motion.div>

        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
          These career paths naturally complement your personality traits and
          abilities, offering environments where you're likely to thrive and
          find fulfillment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 ">
        {careerData?.map((suggestion, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border bg-card h-full flex flex-col hover:shadow-xl transition-all duration-300">
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                  src={getCareerImage(suggestion.title)}
                  alt={suggestion.title}
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
                      suggestion.matchPercentage >= 90
                        ? "bg-green-500/20 text-green-600"
                        : suggestion.matchPercentage >= 80
                          ? "bg-blue-500/20 text-blue-600"
                          : "bg-orange-500/20 text-orange-600"
                    }`}
                  >
                    {suggestion.matchPercentage}% Match
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 md:p-7 flex-grow flex flex-col">
                <h3 className="font-bold text-2xl tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {suggestion.title}
                </h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {suggestion.description}
                </p>
                {suggestion.qualityMatches && suggestion.qualityMatches.length > 0 && (
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium mb-3 text-muted-foreground flex items-center  gap-4 ">
                      <span className="flex-none">Your Matching Traits</span>
                      <span className="inline-block w-full h-px bg-border flex-grow" />
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      <TooltipProvider delayDuration={100}>
                        {suggestion.qualityMatches.map((quality, i) => (
                          <HybridTooltip key={i}>
                            <HybridTooltipTrigger asChild>
                              <div
                                className={`inline-flex items-center gap-1.5 p-1.5 rounded-md bg-muted hover:bg-opacity-70 transition-colors relative w-fit whitespace-nowrap`}
                              >
                                
                                <span className="text-xs font-medium">
                                  {quality.title}
                                </span>

                                {isMobile && (
                                  <Info className="h-3 w-3 ml-0.5 opacity-50 shrink-0" />
                                )}
                              </div>
                            </HybridTooltipTrigger>
                            <HybridTooltipContent
                              side="top"
                              className="max-w-[280px] p-4 text-sm"
                            >
                              <p className="font-medium">
                                {quality.title}
                              </p>
                              <p className="mt-1.5">
                                {quality.description}
                              </p>
                            </HybridTooltipContent>
                          </HybridTooltip>
                        ))}
                      </TooltipProvider>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
