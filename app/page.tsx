"use client";
import Navbar from "@/components/navbar";
import TestInformation from "@/components/test-info";
import React from "react";
import { useUserDataContext } from "@/context/user-data";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function TestInformationPage() {
  const userDataContext = useUserDataContext();

  if (userDataContext === null) {
    return null;
  }

  const { userData, setUserData, loading } = userDataContext;

  if(loading) return <LoadingSkeleton />
  
  return (
    <>
      <Navbar user={userData} />
      <div className="mt-24">
        <TestInformation testId={"mbti"} />
      </div>
    </>
  );
}
