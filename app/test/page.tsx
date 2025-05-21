import React from "react";
import Profile from "@/components/profile/new";
import Navbar from "@/components/navbar";
export default function page() {
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <Profile />
      </div>
    </>
  );
}
