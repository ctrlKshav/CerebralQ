"use client";

import Carousel from "@/components/ui/carousel";
import { slideData } from "@/app/data/testCarousel";

export function TestsCarousel() {
  
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
