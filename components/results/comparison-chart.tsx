import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
  Label,
  Legend,
} from "recharts";
import { TraitScores } from "@/lib/calculate-mbti";

interface ComparisonChartProps {
  traitScores: TraitScores;
}

// Define dimension trait names for the chart
const dimensionLabels = {
  "E-I": { left: "Extraversion (E)", right: "Introversion (I)" },
  "S-N": { left: "Sensing (S)", right: "Intuition (N)" },
  "T-F": { left: "Thinking (T)", right: "Feeling (F)" },
  "J-P": { left: "Judging (J)", right: "Perceiving (P)" },
};

export const ComparisonChart: React.FC<ComparisonChartProps> = ({ traitScores }) => {
  // Transform the trait scores into chart-friendly data format
  const chartData = Object.entries(traitScores).map(([dimension, scores]) => {
    const labels = dimensionLabels[dimension as keyof typeof dimensionLabels];
    // Split the dimension to get individual letters
    const [left, right] = dimension.split('-');
    
    return {
      dimension,
      leftName: left,
      rightName: right,
      leftLabel: labels.left,
      rightLabel: labels.right,
      leftScore: scores.leftPercentage,
      rightScore: scores.rightPercentage,
      dominant: scores.dominant
    };
  });

  // Custom tooltip to show exact percentages and trait details
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const isLeft = payload[0].dataKey === "leftScore";
      const label = isLeft ? data.leftLabel : data.rightLabel;
      const score = isLeft ? data.leftScore : data.rightScore;
      const isDominant = (isLeft && data.dominant === 'left') || (!isLeft && data.dominant === 'right');

      return (
        <div className="bg-background p-3 border rounded-md shadow-md">
          <p className="font-medium text-base">
            {label} 
            {isDominant && <span className="ml-1 text-primary">(Dominant)</span>}
          </p>
          <p className="text-sm text-muted-foreground">{score.toFixed(1)}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chartData}
        layout="horizontal"
        margin={{ top: 20, right: 30, left: 60, bottom: 40 }}
        barGap={0}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
        <XAxis
          type="category"
          dataKey="dimension"
          tickFormatter={(value) => {
            const [left, right] = value.split('-');
            return `${left} | ${right}`;
          }}
          tick={{ fontSize: 14, fontWeight: 500 }}
        />
        <YAxis
          type="number"
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          verticalAlign="top"
          height={36}
          formatter={(value) => {
            if (value === "leftScore") return "First Letter Trait";
            return "Second Letter Trait";
          }}
        />
        <ReferenceLine y={50} stroke="#666" strokeWidth={1} strokeDasharray="3 3">
          <Label value="50%" position="right" />
        </ReferenceLine>
        <Bar
          dataKey="leftScore"
          name="leftScore"
          fill="hsl(var(--primary))"
          radius={[4, 4, 0, 0]}
          barSize={30}
        />
        <Bar
          dataKey="rightScore"
          name="rightScore"
          fill="hsl(var(--muted))"
          radius={[0, 0, 4, 4]}
          barSize={30}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
