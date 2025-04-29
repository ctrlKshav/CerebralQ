"use client";

import { motion } from "framer-motion";
import PersonalityTraits from "@/components/results/report/sections/personality-traits";
import type { TraitScores } from "@/types/tests/mbti/traits";
import AboutPersonalityType from "./AboutPersonalityType";
import BigFiveConstellation from "./BigFiveConstellation";
import { personalityDatabase } from "@/data/mbti/oldData/personalityDatabase";

interface PersonalityShowcaseProps {
  personalityType: string;
  traitScores: TraitScores;
  firstname: string | undefined;
}

export default function PersonalityShowcase({
  personalityType,
  traitScores,
  firstname
}: PersonalityShowcaseProps) {
  return (
    <section className="relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#3730a3_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="space-y-8">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold"
        >
          Personality Analysis
        </motion.h2>

        <div className="space-y-10">
          {/* About Personality Type Card */}
          <AboutPersonalityType
            personalityType={personalityType}
            sectionNumber={1}
          />
          {/* Use the PersonalityTraits component */}
          <PersonalityTraits personalityType={personalityType} traitScores={traitScores} sectionNumber={2} firstname={firstname} dashboardView={true} />
        </div>
      </div>
    </section>
  );
}
