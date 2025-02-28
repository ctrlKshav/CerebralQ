"use client"

import { motion } from "framer-motion"
import { PersonalityTraits } from "@/components/results/personality-traits"
import type { TraitScores } from "@/types/tests/mbti"
import AboutPersonalityType, { personalityDescriptions } from "./about-personality-type"
import BigFiveConstellation from "./big-five-constellation"

interface PersonalityShowcaseProps {
  personalityType: string;
  traitScores: TraitScores;
  bigFiveTraits: {
    openness: number
    conscientiousness: number
    extraversion: number
    agreeableness: number
    neuroticism: number
  }
}

export default function PersonalityShowcase({ 
  personalityType, 
  traitScores,
  bigFiveTraits 
}: PersonalityShowcaseProps) {
  const typeInfo = personalityDescriptions[personalityType] || {
    title: "Personality Type",
    description: "A detailed analysis of cognitive preferences and behavioral patterns.",
  }

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
          {/* Use the PersonalityTraits component */}
          <PersonalityTraits traitScores={traitScores} />

          {/* About Personality Type Card */}
          <AboutPersonalityType 
            personalityType={personalityType}
            title={typeInfo.title}
            description={typeInfo.description}
          />
          
          {/* Big Five Constellation - added as point #3 */}
          <BigFiveConstellation bigFiveTraits={bigFiveTraits} />
        </div>
      </div>
    </section>
  )
}

