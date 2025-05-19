"use client"

import { Feature } from "@/types/features"
import { FeatureItem } from "./FeatureItem"

interface MobileFeatureListProps {
  features: Feature[]
}

export function MobileFeatureList({ features }: MobileFeatureListProps) {
  return (
    <div className="mx-auto max-w-3xl">
      {features.map((feature, index) => (
        <FeatureItem 
          key={feature.id}
          feature={feature}
          index={index}
          isMobile={true}
        />
      ))}
    </div>
  )
}
