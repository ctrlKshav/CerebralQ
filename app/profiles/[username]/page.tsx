"use client";
import { useState, useEffect, use } from "react";
import { createClient } from "@/utils/supabase/client";
import { getCurrentUser, getUserByUsername } from "@/lib/supabaseOperations";
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
import { User } from "@/types/supabase/users";
import { UserProfile } from "@/types/supabase/user-profile";

export default function ProfilePage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();
  const searchParams = use(params);
  const profileUsername = searchParams.username;
  const [user, setUser] = useState<User | null>(null);
  const [viewerUsername, setViewerUsername] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Separate useEffect for auth data to clearly segregate concerns
  useEffect(() => {
    const getAuthUser = async () => {
      setAuthLoading(true);
      const user = await getCurrentUser();
      if (user) {
        setUser(user);
        const { data: userData } = await supabase
          .from('users')
          .select('username')
          .eq('id', user.id)
          .single();
        setViewerUsername(userData?.username ?? null);
      }
      setAuthLoading(false);
    }
    getAuthUser();
  }, []);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userData = await getUserByUsername(profileUsername);
        setUserData(userData);
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
  if (!userData) {
    return (
      <>
        <Navbar user={user}  />
        <UserNotFoundFallback username={profileUsername} />
      </>
    );
  }

  // Case 2: User exists but has no test history
  if (userData.user_test_history.length === 0) {
    return (
      <>
        <Navbar user={user}/>
        <NoTestsFallback username={profileUsername}  profileImageUrl={userData.profile_image_url} bio={userData.bio} />
      </>
    );
  }

  // Case 3: User has test history but invalid or incomplete raw_score
  const hasValidPersonalityData =
    userData.raw_score &&
    userData.raw_score.personalityType &&
    userData.raw_score.personalityType !== "Unknown" &&
    userData.raw_score.traitScores;

  if (!hasValidPersonalityData) {
    return (
      <>
        <Navbar user={user} />
        <IncompleteDataFallback username={profileUsername} profileImageUrl={userData.profile_image_url} bio={userData.bio}  />
      </>
    );
  }

  // All good - show full profile
  return (
    <div className="min-h-screen bg-background ">
      {user ? <Navbar user={user} /> : <Navbar  />}
      <main className="container mt-24 mx-auto px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Profile header with basic user information */}
          <ProfileHeader 
            userData={userData} 
            isOwner={viewerUsername === profileUsername} 
          />

          {/* Detailed personality analysis */}
          <PersonalityShowcase
            personalityType={userData.raw_score.personalityType}
            traitScores={userData.raw_score.traitScores}
          />

          {/* MBTI-specific insights and comparisons */}
          <MBTIInsights personalityType={userData.raw_score.personalityType} />

          {/* Test history  */}
          <TestHistory fullTestHistory={userData.user_test_history} />
        </div>
      </main>
    </div>
  );
}
