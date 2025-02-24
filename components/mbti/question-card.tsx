import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LikertScale } from "./likert-scale";
import { TestQuestion } from "@/types/tests/mbti";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import Icon from "@/components/Icon";

interface QuestionCardProps {
  question: TestQuestion;
  name: string;
}

export function QuestionCard({ question, name }: QuestionCardProps) {
  const { formState: { errors }, setValue } = useFormContext<{ answers: Record<string, any> }>();
  const iconClass = question.iconColor || "text-blue-500";
  const error = errors.answers?.[question.id];
  
  useEffect(() => {
    setValue(`answers.${question.id}.dimension`, question.dimension);
  }, [])

  return (
    <Card className={`w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-lg question-card mb-8
      ${error ? 'ring-2 ring-red-500' : ''}`}>
      <CardHeader className="space-y-3 p-8">
        <div className="flex items-center gap-4">
          {question.icon && <Icon iconName={question.icon} className={iconClass + " h-6 sm:h-8 w-6 sm:w-8"} />}
          <h2 className="text-2xl font-semibold leading-tight">{question.text}</h2>
        </div>
        {question.description && (
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {question.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="p-8 pt-0">
        {/* Likert scale for score */}
        <LikertScale name={`answers.${question.id}.selectedScore`} />
        {error && (
          <p className="mt-2 text-sm text-red-500">
            {error.message?.toString()}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
