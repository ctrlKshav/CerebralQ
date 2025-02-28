"use client"

import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip, ReferenceLine } from "recharts"

interface TrendSparklineProps {
  data: Array<{ date: string; score: number }>
}

export function TrendSparkline({ data }: TrendSparklineProps) {
  if (data.length < 2) {
    return (
      <div className="flex items-center justify-center h-full text-sm text-muted-foreground">
        Not enough data to display trend
      </div>
    )
  }

  // Calculate average score for reference line
  const avgScore = data.reduce((sum, item) => sum + item.score, 0) / data.length

  // Format data for the chart
  const chartData = data.map((item) => ({
    date: new Date(item.date).toLocaleDateString(),
    score: item.score,
  }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
        <defs>
          <linearGradient id="scoreGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <YAxis hide domain={["dataMin - 5", "dataMax + 5"]} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg bg-background border px-3 py-2 shadow-sm">
                  <p className="text-sm font-medium">Score: {payload[0].value}</p>
                  <p className="text-xs text-muted-foreground">{payload[0].payload.date}</p>
                </div>
              )
            }
            return null
          }}
        />
        <ReferenceLine y={avgScore} stroke="hsl(var(--muted-foreground) / 0.5)" strokeDasharray="3 3" />
        <Line
          type="monotone"
          dataKey="score"
          stroke="hsl(var(--primary))"
          strokeWidth={2}
          dot={{
            stroke: "hsl(var(--primary))",
            fill: "hsl(var(--background))",
            strokeWidth: 2,
            r: 4,
          }}
          activeDot={{
            stroke: "hsl(var(--primary))",
            fill: "hsl(var(--primary))",
            strokeWidth: 2,
            r: 6,
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

