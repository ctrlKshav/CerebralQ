"use client";
import React from "react";
import Link from "next/link";
import CQLogo from "../CQLogo";

export default function MobileTopbar({
  currentStepText,
  testName
}: {
  currentStepText: string;
  testName: string;
}) {

  return (
    <div>
      {/* Mobile Topbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-10 dark:bg-gray-800/50 backdrop-blur-sm px-4 flex justify-between items-center h-24">
        <div className="order-2">
          <div className="flex flex-col items-end ">
            <span className="font-bold text-xl">{testName}</span>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {currentStepText}
            </div>
          </div>
        </div>
        <Link href="/" className="order-1 ">
          <CQLogo className="w-24 h-24 sm:w-28 sm:h-28" />
        </Link>
      </div>
    </div>
  );
} 