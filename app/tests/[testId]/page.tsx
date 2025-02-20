"use client";
import { notFound, useParams } from "next/navigation"
import TestHeader from "./(components)/TestHeader"
import OverviewCard from "./(components)/OverviewCard"
import DiscoverySection from "./(components)/DiscoverySection"
import TestDetails from "./(components)/TestDetails"
import UserProgress from "./(components)/UserProgress"
import RelatedTests from "./(components)/RelatedTests"
import ActionArea from "./(components)/ActionArea"
import { getTestData } from "@/lib/supabase"
import Navbar from "@/components/navbar"

export default  function TestInfoPage() {
  const params = useParams();
  const testData = getTestData(params.testId as string);

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
          <UserProgress testId={params.testId} />
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

