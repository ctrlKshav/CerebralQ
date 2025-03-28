"use client"
import { Button } from "@/components/ui/button";
import { MBTIResponse } from "@/schema/mbti";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

interface FormNavigationProps {
  onSubmit: (data: MBTIResponse) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentSectionId: number;
  totalSections: number;
  currentQuestionCount: number;
  totalQuestions: number;
  isCompleting?: boolean;
}

export function FormNavigation({ 
  onSubmit,
  onNext, 
  onPrev, 
  isFirstStep, 
  isLastStep,
  currentSectionId,
  totalSections,
  currentQuestionCount,
  totalQuestions,
  isCompleting = false
}: FormNavigationProps) {
  const { formState: { errors }, trigger } = useFormContext();
  
  // Only show errors that were triggered by the Next button
  const currentErrors = Object.keys(errors.answers || {}).length > 0;

  const handleNextClick = async () => {
    onNext();
  };

  const [progressPercentage, setProgressPercentage] = useState(0);
  

  useEffect(() => {
    setProgressPercentage((currentQuestionCount / totalQuestions) * 100);
  }, [currentQuestionCount])

  return (
    <div className="flex flex-col gap-4">
      {/* Subtle progress indicators */}
      <div className="flex flex-col gap-1 mb-2">
        {/* Progress bar - improved transition */}
        <div className="w-full h-1 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-purple-400 dark:bg-purple-500 transition-all duration-700 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        {/* Question counter */}
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
          <span>Section {currentSectionId} of {totalSections}</span>
          <span>Question {currentQuestionCount} of {totalQuestions}</span>
        </div>
      </div>
      
      {currentErrors && (
        <div className="text-sm text-red-500 text-center">
          Please answer all questions before proceeding
        </div>
      )}
      <div className="flex justify-between">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            variant="outline"
            onClick={onPrev}
            disabled={isFirstStep}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous
          </Button>
        </motion.div>

        {isLastStep ? (
          // Render submit button without motion wrapper when complete
          <Button
            type="submit"
            variant={"default"}
            className="gap-2"
          >
            Complete
          </Button>
        ) : (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="button"
              onClick={handleNextClick}
              variant={"default"}
              className="gap-2"
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
