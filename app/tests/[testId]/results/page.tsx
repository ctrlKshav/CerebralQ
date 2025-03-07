import Results from "@/components/results";
import Navbar from "@/components/navbar";
import { createClient } from "@/utils/supabase/server";
import { Redirect } from "next";

export default async function ResultsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();


  // Fetch user data including username
  const { data: userData } = await supabase
    .from("users")
    .select("username")
    .eq("id", user?.id)
    .single();
    
  return (
    <div className="">
      {user ? <Navbar user={user} username={userData?.username} /> : <Navbar />}
      <div className="mt-24">
        <Results />
      </div>
    </div>
  );
}
