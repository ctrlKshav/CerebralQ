"use client";

import { useState } from "react";
import { UserHeader } from "@/components/account/UserHeader";
import { ProfileProgress } from "@/components/account/ProfileProgress";
import { AccountDetails } from "@/components/account/AccountDetails";
import { CognitiveStats } from "@/components/account/CognitiveStats";
import { AssessmentProgress } from "@/components/account/AssessmentProgress";

export const initialData = {
  username: "JohnDoe42",
  email: "john@example.com",
  bio: "Exploring the frontiers of cognitive enhancement and personal growth. Passionate about understanding different personality types and mental patterns.",
  profile_image_url:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&q=80",
  tests_taken: 15,
  member_since: "2023-06-01",
  is_verified: true,
  is_insider: true,
  last_test_date: "2024-02-15",
  created_at: "2023-06-01",
  achievements: ["Pattern Master", "Memory Elite", "Social Insight Pro"],
  rank: "Cognitive Explorer",
  cognitive_stats: {
    iq_score: 128,
    personality_type: "INTJ",
    memory_percentile: 85,
    processing_speed: 92,
    emotional_eq: 78,
  },
  connected_friends: 34,
};

export default function Page() {
  const [userData, setUserData] = useState(initialData);

  const handleBioUpdate = (newBio: string) => {
    setUserData((prev) => ({ ...prev, bio: newBio }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">
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
