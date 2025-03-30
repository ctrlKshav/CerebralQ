"use client";
import { useContext } from "react";
import { UserDataContext } from "@/context/user-data";
import Account from "@/components/account";
import Navbar from "@/components/navbar";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import UserTestHistory from "@/components/test-history";

export default function Page() {
  const userDataContext = useContext(UserDataContext);

  if (userDataContext === null) {
    return null;
  }

  const { userData, setUserData } = userDataContext;

  if (userData === null) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar user={userData} />
      <div className="w-full">
        <UserTestHistory />
      </div>
    </div>
  );
}
