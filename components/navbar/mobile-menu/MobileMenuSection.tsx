// components/navbar/Section.tsx
import React, { useState } from "react"
import { ChevronDown, MapPinPlus } from "lucide-react"
import { MobileItem } from "@/components/navbar/mobile-menu/MobileMenuSectionItem"
import { MobileMenuSectionType } from "@/types/navbarTypes"
import  Link  from "next/link"
import { cn } from "@/lib/utils"

export const MobileMenuSection: React.FC<MobileMenuSectionType> = ({title, data, setIsSheetOpen}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const items = [...data]
    return (
    <div className="">
      <div 
        className="flex justify-between items-center py-3 pr-2 cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-md">{title}</span>
        <ChevronDown 
          className={`w-5 h-5 transform transition-transform ${isOpen ? "rotate-180" : ""}`} 
        />
      </div>

      {isOpen && (
        <div className="pl-4 pb-2">
          {items.map((item) => (
           <MobileItem 
              key={item.id} 
              title={item.title} 
              href={item.link ?? "/"} 
              icon={item.icon()}
            />
          ))}
        </div>
      )}
      
    </div>
  )
}