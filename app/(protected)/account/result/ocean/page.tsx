"use client";
import ResultCertificate from "@/components/results/result/ocean";
import CQLogo from "@/components/CQLogo";
import Link from "next/link";
import { useUserDataContext } from "@/context/user-data";
import { useEffect, useState } from "react";
import { TEST_RESULTS_KEY, SAVED_RESULTS_KEY } from "@/lib/constants";
import { saveTestResults } from "@/lib/supabase-operations";
import { Card, CardContent } from "@/components/ui/card";
import { ResultData } from "@/types/tests/mbti/results";
import { Button } from "@/components/ui/button";
import { getPersonalityData } from "@/data/tests/mbti/mbtiResultData";
import { getPersonalityDescription } from "@/data/tests/mbti/personalityDescription";
import { sampleResultData } from "@/data/tests/ocean/oceanSampleData";

export default function ResultCertificatePage() {
  const userDataContext = useUserDataContext();
  if (userDataContext === null) {
    return null;
  }
  const { userData, loading: authLoading } = userDataContext;

  // const [resultData, setResultData] = useState<ResultData | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   // Get data from localStorage and handle saving to database
  //   const loadResultsAndSaveToDatabase = async () => {
  //     try {
  //       // Get stored test results
  //       const storedData = localStorage.getItem(TEST_RESULTS_KEY);

  //       if (!storedData) {
  //         setError("No test results found. Please take the test first.");
  //         setLoading(false);
  //         return;
  //       }

  //       const data = JSON.parse(storedData);

  //       // Extract required data from localStorage format
  //       const personalityType = data.raw_score?.personalityType;
  //       const traitScores = data.traitScores || data.raw_score?.traitScores;
  //       const testId = data.testId || data.test_type_id;
  //       const completionDate =
  //         data.completionDate ||
  //         (data.timestamp
  //           ? new Date(data.timestamp).toLocaleDateString()
  //           : data.taken_at
  //             ? new Date(data.taken_at).toLocaleDateString()
  //             : new Date().toLocaleDateString());

  //       if (!personalityType) {
  //         setError("Invalid test result data. Please retake the test.");
  //         setLoading(false);
  //         return;
  //       }

  //       const personalityData = getPersonalityData(personalityType);
  //       const personalityDescription =
  //         getPersonalityDescription(personalityType);

  //       // Set all result data at once
  //       setResultData({
  //         firstname: userData?.first_name || null,
  //         username: userData?.username || null,
  //         personalityType: personalityType,
  //         personalityDescription: personalityDescription,
  //         completionDate,
  //         traitScores,
  //         personalityData,
  //       });

  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error parsing result data:", error);
  //       setError("Failed to load test results. Please retake the test.");
  //       setLoading(false);
  //     }
  //   };

  //   if (!authLoading) loadResultsAndSaveToDatabase();
  // }, [authLoading]);

  // if (loading || authLoading) {
  //   return (
  //     <div className="min-h-screen bg-background flex items-center justify-center">
  //       <Card className="p-8 text-center shadow">
  //         <CardContent className="p-6">
  //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
  //           <p className="mt-4 text-lg text-card-foreground">
  //             Loading your results...
  //           </p>
  //         </CardContent>
  //       </Card>
  //     </div>
  //   );
  // }

  // if (error) {
  //   return (
  //     <div className="min-h-screen bg-background flex items-center justify-center">
  //       <Card className="text-center max-w-md mx-auto shadow-lg">
  //         <CardContent className="p-6">
  //           <h2 className="text-2xl font-bold mb-4 text-card-foreground">
  //             No Results Available
  //           </h2>
  //           <Button
  //             asChild
  //             className="bg-primary text-primary-foreground hover:bg-primary/90"
  //           >
  //             <a href="/">Take the Test</a>
  //           </Button>
  //         </CardContent>
  //       </Card>
  //     </div>
  //   );
  // }
  return (
    <div className="">
      <Link href="/" className="fixed z-50 top-0 left-4 sm:left-8  ">
        <CQLogo className="w-24 h-24 sm:w-28 sm:h-28" />
      </Link>
      <ResultCertificate
        resultData={sampleResultData}
        historyPage={true}
      />
    </div>
  );
}
