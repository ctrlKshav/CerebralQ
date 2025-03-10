"use client";

import { useContext } from "react";
import { UserHeader } from "@/components/account/UserHeader";
import { ProfileProgress } from "@/components/account/ProfileProgress";
import { AccountDetails } from "@/components/account/AccountDetails";
import { CognitiveMetrics } from "@/components/account/CognitiveMetrics";
import { AssessmentProgress } from "@/components/account/AssessmentProgress";
import { initialData } from "@/data/account";
import { UserDataContext } from "@/context/user-data";

export default function Account() {
  const userDataContext = useContext(UserDataContext);

  if(userDataContext === null) {
    return null;
  }

  const {userData, setUserData} = userDataContext

  if(userData === null) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-4xl xl:max-w-5xl mx-auto space-y-6">
        <UserHeader
          username={userData.username}
          profileImage={userData.profile_image_url}
          bio={userData.bio}
          rank={userData.rank}
          isInsider={userData.is_insider}
        />

        <AccountDetails
          email={userData.email}
          created_at={userData.created_at}
        />

        <ProfileProgress />

        <CognitiveMetrics {...userData} />

        <AssessmentProgress tests_taken={userData.tests_taken ?? undefined} last_test_date={userData.last_test_date ?? undefined} />
      </div>
    </main>
  );
}
