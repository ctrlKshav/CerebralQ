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
  IncompleteDataFallback 
} from "@/components/profile/profile-fallbacks";

export default function ProfilePage({params}: {params: Promise<{username: string}>}) {
  const [userData, setUserData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const supabase = createClient();
  const searchParams = use(params);
  const username = searchParams.username;
  
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userData = await getUserByUsername(username);
        setUserData(userData);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile data");
      } finally {
        setLoading(false);
      }
    };
    
    fetchProfileData();
  }, [username]);

  // Show loading state
  if (loading) {
    return (
      <>
        <Navbar className="mb-16" />
        <LoadingSkeleton />
      </>
    );
  }

  // Case 1: User doesn't exist
  if (!userData) {
    return (
      <>
        <Navbar className="mb-16" />
        <UserNotFoundFallback username={username} />
      </>
    );
  }

  // Case 2: User exists but has no test history
  if (userData.user_test_history.length === 0) {
    return (
      <>
        <Navbar className="mb-16" />
        <NoTestsFallback username={username} />
      </>
    );
  }

  // Case 3: User has test history but invalid or incomplete raw_score
  const hasValidPersonalityData = userData.raw_score && 
                                 userData.raw_score.personalityType && 
                                 userData.raw_score.personalityType !== "Unknown" &&
                                 userData.raw_score.traitScores;

  if (!hasValidPersonalityData) {
    return (
      <>
        <Navbar className="mb-16" />
        <IncompleteDataFallback username={username} />
      </>
    );
  }

  // All good - show full profile
  return (
    <div className="min-h-screen bg-background mt-16">
      <Navbar className="mb-6" />
      <main className="container mx-auto px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          {/* Profile header with basic user information */}
          <ProfileHeader userData={userData} />
          
          {/* Detailed personality analysis */}
          <PersonalityShowcase
            personalityType={userData.raw_score.personalityType}
            traitScores={userData.raw_score.traitScores}
          />

          {/* MBTI-specific insights and comparisons */}
          <MBTIInsights
            personalityType={userData.raw_score.personalityType}
          />

          {/* Test history  */}
          <TestHistory testHistory={userData.user_test_history} />
        </div>
      </main>
    </div>
  );
}
