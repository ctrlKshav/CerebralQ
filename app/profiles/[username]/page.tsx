"use client";
import { useState, useEffect, use } from "react";
import { createClient } from "@/utils/supabase/client";
import { getUserByUsername } from "@/lib/supabaseOperations";
import { useRouter } from "next/navigation";

// Components
import Navbar from "@/components/navbar";
import ProfileHeader from "@/components/profile/profile-header";
import PersonalityShowcase from "@/components/profile/personality-showcase";
import TestHistory from "@/components/profile/test-history";
import MBTIInsights from "@/components/profile/mbti-insights";
import LoadingSkeleton from "@/components/loading-skeleton";
import {
  UserNotFoundFallback,
  NoTestsFallback,
  IncompleteDataFallback,
} from "@/components/profile/profile-fallbacks";
import { getCurrentUser } from "@/lib/supabaseOperations";
import { User } from "@/types/supabase/users";

export default function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const [profileUserData, setProfileUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = use(params);
  const profileUsername = searchParams.username;
  const [viewingUserData, setViewingUserData] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const router = useRouter();

  // Separate useEffect for auth data to clearly segregate concerns
  useEffect(() => {
    const getAuthUser = async () => {
      setAuthLoading(true);
      const data = await getCurrentUser();
      if (data === null) return router.push("/sign-in");
      setViewingUserData(data);
      setAuthLoading(false);
    };
    getAuthUser();
  }, []);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileUserData = await getUserByUsername(profileUsername);
        setProfileUserData(profileUserData);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [profileUsername]);

  // Show loading state for everything
  if (loading || authLoading) {
    return <LoadingSkeleton />;
  }

  // Case 1: User doesn't exist
  if (!profileUserData) {
    return (
      <>
        <Navbar user={viewingUserData} />
        <UserNotFoundFallback username={profileUsername} />
      </>
    );
  }

  // Case 2: User exists but has no test history
  if (profileUserData.user_test_history.length === 0) {
    return (
      <>
        <Navbar user={viewingUserData} />
        <NoTestsFallback username={profileUsername} />
      </>
    );
  }

  // Case 3: User has test history but invalid or incomplete raw_score
  const hasValidPersonalityData =
    profileUserData.raw_score &&
    profileUserData.raw_score.personalityType &&
    profileUserData.raw_score.personalityType !== "Unknown" &&
    profileUserData.raw_score.traitScores;

  if (!hasValidPersonalityData) {
    return (
      <>
        <Navbar user={viewingUserData} />
        <IncompleteDataFallback username={profileUsername} />
      </>
    );
  }

  // All good - show full profile
  return (
    <div className="min-h-screen bg-background ">
      {viewingUserData ? (
        <Navbar user={viewingUserData}  />
      ) : (
        <Navbar />
      )}
      <main className="container mt-24 mx-auto px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Profile header with basic viewingUserData information */}
          <ProfileHeader
            userData={profileUserData}
            isOwner={viewingUserData?.username === profileUsername}
          />

          {/* Detailed personality analysis */}
          <PersonalityShowcase
            personalityType={profileUserData.raw_score.personalityType}
            traitScores={profileUserData.raw_score.traitScores}
          />

          {/* MBTI-specific insights and comparisons */}
          <MBTIInsights personalityType={profileUserData.raw_score.personalityType} />

          {/* Test history  */}
          <TestHistory fullTestHistory={profileUserData.user_test_history} />
        </div>
      </main>
    </div>
  );
}
