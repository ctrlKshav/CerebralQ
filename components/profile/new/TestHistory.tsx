import { TestHistoryEntry } from "@/types/profileTypes";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./shared/SectionHeader";

interface TestHistoryProps {
  history: TestHistoryEntry[];
}

export default function TestHistory({ history }: TestHistoryProps) {
  const getStatusBadge = (status: TestHistoryEntry["status"]) => {
    switch (status) {
      case "No Change":
        return (
          <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-3 py-1 rounded-full">
            No change
          </span>
        );
      case "Changed":
        return (
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full">
            Changed
          </span>
        );
      case "New":
        return (
          <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-full">
            First attempt
          </span>
        );
      default:
        return null;
    }
  };

  const getTestTypeColor = (testType: string) => {
    switch (testType) {
      case "MBTI":
        return "bg-blue-500";
      case "DISC":
        return "bg-cyan-500";
      case "OCEAN":
        return "bg-violet-500";
      case "HEXACO":
        return "bg-emerald-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="bg-background rounded-xl shadow-md p-8">
      <SectionHeader
        title="Assessment History"
        description="Your past personality test results"
        calendar={false}
      />

      <div className="space-y-4">
        {history.map((entry) => (
          <div
            key={entry.id}
            className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <div
                  className={`h-3 w-3 rounded-full ${getTestTypeColor(entry.testType)}`}
                ></div>
                <h3 className="text-base font-semibold">
                  {entry.testType} Assessment
                </h3>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {entry.date}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-lg font-medium">{entry.result}</span>

                {entry.previousResult && entry.status === "Changed" && (
                  <span className="text-xs text-gray-500 dark:text-gray-400 inline-flex items-center">
                    <ArrowUpRight className="mr-0.5 h-3 w-3" />
                    from {entry.previousResult}
                  </span>
                )}
              </div>

              <div>{getStatusBadge(entry.status)}</div>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              {entry.testType === "MBTI" && "Personality type assessment"}
              {entry.testType === "DISC" && "Behavioral assessment"}
              {entry.testType === "OCEAN" && "Big Five personality traits"}
              {entry.testType === "HEXACO" &&
                "Six-dimensional personality structure"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
