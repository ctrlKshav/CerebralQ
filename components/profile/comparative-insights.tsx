"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy } from "lucide-react"
import { motion } from "framer-motion"

interface ComparativeInsightsProps {
  personalityType: string
  cognitivePercentile: {
    verbal: number
    numerical: number
    abstract: number
    spatial: number
    memory: number
  }
  globalRanking: number
}

export default function ComparativeInsights({
  personalityType,
  cognitivePercentile,
  globalRanking,
}: ComparativeInsightsProps) {
  // Mock personality distribution data
  const personalityDistribution = {
    INFP: 4.4,
    INTJ: 2.1,
    ENFJ: 2.5,
    ISFP: 8.8,
    ESFJ: 12.3,
    // Add more as needed
  }

  return (
    <section className="space-y-8">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold"
      >
        Comparative Insights
      </motion.h2>

      {/* Global Ranking - As a header card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3 }}
      >
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-background overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center">
              <div className="bg-primary/10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-4 md:w-fit">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-base font-medium text-muted-foreground">Global Ranking</p>
                  <p className="text-4xl md:text-5xl font-bold">Top {globalRanking}%</p>
                </div>
              </div>
              <div className="p-6 md:p-8 text-center md:text-left flex-1">
                <h3 className="text-xl md:text-2xl font-medium mb-2">Performance Summary</h3>
                <p className="text-base text-muted-foreground max-w-2xl">
                  Your cognitive performance places you in the top {globalRanking}% globally, 
                  reflecting exceptional abilities in abstract reasoning and memory recall.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Personality Distribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card className="h-full border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Personality Distribution</CardTitle>
              <CardDescription className="text-base">How common is this personality type?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-lg">{personalityType}</span>
                  <span className="text-base">
                    {personalityDistribution[personalityType as keyof typeof personalityDistribution] || 0}% of
                    population
                  </span>
                </div>

                <div className="h-10 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                    style={{
                      width: `${personalityDistribution[personalityType as keyof typeof personalityDistribution] || 0}%`,
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  {Object.entries(personalityDistribution)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 4)
                    .map(([type, percentage]) => (
                      <div
                        key={type}
                        className={`p-3 rounded-md ${type === personalityType ? "bg-primary/20" : "bg-muted"}`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-base">{type}</span>
                          <span className="text-sm">{percentage}%</span>
                        </div>
                        <div className="h-2 bg-background/50 rounded-full mt-2">
                          <div
                            className={`h-full rounded-full ${type === personalityType ? "bg-primary" : "bg-primary/30"}`}
                            style={{ width: `${percentage * 5}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Cognitive Percentile Matrix */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <Card className="h-full border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Cognitive Percentile Matrix</CardTitle>
              <CardDescription className="text-base">Performance across cognitive domains</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                {Object.entries(cognitivePercentile).map(([domain, percentile]) => (
                  <div key={domain} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="capitalize text-base font-medium">{domain}</span>
                      <span className="text-base">{percentile}th percentile</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full"
                        style={{ width: `${percentile}%` }}
                      />
                    </div>
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

