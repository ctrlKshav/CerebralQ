import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList, CartesianGrid, Cell } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";
import { OceanTraitScores } from "@/types/tests/ocean/traits";


export interface OceanTraitChartProps {
  traitScores: OceanTraitScores | null;
  className?: string;
}

const OceanTraitChart: React.FC<OceanTraitChartProps> = ({ traitScores, className = "" }) => {
  const isMobile = useIsMobile();

  // Transform trait scores into a format suitable for recharts
  const data = [
    {
      trait: "Openness",
      score: traitScores?.openness.percentage || 0,
      fill: "#4f46e5" // indigo
    },
    {
      trait: "Conscientiousness",
      score: traitScores?.conscientiousness.percentage || 0,
      fill: "#ec4899" // pink
    },
    {
      trait: "Extraversion",
      score: traitScores?.extraversion.percentage || 0,
      fill: "#3b82f6" // blue
    },
    {
      trait: "Agreeableness",
      score: traitScores?.agreeableness.percentage || 0,
      fill: "#10b981" // emerald
    },
    {
      trait: "Neuroticism",
      score: traitScores?.neuroticism.percentage || 0,
      fill: "#f59e0b" // amber
    }
  ];

  // For all layouts we'll use the same data structure

  return (
    <Card className={`w-full h-full p-2 shadow-lg bg-card/80 backdrop-blur-sm ${className}`}>
      <CardHeader className="py-4 px-4 md:py-5 md:px-6">
        <div className="text-center space-y-2">
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-primary">
            Your OCEAN Certificate
          </h3>
          <p className="text-muted-foreground font-semibold">Big Five Traits Breakdown</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        {/* Desktop view: Standard vertical chart with trait names on Y-axis */}
        {!isMobile && (
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 20, right: 40, left: 20, bottom: 10 }}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} opacity={0.2} />
              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
                tick={{ fill: 'var(--foreground)' }}
              />
              <YAxis
                type="category"
                dataKey="trait"
                width={140}
                tick={{ fill: 'var(--foreground)', fontSize: 14, fontWeight: 500 }}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, 'Score']}
                labelFormatter={(label: string) => `${label} Trait`}
                contentStyle={{
                  borderRadius: '8px',
                  backgroundColor: 'var(--card)',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  border: '1px solid var(--border)'
                }}
              />
              <Bar
                dataKey="score"
                barSize={40}
                radius={[4, 4, 4, 4]}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
                <LabelList
                  dataKey="score"
                  position="right"
                  formatter={(value: number) => `${value}%`}
                  style={{ fill: 'var(--foreground)', fontWeight: 600 }}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        )}

        {/* Mobile view: Custom layout with trait names above each bar */}
        {isMobile && (
          <div className="space-y-8">
            {data.map((entry, index) => (
              <div key={`trait-${index}`} className="space-y-2">
                {/* Trait name displayed separately above the bar */}
                <div className="text-sm font-medium text-foreground">{entry.trait}</div>

                {/* Individual bar chart for each trait */}
                <ResponsiveContainer width="100%" height={40}>
                  <BarChart
                    data={[entry]}
                    layout="vertical"
                    margin={{ top: 0, right: 40, left: 0, bottom: 0 }}
                  >
                    <XAxis
                      type="number"
                      domain={[0, 100]}
                      hide
                    />
                    <YAxis
                      type="category"
                      dataKey="trait"
                      hide
                    />
                    <Bar
                      dataKey="score"
                      fill={entry.fill}
                      barSize={30}
                      radius={[4, 4, 4, 4]}
                    >
                      <LabelList
                        dataKey="score"
                        position="right"
                        formatter={(value: number) => `${value}%`}
                        style={{ fill: 'var(--foreground)', fontSize: 12, fontWeight: 600 }}
                      />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default OceanTraitChart;
