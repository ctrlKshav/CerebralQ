"use client";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import ProtectedNavbar from "./ProtectedNavbar";
import UnprotectedNavbar from "./UnprotectedNavbar";
import { User } from "@supabase/supabase-js";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <UnprotectedNavbar className={className} />
  )
}

export default Navbar;
