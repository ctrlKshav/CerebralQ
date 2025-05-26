"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Feature } from "@/types/features";
import { cn } from "@/lib/utils";
import FeatureContent from "./FeaturesContent";

interface FeatureCardProps {
  feature: Feature;
  reverse?: boolean;
  className?: string;
  id: string;
}

export default function FeatureCard({
  feature,
  reverse = false,
  className,
  id,
}: FeatureCardProps) {
  return (
    <div
      id={id}
      className={cn(
        "w-full grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center",
        className
      )}
    >
      {!reverse ? (
        <>
          <FeatureContent feature={feature} />
          <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={feature.imageSrc || "/placeholder.svg"}
              alt={feature.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={feature.id === 1}
            />
          </div>
        </>
      ) : (
        <>
          <div className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg order-1 md:order-none">
            <Image
              src={feature.imageSrc || "/placeholder.svg"}
              alt={feature.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <FeatureContent feature={feature} />
        </>
      )}
    </div>
  );
}
