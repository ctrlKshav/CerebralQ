import ProtectedNavbar from "@/components/navbar/ProtectedNavbar";
import Navbar from "@/components/navbar";
import TestInformation from "@/components/test-info";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import LoadingSkeleton from "@/components/loading-skeleton";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }
  
  // Fetch user data including username
  const { data: userData } = await supabase
    .from('users')
    .select('username')
    .eq('id', user.id)
    .single();
    
  const username = userData?.username ?? null;

  return (
    <div>
      <Navbar user={user} username={username} />
      <div className="mt-24">
        <TestInformation /> 
      </div>
    </div>
  );
}
