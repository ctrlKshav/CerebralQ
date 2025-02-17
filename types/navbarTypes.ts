import type { ReactNode } from "react"

export interface MenuSectionItemProps{
    title: string
    href: string
    icon?: ReactNode
    children?: ReactNode
  };


export interface MobileSectionProps {
  title: string
  isSheetOpen?: boolean
  setIsSheetOpen: (isSheetOpen: boolean) => void
}  

export interface MobileMenuItemProps {
  href: string
  className?: string
  children: ReactNode
  isSheetOpen: boolean
  setIsSheetOpen: (isSheetOpen: boolean) => void
}

