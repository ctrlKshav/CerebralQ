"use client";
import { useState, useEffect, use } from "react";
import { createClient } from "@/utils/supabase/client";
import { getCurrentUser, getUserByUsername } from "@/lib/supabaseOperations";
import { useRouter } from "next/navigation";

// Components
import Navbar from "@/components/navbar";
import ProfileHeader from "@/components/profile/ProfileHeader";
import PersonalityShowcase from "@/components/profile/PersonalityShowcase";
import TestHistory from "@/components/profile/TestHistory";
import MBTIInsights from "@/components/profile/MBTIInsights";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import {
  UserNotFoundFallback,
  NoTestsFallback,
  IncompleteDataFallback,
} from "@/components/profile/ProfileFallbacks";
import { User } from "@/types/supabase/users";
import { UserProfile } from "@/types/supabase/user-profile";
import { useUserDataContext } from "@/context/user-data";

export default function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const supabase = createClient();
  const searchParams = use(params);

  const userDataContext = useUserDataContext();
  if (userDataContext === null) {
    return null;
  }
  const { userData, setUserData } = userDataContext;

  const profileUsername = searchParams.username;
  const [profileData, setProfileData] = useState<UserProfile | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await getUserByUsername(profileUsername);
        setProfileData(profileData);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [profileUsername, supabase]);

  // Show loading state for everything
  if (loading) {
    return <LoadingSkeleton />;
  }

  // Case 1: User doesn't exist
  if (!profileData) {
    return (
      <>
        <Navbar user={userData} />
        <UserNotFoundFallback username={profileUsername} />
      </>
    );
  }

  // Case 2: User exists but has no test history
  if (profileData.user_test_history.length === 0) {
    return (
      <>
        <Navbar user={userData} />
        <NoTestsFallback
          username={profileUsername}
          profileImageUrl={profileData.profile_image_url}
          bio={profileData.bio}
        />
      </>
    );
  }

  // Case 3: User has test history but invalid or incomplete raw_score
  const hasValidPersonalityData =
    profileData.raw_score &&
    profileData.raw_score.personalityType &&
    profileData.raw_score.personalityType !== "Unknown" &&
    profileData.raw_score.traitScores;

  if (!hasValidPersonalityData) {
    return (
      <>
        <Navbar user={userData} />
        <IncompleteDataFallback
          username={profileUsername}
          profileImageUrl={profileData.profile_image_url}
          bio={profileData.bio}
        />
      </>
    );
  }

  // All good - show full profile
  return (
    <div className="min-h-screen bg-background ">
      {userData ? <Navbar user={userData} /> : <Navbar />}
      <main className="container mt-24 mx-auto px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Profile header with basic user information */}
          <ProfileHeader
            profileData={profileData}
            isOwner={userData?.username === profileUsername}
          />

          {/* Detailed personality analysis */}
          <PersonalityShowcase
<<<<<<< HEAD
            personalityType={profileData.raw_score.personalityType}
            traitScores={profileData.raw_score.traitScores}
=======
            firstname={userData.firstname}
            personalityType={userData.raw_score.personalityType}
            traitScores={userData.raw_score.traitScores}
>>>>>>> 6e37984 (Pass Firstname in Profile Dashboard Component)
          />

          {/* MBTI-specific insights and comparisons */}
          <MBTIInsights personalityType={profileData.raw_score.personalityType} />

          {/* Test history  */}
          <TestHistory fullTestHistory={profileData.user_test_history} />
        </div>
      </main>
    </div>
  );
}
