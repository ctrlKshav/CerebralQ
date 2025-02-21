import { Progress } from "@/components/ui/progress";
import * as Icons from "lucide-react";

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
  variant?: 'full' | 'compact';
}

export function ProgressTracker({ 
  currentSection, 
  sections,
  onSectionClick,
  variant = 'full'
}: ProgressTrackerProps) {
  const totalSections = sections.length;
  const progress = (currentSection / totalSections) * 100;

  return variant === 'compact' ? (
    <div className="flex justify-between items-center gap-2">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
          key={index}
          // onClick={() => onSectionClick(index + 1)}
          className={`h-2 flex-1 rounded-full transition-all ${
            index + 1 === currentSection
              ? 'bg-primary'
              : index + 1 < currentSection
              ? 'bg-primary/40'
              : 'bg-gray-200 dark:bg-gray-700'
          }`}
        />
      ))}
    </div>
  ) : (
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
        {sections.map((section) => {
          const SectionIcon = (Icons as any)[section.icon];
          return (
            <div
              key={section.id}
              
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors
                ${currentSection > section.id
                  ? 'text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20' 
                  : currentSection === section.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium' 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
            >
              <div className="flex items-center mb-1">
                {SectionIcon && <SectionIcon size={16} className="mr-2" />}
                <span className="font-medium">{section.title}</span>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {section.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}