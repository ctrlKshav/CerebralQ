import { Progress } from "@/components/ui/progress";
import { Sparkles } from "lucide-react";
import { sections } from "@/lib/mbti-questions";

interface ProgressTrackerProps {
  currentSection: number;
  totalSections: number;
  onSectionClick: (sectionId: number) => void;
}

export function ProgressTracker({ 
  currentSection, 
  totalSections,
  onSectionClick 
}: ProgressTrackerProps) {
  const progress = (currentSection / totalSections) * 100;

  return (
    <div className="flex-1">
      <div className="mb-4">
        <Progress 
          value={progress} 
          className="h-2 bg-gray-200 dark:bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-purple-500 [&>div]:to-blue-500" 
        />
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Section {currentSection} of {totalSections}
        </div>
      </div>

      <div className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionClick(section.id)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-colors
              ${currentSection > section.id
                ? 'text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20' 
                : currentSection === section.id
                  ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
          >
            <div className="font-medium mb-1">{section.title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {section.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}