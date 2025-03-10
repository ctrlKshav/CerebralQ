"use client";
import { User } from "@/types/supabase/users";
import ProtectedNavbar from "./ProtectedNavbar";
import UnprotectedNavbar from "./UnprotectedNavbar";

interface NavbarProps {
  className?: string;
  user?: User | null;
}

const Navbar = ({ className, user }: NavbarProps) => {
  // Simply render the appropriate navbar based on whether user data exists
  if (user) {
    return <ProtectedNavbar className={className} user={user}/>;
  }

  return <UnprotectedNavbar className={className} />;
}

export default Navbar;
