"use client";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { CareerSuggestion } from "@/types/tests/mbti/personalityDatabase";
import { CareerSectionHeader } from "../../shared/CareerSectionHeader";
import { CareerSuggestionCard } from "../../shared/CareerSuggestionCard";

interface CareerSuggestionsCardProps {
  careerSuggestions?: CareerSuggestion[];
  className?: string;
}

export default function CareerSuggestionsCard({
  careerSuggestions,
  className = "",
}: CareerSuggestionsCardProps) {
  const isMobile = useMediaQuery("(max-width: 968px)");

  return (
    <div className={`${className} py-12 mx-auto`}>
      <CareerSectionHeader
        title="Career Suggestions"
        description="These career paths naturally complement your personality traits and abilities, offering environments where you're likely to thrive and find fulfillment."
      />

      <div
        className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-16 items-center justify-center`}
      >
        {careerSuggestions?.map((suggestion, index) => (
          <CareerSuggestionCard key={index} career={suggestion} index={index} />
        ))}
      </div>
    </div>
  );
}
