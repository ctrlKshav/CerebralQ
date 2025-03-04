"use client";
import { Button } from "@/components/ui/button";
import { signOutAction } from "@/app/actions";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { SAVED_RESULTS_KEY, TEST_RESULTS_KEY, RETURN_URL_KEY } from "@/constants/constants";

export default function LogoutButton() {

  const handleLogout = async () => {
    // Clear relevant localStorage items before logging out
    localStorage.removeItem(SAVED_RESULTS_KEY);
    localStorage.removeItem(TEST_RESULTS_KEY);
    localStorage.removeItem(RETURN_URL_KEY);

    // Call the server action to handle the actual logout
    await signOutAction();
  };

  return (
    <Button
      variant="outline"
      className="w-full text-base flex items-center"
      onClick={handleLogout}
    >
      <LogOut className="mr-2 h-4 w-4" />
      Log out
    </Button>
  );
}
