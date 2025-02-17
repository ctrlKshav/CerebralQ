// components/navbar/MobileMenuItem.tsx
import React from "react";
import { MobileMenuItemProps } from "@/types/navbarTypes";
import Link from "next/link";
import { UserCircle } from "lucide-react";

export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  title,
  href,
  setIsSheetOpen,
  className,
}) => (
  <>
    <Link
      href="/profile"
      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-accent"
      onClick={() => setIsSheetOpen(false)}
    >
      <UserCircle className="w-6 h-6 text-primary" />
      <span>{title}</span>
    </Link>
  </>
);
