"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { mbtiResponseSchema, type MBTIResponse } from "@/schema/mbti";
import { mbtiTestQuestionsData } from "@/data/tests/mbti/questions/mbtiFull";
import { saveProgress, loadProgress } from "@/lib/mbtiStorage";
import { calculateMBTI } from "@/lib/calculateTestScores/calculateMbti";
import { smoothScrollToTop } from "@/lib/utils";
import { TestForm } from "@/components/start-test/shared/TestForm";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MobileTopbar from "@/components/start-test/shared/MobileTopbar";
import CQLogo from "../../CQLogo";
import { createClient } from "@/utils/supabase/client";
import { getCurrentUser } from "@/lib/supabase-operations";
import { PROGRESS_KEY, SAVED_RESULTS_KEY } from "@/lib/constants";
import { MBTIResponseData } from "@/types/tests/mbti/responseData";
// Local storage keys
const TEST_RESULTS_KEY = "cerebralq_mbti_results";

export default function MBTITest() {
  const router = useRouter();
  const [currentSectionId, setCurrentSectionId] = useState(1);
  const [isCompleting, setIsCompleting] = useState(false);
  const currentTest = mbtiTestQuestionsData;
  const supabase = createClient();
  const [userID, setUserId] = useState<string | null>(null);

  const methods = useForm<MBTIResponse>({
    resolver: zodResolver(mbtiResponseSchema),
    defaultValues: {
      id: currentTest.id,
      answers: {},
      takenAt: new Date().toISOString(), // set default createdAt
    },
  });

  useEffect(() => {
    const func = async () => {
      const user = await getCurrentUser();
      user && setUserId(user.id);
    };
    func();
  }, []);

  // // Load saved progress when component mounts
  useEffect(() => {
    const savedData = loadProgress();
    if (savedData) {
      methods.reset(savedData);
      const previousSectionId = savedData.currentSectionId;
      if (previousSectionId && previousSectionId > 0) {
        requestAnimationFrame(() => {
          // Find all question cards for the current section
          const questionCards = document.querySelectorAll(".question-card");
          // If there are question cards, scroll to the last one
          if (questionCards.length > 0) {
            const lastQuestionCard = questionCards[questionCards.length - 1];
            lastQuestionCard.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        });
      }
      setCurrentSectionId(previousSectionId);
    }
  }, [methods]);

  const onSubmit = async (data: MBTIResponse) => {
    // Set completing state to true to show full progress bar
    setIsCompleting(true);
    localStorage.removeItem(PROGRESS_KEY);

    const personalityResult = calculateMBTI(data.answers);

    // Create a single unified test result object
    const testResultData: MBTIResponseData = {
      // Database fields
      test_type_id: data.id,
      user_id: userID || "demo",
      raw_score: {
        personalityType: personalityResult.personalityType,
        // Convert traitScores to a plain object that can be serialized to JSON
        traitScores: personalityResult.traitScores,
      },
      completion_time_minutes: 15, // Static for now
      validity_status: "valid", // Static for now
      is_public: true,
      taken_at: data.takenAt,
    };

    // Store results in local storage
    localStorage.setItem(TEST_RESULTS_KEY, JSON.stringify(testResultData));
    localStorage.setItem(SAVED_RESULTS_KEY, "false");

    // Redirect to results page
    router.push("/result/mbti");
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

    if (currentSectionId < Object.keys(currentTest.sections).length) {
      setCurrentSectionId((prev) => prev + 1);
      smoothScrollToTop();
    }

    const localStorageData = {
      ...methods.getValues(),
      currentSectionId: currentSectionId,
    };
    saveProgress(localStorageData);
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
        <CQLogo className="w-28 h-28" />
      </Link>
      <MobileTopbar
        currentStepText={currentStepText}
        testName={currentTest.test_name}
      />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex">
          {/* Main Content */}
          <TestForm
            currentSectionId={currentSectionId}
            questions={currentTest.questions}
            sections={currentTest.sections}
            onNext={handleNext}
            onPrev={handlePrev}
            isCompleting={isCompleting}
          />
        </form>
      </FormProvider>
    </div>
  );
}
