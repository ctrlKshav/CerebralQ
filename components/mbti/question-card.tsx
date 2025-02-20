import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LikertScale } from "./likert-scale";
import { BinaryChoice } from "./binary-choice";
import * as Icons from "lucide-react";

interface QuestionCardProps {
  question: {
    id: string;
    text: string;
    description?: string;
    type: 'likert' | 'binary';
    icon: string; // icon name
    iconColor?: string; // optional icon color
    options?: Array<{
      value: string;
      label: string;
      description?: string;
    }>;
    dimension: string;
    section: number;
  };
  name: string;
}

export function QuestionCard({ question, name }: QuestionCardProps) {
  // Look up the icon; use iconColor if provided, else fallback to default color.
  const IconComponent = question.icon ? (Icons as any)[question.icon] : null;
  const iconClass = question.iconColor || "text-blue-500";

  return (
    <Card className="w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-lg">
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-3">
          {IconComponent && <IconComponent size={24} className={iconClass} />}
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
          <BinaryChoice name={name} options={question.options} />
        )}
      </CardContent>
    </Card>
  );
}
