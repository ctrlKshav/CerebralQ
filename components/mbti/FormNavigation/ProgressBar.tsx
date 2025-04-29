import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
}

export function ProgressBar({ value, className }: ProgressBarProps) {
  return (
    <div className={cn("w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden", className)}>
      <div
        className="h-full bg-purple-400 dark:bg-purple-500 transition-all duration-700 ease-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
