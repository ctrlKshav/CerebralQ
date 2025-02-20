"use client";
import { notFound, useParams } from "next/navigation"
import TestHeader from "@/components/test-info/TestHeader"
import OverviewCard from "@/components/test-info/OverviewCard"
import DiscoverySection from "@/components/test-info/DiscoverySection"
import TestDetails from "@/components/test-info/TestDetails"
import UserProgress from "@/components/test-info/UserProgress"
import RelatedTests from "@/components/test-info/RelatedTests"
import ActionArea from "@/components/test-info/ActionArea"
import { getTestData, TestData } from "@/lib/supabase"
import Navbar from "@/components/navbar"

export default function TestInfoPage() {
  const params = useParams<{testId: string}>();
  const testData = getTestData(params.testId)

  if (!testData) {
    notFound()
  }

  return (
    <>
    <Navbar />
    <div className="container mx-auto px-4 py-8 mt-16">
      <TestHeader test={testData} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-2">
          <OverviewCard test={testData} />
          <DiscoverySection test={testData} />
          <TestDetails test={testData} />
          <UserProgress testId={params.testId as string} />
        </div>
        <div>
          <ActionArea test={testData} />
          <RelatedTests relatedTests={testData.complementary_tests} />
        </div>
      </div>
    </div>
    </>
  )
}

