"use client"
import Navbar from "@/components/navbar";
import TestInformation from "@/components/test-info";
import { useUserData } from "@/context/user-data";

export default function ProtectedPage() {
  const userDataContext = useUserData();

  if(userDataContext === null) {
    return null;
  }

  const {userData, setUserData} = userDataContext

  return (
    <div>
      <Navbar user={userData}/>
      <div className="mt-24">
        <TestInformation testId="mbti" /> 
      </div>
    </div>
  );
}
