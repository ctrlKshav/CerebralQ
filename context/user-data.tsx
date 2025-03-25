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
  loading: boolean; // Add loading state to the context type
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
  const [loading, setLoading] = useState(true); // Initialize loading state
  const router = useRouter();

  useEffect(() => {
    const func = async () => {
      try {
        setLoading(true); // Set loading to true when starting to fetch
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

        setLoading(false); // Set loading to false when done fetching

        // Clean up subscription on unmount
        return () => {
          if (channel) channel.unsubscribe();
        };
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false); // Make sure to set loading to false even on error
      }
    };
    func();
  }, [router, supabase]);

  return (
    <UserDataContext.Provider value={{ userData, setUserData, loading }}>
      {children}
    </UserDataContext.Provider>
  );
}