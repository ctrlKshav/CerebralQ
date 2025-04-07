"use client";
import Navbar from "@/components/navbar";
import MBTITestInformation from "@/components/test-info/mbti";
import React, { use } from "react";
import { useUserDataContext } from "@/context/user-data";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import OceanTestInformation from "@/components/test-info/ocean";

export default function TestInformationPage({
  params,
}: {
  params: Promise<{ testCode: string }>;
}) {
  const userDataContext = useUserDataContext();
  const testCode = use(params).testCode;

  if (userDataContext === null) {
    return null;
  }

  const { userData, setUserData, loading } = userDataContext;

  if (loading) return <LoadingSkeleton />;

  return (
    <>
      <Navbar user={userData} />
      <div className="mt-24">
        {testCode === "mbti" && <MBTITestInformation />}
        {testCode === "ocean" && <OceanTestInformation />}
      </div>
    </>
  );
}
