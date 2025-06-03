"use client";

import React, { useState, useEffect } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // Added Zod import
import { DISCResponseSchema } from '@/schema/disc';
import { discGroups as discQuestions } from '@/data/tests/disc/questions/discFull'; // Renaming import
import { DISCGroup } from '@/types/tests/disc/testQuestions';
import DISCQuestionCard from './DISCQuestionCard'; // Corrected import path
import { Form } from '@/components/ui/form'; // shadcn/ui Form
import Link from 'next/link';
import CQLogo from '@/components/CQLogo';
import MobileTopbar from '../../shared/MobileTopbar';
import { AnimatePresence, motion } from 'framer-motion';
import { FormNavigation } from './form-navigation';

// Define schema type at module level
type DISCFormSchemaType = z.infer<typeof DISCResponseSchema>;

const DISCTestForm: React.FC = () => {
  const [currentQuestionCount, setCurrentQuestionCount] = useState<number>(1);
  const [isTestCompleted, setIsTestCompleted] = useState<boolean>(false);
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
    if (currentQuestionCount < totalQuestions - 1) {
      setCurrentQuestionCount(prevIndex => prevIndex + 1);
    } else {
      setIsTestCompleted(true);
    }
  };

  const watchedAnswers = useWatch({ control, name: 'answers' });

  // Effect to check if all questions are answered to enable submit
  useEffect(() => {
    if (watchedAnswers) {
      const allAnswered = discQuestions.every((q: DISCGroup) => {
        const groupAnswer = watchedAnswers[`group_${q.id}`];
        return groupAnswer && Object.keys(groupAnswer.rankings).length === 4;
      });
      if (allAnswered) {
        setIsTestCompleted(true);
      } else {
        setIsTestCompleted(false);
      }
    } else {
      // If watchedAnswers is undefined (e.g. form not initialized fully yet)
      setIsTestCompleted(false);
    }
  }, [watchedAnswers, totalQuestions]);

  if (!discQuestions || discQuestions.length === 0) {
    return <p>No questions available.</p>;
  }

  const currentGroup = discQuestions[currentQuestionCount - 1];
  const currentQuestionText = `Question ${currentQuestionCount} out of ${totalQuestions}`

  const onNext = () => {
    setCurrentQuestionCount(prevIndex => prevIndex + 1);
  };

  const onPrev = () => {
    setCurrentQuestionCount(prevIndex => prevIndex - 1);
  };


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
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Fixed Bottom Navigation */}
                <div className="fixed bottom-0 left-0 right-0 border-t bg-white/30 dark:bg-gray-800/50 backdrop-blur-md">
                  <div className="max-w-3xl mx-auto px-4 xs:px-8 pt-6 pb-4">
                    <FormNavigation
                      onNext={onNext}
                      onPrev={onPrev}
                      currentQuestionCount={currentQuestionCount}
                      totalQuestions={totalQuestions}
                      isTestCompleted={isTestCompleted}
                    />
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
