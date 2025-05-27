import { TestResultSummary } from "@/types/profileTypes";
import { PieChart } from "lucide-react";

interface ResultsSummaryProps {
  results: TestResultSummary[];
}

export default function ResultsSummary({ results }: ResultsSummaryProps) {
  const getResultStyles = (index: number) => {
    const styles = [
      {
        textColor: 'text-primary',
        iconColor: 'text-primary',
        icon: <PieChart className="h-5 w-5" />
      },
      {
        textColor: 'text-cyan-600 dark:text-cyan-400',
        iconColor: 'text-cyan-500',
        icon: <PieChart className="h-5 w-5" />
      },
      {
        textColor: 'text-violet-600 dark:text-violet-400',
        iconColor: 'text-violet-500',
        icon: <PieChart className="h-5 w-5" />
      },
      {
        textColor: 'text-emerald-600 dark:text-emerald-400',
        iconColor: 'text-emerald-500',
        icon: <PieChart className="h-5 w-5" />
      },
    ];
    return styles[index % styles.length];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {results.map((result, index) => {
        const styles = getResultStyles(index);
        return (
          <div 
            key={result.type}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-3">
              <div className={styles.iconColor}>
                {styles.icon}
              </div>
              <span className="text-sm font-medium ml-2 text-gray-700 dark:text-gray-300">{result.displayName || result.type}</span>
            </div>
            
            <div className="flex flex-col">
              <span className={`text-3xl font-bold ${styles.textColor} mb-3`}>{result.result}</span>
              
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {index === 0 && "Introverted, Intuitive, Thinking, Judging"}
                {index === 1 && "Dominance & Conscientiousness focused"}
                {index === 2 && "Reserved, Conscientious, Open, Empathetic, Stable"}
                {index === 3 && "Analytical, Conscientious, Honest, Extraverted, Xtravert"}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
