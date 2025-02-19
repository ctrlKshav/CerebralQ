import type { ReactNode } from "react"

export interface MenuSectionItemProps{
    title: string
    href: string
    icon?: any
    children?: ReactNode
  };


export interface MobileMenuSectionType {
  title: string
  data: any
  isSheetOpen?: boolean
  setIsSheetOpen: (isSheetOpen: boolean) => void
}  

export interface MobileMenuItemProps {
  title? : string
  href: string
  className?: string
  children?: ReactNode
  isSheetOpen: boolean
  setIsSheetOpen: (isSheetOpen: boolean) => void
}

