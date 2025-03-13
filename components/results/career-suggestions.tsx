"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Career {
  title: string;
  match: number;
}

interface CareerSuggestionsProps {
  personalityType: string;
  careerSuggestions: Career[];
  sectionNumber: number;
}

export function CareerSuggestions({
  personalityType,
  careerSuggestions,
  sectionNumber
}: CareerSuggestionsProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
          <span className="text-lg font-medium">{sectionNumber}</span>
        </div>
        <h2 className="text-3xl font-semibold text-foreground">
          Career Recommendations
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-base text-muted-foreground">
                Professional Match
              </span>
              <h3 className="text-3xl font-bold text-primary">
                Career Paths for {personalityType}
              </h3>
            </div>

            <div className="relative aspect-square w-full max-w-[280px] mx-auto">
              <img
                src="/placeholder.svg"
                alt="Career illustration"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
              These career paths tend to leverage your natural strengths and
              align with your personality preferences. Consider these
              options when planning your professional development.
            </p>
          </div>
        </Card>

        <Card className="p-8 space-y-6">
          {careerSuggestions.map((career, index) => (
            <motion.div
              key={career.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg border hover:bg-muted/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium text-lg">{career.title}</div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary">
                    {career.match}%
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Match
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <div className="w-full bg-muted rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${career.match}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}

        
        </Card>
      </div>
    </div>
  );
}
