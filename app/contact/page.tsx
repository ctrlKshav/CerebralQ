import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import React from "react";

export default async function ContactPage() {
  
  return (
    <>
      <Navbar />
      <div className="mt-24">
        <Contact />
      </div>
    </>
  );
}
