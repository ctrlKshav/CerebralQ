"use client";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { DISCResponseSchema, type DISCResponse } from "@/schema/disc";
import { discGroups } from "@/data/tests/disc/questions/discFull";
import { saveProgress, loadProgress } from "@/lib/mbtiStorage";
import { calculateDISCScores } from "@/lib/calculateTestScores/calculateDisc";

import { DISCQuestionCard } from "@/components/start-test/shared/DISCQuestionCard";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MobileTopbar from "@/components/start-test/shared/MobileTopbar";
import CQLogo from "../../CQLogo";
import { createClient } from "@/utils/supabase/client";
import { getCurrentUser } from "@/lib/supabase-operations";
import { PROGRESS_KEY, SAVED_RESULTS_KEY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"; // Keep for potential future use, but not for current design

// Local storage keys
const TEST_RESULTS_KEY = "cerebralq_disc_results";

export default function DISCTest() {
  const router = useRouter();
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Removed for all-questions-at-once view
  const [isCompleting, setIsCompleting] = useState(false); // Used to disable submit button during submission
  const supabase = createClient();
  const [userID, setUserId] = useState<string | null>(null);

  const methods = useForm<DISCResponse>({
    resolver: zodResolver(DISCResponseSchema),
    defaultValues: {
      answers: {},
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
      // Filter out currentQuestionIndex if it exists in savedData before resetting
      const { currentQuestionIndex, ...answersOnly } = savedData;
      methods.reset(answersOnly);
    }
  }, [methods]);

  const onSubmit = async (data: DISCResponse) => {
    setIsCompleting(true); // Disable submit button
    localStorage.removeItem(PROGRESS_KEY);

    const discResult = calculateDISCScores(
      Object.values(data.answers).map((answer) => ({
        groupId: answer.groupId,
        rankings: answer.rankings,
      }))
    );

    // Create a single unified test result object
    const testResultData = {
      // Database fields
      test_type_id: "disc",
      user_id: userID || "demo",
      raw_score: {
        scores: discResult.scores,
        primaryType: discResult.primaryType,
        secondaryType: discResult.secondaryType,
        isBalanced: discResult.isBalanced,
      },
      completion_time_minutes: 15, // Static for now
      validity_status: "valid", // Static for now
      is_public: true,
      taken_at: new Date().toISOString(),
    };

    // Store results in local storage
    localStorage.setItem(TEST_RESULTS_KEY, JSON.stringify(testResultData));
    localStorage.setItem(SAVED_RESULTS_KEY, "false");

    // Redirect to results page
    router.push("/result/disc");
  };


  // Watch all answers to determine if the form is fully completed
  const watchedAnswers = methods.watch("answers");
  const allQuestionsAnswered = discGroups.every(group => {
    const groupAnswer = watchedAnswers?.[group.id];
    return groupAnswer?.rankings && Object.keys(groupAnswer.rankings).length === 4;
  });

  // Save progress whenever answers change
  useEffect(() => {
    if (Object.keys(watchedAnswers || {}).length > 0) {
      saveProgress({ answers: watchedAnswers });
    }
  }, [watchedAnswers, methods]);

  // const currentStepText = `Question ${currentQuestionIndex + 1} of ${discGroups.length}`; // Removed

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <Link href="/" className="hidden lg:block fixed z-50 left-8">
        <CQLogo className="w-28 h-28" />
      </Link>
      <MobileTopbar
        currentStepText="Complete all questions"
        testName="DISC Assessment"
      />

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex">
          <div className="flex-1 mt-24 lg:mt-4 lg:mb-32"> {/* Reduced bottom margin as navigation is smaller */}
            <div className="relative">
              <div className="p-4 xs:p-6 sm:p-8 pb-24"> {/* Added padding for all questions view */}
                <div className="max-w-5xl mx-auto space-y-8"> {/* Added space-y for multiple cards */}
                  {discGroups.map((group, index) => (
                    <DISCQuestionCard
                      key={group.id}
                      group={group}
                      currentSectionId={index + 1} // Or simply 1 if section ID isn't used for display
                    />
                  ))}
                </div>
              </div>
              {/* Fixed Bottom Navigation - Submit Button */}
              <div className="fixed bottom-0 left-0 right-0 border-t bg-white/30 dark:bg-gray-800/50 backdrop-blur-md">
                <div className="max-w-3xl mx-auto px-4 xs:px-8 py-4">
                  <div className="flex justify-center items-center">
                    <Button
                      type="submit" // Changed to type submit
                      disabled={!allQuestionsAnswered || isCompleting}
                      className="w-full md:w-1/2 lg:w-1/3"
                    >
                      {isCompleting ? "Submitting..." : "Submit Answers"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
} 