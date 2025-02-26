"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icon";
import { testData } from "@/data/mbti";
import CQLogo from "../cq-logo";

export default function MobileTopbar({
  currentStepText,
}: {
  currentStepText: string;
}) {
  const currentTest = testData[0];
  return (
    <div>
      {/* Mobile Topbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-10 dark:bg-gray-800/50 backdrop-blur-sm p-4 flex justify-between items-center">
        <div className="order-2">
          <div className="flex flex-col items-end ">
            <span className="font-bold text-xl">{currentTest.test_name}</span>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {currentStepText}
            </div>
          </div>
        </div>
        <Link href="/" className="order-1">
          <CQLogo className="w-14 h-12" />
        </Link>
      </div>
    </div>
  );
}
