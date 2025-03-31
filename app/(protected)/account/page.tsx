"use client";
import { useUserDataContext } from "@/context/user-data";
import Account from "@/components/account";
import Navbar from "@/components/navbar";
import LoadingSkeleton from "@/components/LoadingSkeleton";

export default function Page() {
  const userDataContext = useUserDataContext();

  if (userDataContext === null) {
    return null;
  }

  const { userData, setUserData } = userDataContext;

  if (userData === null) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="">
      <Navbar user={userData} />
      <div className="mt-24">
        <Account userData={userData} />
      </div>
    </div>
  );
}
