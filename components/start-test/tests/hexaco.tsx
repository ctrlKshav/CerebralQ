"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { hexacoResponseSchema, type HEXACOResponse } from "@/schema/hexaco";
import { hexacoTestQuestionsData } from "@/data/tests/hexaco/questions/hexacoFull";
import { saveProgress, loadProgress } from "@/lib/hexacoStorage";
import { calculateHEXACO } from "@/lib/calculateTestScores/calculateHexaco";
import { smoothScrollToTop } from "@/lib/utils";
import { TestForm } from "@/components/start-test/shared/TestForm";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MobileTopbar from "@/components/start-test/shared/MobileTopbar";
import CQLogo from "../../CQLogo";
import { createClient } from "@/utils/supabase/client";
import { getCurrentUser } from "@/lib/supabase-operations";
import { PROGRESS_KEY, SAVED_RESULTS_KEY } from "@/lib/constants";
import { HEXACOResponseData } from "@/types/tests/hexaco/responseData";

// Local storage keys
const TEST_RESULTS_KEY = "cerebralq_hexaco_results";

export default function HEXACOTest() {
  const router = useRouter();
  const [currentSectionId, setCurrentSectionId] = useState(1);
  const [isCompleting, setIsCompleting] = useState(false);
  const currentTest = hexacoTestQuestionsData;
  const supabase = createClient();
  const [userID, setUserId] = useState<string | null>(null);

  const methods = useForm<HEXACOResponse>({
    resolver: zodResolver(hexacoResponseSchema),
    defaultValues: {
      id: currentTest.id,
      answers: {},
      takenAt: new Date().toISOString(),
    },
  });

  useEffect(() => {
    const func = async () => {
      const user = await getCurrentUser();
      user && setUserId(user.id);
    };
    func();
  }, []);

  useEffect(() => {
    const savedData = loadProgress();
    if (savedData) {
      methods.reset(savedData);
      const previousSectionId = savedData.currentSectionId;
      if (previousSectionId && previousSectionId > 0) {
        requestAnimationFrame(() => {
          const questionCards = document.querySelectorAll(".question-card");
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

  const onSubmit = async (data: HEXACOResponse) => {
    setIsCompleting(true);
    localStorage.removeItem(PROGRESS_KEY);

    const personalityResult = calculateHEXACO(data.answers);

    const testResultData: HEXACOResponseData = {
      test_type_id: data.id,
      user_id: userID || "demo",
      raw_score: {
        traitScores: personalityResult.traitScores,
        facetScores: personalityResult.facetScores,
      },
      completion_time_minutes: 20, // Static for now
      validity_status: "valid", // Static for now
      is_public: true,
      taken_at: data.takenAt,
    };

    localStorage.setItem(TEST_RESULTS_KEY, JSON.stringify(testResultData));
    localStorage.setItem(SAVED_RESULTS_KEY, "false");

    router.push("/result/hexaco");
  };

  const handleNext = async () => {
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
