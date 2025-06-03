import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LikertScale } from "./LikertScale";
import { TestQuestion } from "@/types/tests/testQuestions";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
import Icon from "@/components/Icon";
import { MBTIResponse } from "@/schema/mbti";

interface QuestionCardProps {
  question: TestQuestion;
  currentSectionId: number;
}

export function QuestionCard({
  question,
  currentSectionId,
}: QuestionCardProps) {
  const { setValue } = useFormContext<MBTIResponse>();
  const iconClass = question.iconColor || "text-primary";

  useEffect(() => {
    setValue(
      `answers.${question.id}.dimension`,
      question.dimension as MBTIResponse["answers"][string]["dimension"]
    );
  }, []);

  return (
    <Card
      className={`w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-lg question-card mb-16 scroll-mt-24`}
      data-question-id={question.id}
    >
      <CardHeader className="space-y-3 p-8">
        <div className="flex items-center gap-4">
          {question.icon && (
            <Icon
              iconName={question.icon}
              className={iconClass + " h-7 w-7 hidden lg:block"}
            />
          )}
          <h2 className="text-2xl font-semibold leading-tight">
            {question.text}
          </h2>
        </div>
        {question.description && (
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {question.description}
          </p>
        )}
      </CardHeader>
      <CardContent className="p-8 pt-0">
        {/* Likert scale for score */}
        <LikertScale
          name={`answers.${question.id}.selectedScore`}
          currentSectionId={currentSectionId}
        />
      </CardContent>
    </Card>
  );
}
