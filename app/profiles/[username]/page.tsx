"use client"
import type { Metadata } from "next"
import ProfileHeader from "@/components/profile/profile-header"
import PersonalityShowcase from "@/components/profile/personality-showcase"
import CognitiveMetrics from "@/components/profile/cognitive-metrics"
import ComparativeInsights from "@/components/profile/comparative-insights"
import { getUserProfile, UserProfile } from "@/data/profile"
import Navbar from "@/components/navbar"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import LoadingSkeleton from "@/components/loading-skeleton"

export default function ProfilePage() {
  const params = useSearchParams()
  const [userData, setUserData] = useState<UserProfile | null >(null)
  useEffect(() => {
    const func = async () => {
      const userData = await getUserProfile(params.get("username") || "")
      setUserData(userData)
    }
    func()
  }, [params])

  if(userData === null) {
    return <LoadingSkeleton /> 
  }

  return (
    <div className="min-h-screen bg-background mt-16">
      <Navbar className="mb-6" />
      <main className="container mx-auto px-4 py-8 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <ProfileHeader userData={userData} />
          
          
            <PersonalityShowcase 
              personalityType={userData.raw_score.personalityType} 
              traitScores={userData.raw_score.traitScores}
            />
            <CognitiveMetrics
              iqScore={userData.raw_score.iq}
              bigFiveTraits={userData.raw_score.bigFive}
              testHistory={userData.user_test_history}
            />
          
          
          <ComparativeInsights
            personalityType={userData.raw_score.personalityType}
            cognitivePercentile={userData.raw_score.cognitivePercentile}
            globalRanking={userData.raw_score.globalRanking}
          />
        </div>
      </main>
    </div>
  )
}
