// components/navbar/MobileLinkItem.tsx
import React from "react"
import { MenuSectionItemProps } from "@/types/navbarTypes"

export const MobileItem: React.FC<MenuSectionItemProps> = (
  ({ title, href, icon, children, ...props }) => {
    const Icon = icon;
  return (
    <a 
      href={href} 
      className="flex items-center gap-3 py-2 hover:bg-gray-100" 
      target="_blank"
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon className="w-5 h-5 text-primary" />}
        <div className="font-medium text-base leading-none">
          {title}
        </div>
      </div>
    </a>
  )
} 
)
