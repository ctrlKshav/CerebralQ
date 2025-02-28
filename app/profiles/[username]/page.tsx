"use client";
import ProfileHeader from "@/components/profile/profile-header";
import PersonalityShowcase from "@/components/profile/personality-showcase";
import TestHistory from "@/components/profile/test-history";
import TestsSummary from "@/components/profile/tests-summary";
import MBTIInsights from "@/components/profile/mbti-insights";
import { getUserProfile, UserProfile } from "@/data/profile";
import Navbar from "@/components/navbar";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import LoadingSkeleton from "@/components/loading-skeleton";

export default function ProfilePage() {
  const params = useSearchParams();
  const [userData, setUserData] = useState<UserProfile | null>(null);
  
  useEffect(() => {
    const func = async () => {
      const userData = await getUserProfile(params.get("username") || "");
      setUserData(userData);
    };
    func();
  }, [params]);

  if (userData === null) {
    return <LoadingSkeleton />;
  }

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
