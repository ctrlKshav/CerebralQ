import { Card } from "@/components/ui/card";
import { CheckCircle, Calendar, MoreHorizontal } from "lucide-react";
import { MBTIResult } from "@/types/profileTypes";
import SectionHeader from "./shared/SectionHeader";
interface MBTIAssessmentProps {
  result: MBTIResult;
}

export default function MBTIAssessment({ result }: MBTIAssessmentProps) {
  return (
    <section className="bg-background rounded-xl shadow-md p-8">
      {/* Header */}
      <SectionHeader
        updatedAt={result.updatedAt}
        title="MBTI Assessment"
        description="Myers-Briggs Type Indicator"
        calendar={true}
      />

      {/* Main content */}
      <div className="space-y-12">
        {/* Type overview */}
        <div className="flex flex-col mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center shadow-sm border border-blue-100 dark:border-blue-800/30 md:min-w-[220px]">
              <span className="block text-6xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                {result.type}
              </span>
              <span className="text-xl text-blue-800 dark:text-blue-300 font-medium">
                {result.title}
              </span>
            </div>

            <div className="flex-grow bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {result.description}
              </p>
            </div>
          </div>
        </div>

        {/* Characteristics and Cognitive Functions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-5 text-blue-700 dark:text-blue-400">
              Key Characteristics
            </h3>
            <ul className="space-y-3">
              {result.characteristics.map((characteristic, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-blue-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{characteristic}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-5 text-blue-700 dark:text-blue-400">
              Cognitive Functions
            </h3>
            <div className="space-y-5">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-base font-semibold block">
                      {result.cognitiveFunctions.dominant.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {result.cognitiveFunctions.dominant.code} (Dominant)
                    </span>
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {result.cognitiveFunctions.dominant.strength}%
                  </span>
                </div>
                <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${result.cognitiveFunctions.dominant.strength}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-base font-semibold block">
                      {result.cognitiveFunctions.auxiliary.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {result.cognitiveFunctions.auxiliary.code} (Auxiliary)
                    </span>
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {result.cognitiveFunctions.auxiliary.strength}%
                  </span>
                </div>
                <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${result.cognitiveFunctions.auxiliary.strength}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-base font-semibold block">
                      {result.cognitiveFunctions.tertiary.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {result.cognitiveFunctions.tertiary.code} (Tertiary)
                    </span>
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {result.cognitiveFunctions.tertiary.strength}%
                  </span>
                </div>
                <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${result.cognitiveFunctions.tertiary.strength}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-base font-semibold block">
                      {result.cognitiveFunctions.inferior.name}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {result.cognitiveFunctions.inferior.code} (Inferior)
                    </span>
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {result.cognitiveFunctions.inferior.strength}%
                  </span>
                </div>
                <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{
                      width: `${result.cognitiveFunctions.inferior.strength}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MBTI Dimensions */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-400">
            MBTI Dimensions
          </h3>

          <div className="space-y-8">
            <div>
              <div className="grid grid-cols-2 text-sm mb-2">
                <div className="font-medium">Introversion (I)</div>
                <div className="font-medium text-right">Extraversion (E)</div>
              </div>
              <div className="relative h-10 flex items-center">
                <div className="absolute h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div
                  className="absolute h-2 bg-blue-500 rounded-full"
                  style={{ width: `${result.dimensions.ie}%`, left: 0 }}
                ></div>
                <div
                  className="absolute h-8 w-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center text-xs text-white font-bold"
                  style={{ left: `calc(${result.dimensions.ie}% - 16px)` }}
                >
                  {result.dimensions.ie}%
                </div>

                {/* Labels */}
                <div className="absolute top-10 left-0 text-xs text-gray-500">
                  0%
                </div>
                <div className="absolute top-10 left-1/4 text-xs text-gray-500">
                  25%
                </div>
                <div className="absolute top-10 left-1/2 text-xs text-gray-500 -translate-x-1/2">
                  50%
                </div>
                <div className="absolute top-10 left-3/4 text-xs text-gray-500">
                  75%
                </div>
                <div className="absolute top-10 right-0 text-xs text-gray-500">
                  100%
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 text-sm mb-2">
                <div className="font-medium">Sensing (S)</div>
                <div className="font-medium text-right">Intuition (N)</div>
              </div>
              <div className="relative h-10 flex items-center">
                <div className="absolute h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div
                  className="absolute h-2 bg-purple-500 rounded-full"
                  style={{ width: `${result.dimensions.sn}%`, left: 0 }}
                ></div>
                <div
                  className="absolute h-8 w-8 bg-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center text-xs text-white font-bold"
                  style={{ left: `calc(${result.dimensions.sn}% - 16px)` }}
                >
                  {result.dimensions.sn}%
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 text-sm mb-2">
                <div className="font-medium">Thinking (T)</div>
                <div className="font-medium text-right">Feeling (F)</div>
              </div>
              <div className="relative h-10 flex items-center">
                <div className="absolute h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div
                  className="absolute h-2 bg-green-500 rounded-full"
                  style={{ width: `${result.dimensions.tf}%`, left: 0 }}
                ></div>
                <div
                  className="absolute h-8 w-8 bg-green-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center text-xs text-white font-bold"
                  style={{ left: `calc(${result.dimensions.tf}% - 16px)` }}
                >
                  {result.dimensions.tf}%
                </div>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 text-sm mb-2">
                <div className="font-medium">Judging (J)</div>
                <div className="font-medium text-right">Perceiving (P)</div>
              </div>
              <div className="relative h-10 flex items-center">
                <div className="absolute h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div
                  className="absolute h-2 bg-red-500 rounded-full"
                  style={{ width: `${result.dimensions.jp}%`, left: 0 }}
                ></div>
                <div
                  className="absolute h-8 w-8 bg-red-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center text-xs text-white font-bold"
                  style={{ left: `calc(${result.dimensions.jp}% - 16px)` }}
                >
                  {result.dimensions.jp}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
