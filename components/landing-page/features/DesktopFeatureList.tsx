"use client"

import { Accordion } from "@/components/ui/accordion"
import { Feature } from "@/types/features"
import { FeatureItem } from "./FeatureItem"
import { FeaturePreview } from "./FeaturePreview"

interface DesktopFeatureListProps {
  features: Feature[]
  activeFeature: string
  setActiveFeature: (id: string) => void
  featuresRef: React.RefObject<HTMLDivElement | null>
}

export function DesktopFeatureList({ 
  features, 
  activeFeature, 
  setActiveFeature,
  featuresRef 
}: DesktopFeatureListProps) {
  return (
    <div className="mx-auto max-w-6xl" ref={featuresRef}>
      <div className="flex gap-10 relative">
        <div className="w-1/2">
          <Accordion
            type="single"
            collapsible
            defaultValue={features[0].id}
            onValueChange={(value) => {
              if (value) setActiveFeature(value)
            }}
            className="w-full"
          >
            {features.map((feature, index) => (
              <FeatureItem 
                key={feature.id}
                feature={feature}
                index={index}
                isMobile={false}
              />
            ))}
          </Accordion>
        </div>
        <FeaturePreview features={features} activeFeature={activeFeature} />
      </div>
    </div>
  )
}
