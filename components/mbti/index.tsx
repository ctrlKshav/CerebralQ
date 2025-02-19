"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mbtiResponseSchema, type MBTIResponse } from "@/shared/schema";
import { questions, sections } from "@/lib/mbti-questions";
import { saveProgress, loadProgress } from "@/lib/mbti-storage";
import { ProgressTracker } from "@/components/mbti/progress-tracker";
import { QuestionCard } from "@/components/mbti/question-card";
import { FormNavigation } from "@/components/mbti/form-navigation";

export default function MBTITest() {
  const [currentSectionId, setCurrentSectionId] = useState(1);
  const currentSection = sections.find(s => s.id === currentSectionId);
  const sectionQuestions = questions.filter(q => q.section === currentSectionId);

  const methods = useForm<MBTIResponse>({
    resolver: zodResolver(mbtiResponseSchema),
    defaultValues: {
      answers: {},
      result: undefined,
    },
  });

  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      methods.reset(savedProgress);
      const lastAnsweredSection = Math.max(
        ...Object.keys(savedProgress.answers)
          .map(key => questions.find(q => q.id === key)?.section || 1)
      );
      setCurrentSectionId(lastAnsweredSection);
    }
  }, []);

  const onSubmit = (data: MBTIResponse) => {
    saveProgress(data);
    console.log("Form submitted:", data);
  };

  const handleNext = () => {
    if (currentSectionId < sections.length) {
      setCurrentSectionId(prev => prev + 1);
    }
    saveProgress(methods.getValues());
  };

  const handlePrev = () => {
    if (currentSectionId > 1) {
      setCurrentSectionId(prev => prev - 1);
    }
  };

  const handleSectionClick = (sectionId: number) => {
    setCurrentSectionId(sectionId);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-16">
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex">

        {/* Left Sidebar */}
        <div className="w-80 min-h-screen border-r bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-8">
            <span className="font-bold text-xl">MBTI Test</span>
          </div>

          <ProgressTracker 
            currentSection={currentSectionId}
            totalSections={sections.length}
            onSectionClick={handleSectionClick}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-h-screen relative">
          <div className="flex-1 overflow-y-auto p-8 pb-32">
            <div className="max-w-3xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSectionId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {sectionQuestions.map((question) => (
                    <QuestionCard
                      key={question.id}
                      question={question}
                      name={`answers.${question.id}`}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Fixed Bottom Navigation */}
          <div className="fixed bottom-0 left-80 right-0 border-t bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto px-8 py-6">
              <FormNavigation
                onNext={handleNext}
                onPrev={handlePrev}
                isFirstStep={currentSectionId === 1}
                isLastStep={currentSectionId === sections.length}
              />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
    </div>
  );
}