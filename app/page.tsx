"use client"
import Navbar from "@/components/navbar";
import TestInformation from "@/components/test-info";
import React from "react";

export default function TestInformationPage() {
  
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <TestInformation testId={"mbti"} />
      </div>
    </>
  );
}
