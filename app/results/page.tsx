import Results from "@/components/results/report";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import { Redirect } from "next";
import { getCurrentUser } from "@/lib/supabaseOperations";

export default async function ResultsPage() {

  return (
    <div className="">
      <Results />
    </div>
  );
}
