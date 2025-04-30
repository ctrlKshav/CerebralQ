interface SectionAndQuestionCounterProps {
  currentSection: number;
  totalSections: number;
  currentQuestion: number;
  totalQuestions: number;
}

export function SectionAndQuestionCounter({
  currentSection,
  totalSections,
  currentQuestion,
  totalQuestions,
}: SectionAndQuestionCounterProps) {
  return (
    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
      <span>
        Section {currentSection} of {totalSections}
      </span>
      <span>
        Question {currentQuestion} of {totalQuestions}
      </span>
    </div>
  );
}
