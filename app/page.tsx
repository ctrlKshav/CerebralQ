"use client";
import Navbar from "@/components/navbar";
import TestInformation from "@/components/test-info";
import React from "react";
import { useUserData } from "@/context/user-data";

export default function TestInformationPage() {
  const userDataContext = useUserData();

  if (userDataContext === null) {
    return null;
  }

  const { userData, setUserData } = userDataContext;
  return (
    <>
      <Navbar user={userData} />
      <div className="mt-16">
        <TestInformation testId={"mbti"} />
      </div>
    </>
  );
}
