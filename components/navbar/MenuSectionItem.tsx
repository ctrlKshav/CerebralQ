﻿import React from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuSectionItemProps } from "@/types/navbarTypes";

export const MenuSectionItem: React.FC<MenuSectionItemProps> = ({
  title,
  children,
  icon,
  ...props
}) => {
  const Icon = icon;
  return (
    <li>
      <NavigationMenuLink
        className={cn(
          "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-background focus:bg-primary focus:text-accent-foreground"
        )}
        {...props}
      >
        <div className="flex items-center gap-2 group">
          {Icon && <Icon className="text-primary group-hover:text-white" />}
          <div className="text-base font-medium leading-none group-hover:text-white">
            {title}
          </div>
        </div>
        {children && (
          <p className="line-clamp-2 text-base leading-snug text-muted-foreground group-hover:text-white">
            {children}
          </p>
        )}
      </NavigationMenuLink>
    </li>
  );
};
MenuSectionItem.displayName = "MenuSectionItem";
