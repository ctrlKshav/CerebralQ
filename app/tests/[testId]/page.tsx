import Navbar from "@/components/navbar";
import TestInformation from "@/components/test-info";
import React from "react";
import { use } from "react";

export default function TestInformationPage({
  params,
}: {
  params: Promise<{ testId: string }>;
}) {
  const slug = use(params);
  const testId = slug.testId;
  
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <TestInformation testId={testId} />
      </div>
    </>
  );
}
