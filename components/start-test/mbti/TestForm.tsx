import { motion, AnimatePresence } from "framer-motion";
import { QuestionCard } from "./QuestionCard";
import { FormNavigation } from "./FormNavigation/index";
import { TestQuestion, TestSections } from "@/types/tests/testQuestions";
import { MBTIResponse } from "@/schema/mbti";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface TestFormProps {
  currentSectionId: number;
  questions: TestQuestion[];
  sections: TestSections;
  onNext: () => void;
  onPrev: () => void;
  isCompleting?: boolean;
}

export function TestForm({
  currentSectionId,
  questions,
  sections,
  onNext,
  onPrev,
  isCompleting = false,
}: TestFormProps) {
  const { watch } = useFormContext();
  const answers = watch("answers", {}) as MBTIResponse["answers"];

  const sectionQuestions = questions.filter(
    (q) => q.section === currentSectionId
  );

  // Track which questions have been answered
  const answeredQuestionIds = Object.keys(answers).filter(
    (id) => answers[id]?.selectedScore
  );

  const totalQuestions = questions.length;

  const currentQuestionCount = answeredQuestionIds.length + 1;

  const isSectionComplete = sectionQuestions.every(
    (q) => answers[q.id]?.selectedScore
  );

  return (
    <div className="flex-1 mt-24 lg:mt-4 lg:mb-64">
      <div className="min-h-screen relative">
        <div className="p-0 xs:p-8 pb-32">
          <div className="max-w-5xl mx-auto min-h-[calc(100vh-12rem)] flex items-center ">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSectionId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {sectionQuestions.map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Fixed Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 border-t bg-white/30 dark:bg-gray-800/50 backdrop-blur-md">
          <div className="max-w-3xl mx-auto px-4 xs:px-8 py-6">
            <FormNavigation
              onNext={onNext}
              onPrev={onPrev}
              isFirstStep={currentSectionId === 1}
              isLastStep={currentSectionId === Object.keys(sections).length}
              currentSectionId={currentSectionId}
              currentSectionQuestionsLength={sectionQuestions.length}
              totalSections={Object.keys(sections).length}
              currentQuestionCount={currentQuestionCount}
              totalQuestions={totalQuestions}
              isCompleting={isCompleting}
              isSectionComplete={isSectionComplete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
