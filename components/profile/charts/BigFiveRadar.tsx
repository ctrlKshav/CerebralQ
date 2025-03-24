"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

interface BigFiveRadarChartProps {
  data: {
    openness: number
    conscientiousness: number
    extraversion: number
    agreeableness: number
    neuroticism: number
  }
}

export function BigFiveRadarChart({ data }: BigFiveRadarChartProps) {
  const chartData = [
    {
      trait: "Openness",
      value: data.openness * 100,
      fullMark: 100,
    },
    {
      trait: "Conscientiousness",
      value: data.conscientiousness * 100,
      fullMark: 100,
    },
    {
      trait: "Extraversion",
      value: data.extraversion * 100,
      fullMark: 100,
    },
    {
      trait: "Agreeableness",
      value: data.agreeableness * 100,
      fullMark: 100,
    },
    {
      trait: "Neuroticism",
      value: data.neuroticism * 100,
      fullMark: 100,
    },
  ]

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid gridType="polygon" stroke="hsl(var(--muted-foreground) / 0.2)" />
          <PolarAngleAxis dataKey="trait" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
            stroke="hsl(var(--muted-foreground) / 0.2)"
          />
          <Radar
            name="Personality Traits"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary) / 0.2)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}

