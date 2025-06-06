"use client";
import { motion, AnimatePresence } from "framer-motion";
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
  } = useFormContext();

  // Only show errors that were triggered by the Next button
  const currentErrors = Object.keys(errors.answers || {}).length > 0;

  const progressPercentage =
    ((currentQuestionCount - 1) / totalQuestions) * 100;
    
  return (
    <div className="flex flex-col gap-4">
      <ErrorMessage message={currentErrors ? "Please answer all questions before proceeding" : undefined} />

      <motion.div
        layout
        className="sticky bottom-0 z-20 pt-2"
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-1">
          <ProgressBar value={progressPercentage} />
          <SectionAndQuestionCounter
            currentSection={currentSectionId}
            totalSections={totalSections}
            currentQuestion={currentQuestion}
            totalQuestions={totalQuestions}
          />
        </div>

        <div>
          <AnimatePresence mode="wait">
            {isSectionComplete && (
              <motion.div
                key="nav-buttons"
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-4"
              >
                <NavigationButtons
                  isFirstStep={isFirstStep}
                  isLastStep={isLastStep}
                  isCompleting={isCompleting}
                  onPrev={onPrev}
                  onNext={onNext}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}