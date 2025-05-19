"use client"

import { useState, useRef } from "react"
import { features } from "@/data/features"
import { useIsMobile } from "@/hooks/use-mobile"
import { SectionHeader } from "../SectionHeader"
import { ChartBar } from "lucide-react"
import { MobileFeatureList } from "./MobileFeatureList"
import { DesktopFeatureList } from "./DesktopFeatureList"

export function Features() {
    const [activeFeature, setActiveFeature] = useState(features[0].id)
    const isMobile = useIsMobile()
    const featuresRef = useRef<HTMLDivElement>(null)

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            <SectionHeader
                icon={<ChartBar className="h-5 w-5 text-primary" />}
                label="Premium Features"
                title="What's included?"
                description="Explore the powerful tools and visualizations that make Cerebral Quotient the premier personality assessment platform."
            />

            <div className="container px-4 md:px-6">
                {isMobile ? (
                    <MobileFeatureList features={features} />
                ) : (
                    <DesktopFeatureList
                        features={features}
                        activeFeature={activeFeature}
                        setActiveFeature={setActiveFeature}
                        featuresRef={featuresRef}
                    />
                )}
            </div>
        </section>
    )
}
