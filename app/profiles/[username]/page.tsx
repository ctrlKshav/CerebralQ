import type { Metadata } from "next"
import ProfileHeader from "@/components/profile/profile-header"
import PersonalityShowcase from "@/components/profile/personality-showcase"
import CognitiveMetrics from "@/components/profile/cognitive-metrics"
import ComparativeInsights from "@/components/profile/comparative-insights"
import { getUserProfile } from "@/data/profile"

export async function generateMetadata({ params }: { params: { username: string } }): Promise<Metadata> {
  const userData = await getUserProfile(params.username)

  return {
    title: `${userData.username} | Cerebral Quotient`,
    description: `View ${userData.username}'s cognitive profile and personality insights on Cerebral Quotient.`,
    openGraph: {
      images: [userData.profile_image_url],
    },
  }
}

export default async function ProfilePage({ params }: { params: { username: string } }) {
  const userData = await getUserProfile(params.username)

  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-4xl mx-auto px-4 py-8 space-y-12">
        <ProfileHeader userData={userData} />
        <PersonalityShowcase personalityType={userData.raw_score.personalityType} />
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
      </main>
    </div>
  )
}
