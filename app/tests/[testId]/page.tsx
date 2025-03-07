import Navbar from "@/components/navbar";
import TestInformation from "@/components/test-info";
import React from "react";
import { use } from "react";
import { notFound } from "next/navigation";

export default function TestInformationPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const slug = use(params);
  const testId = slug.testId;
  
  // Only show the page if testId is "mbti", otherwise show "not found"
  if (testId.toLowerCase() !== "mbti") {
    notFound();
  }
  
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <TestInformation testId={testId} />
      </div>
    </>
  );
}
