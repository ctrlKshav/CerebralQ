"use client";

import Carousel from "@/components/ui/carousel-custom";
import { slideData } from "@/data/testCarousel";

export default function TestsCarousel() {
  
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
