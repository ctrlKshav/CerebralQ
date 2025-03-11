import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <Contact />
      </div>
    </>
  );
}
