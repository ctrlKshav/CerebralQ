// components/navbar/MobileMenuItem.tsx
import React from "react"
import { MobileMenuItemProps } from "@/types/navbarTypes"

export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ href, children, setIsSheetOpen, className}) => (
  <a href={href} onClick={() => { setIsSheetOpen(false) }} className={`block py-3 px-4 hover:bg-gray-100 transition-colors text-base  ${className}`} 
    target="_blank">
    {children}
  </a>
)