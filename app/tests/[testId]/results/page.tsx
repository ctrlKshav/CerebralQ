﻿"use client"
import { useEffect, useState } from "react";
import Results from "@/components/results";
import CQLogo from "@/components/cq-logo";
import Link from "next/link";

export default function ResultsPage() {
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
    <div className="">
      <Link 
        href="/" 
        className={`fixed top-0 left-2 sm:top-0 sm:left-10 z-50 transition-opacity duration-100 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none sm:opacity-100"
        }`}
      >
        <CQLogo className="w-24 h-24 sm:w-36 sm:h-36" />
      </Link>
      <div className="">
        <Results />
      </div>
    </div>
  );
}
