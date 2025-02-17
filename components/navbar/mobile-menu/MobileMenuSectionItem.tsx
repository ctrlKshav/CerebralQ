// components/navbar/MobileLinkItem.tsx
import React from "react"
import { MenuSectionItemProps } from "@/types/navbarTypes"

export const MobileItem: React.FC<MenuSectionItemProps> = (
  ({ title, href, icon, children, ...props }) => {
  return (
    <a 
      href={href} 
      className="flex items-center gap-3 py-2 hover:bg-gray-100" 
      target="_blank"
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      <div className="flex items-center gap-2">
        {icon}
        <div className="font-medium text-base leading-none">
          {title}
        </div>
      </div>
    </a>
  )
} 
)
