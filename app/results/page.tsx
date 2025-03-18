import Results from "@/components/results";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import { Redirect } from "next";
import { getCurrentUser } from "@/lib/supabaseOperations";

export default async function ResultsPage() {
  

  const user = await getCurrentUser();

  return (
    <div className="">
      {user ? <Navbar user={user} /> : <Navbar />}
      <div className="mt-24">
        <Results />
      </div>
    </div>
  );
}
