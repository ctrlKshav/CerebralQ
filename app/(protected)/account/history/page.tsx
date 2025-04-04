"use client";
import { useContext, useEffect, useState } from "react";
import { UserDataContext, useUserDataContext } from "@/context/user-data";
import Account from "@/components/account";
import Navbar from "@/components/navbar";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import UserTestHistory from "@/components/test-history";
import { getUsersTestHistory } from "@/lib/supabaseOperations/getUsersTestHistory";
import { User } from "@/types/supabase/users";
import { MBTI_TEST_ID } from "@/lib/constants";
import { UserTestHistoryData } from "@/types/userTestHistory";

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [testHistoryData, setTestHistoryData] = useState<UserTestHistoryData | null>(null);

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
    console.log(testHistoryData)

  if (loading || authLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar user={userData} />
      <div className="w-full">
        <UserTestHistory testHistoryData={testHistoryData} />
      </div>
    </div>
  );
}
