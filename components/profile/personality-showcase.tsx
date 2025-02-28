"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Suspense } from "react"
import PersonalityTraitsFallback from "./personality-traits-fallback"

interface PersonalityShowcaseProps {
  personalityType: string
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

export default function PersonalityShowcase({ personalityType }: PersonalityShowcaseProps) {
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
          className="text-2xl font-bold text-center"
        >
          Personality Profile
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Personality Traits Component (using fallback) */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <Suspense fallback={<div className="h-64 w-full bg-muted/50 animate-pulse rounded-lg"></div>}>
              <PersonalityTraitsFallback personalityType={personalityType} />
            </Suspense>
          </motion.div>

          {/* About Personality Type Card */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>About {personalityType} Personality</CardTitle>
                <CardDescription>{typeInfo.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{typeInfo.description}</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-primary/10 rounded-lg p-3">
                    <h4 className="font-medium text-sm">Strengths</h4>
                    <ul className="mt-2 text-sm space-y-1">
                      <li>Creative thinking</li>
                      <li>Empathetic understanding</li>
                      <li>Value-driven decisions</li>
                    </ul>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3">
                    <h4 className="font-medium text-sm">Growth Areas</h4>
                    <ul className="mt-2 text-sm space-y-1">
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

