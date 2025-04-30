"use client";
import { useContext, useEffect, useState } from "react";
import { UserDataContext, useUserDataContext } from "@/context/user-data";
import Account from "@/components/account";
import Navbar from "@/components/navbar";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import TestHistory from "@/components/test-history";
import { getUsersTestHistory } from "@/lib/supabase-operations/getUsersTestHistory";
import { User } from "@/types/supabase/users";
import {
  MBTI_TEST_ID,
  PROGRESS_KEY,
  SAVED_RESULTS_KEY,
  TEST_RESULTS_KEY,
} from "@/lib/constants";
import { UserTestHistoryData } from "@/types/userTestHistory";
import { MBTIResponse } from "@/schema/mbti";
import { calculateMBTI } from "@/lib/calculateMbti";
import { useRouter } from "next/navigation";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [testHistoryData, setTestHistoryData] =
    useState<UserTestHistoryData | null>(null);
  const router = useRouter();

  const onViewDetailedReport = (testHistoryID: string) => {
    const test = testHistoryData?.find((test) => test.id === testHistoryID);
    if (test === undefined) {
      console.error("Test not found in history");
      return;
    }
    // Create a single unified test result object
    const testResultData = {
      // Database fields
      test_type_id: testHistoryID,
      user_id: userData?.id || "demo",
      raw_score: test.raw_scores,
      completion_time_minutes: 15, // Static for now
      validity_status: "valid", // Static for now
      is_public: true,
    };

    // Store results in local storage
    localStorage.setItem(TEST_RESULTS_KEY, JSON.stringify(testResultData));
    localStorage.setItem(SAVED_RESULTS_KEY, "false");
    router.push("/result");
  };

  const userDataContext = useUserDataContext();
  if (userDataContext === null) {
    return null;
  }
  const { userData, loading: authLoading } = userDataContext;

  useEffect(() => {
    const fetchUserTestHistory = async () => {
      try {
        const data = await getUsersTestHistory(
          (userData as User).id,
          MBTI_TEST_ID
        );
        setTestHistoryData(data);
      } catch (error) {
        console.error("Error fetching user test history:", error);
      } finally {
        setLoading(false);
      }
    };
    if (!authLoading) fetchUserTestHistory();
  }, [authLoading]);

  if (loading || authLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar user={userData} />
      <div className="w-full">
        <TestHistory testHistoryData={testHistoryData} onViewDetailedReport={onViewDetailedReport} />
      </div>
    </div>
  );
}
