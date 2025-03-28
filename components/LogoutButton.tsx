﻿"use client";
import { Button } from "@/components/ui/button";
import { signOutAction } from "@/app/actions";
import { useState } from "react";
import { LogOut, Loader2 } from "lucide-react";
import { SAVED_RESULTS_KEY, TEST_RESULTS_KEY, RETURN_URL_KEY, PROGRESS_KEY } from "@/lib/constants";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      // Clear relevant localStorage items before logging out
      localStorage.removeItem(SAVED_RESULTS_KEY);
      localStorage.removeItem(TEST_RESULTS_KEY);
      localStorage.removeItem(RETURN_URL_KEY);
      localStorage.removeItem(PROGRESS_KEY);

      // Call the server action to handle the actual logout
      await signOutAction();
      window.location.href = "/";
    } catch (error) {
      setIsLoading(false);
      console.error("Logout failed:", error);
    }
  };

  return (
    <Button
      variant="outline"
      className="w-full text-base flex items-center"
      onClick={handleLogout}
      disabled={isLoading}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <LogOut className="mr-2 h-4 w-4" />
      )}
      {isLoading ? "Logging out..." : "Log out"}
    </Button>
  );
}