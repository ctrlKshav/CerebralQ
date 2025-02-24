import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LikertScale } from "./likert-scale";
import * as Icons from "lucide-react";
import { TestQuestion } from "@/types/tests/mbti";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

interface QuestionCardProps {
  question: TestQuestion;
  name: string;
}

export function QuestionCard({ question, name }: QuestionCardProps) {
  const { formState: { errors }, setValue } = useFormContext<{ answers: Record<string, any> }>();
  const IconComponent = question.icon ? (Icons as any)[question.icon] : null;
  const iconClass = question.iconColor || "text-blue-500";
  const error = errors.answers?.[question.id];
  
  useEffect(() => {
    setValue(`answers.${question.id}.dimension`, question.dimension);
  }, [])

  return (
    <Card className={`w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-lg question-card mb-8
      ${error ? 'ring-2 ring-red-500' : ''}`}>
      <CardHeader className="space-y-3 p-8">
        <div className="flex items-start gap-4">
          {IconComponent && <IconComponent size={32} className={`${iconClass} h-8 w-8 mt-1`} />}
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
