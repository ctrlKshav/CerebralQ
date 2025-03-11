// components/navbar/MobileMenuItem.tsx
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MobileMenuItemProps } from "@/types/navbarTypes";

export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  title,
  href,
  className,
  children,
  isSheetOpen,
  setIsSheetOpen,
  icon,
}) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      onClick={() => setIsSheetOpen(false)}
      className={cn(
        "block py-2 hover:text-primary text-base",
        className
      )}
    >
      <div className="flex items-center space-x-2">
        {Icon && <Icon />}
        <span>{title}</span>
      </div>
      {children}
    </Link>
  );
};
