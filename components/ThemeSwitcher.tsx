"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const ICON_SIZE = 16;

  const pathName = usePathname();
  
  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Don't render theme switcher on start-test pages
  // if (pathName?.includes("/start-test")) return null;
  
  return (
    <div className="fixed bottom-4 right-6 z-50">
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === "light" ? (
          <Sun
            key="light"
            size={ICON_SIZE}
            className="text-muted-foreground"
          />
        ) : (
          <Moon
            key="dark"
            size={ICON_SIZE}
            className="text-muted-foreground"
          />
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;