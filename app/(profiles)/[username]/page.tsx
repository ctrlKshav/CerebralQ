"use client";
import { useState, useEffect, use } from "react";
import { createClient } from "@/utils/supabase/client";
import { getUserProfileByUsername } from "@/lib/supabase-operations/getUserProfile";
import { useRouter } from "next/navigation";

// Components
import Navbar from "@/components/navbar";
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

  const profileUsername = decodeURIComponent(searchParams.username);
  const [profileData, setProfileData] = useState<UserProfile | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileData = await getUserProfileByUsername(profileUsername);
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
      <main className="mt-24 px-4 py-8 lg:px-16 space-y-10"></main>
    </div>
  );
}
