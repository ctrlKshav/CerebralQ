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
    <section className="space-y-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold text-center"
      >
        Comparative Insights
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Personality Distribution */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle>Personality Distribution</CardTitle>
              <CardDescription>How common is this personality type?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{personalityType}</span>
                  <span className="text-sm">
                    {personalityDistribution[personalityType as keyof typeof personalityDistribution] || 0}% of
                    population
                  </span>
                </div>

                <div className="h-8 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                    style={{
                      width: `${personalityDistribution[personalityType as keyof typeof personalityDistribution] || 0}%`,
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4">
                  {Object.entries(personalityDistribution)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 4)
                    .map(([type, percentage]) => (
                      <div
                        key={type}
                        className={`p-2 rounded-md ${type === personalityType ? "bg-primary/20" : "bg-muted"}`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{type}</span>
                          <span className="text-xs">{percentage}%</span>
                        </div>
                        <div className="h-1.5 bg-background/50 rounded-full mt-1.5">
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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Cognitive Percentile Matrix</CardTitle>
              <CardDescription>Performance across cognitive domains</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(cognitivePercentile).map(([domain, percentile]) => (
                  <div key={domain} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="capitalize">{domain}</span>
                      <span className="text-sm font-medium">{percentile}th percentile</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full">
                      <div
                        className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full"
                        style={{ width: `${percentile}%` }}
                      />
                    </div>
                  </div>
                ))}

                {/* Global Ranking Badge */}
                <div className="flex justify-center mt-6">
                  <div className="bg-primary/10 rounded-lg p-4 flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Global Ranking</p>
                      <p className="text-2xl font-bold">Top {globalRanking}%</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

