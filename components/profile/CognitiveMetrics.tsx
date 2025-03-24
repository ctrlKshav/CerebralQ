"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, LineChart, Users, Activity, Star } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Import Recharts components
import { IQProgressRing } from "./charts/IQProgressRing"
import { TrendSparkline } from "./charts/TrendSparkline"

interface CognitiveMetricsProps {
  iqScore: {
    score: number
    percentile: number
    populationAverage: number
    history: Array<{ date: string; score: number }>
  }
  bigFiveTraits: {
    openness: number
    conscientiousness: number
    extraversion: number
    agreeableness: number
    neuroticism: number
  }
  testHistory: Array<{
    id: string
    type: string
    date: string
    score: number
    details: Record<string, any>
  }>
}

export default function CognitiveMetrics({ iqScore, bigFiveTraits, testHistory }: CognitiveMetricsProps) {
  // Define cognitive skills with corresponding icons
  const cognitiveSkills = [
    { name: "Verbal", value: 92, icon: <Users className="w-5 h-5" /> },
    { name: "Numerical", value: 88, icon: <Activity className="w-5 h-5" /> },
    { name: "Abstract", value: 94, icon: <Brain className="w-5 h-5" /> },
    { name: "Spatial", value: 85, icon: <LineChart className="w-5 h-5" /> },
    { name: "Memory", value: 90, icon: <Star className="w-5 h-5" /> },
  ];

  return (
    <section className="space-y-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold"
      >
        Cognitive Metrics
      </motion.h2>

      <div className="grid gap-6">
        {/* IQ Card */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Brain className="h-6 w-6 text-primary" />
                IQ Pinnacle
              </CardTitle>
              <CardDescription className="text-base">Cognitive performance relative to population</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-48 h-48">
                  <IQProgressRing score={iqScore.score} percentile={iqScore.percentile} />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="text-center md:text-left">
                    <p className="text-base text-muted-foreground">Population Average: {iqScore.populationAverage}</p>
                  </div>

                  <div className="w-full h-24">
                    <TrendSparkline data={iqScore.history} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cognitive Skills Analysis */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="border-primary/20">
            <CardHeader className="bg-primary-50 dark:bg-primary/10 pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-primary" />
                  Cognitive Skills Analysis
                </CardTitle>
                <CardDescription>Breakdown of cognitive abilities by domain</CardDescription>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-primary-foreground"></div>
                <span>Percentile Ranking</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
                {cognitiveSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative w-24 h-24">
                      {/* Background circle */}
                      <div className="absolute inset-0 rounded-full border-4 border-muted/30" />
                      
                      {/* Score circle */}
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="44"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          className={`text-primary/80`}
                          strokeDasharray={`${skill.value * 2.75} 400`}
                        />
                      </svg>
                      
                      {/* Icon and score */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="p-1.5 rounded-full bg-primary/10 mb-1">
                          {skill.icon}
                        </div>
                        <span className="text-lg font-bold">{skill.value}%</span>
                      </div>
                    </div>
                    <span className="mt-2 text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
              
             
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

