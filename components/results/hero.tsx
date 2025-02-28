"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, Download } from "lucide-react";
import { motion } from "framer-motion";
import { PersonalityDescription } from "@/types/tests/mbti";

interface HeroProps {
  personalityType: string;
  personalityAlias: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
}

export function Hero({
  personalityType,
  personalityAlias,
  personalityDescription,
  completionDate,
}: HeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <Badge variant="outline" className="px-3 py-1 text-sm">
        Your Personality Type
      </Badge>
      <div className="space-y-2">
        <h1 className="text-6xl font-bold tracking-tighter">
          {personalityType}
        </h1>
        <h2 className="text-2xl font-medium text-primary">
          {personalityAlias}
        </h2>
      </div>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {personalityDescription.description}
      </p>
      <div className="text-sm text-muted-foreground">
        <p>Completed on {completionDate}</p>
      </div>
      <div className="flex justify-center gap-3 pt-2">
        <Button variant="outline" size="sm">
          <Share2 className="w-4 h-4 mr-2" />
          Share Results
        </Button>
        <Button variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </Button>
      </div>
    </motion.section>
  );
}
