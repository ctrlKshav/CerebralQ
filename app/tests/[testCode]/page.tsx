"use client";
import MBTITestInformation from "@/components/test-info/mbti";
import React, { use } from "react";
import OceanTestInformation from "@/components/test-info/ocean";

export default function TestInformationPage({
  params,
}: {
  params: Promise<{ testCode: string }>;
}) {
  const testCode = use(params).testCode;

  return (
    <>
      {testCode === "mbti" && <MBTITestInformation />}
      {testCode === "ocean" && <OceanTestInformation />}
    </>
  );
}
