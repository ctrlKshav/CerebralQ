"use client"

import { getCurrentUser } from "@/lib/supabaseOperations";
import { User } from "@/types/supabase/users";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, useContext } from "react";
import { createContext } from "react";

type UserDataContextType = {
  userData: User | null;
  setUserData: React.Dispatch<React.SetStateAction<User | null>>;
};  

export const UserDataContext = createContext<UserDataContextType | null>(null);

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error("useUserData must be used within a UserDataContextProvider");
  }
  return context;
}

export function UserDataContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const [userData, setUserData] = useState<User | null>(null);
  const router = useRouter();

  
  useEffect(() => {
    const func = async () => {
      const data = await getCurrentUser();
      if(data === null) 
        return router.push("/sign-in");
      setUserData(data);

    }
    func();

  }, []);
  
  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}
