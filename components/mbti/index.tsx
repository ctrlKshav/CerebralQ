"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { mbtiResponseSchema, type MBTIResponse } from "@/schema/mbti";
import { testData } from "@/data/mbti/test";
import { saveProgress, loadProgress } from "@/lib/mbtiStorage";
import { calculateMBTI } from "@/lib/calculateMbti";
import { smoothScrollToTop } from "@/lib/utils";
import { TestForm } from "./test-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MobileTopbar from "./mobile-topbar";
import CQLogo from "../cq-logo";
import {
  saveTestResults,
  
} from "@/lib/supabaseOperations";
import type { UserTestHistoryInsert } from "@/types/supabase/user-test-history";
import { createClient } from "@/utils/supabase/client";
import { getCurrentUser } from "@/lib/supabaseOperations";

// Local storage keys
const TEST_RESULTS_KEY = "cerebralq_mbti_results";

export default function MBTITest() {
  const router = useRouter();
  const [currentSectionId, setCurrentSectionId] = useState(1);
  const [isCompleting, setIsCompleting] = useState(false);
  const currentTest = testData[0];
  const supabase = createClient();
  const [userID, setUserId] = useState<string | null>(null);

  const methods = useForm<MBTIResponse>({
    resolver: zodResolver(mbtiResponseSchema),
    defaultValues: {
      id: currentTest.id,
      answers: {},
      createdAt: new Date().toISOString(), // set default createdAt
    },
  });

  useEffect(() => {
    const func = async () => {
      const user = await getCurrentUser();
      user && setUserId(user.id);
    };
    func();
  }, []);

  // Load saved progress when component mounts
  useEffect(() => {
    const savedData = loadProgress();
    if (savedData) {
      methods.reset(savedData);
    }
  }, [methods]);

  const onSubmit = async (data: MBTIResponse) => {
    // Set completing state to true to show full progress bar
    setIsCompleting(true);
    const personalityResult = calculateMBTI(data.answers);

    // Create a single unified test result object
    const testResultData = {
      // Database fields
      test_type_id: data.id,
      user_id: userID || "demo",
      raw_score: {
        personalityType: personalityResult.personalityType,
        // Convert traitScores to a plain object that can be serialized to JSON
        traitScores: personalityResult.traitScores as any
      },
      completion_time_minutes: 15, // Static for now
      validity_status: "valid", // Static for now
      is_public: true,
    };

    // Store results in local storage
    localStorage.setItem(TEST_RESULTS_KEY, JSON.stringify(testResultData));

    // Clear form progress data (answers saved during the test)
    // saveProgress(null);

    // Redirect to results page
    setTimeout(() => {
      router.push("/tests/mbti/results");
    }, 0);
  
  };

  const handleNext = async () => {
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
        const firstErrorCard = document.querySelector(".question-card.ring-2");
        if (firstErrorCard) {
          firstErrorCard.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
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

    // Save progress as user moves through sections
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
