"use client";

import React, { useState, useEffect } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // Added Zod import
import { DISCResponseSchema } from '@/schema/disc';
import { discGroups as discQuestions } from '@/data/tests/disc/questions/discFull'; // Renaming import
import { DISCGroup } from '@/types/tests/disc/testQuestions';
import DISCQuestionCard from './DISCQuestionCard'; // Corrected import path
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Form } from '@/components/ui/form'; // shadcn/ui Form
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import CQLogo from '@/components/CQLogo';
import MobileTopbar from '../../shared/MobileTopbar';
import { AnimatePresence, motion } from 'framer-motion';

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
  const currentQuestionText = `Question ${currentQuestionIndex + 1} out of ${totalQuestions}`

  return (


    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 ">
      <Link href="/" className="hidden lg:block fixed z-50  left-8  ">
        <CQLogo className="w-28 h-28" />
      </Link>
      <MobileTopbar
        testName={"Disc Assessment"}
        currentStepText={currentQuestionText}
      />
      <FormProvider {...methods}>
        <Form {...methods}> {/* shadcn/ui Form wrapper */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex">


            <div className="flex-1 mt-24 lg:mt-4 lg:mb-64">
              <div className=" relative">
                <div className="p-0 xs:p-8 pb-32">
                  <div className="max-w-5xl mx-auto min-h-[calc(100vh-12rem)] flex items-center ">
                    <AnimatePresence mode="wait" initial={false}>
                      {currentGroup && (
                        <motion.div
                          key={currentGroup.id} // Key changes with the question, triggering animation
                          initial={{ opacity: 0, x: 50 }} // Slide in from right
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}   // Slide out to left
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="w-full" // Ensure card takes full width of its container
                        >
                          <DISCQuestionCard
                            group={currentGroup}
                            formKeyPrefix={`answers.group_${currentGroup.id}` as const}
                            onQuestionComplete={handleQuestionComplete}
                            isCurrentQuestion={true} // Since only the current card is rendered here, this is true
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>
          </form>
        </Form>
      </FormProvider>

    </div>



  );
};

export default DISCTestForm;
