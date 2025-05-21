"use client";
import { useEffect } from "react";
import { profileData } from "@/data/mockData";
import ProfileHeader from "@/components/profile/new/ProfileHeader";
import MBTIAssessment from "@/components/profile/new/MBTIAssessment";
import DISCAssessment from "@/components/profile/new/DISCAssessment";
import OCEANAssessment from "@/components/profile/new/OCEANAssessment";
import HEXACOAssessment from "@/components/profile/new/HEXACOAssessment";
import TestHistory from "@/components/profile/new/TestHistory";
import InsightsSection from "@/components/profile/new/InsightsSection";
import RecommendedTests from "@/components/profile/new/RecommendedTests";

export default function Profile() {
  const handleDownloadReport = () => {
    // In a real implementation, this would generate and download a PDF report
    alert("Downloading profile report...");
  };

  return (
    <div className="w-full mx-auto py-12 bg-background">
      <div className="max-w-[1400px] mx-auto px-4">
        <ProfileHeader
          user={profileData.user}
          proficiencyLevel={profileData.proficiencyLevel}
          isInsider={profileData.isInsider}
          assessmentResults={profileData.assessmentResults}
        />

        {/* Main Assessment Results - Full Width Layout */}
        <div className="space-y-16 mt-16">
          <MBTIAssessment result={profileData.mbtiResult} />
          <DISCAssessment result={profileData.discResult} />
          <OCEANAssessment result={profileData.oceanResult} />
          <HEXACOAssessment result={profileData.mbtiResult} />{" "}
          {/* Using MBTI data as placeholder */}
          <InsightsSection insights={profileData.insights} />
          <TestHistory history={profileData.testHistory} />
          <RecommendedTests tests={profileData.recommendedTests} />
        </div>
      </div>

    </div>
  );
}
