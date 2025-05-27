"use client";

import Image from "next/image";
import type { Feature } from "@/types/landing-page/features";
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
        "grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center ",
        className
      )}
    >
      {!reverse ? (
        <>
          <FeatureContent feature={feature} />
          <div className="relative h-fit w-fit rounded-xl overflow-hidden shadow-lg justify-self-center">
            <Image
              src={feature.imageSrc || "/placeholder.svg"}
              alt={feature.title}
              width={500}
              height={500}
              className=" transition-transform duration-500 hover:scale-105"
              priority={feature.id === 1}
            />
          </div>
        </>
      ) : (
        <>
          <div className="relative h-fit w-fit rounded-xl overflow-hidden shadow-lg order-1 md:order-none justify-self-center">
            <Image
              src={feature.imageSrc || "/placeholder.svg"}
              alt={feature.title}
              width={600}
              height={600}
              className=" transition-transform duration-500 hover:scale-105"
            />
          </div>
          <FeatureContent feature={feature} />
        </>
      )}
    </div>
  );
}
