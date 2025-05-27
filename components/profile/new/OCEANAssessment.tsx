import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Briefcase } from "lucide-react";
import { OCEANResult } from "@/types/profileTypes";
import SectionHeader from "./shared/SectionHeader";

interface OCEANAssessmentProps {
  result: OCEANResult;
}

export default function OCEANAssessment({ result }: OCEANAssessmentProps) {
  return (
    <section className="bg-background rounded-xl shadow-md p-8">
      <SectionHeader
        title="OCEAN Assessment"
        description="Personality Assessment"
        updatedAt={result.updatedAt}
        calendar={true}
      />  

      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <div className="flex-shrink-0 bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 w-full md:w-auto text-center">
            <span className="block text-4xl font-bold text-violet-600 dark:text-violet-400">
              {result.type}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {result.title}
            </span>
          </div>

          <div className="flex-1">
            <p className="text-gray-700 dark:text-gray-300">
              {result.description}
            </p>
          </div>
        </div>

        {/* Bar chart visualization - In a real implementation, this would use a proper charting library */}
        <div className="mb-6">
          <svg
            className="w-full h-64"
            viewBox="0 0 400 200"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background grid */}
            <g>
              <line
                x1="100"
                y1="20"
                x2="100"
                y2="180"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <line
                x1="150"
                y1="20"
                x2="150"
                y2="180"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="2"
              />
              <line
                x1="200"
                y1="20"
                x2="200"
                y2="180"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <line
                x1="250"
                y1="20"
                x2="250"
                y2="180"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="2"
              />
              <line
                x1="300"
                y1="20"
                x2="300"
                y2="180"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <line
                x1="350"
                y1="20"
                x2="350"
                y2="180"
                stroke="#e2e8f0"
                strokeWidth="1"
                strokeDasharray="2"
              />

              <line
                x1="50"
                y1="40"
                x2="350"
                y2="40"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <line
                x1="50"
                y1="80"
                x2="350"
                y2="80"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <line
                x1="50"
                y1="120"
                x2="350"
                y2="120"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
              <line
                x1="50"
                y1="160"
                x2="350"
                y2="160"
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            </g>

            {/* Ocean bars */}
            <g>
              <rect
                x="70"
                y={160 - result.traits.openness.score * 1.2}
                width="30"
                height={result.traits.openness.score * 1.2}
                fill="#8b5cf6"
              />
              <rect
                x="130"
                y={160 - result.traits.conscientiousness.score * 1.2}
                width="30"
                height={result.traits.conscientiousness.score * 1.2}
                fill="#10b981"
              />
              <rect
                x="190"
                y={160 - result.traits.extraversion.score * 1.2}
                width="30"
                height={result.traits.extraversion.score * 1.2}
                fill="#3b82f6"
              />
              <rect
                x="250"
                y={160 - result.traits.agreeableness.score * 1.2}
                width="30"
                height={result.traits.agreeableness.score * 1.2}
                fill="#f59e0b"
              />
              <rect
                x="310"
                y={160 - result.traits.neuroticism.score * 1.2}
                width="30"
                height={result.traits.neuroticism.score * 1.2}
                fill="#ef4444"
              />
            </g>

            {/* Labels */}
            <g className="fill-gray-700 dark:fill-gray-300 text-sm">
              <text x="85" y="180" textAnchor="middle">
                O
              </text>
              <text x="145" y="180" textAnchor="middle">
                C
              </text>
              <text x="205" y="180" textAnchor="middle">
                E
              </text>
              <text x="265" y="180" textAnchor="middle">
                A
              </text>
              <text x="325" y="180" textAnchor="middle">
                N
              </text>
            </g>

            {/* Percentages */}
            <g className="fill-gray-700 dark:fill-gray-300 text-xs">
              <text
                x="85"
                y={155 - result.traits.openness.score * 1.2}
                textAnchor="middle"
              >
                {result.traits.openness.score}%
              </text>
              <text
                x="145"
                y={155 - result.traits.conscientiousness.score * 1.2}
                textAnchor="middle"
              >
                {result.traits.conscientiousness.score}%
              </text>
              <text
                x="205"
                y={155 - result.traits.extraversion.score * 1.2}
                textAnchor="middle"
              >
                {result.traits.extraversion.score}%
              </text>
              <text
                x="265"
                y={155 - result.traits.agreeableness.score * 1.2}
                textAnchor="middle"
              >
                {result.traits.agreeableness.score}%
              </text>
              <text
                x="325"
                y={155 - result.traits.neuroticism.score * 1.2}
                textAnchor="middle"
              >
                {result.traits.neuroticism.score}%
              </text>
            </g>
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center text-sm mt-4">
            <div>
              <div className="font-medium text-purple-600 dark:text-purple-400">
                O
              </div>
              <div>Openness</div>
              <div className="font-bold">{result.traits.openness.level}</div>
            </div>
            <div>
              <div className="font-medium text-green-600 dark:text-green-400">
                C
              </div>
              <div>Conscientiousness</div>
              <div className="font-bold">
                {result.traits.conscientiousness.level}
              </div>
            </div>
            <div>
              <div className="font-medium text-blue-600 dark:text-blue-400">
                E
              </div>
              <div>Extraversion</div>
              <div className="font-bold">
                {result.traits.extraversion.level}
              </div>
            </div>
            <div>
              <div className="font-medium text-yellow-600 dark:text-yellow-400">
                A
              </div>
              <div>Agreeableness</div>
              <div className="font-bold">
                {result.traits.agreeableness.level}
              </div>
            </div>
            <div>
              <div className="font-medium text-red-600 dark:text-red-400">
                N
              </div>
              <div>Neuroticism</div>
              <div className="font-bold">{result.traits.neuroticism.level}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Insights</h3>
            <ul className="space-y-3">
              {result.insights.map((insight, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 flex items-center justify-center mr-3 mt-0.5">
                    <Lightbulb className="h-3 w-3" />
                  </span>
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Career Compatibility</h3>
            <ul className="space-y-3">
              {result.careerMatches.map((career, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 flex items-center justify-center mr-3 mt-0.5">
                    <Briefcase className="h-3 w-3" />
                  </span>
                  <div>
                    <div className="font-medium">{career.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {career.match}% match
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </section>
  );
}
