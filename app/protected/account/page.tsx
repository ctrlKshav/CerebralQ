"use client"
import { useEffect, useState, useContext } from "react";
import CQLogo from "@/components/cq-logo";
import Link from "next/link";
import Account from "@/components/account";

export default function Page() {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    const toggleVisibility = () => {
      // Hide logo when scrolled down more than 100px
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", toggleVisibility);
    
    // Clean up event listener
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Link 
        href="/" 
        className={`inline w-fit fixed top-0 right-4 xl:left-4 z-50 transition-opacity duration-100 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none xl:opacity-100"
        }`}
      >
        <CQLogo className="w-24 sm:w-36 h-24 sm:h-36" />
      </Link>
      
      <div className="relative">
        <Account />
      </div>
    </div>
  );
}
