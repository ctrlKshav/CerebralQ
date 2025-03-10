import ProtectedNavbar from "@/components/navbar/ProtectedNavbar";
import Navbar from "@/components/navbar";
import TestInformation from "@/components/test-info";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import LoadingSkeleton from "@/components/loading-skeleton";
import { useContext } from "react";
import { UserDataContext, useUserData } from "@/context/user-data";

export default async function ProtectedPage() {
  const userDataContext = useUserData();

  if(userDataContext === null) {
    return null;
  }

  const {userData, setUserData} = userDataContext

  return (
    <div>
      <Navbar user={userData} username={userData?.username} />
      <div className="mt-24">
        <TestInformation testId="mbti" /> 
      </div>
    </div>
  );
}
