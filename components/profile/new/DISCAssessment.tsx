import { Card } from "@/components/ui/card";
import { DISCResult } from "@/types/profileTypes";
import { Calendar, CheckCircle, MoreHorizontal } from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

interface DISCAssessmentProps {
  result: DISCResult;
}

export default function DISCAssessment({ result }: DISCAssessmentProps) {
  // Format data for the radar chart
  const chartData = [
    {
      factor: "Dominance",
      value: result.factors.dominance,
      fullMark: 100,
    },
    {
      factor: "Influence",
      value: result.factors.influence,
      fullMark: 100,
    },
    {
      factor: "Steadiness",
      value: result.factors.steadiness,
      fullMark: 100,
    },
    {
      factor: "Conscientiousness",
      value: result.factors.conscientiousness,
      fullMark: 100,
    },
  ];

  return (
    <Card className="card-spacious">
      {/* Header */}
      <div className="flex items-center pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex-shrink-0 w-1.5 h-10 bg-cyan-500 rounded-full mr-4"></div>
        <div>
          <h2 className="text-2xl font-bold">DISC Assessment</h2>
          <p className="text-muted-foreground mt-1">Behavioral Assessment</p>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{result.updatedAt}</span>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <MoreHorizontal className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>
      
      {/* Main content */}
      <div className="space-y-12">
        {/* Type overview with DISC indicators */}
        <div className="flex flex-col md:flex-row gap-8 items-start bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
          <div className="w-full md:w-2/5 flex flex-col">
            <div className="flex items-center mb-4 justify-center md:justify-start">
              <div className="bg-blue-600 dark:bg-blue-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-xl font-bold">D</span>
              </div>
              <div className="bg-yellow-500 dark:bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-xl font-bold">I</span>
              </div>
              <div className="bg-green-600 dark:bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center mr-3 shadow-md">
                <span className="text-xl font-bold">S</span>
              </div>
              <div className="bg-purple-600 dark:bg-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl font-bold">C</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1 text-center md:text-left">{result.type}</h3>
            <h4 className="text-lg text-cyan-700 dark:text-cyan-400 mb-4 text-center md:text-left">{result.title}</h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{result.description}</p>
          </div>
          
          <div className="w-full md:w-3/5 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="70%"
                data={chartData}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              >
                <PolarGrid stroke="#d1d5db" />
                <PolarAngleAxis
                  dataKey="factor"
                  tick={{ fill: "#6b7280", fontSize: 14, fontWeight: 500 }}
                  axisLine={{ stroke: "#d1d5db" }}
                />
                <PolarRadiusAxis
                  angle={90}
                  domain={[0, 100]}
                  tick={{ fill: "#6b7280", fontSize: 10 }}
                  axisLine={false}
                  tickCount={5}
                />
                <Radar
                  name="DISC Score"
                  dataKey="value"
                  stroke="#0e7490"
                  fill="#0e7490"
                  fillOpacity={0.5}
                  dot={{ fill: "#0e7490", stroke: "white", strokeWidth: 2, r: 5 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Factors - Progress Bars */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-5 text-cyan-700 dark:text-cyan-400">DISC Factors</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-base font-medium">Dominance (D)</span>
                <span className="text-base font-medium text-blue-600 dark:text-blue-400">{result.factors.dominance}%</span>
              </div>
              <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{width: `${result.factors.dominance}%`}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-base font-medium">Influence (I)</span>
                <span className="text-base font-medium text-yellow-600 dark:text-yellow-400">{result.factors.influence}%</span>
              </div>
              <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 rounded-full" style={{width: `${result.factors.influence}%`}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-base font-medium">Steadiness (S)</span>
                <span className="text-base font-medium text-green-600 dark:text-green-400">{result.factors.steadiness}%</span>
              </div>
              <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{width: `${result.factors.steadiness}%`}}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-base font-medium">Conscientiousness (C)</span>
                <span className="text-base font-medium text-purple-600 dark:text-purple-400">{result.factors.conscientiousness}%</span>
              </div>
              <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{width: `${result.factors.conscientiousness}%`}}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Characteristics and Strengths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-5 text-cyan-700 dark:text-cyan-400">Key Characteristics</h3>
            <ul className="space-y-3">
              {result.characteristics.map((characteristic, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-cyan-600 dark:text-cyan-500 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{characteristic}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-5 text-cyan-700 dark:text-cyan-400">Workplace Strengths</h3>
            <ul className="space-y-3">
              {result.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-cyan-600 dark:text-cyan-500 mr-3 mt-0.5 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
