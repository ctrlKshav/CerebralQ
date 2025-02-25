"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes"; // Make sure this import matches your theme provider

export default function CQLogo({
  className = "w-12 h-12"
}: {
  className?: string
}) {
  const { theme } = useTheme();
  
  // Determine which logo to show based on theme
  const isLightTheme = theme === "light"
  const logoSrc = isLightTheme 
    ? "/CQLogoFinalLightMode.png" 
    : "/CQLogoFinalDarkMode.png";

  return (
      <img src={logoSrc} alt="CerebralQ" className={`${className}`} />
  );
}
