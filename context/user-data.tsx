"use client";

import LoadingSkeleton from "@/components/LoadingSkeleton";
import { getCurrentUser } from "@/lib/supabaseOperations";
import { User } from "@/types/supabase/users";
import { createClient } from "@/utils/supabase/client";
import { RealtimeChannel } from "@supabase/supabase-js";
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
    throw new Error(
      "useUserData must be used within a UserDataContextProvider"
    );
  }
  return context;
};

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

      setUserData(data);
      let channel: RealtimeChannel;
      if (data) {
        // Set up realtime subscription for user data changes
        const userId = data.id;
        channel = supabase
          .channel(`public:users:id=eq.${userId}`)
          .on(
            "postgres_changes",
            {
              event: "UPDATE",
              schema: "public",
              table: "users",
              filter: `id=eq.${userId}`,
            },
            (payload) => {
              setUserData((currentData) => {
                if (!currentData) return null;
                return { ...currentData, ...(payload.new as Partial<User>) };
              });
            }
          )
          .subscribe();
      }

      // Clean up subscription on unmount
      return () => {
        channel.unsubscribe();
      };
    };
    func();
  }, [router, supabase]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  );
}
