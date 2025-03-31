"use client"

import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useState } from "react"
import { SidebarNavDataType } from "@/data/report/sidebarNav"

export function SidebarNavMain({
  items,
}: {
  items: SidebarNavDataType["navMain"]
}) {
  const [ activeItem, setActiveItem] = useState<string>(items[0].title);
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
              isActive={item.title === activeItem}
              onClick={() => setActiveItem(item.title)}
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
