import { Progress } from "@/components/ui/progress";
import * as Icons from "lucide-react";
import Link from "next/link";

interface Section {
  id: number;
  title: string;
  description: string;
  dimension: string;
  icon: string; // updated sections now include an icon
}

interface ProgressTrackerProps {
  currentSection: number;
  sections: Section[];
  onSectionClick: (sectionId: number) => void;
  variant?: "full" | "compact";
}

export function ProgressTracker({
  currentSection,
  sections,
  onSectionClick,
  variant = "full",
}: ProgressTrackerProps) {
  const totalSections = sections.length;
  const progress = (currentSection / totalSections) * 100;

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="mb-4">
        <Progress
          value={progress}
          className="h-2 bg-gray-200 dark:bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-blue-500"
        />
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Section {currentSection} of {totalSections}
        </div>
      </div>
      <Link href={"/"} className="">
        <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
          <Icons.Home size={20} />
          <span>Back to Home</span>
        </button>
      </Link>
    </div>
  );
}
