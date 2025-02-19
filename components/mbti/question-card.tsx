import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LikertScale } from "./likert-scale";
import { BinaryChoice } from "./binary-choice";
import { type Question } from "@/lib/mbti-questions";

interface QuestionCardProps {
  question: Question;
  name: string;
}

export function QuestionCard({ question, name }: QuestionCardProps) {
  return (
    <Card className="w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-3">
          {question.icon}
          <h2 className="text-xl font-semibold">{question.text}</h2>
        </div>
        {question.description && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {question.description}
          </p>
        )}
      </CardHeader>
      <CardContent>
        {question.type === 'likert' ? (
          <LikertScale name={name} />
        ) : (
          <BinaryChoice 
            name={name} 
            options={question.options} 
          />
        )}
      </CardContent>
    </Card>
  );
}
