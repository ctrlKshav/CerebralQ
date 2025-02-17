import React, { useState } from "react";
import { MenuSectionItem } from "@/components/navbar/MenuSectionItem";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MapPinPlus } from "lucide-react";
import Link from "next/link";
import { assessmentItems } from "@/data/navbar";

export const MenuSection = (props: { data: any }) => {
  const items = [...props.data]
  return (
    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
      {items.map((item) => (
        <MenuSectionItem
          key={item.title}
          title={item.title}
          href={item.href}
          icon={item.icon}
        >
          {item.description}
        </MenuSectionItem>
      ))}
    </ul>
  );
};
