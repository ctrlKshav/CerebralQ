import React, { useEffect, useRef } from 'react';
import { useFormContext, Controller, FieldPath } from 'react-hook-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { DISCGroup } from '@/types/tests/disc/testQuestions';
import { DISCResponseSchema } from '@/schema/disc';
import { z } from 'zod';

type DISCFormSchemaType = z.infer<typeof DISCResponseSchema>;
type AnswerGroup = DISCFormSchemaType['answers'][string]; // This is { groupId: number; rankings: Record<string, number> }

interface DISCQuestionCardProps {
  group: DISCGroup;
  formKeyPrefix: `answers.${string}`;
  onQuestionComplete: () => void;
  isCurrentQuestion: boolean;
}

const DISCQuestionCard: React.FC<DISCQuestionCardProps> = ({
  group,
  formKeyPrefix,
  onQuestionComplete,
  isCurrentQuestion,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCurrentQuestion && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [isCurrentQuestion]);
  const { control, setValue, watch, getValues } = useFormContext<DISCFormSchemaType>();

  const groupAnswerPath = formKeyPrefix as FieldPath<DISCFormSchemaType>; // Path to the whole answer group for this question
  const groupIdentifierPath = `${formKeyPrefix}.groupId` as FieldPath<DISCFormSchemaType>;

  // Watch the entire answer group for the current question
  const watchedAnswerGroup = watch(groupAnswerPath) as AnswerGroup | undefined;
  // Extract the rankings from the watched answer group
  const watchedRankings = watchedAnswerGroup?.rankings;

  useEffect(() => {
    if (watchedRankings && isCurrentQuestion) {
      const assignedRanks = Object.values(watchedRankings)
        .filter(rank => typeof rank === 'number' && rank >= 1 && rank <= 4) as number[];
      const uniqueAssignedRanks = new Set(assignedRanks);
      if (assignedRanks.length === 4 && uniqueAssignedRanks.size === 4) {
        onQuestionComplete();
      }
    }
  }, [watchedRankings, onQuestionComplete, group.id, isCurrentQuestion]);

  const handleRankingChange = (adjectiveText: string, newRank: number | undefined) => {
    // Get the entire answer group for the current question
    const currentAnswerGroup = getValues(groupAnswerPath) as AnswerGroup | undefined;
    // Extract the rankings from it
    const currentGroupRankings = currentAnswerGroup?.rankings;

    const specificAdjectiveRankingPath = `${formKeyPrefix}.rankings.${adjectiveText}` as FieldPath<DISCFormSchemaType>;

    if (newRank === undefined) {
      setValue(specificAdjectiveRankingPath, undefined as any, { shouldValidate: true, shouldDirty: true });
      return;
    }

    if (currentGroupRankings) {
      for (const adj of group.adjectives) {
        if (adj.text !== adjectiveText && currentGroupRankings[adj.text] === newRank) {
          const otherAdjectivePath = `${formKeyPrefix}.rankings.${adj.text}` as FieldPath<DISCFormSchemaType>;
          setValue(otherAdjectivePath, undefined as any, { shouldValidate: true, shouldDirty: true });
        }
      }
    }
    setValue(specificAdjectiveRankingPath, newRank as any, { shouldValidate: true, shouldDirty: true });
    setValue(groupIdentifierPath, group.id as any, { shouldDirty: true });
  };

  if(!isCurrentQuestion){
    return null;
  }

  return (
    <Card ref={cardRef} className={`w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-lg question-card mb-16 scroll-mt-24`}>
      <CardHeader className="space-y-3 p-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold leading-tight">
            Question {group.id}
          </h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
            Rank the following adjectives from 1 (Least Like You) to 4 (Most Like You). Each rank must be used exactly once.
          </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {group.adjectives.map((adjective) => {
            const controllerFieldName = `${formKeyPrefix}.rankings.${adjective.text}` as FieldPath<DISCFormSchemaType>;
            return (
              <div key={adjective.text} className="p-4 border rounded-md shadow-sm  hover:shadow-md transition-shadow">
                <p className="font-semibold text-lg mb-3 text-card-foreground">{adjective.text}</p>
                <Controller
                  name={controllerFieldName}
                  control={control}
                  render={({ field }) => {
                    const watchedRank = watch(`${formKeyPrefix}.rankings.${adjective.text}` as FieldPath<DISCFormSchemaType>) as unknown as number | undefined;
                    return (
                      <>
                        <RadioGroup
                          onValueChange={(value) => {
                            const rank = parseInt(value, 10);
                            handleRankingChange(adjective.text, isNaN(rank) ? undefined : rank);
                          }}
                          value={watchedRank?.toString() ?? ""}
                          className="flex justify-around items-center py-2"
                        >
                          {[1, 2, 3, 4].map((rank) => (
                            <FormItem key={rank} className="flex flex-col items-center space-y-1.5">
                              <FormControl>
                                <RadioGroupItem
                                  value={rank.toString()}
                                  id={`${formKeyPrefix}-${adjective.text.replace(/\s+/g, '-')}-${rank}`}
                                  className={`h-8 w-8 sm:h-10 sm:w-10 transition-all duration-200 ease-in-out border-2 
                                            ${watchedRank === rank
                                      ? 'bg-primary text-primary-foreground border-primary ring-2 ring-primary ring-offset-2 ring-offset-background'
                                      : 'bg-muted hover:bg-muted-foreground/10 border-muted-foreground/30'}`}
                                />
                              </FormControl>
                              <FormLabel
                                htmlFor={`${formKeyPrefix}-${adjective.text.replace(/\s+/g, '-')}-${rank}`}
                                className="text-xs sm:text-sm cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                              >
                                {rank}
                              </FormLabel>
                            </FormItem>
                          ))}
                        </RadioGroup>
                      </>
                    );
                  }}
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default DISCQuestionCard;
