"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { PersonalityTraits } from "@/components/results/personality-traits"
import type { TraitScores } from "@/types/tests/mbti"

interface PersonalityShowcaseProps {
  personalityType: string;
  traitScores: TraitScores;
}

// Mock personality type descriptions
const personalityDescriptions: Record<string, { title: string; description: string }> = {
  INFP: {
    title: "The Mediator",
    description:
      "INFPs are imaginative idealists, guided by their own core values and beliefs. They value authenticity and want to be of service to humanity.",
  },
  INTJ: {
    title: "The Architect",
    description:
      "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas.",
  },
  ENFJ: {
    title: "The Protagonist",
    description: "ENFJs are charismatic and inspiring leaders, able to mesmerize their listeners.",
  },
  // Add more as needed
}

export default function PersonalityShowcase({ personalityType, traitScores }: PersonalityShowcaseProps) {
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

      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold"
        >
          Personality Profile
        </motion.h2>

        <div className="space-y-6">
          {/* Use the PersonalityTraits component */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.3 }}
            className="bg-background rounded-lg shadow-sm"
          >
            <PersonalityTraits traitScores={traitScores} />
          </motion.div>

          {/* About Personality Type Card */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">About {personalityType} Personality</CardTitle>
                <CardDescription className="text-lg">{typeInfo.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">{typeInfo.description}</p>

                <div className="mt-6 grid grid-cols-2 gap-6">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h4 className="font-medium text-base">Strengths</h4>
                    <ul className="mt-3 text-base space-y-2">
                      <li>Creative thinking</li>
                      <li>Empathetic understanding</li>
                      <li>Value-driven decisions</li>
                    </ul>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h4 className="font-medium text-base">Growth Areas</h4>
                    <ul className="mt-3 text-base space-y-2">
                      <li>Practical implementation</li>
                      <li>Handling criticism</li>
                      <li>Setting boundaries</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

