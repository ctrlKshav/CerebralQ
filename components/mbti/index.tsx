"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    console.log("hello");
    console.log(data);
    const currentSectionQuestions = currentTest.questions.filter(
      (q) => q.section === currentSectionId
    );
    const unansweredQuestions = currentSectionQuestions.filter(
      (question) => !methods.getValues().answers[question.id]?.selectedScore
    );
    if (unansweredQuestions.length > 0) {
      unansweredQuestions.forEach((question) => {
        methods.setError(`answers.${question.id}.selectedScore`, {
          type: "required",
          message: "Please answer this question",
        });
      });
      return;
    }
    methods.clearErrors();
    const personalityResult = calculateMBTI(
      data.answers,
      currentTest.questions
    );
    data.personalityType = personalityResult.personalityType;

    // Create an object with calculated results to send to results page
    const resultsData = {
      personalityType: personalityResult.personalityType,
      traitScores: personalityResult.traitScores,
      testId: currentTest.id,
      completionDate: new Date().toLocaleDateString(), // example date formatting
      // Optionally include answers if needed: answers: data.answers,
    };
    console.log("test1");
    console.log(resultsData);

    // Use router to push data to results page
    router.push(
      `/tests/${currentTest.id}/results?data=${encodeURIComponent(JSON.stringify(resultsData))}`
    );
  };

  const handleNext = () => {
    // Check if all questions in current section are answered
    const currentSectionQuestions = currentTest.questions.filter(
      (q) => q.section === currentSectionId
    );

    const unansweredQuestions = currentSectionQuestions.filter(
      (question) => !methods.getValues().answers[question.id]?.selectedScore
    );

    if (unansweredQuestions.length > 0) {
      unansweredQuestions.forEach((question) => {
        methods.setError(`answers.${question.id}.selectedScore`, {
          type: "required",
          message: "Please answer this question",
        });
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

  const handleSectionClick = (sectionId: number) => {
    // Clear any errors when using section navigation
    methods.clearErrors();
    setCurrentSectionId(sectionId);
  };

  const currentStepText = `Section ${currentSectionId} of ${currentTest.sections.length}`;

  // Remove the watch effect that was clearing errors
  // We only want to clear errors on specific user actions now
  const answers = methods.watch("answers");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Link href="/" className="hidden lg:block fixed z-50 top-6 left-10">
        <CQLogo className="w-14 h-12" />
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
          />
        </form>
      </FormProvider>
    </div>
  );
}
