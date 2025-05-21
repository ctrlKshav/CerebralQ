import { Trophy, Crown, FileCheck, Award } from "lucide-react";
import { ProficiencyLevel } from "@/types/profileTypes";

interface BadgeDisplayProps {
  proficiencyLevel: ProficiencyLevel;
  isInsider: boolean;
  testCount: number;
}

export default function BadgeDisplay({
  proficiencyLevel,
  isInsider,
  testCount,
}: BadgeDisplayProps) {
  const getBadgeColorsByLevel = (level: ProficiencyLevel) => {
    switch (level) {
      case 'Beginner':
        return {
          bg: 'bg-blue-50 dark:bg-blue-900/20',
          border: 'border-blue-200 dark:border-blue-700',
          icon: 'bg-blue-500',
          text: 'text-blue-800 dark:text-blue-300'
        };
      case 'Intermediate':
        return {
          bg: 'bg-green-50 dark:bg-green-900/20',
          border: 'border-green-200 dark:border-green-700',
          icon: 'bg-green-500',
          text: 'text-green-800 dark:text-green-300'
        };
      case 'Advanced':
        return {
          bg: 'bg-amber-50 dark:bg-amber-900/20',
          border: 'border-amber-200 dark:border-amber-700',
          icon: 'bg-amber-500',
          text: 'text-amber-800 dark:text-amber-300'
        };
      default:
        return {
          bg: 'bg-gray-50 dark:bg-gray-900/20',
          border: 'border-gray-200 dark:border-gray-700',
          icon: 'bg-gray-500',
          text: 'text-gray-800 dark:text-gray-300'
        };
    }
  };

  const proficiencyColors = getBadgeColorsByLevel(proficiencyLevel);
  const proficiencyTitle = `${proficiencyLevel} Analyst`;

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Achievements</h2>
      
      <div className="flex flex-wrap gap-5">
        {/* Proficiency Badge */}
        <div className="flex-1 flex items-center bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm min-w-[280px]">
          <div className={`flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-lg ${proficiencyColors.icon} text-white mr-4`}>
            <Trophy className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{proficiencyTitle}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {proficiencyLevel === 'Beginner' && 'Starting your personality journey'}
              {proficiencyLevel === 'Intermediate' && 'Building self-awareness effectively'}
              {proficiencyLevel === 'Advanced' && 'Mastered psychological insights'}
            </p>
          </div>
        </div>
        
        {/* Insider Badge */}
        {isInsider && (
          <div className="flex-1 flex items-center bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm min-w-[280px]">
            <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-lg bg-violet-500 text-white mr-4">
              <Crown className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">C4E Insider</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Access to exclusive content and advanced reports
              </p>
            </div>
          </div>
        )}
        
        {/* Test Count Badge */}
        <div className="flex-1 flex items-center bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm min-w-[280px]">
          <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-lg bg-primary text-white mr-4">
            <FileCheck className="h-7 w-7" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold">{testCount} Tests Completed</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Continue exploring to unlock deeper insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
