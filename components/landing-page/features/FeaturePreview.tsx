"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Feature } from "@/types/features"

interface FeaturePreviewProps {
  features: Feature[]
  activeFeature: string
}

export function FeaturePreview({ features, activeFeature }: FeaturePreviewProps) {
  return (
    <div
      className="w-1/2"
      style={{
        position: "sticky",
        top: "6rem",
        height: "500px",
        alignSelf: "flex-start",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h-full rounded-2xl overflow-hidden shadow-xl border"
      >
        <AnimatePresence mode="wait">
          {features.map(
            (feature) =>
              activeFeature === feature.id && (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    priority={activeFeature === feature.id}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className={`absolute inset-0 opacity-10 ${feature.color}`} />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${feature.color} text-white shadow-sm`}
                      >
                        <feature.icon />
                      </div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground max-w-md">{feature.description}</p>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
