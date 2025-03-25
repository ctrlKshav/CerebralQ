"use client"
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import React from "react";
import { useUserData } from "@/context/user-data";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function ContactPage() {
  const userDataContext = useUserData();

  if (userDataContext === null) {
    return null;
  }

  const { userData, setUserData, loading } = userDataContext;

  if (loading) return <LoadingSkeleton />;
  return (
    <>
      <Navbar user={userData} />
      <div className="mt-24">
        <Contact />
      </div>
    </>
  );
}
