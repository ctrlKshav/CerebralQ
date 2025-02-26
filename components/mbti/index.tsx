"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { mbtiResponseSchema, type MBTIResponse } from "@/shared/schema";
import { testData } from "@/data/mbti";
import { saveProgress, loadProgress } from "@/lib/mbti-storage";
import { calculateMBTI } from "@/lib/calculate-mbti";
import { smoothScrollToTop } from "@/lib/utils";
import { TestForm } from "./test-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MobileTopbar from "./mobile-topbar";
import CQLogo from "../cq-logo";

export default function MBTITest() {
  const router = useRouter();
  const [currentSectionId, setCurrentSectionId] = useState(1);
  const [isCompleting, setIsCompleting] = useState(false);
  const currentTest = testData[0];

  const methods = useForm<MBTIResponse>({
    resolver: zodResolver(mbtiResponseSchema),
    defaultValues: {
      id: 0, // provide a default id
      answers: {},
      personalityType: "", // default empty result
      createdAt: new Date().toISOString(), // set default createdAt
    },
  });
  const {formState: {errors}, setFocus} = methods;

  // useEffect(() => {
  //   const savedProgress = loadProgress();
  //   if (savedProgress) {
  //     methods.reset(savedProgress);
  //     const lastAnsweredSection = Math.max(
  //       ...Object.keys(savedProgress.answers)
  //         .map(key => currentTest.questions.find(q => q.id === key)?.section || 1)
  //     );
  //     setCurrentSectionId(lastAnsweredSection);
  //   }
  // }, []);

  const onSubmit = async (data: MBTIResponse) => {
    // Set completing state to true to show full progress bar
    setIsCompleting(true);
    const personalityResult = calculateMBTI(
      data.answers,
    );
    data.personalityType = personalityResult.personalityType;

    // Create an object with calculated results to send to results page
    const resultsData = {
      personalityType: personalityResult.personalityType,
      traitScores: personalityResult.traitScores,
      testId: currentTest.id,
      completionDate: new Date().toLocaleDateString(),
    };

    setTimeout(() => 
      router.push(
        `/tests/${currentTest.id}/results?data=${encodeURIComponent(JSON.stringify(resultsData))}`
      ), 500)
  };

  const handleNext = async() => {
    // Get all questions for the current section
    const currentSectionQuestions = currentTest.questions.filter(
      (q) => q.section === currentSectionId
    );
    
    // Check if all questions in current section are answered
    const unansweredQuestions = currentSectionQuestions.filter(
      (question) => !methods.getValues().answers[question.id]?.selectedScore
    );
    
    // If there are unanswered questions, set errors and scroll to first error
    if (unansweredQuestions.length > 0) {
      unansweredQuestions.forEach((question) => {
        methods.setError(`answers.${question.id}.selectedScore`, {
          type: "required",
          message: "Please answer this question",
        });
      });
      
      // Use requestAnimationFrame to ensure the error card is rendered before scrolling
      requestAnimationFrame(() => {
        const firstErrorCard = document.querySelector('.question-card.ring-2');
        if (firstErrorCard) {
          firstErrorCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
      return;
    }
    
    // Clear any existing errors before moving to next section
    methods.clearErrors();

    if (currentSectionId < currentTest.sections.length) {
      setCurrentSectionId((prev) => prev + 1);
      smoothScrollToTop();
    }

    saveProgress(methods.getValues());
  };

  const handlePrev = () => {
    // Clear any errors when going back
    methods.clearErrors();
    if (currentSectionId > 1) {
      setCurrentSectionId((prev) => prev - 1);
      smoothScrollToTop();
    }
  };

  const currentStepText = `Section ${currentSectionId} of ${currentTest.sections.length}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Link href="/" className="hidden lg:block fixed z-50  left-8  ">
        <CQLogo className="w-36 h-36" />
      </Link>
      <MobileTopbar currentStepText={currentStepText} />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex">
          {/* Main Content */}
          <TestForm
            currentSectionId={currentSectionId}
            questions={currentTest.questions}
            sections={currentTest.sections}
            onNext={handleNext}
            onPrev={handlePrev}
            onSubmit={onSubmit}
            isCompleting={isCompleting}
          />
        </form>
      </FormProvider>
    </div>
  );
}
