﻿import type { ReactNode } from "react"
import { LucideIcon } from "lucide-react"

export interface MenuSectionItemProps{
    title: string
    href: string
    icon?: LucideIcon
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
  icon?: LucideIcon
}

export interface UserMenuProps {
  user?: {
    name?: string;
    email?: string;
    avatarUrl?: string;
  };
  onSignOut: () => Promise<void>;
}

