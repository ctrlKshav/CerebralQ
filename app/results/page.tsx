import Results from "@/components/results";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import { Redirect } from "next";
import { getCurrentUser } from "@/lib/supabaseOperations";

export default async function ResultsPage() {
  const user = await getCurrentUser();

  return (
    <div className="relative">
      <div className="sticky top-0 z-50">
        {user ? <Navbar user={user} /> : <Navbar />}
      </div>
      <div className="mt-16">
        <Results />
      </div>
    </div>
  );
}
