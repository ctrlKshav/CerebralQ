import React from "react";
import { UserDataContextProvider } from "@/context/user-data";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <UserDataContextProvider>{children}</UserDataContextProvider>;
}
