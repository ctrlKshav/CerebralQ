"use client";
import Navbar from "@/components/navbar";
import TestInformation from "@/components/test-info";
import React, { use } from "react";
import { useUserDataContext } from "@/context/user-data";
import LoadingSkeleton from "@/components/LoadingSkeleton";

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
        <TestInformation testCode={testCode} />
      </div>
    </>
  );
}
