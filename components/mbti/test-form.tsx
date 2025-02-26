import { motion, AnimatePresence } from "framer-motion";
import { QuestionCard } from "./question-card";
import { FormNavigation } from "./form-navigation";
import { TestQuestion, TestSection } from "@/types/tests/mbti";
import { MBTIResponse } from "@/shared/schema";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface TestFormProps {
  currentSectionId: number;
  questions: TestQuestion[];
  sections: TestSection[];
  onNext: () => void;
  onPrev: () => void;
  onSubmit: (data: MBTIResponse) => void;
  isCompleting?: boolean;
}

export function TestForm({
  currentSectionId,
  questions,
  sections,
  onNext,
  onPrev,
  onSubmit,
  isCompleting = false
}: TestFormProps) {
  const { watch } = useFormContext();
  const answers = watch("answers") || {};
  
  const sectionQuestions = questions.filter(q => q.section === currentSectionId);
  
  // Track which questions have been answered
  const answeredQuestionIds = Object.keys(answers)
    .filter(id => answers[id]?.selectedScore);
    
  // Count questions answered in previous sections
  const previousAnsweredCount = questions
    .filter(q => q.section < currentSectionId)
    .length;
    
  // Count questions answered in current section
  const currentSectionAnsweredCount = sectionQuestions
    .filter(q => answeredQuestionIds.includes(q.id))
    .length;
    
  // Calculate current question position
  const currentQuestionCount = previousAnsweredCount + 
    (currentSectionAnsweredCount < sectionQuestions.length ? 
      currentSectionAnsweredCount + 1 : // Next unanswered question
      sectionQuestions.length); // All answered in section
      
  const totalQuestions = questions.length;
  
  // Handle answer selection to update question count
  const handleAnswerSelected = (questionId: string) => {
    // The component will re-render with updated answeredQuestionIds
    // which will recalculate currentQuestionCount
  };

  return (
    <div className="flex-1 mt-16 lg:mt-4 lg:mb-64">
      <div className="min-h-screen relative">
        <div className="p-8 pb-32">
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
                  <QuestionCard
                    key={question.id}
                    question={question}
                    name={`answers.${question.id}`}
                    onAnswerSelected={handleAnswerSelected}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Fixed Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 border-t bg-white/30 dark:bg-gray-800/50 backdrop-blur-md">
          <div className="max-w-3xl mx-auto px-8 py-6">
            <FormNavigation
              onSubmit={onSubmit}
              onNext={onNext}
              onPrev={onPrev}
              isFirstStep={currentSectionId === 1}
              isLastStep={currentSectionId === sections.length}
              currentSectionId={currentSectionId}
              totalSections={sections.length}
              currentQuestionCount={currentQuestionCount}
              totalQuestions={totalQuestions}
              isCompleting={isCompleting}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
