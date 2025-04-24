import { motion, AnimatePresence } from "framer-motion";
import { QuestionCard } from "./QuestionCard";
import { FormNavigation } from "./FormNavigation";
import { TestQuestion, TestSection } from "@/types/tests/mbti/testQuestions";
import { MBTIResponse } from "@/schema/mbti";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface TestFormProps {
  currentSectionId: number;
  questions: TestQuestion[];
  sections: TestSection[];
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
                  <QuestionCard
                    key={question.id}
                    question={question}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
       
      </div>
    </div>
  );
}
