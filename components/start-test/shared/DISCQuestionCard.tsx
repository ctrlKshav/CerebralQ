import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { DISCGroup } from "@/types/tests/disc/testQuestions";
import { useFormContext } from "react-hook-form";
import { DISCResponse } from "@/schema/disc";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface DISCQuestionCardProps {
  group: DISCGroup;
  currentSectionId: number;
}

export function DISCQuestionCard({
  group,
  currentSectionId,
}: DISCQuestionCardProps) {
  const { setValue, watch } = useFormContext<DISCResponse>();
  const rankings = watch(`answers.${group.id}.rankings`) || {};

  const handleRankingChange = (adjective: string, value: string) => {
    const newRankings = { ...rankings };
    // Remove any existing ranking for this value
    Object.keys(newRankings).forEach((key) => {
      if (newRankings[key] === parseInt(value)) {
        delete newRankings[key];
      }
    });
    // Add the new ranking
    newRankings[adjective] = parseInt(value);
    setValue(`answers.${group.id}.rankings`, newRankings);
    setValue(`answers.${group.id}.groupId`, group.id);
  };

  return (
    <Card
      className="w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-lg question-card mb-16 scroll-mt-24"
      data-question-id={group.id}
    >
      <CardHeader className="space-y-3 p-4 xs:p-6 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold leading-tight">
          Rank these adjectives from Most Like Me (1) to Least Like Me (4)
        </h2>
      </CardHeader>
      <CardContent className="p-4 xs:p-6 sm:p-8 pt-0">
        <div className="space-y-4 sm:space-y-6">
          {group.adjectives.map((adjective) => (
            <div
              key={adjective.text}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4"
            >
              <span className="text-base sm:text-lg font-medium">{adjective.text}</span>
              <RadioGroup
                value={rankings[adjective.text]?.toString()}
                // onValueChange={(value) => handleRankingChange(adjective.text, value)}
                className="flex gap-2 sm:gap-4"
              >
                {[1, 2, 3, 4].map((rank) => (
                  <div key={rank} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={rank.toString()}
                      id={`${adjective.text}-${rank}`}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={`${adjective.text}-${rank}`}
                      className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border-2 text-sm font-medium cursor-pointer ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-gray-300 bg-white text-gray-700  dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300  peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary"
                    >
                      {rank}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 