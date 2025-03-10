"use client";

import { useState } from "react";
import { UserHeader } from "@/components/account/UserHeader";
import { ProfileProgress } from "@/components/account/ProfileProgress";
import { AccountDetails } from "@/components/account/AccountDetails";
import { CognitiveStats } from "@/components/account/CognitiveStats";
import { AssessmentProgress } from "@/components/account/AssessmentProgress";
import { initialData } from "@/data/account";

export default function Account() {
  const [userData, setUserData] = useState(initialData);

  const handleBioUpdate = (newBio: string) => {
    setUserData((prev) => ({ ...prev, bio: newBio }));
  };

  return (
    <main className="min-h-screen bg-background p-6 md:p-8">
      <div className="max-w-4xl xl:max-w-5xl mx-auto space-y-6">
        <UserHeader
          username={userData.username}
          profileImage={userData.profile_image_url}
          bio={userData.bio}
          rank={userData.rank}
          isInsider={userData.is_insider}
          onEditBio={handleBioUpdate}
        />

        <AccountDetails
          email={userData.email}
          memberSince={userData.member_since}
          connectedFriends={userData.connected_friends}
          isVerified={userData.is_verified}
        />

        <ProfileProgress />

        <CognitiveStats stats={userData.cognitive_stats} />

        <AssessmentProgress tests_taken={userData.tests_taken} last_test_date={userData.last_test_date} />
      </div>
    </main>
  );
}
