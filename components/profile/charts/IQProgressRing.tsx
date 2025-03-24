"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"

interface IQProgressRingProps {
  score: number
  percentile: number
}

export function IQProgressRing({ score, percentile }: IQProgressRingProps) {
  const data = [
    { name: "Progress", value: percentile },
    { name: "Remaining", value: 100 - percentile },
  ]

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full relative"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="85%"
            outerRadius="100%"
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? "hsl(var(--primary))" : "hsl(var(--muted))"} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Score overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold">{score}</span>
        <span className="text-sm text-muted-foreground">{percentile}th percentile</span>
      </div>
    </motion.div>
  )
}

