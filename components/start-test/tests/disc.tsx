"use client";

import React, { useState, useEffect } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // Added Zod import
import { DISCResponseSchema } from '@/schema/disc';
import { discGroups as discQuestions } from '@/data/tests/disc/questions/discFull'; // Renaming import
import { DISCGroup } from '@/types/tests/disc/testQuestions';
import DISCQuestionCard from './disc/DISCQuestionCard'; // Corrected import path
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Form } from '@/components/ui/form'; // shadcn/ui Form
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Define schema type at module level
type DISCFormSchemaType = z.infer<typeof DISCResponseSchema>;

const DISCTestForm: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);

  const totalQuestions = discQuestions.length;


  const methods = useForm<DISCFormSchemaType>({
    resolver: zodResolver(DISCResponseSchema),
    defaultValues: {
      answers: discQuestions.reduce((acc: DISCFormSchemaType['answers'], group: DISCGroup) => {
        acc[`group_${group.id}`] = {
          groupId: group.id,
          rankings: {},
        };
        return acc;
      }, {} as DISCFormSchemaType['answers']),
    },
  });

  const { handleSubmit, formState: { errors, isValid, isSubmitting }, control } = methods; // Removed watch, added control for useWatch

  const onSubmit = (data: DISCFormSchemaType) => {
    console.log('Form Submitted:', data);
    // TODO: Handle actual submission (e.g., API call)
    alert('Test Complete! Check console for data.');
  };

  const handleQuestionComplete = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setIsFormComplete(true);
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;


  const watchedAnswers = useWatch({ control, name: 'answers' });

  // Effect to check if all questions are answered to enable submit
  useEffect(() => {
    if (watchedAnswers) {
      const allAnswered = discQuestions.every((q: DISCGroup) => {
        const groupAnswer = watchedAnswers[`group_${q.id}`];
        return groupAnswer && Object.keys(groupAnswer.rankings).length === 4;
      });
      if (allAnswered) {
        setIsFormComplete(true);
      } else {
        setIsFormComplete(false);
      }
    } else {
      // If watchedAnswers is undefined (e.g. form not initialized fully yet)
      setIsFormComplete(false);
    }
  }, [watchedAnswers, totalQuestions]);

  if (!discQuestions || discQuestions.length === 0) {
    return <p>No questions available.</p>;
  }

  const currentGroup = discQuestions[currentQuestionIndex];
  const formKeyPrefix = `answers.group_${currentGroup.id}` as const;

  return (
    <FormProvider {...methods}>
      <Form {...methods}> {/* shadcn/ui Form wrapper */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 p-4 md:p-8 max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">DISC Assessment</CardTitle>
              <div className="mt-4">
                <Progress value={progressPercentage} className="w-full" />
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Question {currentQuestionIndex + 1} of {totalQuestions}
                </p>
              </div>
            </CardHeader>

            <CardContent className="min-h-[400px]">
              {discQuestions.map((group: DISCGroup, index: number) => (
                <div key={group.id} style={{ display: index === currentQuestionIndex ? 'block' : 'none' }}>
                  <DISCQuestionCard
                    group={group}
                    formKeyPrefix={`answers.group_${group.id}` as const}
                    onQuestionComplete={handleQuestionComplete}
                    isCurrentQuestion={index === currentQuestionIndex}
                  />
                </div>
              ))}
            </CardContent>

            <CardFooter className="flex flex-col items-center space-y-4">
              {isFormComplete && currentQuestionIndex === totalQuestions -1 && (
                <Button type="submit" disabled={!isValid || isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? 'Submitting...' : 'Submit Answers'}
                </Button>
              )}
              {Object.keys(errors).length > 0 && (
                <p className="text-sm font-medium text-destructive">
                  Please correct the errors above before submitting.
                </p>
              )}
            </CardFooter>
          </Card>
        </form>
      </Form>
    </FormProvider>
  );
};

export default DISCTestForm;
