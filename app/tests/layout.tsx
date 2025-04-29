"use client";
import Navbar from "@/components/navbar";
import React from "react";
import { useUserDataContext } from "@/context/user-data";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userDataContext = useUserDataContext();

  if (userDataContext === null) {
    return null;
  }

  const { userData, loading } = userDataContext;

  if (loading) return <LoadingSkeleton />;

  return (
    <>
      <Navbar user={userData} />
      <div className="mt-24">{children}</div>
    </>
  );
}
