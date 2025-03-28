import Results from "@/components/results/report";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import { Redirect } from "next";
import { getCurrentUser } from "@/lib/supabaseOperations";
import CQLogo from "@/components/CQLogo";

export default async function ResultsPage() {

  return (
    <div className="">
      <div className="">
        <CQLogo />
      </div>
      <Results />
    </div>
  );
}
