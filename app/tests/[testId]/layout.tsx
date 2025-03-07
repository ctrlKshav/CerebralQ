"use client"
import React from 'react'
import { use } from 'react'
import { notFound } from 'next/navigation'

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ testId: string }>;
}) {
  const slug = use(params);
  const testId = slug.testId;
  
  // Only show the page if testId is "mbti", otherwise show "not found"
  if (testId.toLowerCase() !== "mbti") {
    notFound();
  }
  
  return (
    <div>
      {children}
    </div>
  )
}
