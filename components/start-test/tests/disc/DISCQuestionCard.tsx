import React, { useEffect, useRef } from "react";
import {
  useFormContext,
  FieldPath,
  ControllerRenderProps,
} from "react-hook-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { DISCQuestionGroup } from "@/types/tests/disc/testQuestions";
import { DISCResponseSchema } from "@/schema/disc";
import { z } from "zod";

type DISCFormSchemaType = z.infer<typeof DISCResponseSchema>;
type AnswerGroup = DISCFormSchemaType["answers"][string]; // This is { rankings: Record<string, number> }

interface DISCQuestionCardProps {
  group: DISCQuestionGroup;
  formKeyPrefix: `answers.${string}`;
  onQuestionComplete: () => void;
  showNext: boolean;
  setShowNext: (value: boolean) => void;
}

const DISCQuestionCard: React.FC<DISCQuestionCardProps> = ({
  group,
  formKeyPrefix,
  onQuestionComplete,
  showNext,
  setShowNext
}) => {
  const { control, setValue, watch, getValues } =
    useFormContext<DISCFormSchemaType>();
  const interactionOccurred = useRef(false);

  const groupAnswerPath = formKeyPrefix as FieldPath<DISCFormSchemaType>; // Path to the whole answer group for this question

  // Watch the entire answer group for the current question
  const watchedAnswerGroup = watch(groupAnswerPath) as AnswerGroup | undefined;
  // Extract the rankings from the watched answer group
  const watchedRankings = watchedAnswerGroup?.rankings;

  const handleRadioChange = (
    adjectiveText: string,
    value: string,
    field: ControllerRenderProps<DISCFormSchemaType>
  ) => {
    const rank = parseInt(value, 10);
    if (!isNaN(rank)) {
      // Get the entire answer group for the current question
      const currentAnswerGroup = getValues(groupAnswerPath) as
        | AnswerGroup
        | undefined;
      // Extract the rankings from it
      const currentGroupRankings = currentAnswerGroup?.rankings;

      if (currentGroupRankings) {
        for (const adj of group.adjectives) {
          if (
            adj.text !== adjectiveText &&
            currentGroupRankings[adj.text] === rank
          ) {
            const otherAdjectivePath =
              `${formKeyPrefix}.rankings.${adj.text}` as FieldPath<DISCFormSchemaType>;
            setValue(otherAdjectivePath, undefined as any, {
              shouldDirty: true,
              shouldTouch: true,
            });
          }
        }
      }
      interactionOccurred.current = true;
    }
    field.onChange(rank);
  };

  useEffect(() => {
    if (interactionOccurred.current) {
      if (watchedRankings) {
        const assignedRanks = Object.values(watchedRankings).filter(
          (rank) => typeof rank === "number" && rank >= 1 && rank <= 4
        ) as number[];
        const uniqueAssignedRanks = new Set(assignedRanks);
        if (assignedRanks.length === 4 && uniqueAssignedRanks.size === 4) {
          onQuestionComplete();
        }
      }
      interactionOccurred.current = false; // Reset the flag after checking, regardless of completion
    }
    else {
      if (watchedRankings) {
        const assignedRanks = Object.values(watchedRankings).filter(
          (rank) => typeof rank === "number" && rank >= 1 && rank <= 4
        ) as number[];
        const uniqueAssignedRanks = new Set(assignedRanks);
        if (assignedRanks.length === 4 && uniqueAssignedRanks.size === 4) {
          setShowNext(true);
        }
        else {
          setShowNext(false);
        }
      }
    }
  }, [watchedRankings, onQuestionComplete, group.id]);

  return (
    <Card
      className={`w-full backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-lg question-card mb-16 scroll-mt-24`}
    >
      <CardHeader className="space-y-3 p-8">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-semibold leading-tight">
            Question {group.id}
          </h2>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Rank the following adjectives from 1 (Least Like You) to 4 (Most Like
          You). Each rank must be used exactly once.
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {group.adjectives.map((adjective) => {
            const controllerFieldName =
              `${formKeyPrefix}.rankings.${adjective.text}` as FieldPath<DISCFormSchemaType>;
            return (
              <div
                key={adjective.text}
                className="sm:px-4 py-3 flex items-center gap-4 "
              >
                <div className="font-semibold text-lg sm:text-xl text-card-foreground  w-full">
                  {adjective.text}
                </div>
                <FormField
                  control={control}
                  name={controllerFieldName}
                  render={({ field }: { field: ControllerRenderProps<DISCFormSchemaType, FieldPath<DISCFormSchemaType>> }) => {
                    return (
                      <FormItem className="w-full">
                        <FormControl>
                          <RadioGroup
                            onValueChange={(value) =>
                              handleRadioChange(adjective.text, value, field)
                            }
                            value={watchedRankings?.[adjective.text]?.toString() ?? ""}
                            className="flex justify-between items-center w-full"
                          >
                            {[1, 2, 3, 4].map((rank) => (
                              <FormItem
                                key={rank}
                                className="flex flex-col items-center space-y-1.5"
                              >
                                <FormControl>
                                  <RadioGroupItem
                                    value={rank.toString()}
                                    id={`${formKeyPrefix}-${adjective.text.replace(/\s+/g, "-")}-${rank}`}
                                    className={`h-7 w-7 transition-all duration-200 ease-in-out`}
                                  />
                                </FormControl>
                                <FormLabel
                                  htmlFor={`${formKeyPrefix}-${adjective.text.replace(/\s+/g, "-")}-${rank}`}
                                  className=" cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                                >
                                  {rank}
                                </FormLabel>
                              </FormItem>
                            ))}
                          </RadioGroup>
                        </FormControl>
                      </FormItem>
                    )
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
