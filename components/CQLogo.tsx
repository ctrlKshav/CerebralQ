"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function CQLogo({
  className = "w-12 h-12",
}: {
  className?: string;
}) {
  const { theme, resolvedTheme } = useTheme();
  const [logoSrc, setLogoSrc] = useState("/images/logoLight.png"); // Default for SSR

  useEffect(() => {
    // Update logo when theme changes or on initial client-side render
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isLightTheme = currentTheme === "light";

    setLogoSrc(isLightTheme ? "/images/logoLight.png" : "/images/logoDark.png");
  }, [theme, resolvedTheme]);

  return (
    <Image
      src={logoSrc}
      alt="Cerebral Quotient"
      className={`${className} object-contain`}
      priority
      width={96}
      height={96}
      quality={100}
    />
  );
}
