﻿"use client";
import { useForm, FormProvider, FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { mbtiResponseSchema, type MBTIResponse } from "@/schema/mbti";
import { testData } from "@/data/mbti/testQuestionsFull";
import { saveProgress, loadProgress } from "@/lib/mbtiStorage";
import { calculateMBTI } from "@/lib/calculateMbti";
import { smoothScrollToTop } from "@/lib/utils";
import { TestForm } from "./TestForm";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MobileTopbar from "./MobileTopbar";
import CQLogo from "../CQLogo";
import { createClient } from "@/utils/supabase/client";
import { getCurrentUser } from "@/lib/supabaseOperations";
import { PROGRESS_KEY, SAVED_RESULTS_KEY } from "@/lib/constants";
import { MBTIResponseData } from "@/types/tests/mbti/responseData";
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
    setTimeout(() => {
      router.push("/result");
    }, 0);
  };

  const onError = (error: FieldErrors<MBTIResponse>) => {
    console.log(error);
  };

  const handleNext = async () => {
    // Clear any existing errors before moving to next section
    methods.clearErrors();

    if (currentSectionId < currentTest.sections.length) {
      setCurrentSectionId((prev) => prev + 1);
      smoothScrollToTop();
    }
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
        testName={testData[0].test_name}
      />

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit, onError)}
          className="flex"
        >
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
