"use client";
import { Button } from "@/components/ui/button";
import { MBTIResponse } from "@/schema/mbti";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { ProgressBar } from "./ProgressBar";
import { SectionAndQuestionCounter } from "./SectionAndQuestionCounter";
import { ErrorMessage } from "./ErrorMessage";
import { NavigationButtons } from "./NavigationButtons";

interface FormNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentSectionId: number;
  totalSections: number;
  currentQuestionCount: number;
  currentSectionQuestionsLength: number;
  totalQuestions: number;
  isCompleting?: boolean;
  isSectionComplete: boolean;
}

export function FormNavigation({
  onNext,
  onPrev,
  isFirstStep,
  isLastStep,
  currentSectionId,
  currentSectionQuestionsLength,
  totalSections,
  currentQuestionCount,
  totalQuestions,
  isCompleting = false,
  isSectionComplete,
}: FormNavigationProps) {
  const currentQuestion =
    currentQuestionCount <= currentSectionQuestionsLength * currentSectionId
      ? currentQuestionCount
      : currentQuestionCount - 1;
  const {
    formState: { errors },
    trigger,
  } = useFormContext();

  // Only show errors that were triggered by the Next button
  const currentErrors = Object.keys(errors.answers || {}).length > 0;

  const handleNextClick = async () => {
    onNext();
  };

  const progressPercentage =
    ((currentQuestionCount - 1) / totalQuestions) * 100;

  const [showNavButtons, setShowNavButtons] = useState(false);
  const prevSectionComplete = useRef(false);

  useEffect(() => {
    if (isSectionComplete && !prevSectionComplete.current) {
      setShowNavButtons(true);
    } else if (!isSectionComplete) {
      setShowNavButtons(false);
    }
    prevSectionComplete.current = isSectionComplete;
  }, [isSectionComplete]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 mb-2 sticky bottom-0 z-20 pt-2">
        <ProgressBar value={progressPercentage} />
        <SectionAndQuestionCounter
          currentSection={currentSectionId}
          totalSections={totalSections}
          currentQuestion={currentQuestion}
          totalQuestions={totalQuestions}
        />
      </div>
      <ErrorMessage message={currentErrors ? "Please answer all questions before proceeding" : undefined} />
      <AnimatePresence mode="wait">
        {isSectionComplete && (
          <motion.div
            key="nav-buttons"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
          >
            <NavigationButtons
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              isCompleting={isCompleting}
              onPrev={onPrev}
              onNext={handleNextClick}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
