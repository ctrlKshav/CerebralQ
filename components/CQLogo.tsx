"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function CQLogo({
  className = "w-12 h-12"
}: {
  className?: string
}) {
  const { theme, resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/logoLight.png"); // Default for SSR
  
  useEffect(() => {
    // Update logo when theme changes or on initial client-side render
    const currentTheme = theme === 'system' ? resolvedTheme : theme;
    const isLightTheme = currentTheme === "light";
    
    setLogoSrc(isLightTheme 
      ? "/logoLight.png" 
      : "/logoDark.png"
    );
  }, [theme, resolvedTheme]);

  return (
    <img src={logoSrc} alt="CerebralQ" className={`${className} object-contain`} />
  );
}
