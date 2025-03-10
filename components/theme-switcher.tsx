"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const ICON_SIZE = 16;

  const pathName = usePathname();

  // Don't render theme switcher on start-test pages
  if (pathName?.includes("/start-test")) return null;
  else
    return (
      <div className="fixed bottom-4 right-6 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size={"sm"}>
              {theme === "light" ? (
                <Sun
                  key="light"
                  size={ICON_SIZE}
                  className={"text-muted-foreground"}
                />
              ) : theme === "dark" ? (
                <Moon
                  key="dark"
                  size={ICON_SIZE}
                  className={"text-muted-foreground"}
                />
              ) : (
                <Laptop
                  key="system"
                  size={ICON_SIZE}
                  className={"text-muted-foreground"}
                />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-content" align="start">
            <DropdownMenuRadioGroup
              value={theme}
              onValueChange={(e) => setTheme(e)}
            >
              <DropdownMenuRadioItem className="flex gap-2" value="light">
                <Sun size={ICON_SIZE} className="text-muted-foreground" />{" "}
                <span>Light</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="flex gap-2" value="dark">
                <Moon size={ICON_SIZE} className="text-muted-foreground" />{" "}
                <span>Dark</span>
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem className="flex gap-2" value="system">
                <Laptop size={ICON_SIZE} className="text-muted-foreground" />{" "}
                <span>System</span>
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
};

export default ThemeSwitcher;
