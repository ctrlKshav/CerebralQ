"use client";
import { User } from "@/types/supabase/users";
import ProtectedNavbar from "./ProtectedNavbar";
import UnprotectedNavbar from "./UnprotectedNavbar";

interface NavbarProps {
  className?: string;
  user?: User | null;
  username?: string | null;
}

const Navbar = ({ className, user, username }: NavbarProps) => {
  // Simply render the appropriate navbar based on whether user data exists
  if (user) {
    return <ProtectedNavbar className={className} user={user} username={username} />;
  }

  return <UnprotectedNavbar className={className} />;
}

export default Navbar;
