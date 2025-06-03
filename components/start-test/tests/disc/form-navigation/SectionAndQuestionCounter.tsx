interface SectionAndQuestionCounterProps {
  currentQuestion: number;
  totalQuestions: number;
}

export function SectionAndQuestionCounter({
  currentQuestion,
  totalQuestions,
}: SectionAndQuestionCounterProps) {
  return (
    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
      <span>
        Question {currentQuestion} of {totalQuestions}
      </span>
    </div>
  );
}
