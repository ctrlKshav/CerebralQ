import React, { useState } from "react"
import { MenuSectionItem } from "@/components/navbar/MenuSectionItem"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { MapPinPlus } from "lucide-react"
import Link  from "next/link"

export const MenuSection = () => {

  
  return (  
        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 ">
          Hello
          {/* {mvps.map((product) => (
            <MenuSectionItem
              key={product.id}
              title={product.name}
              href={product.link ?? "/"}
              icon={product.icon()}
            >
              {product.description}
            </MenuSectionItem>
          ))}

          <li>
            <NavigationMenuLink asChild>
              <Link
                to="/products"
                className={cn(
                  "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-background focus:bg-primary focus:text-accent-foreground",
                )}
              >
                <div className="flex items-center gap-2">
                  <MapPinPlus className="w-5 h-5 " />
                  <div className="text-base font-medium leading-none">
                    Explore More
                  </div>
                </div>
                <p className="line-clamp-2 text-base leading-snug text-muted-foreground group-hover:text-inherit">
                  Discover Our Full Product Ecosystem
                </p>
              </Link>
            </NavigationMenuLink>
          </li> */}
              
        </ul>
  )
}
