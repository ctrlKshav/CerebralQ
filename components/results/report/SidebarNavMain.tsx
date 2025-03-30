"use client"

import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function SidebarNavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-sm font-semibold mb-2">Sections</SidebarGroupLabel>
      <SidebarMenu className="gap-2">
        {items.map((item) => (
          <SidebarMenuItem key={item.title} className="my-1">
            <SidebarMenuButton 
              variant={"default"}
              asChild 
              tooltip={item.title} 
              isActive={item.isActive}
              className="h-12 px-3 py-3 text-base font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <a href={item.url} className="flex items-center gap-3">
                <item.icon className="size-5 flex-shrink-0" />
                <span className="truncate">{item.title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
