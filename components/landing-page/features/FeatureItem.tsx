"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Feature } from "@/types/features"
import { cn } from "@/lib/utils"

interface FeatureItemProps {
  feature: Feature
  index: number
  isMobile: boolean
}

export function FeatureItem({ feature, index, isMobile }: FeatureItemProps) {
  if (isMobile) {
    return (
      <motion.div
        key={feature.id}
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value={feature.id}
            className="border rounded-xl overflow-hidden shadow-sm data-[state=open]:shadow-md transition-all duration-200"
          >
            <AccordionTrigger className="hover:no-underline py-6 px-6 group">
              <div className="flex items-center gap-4 text-left">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${feature.color} text-white shadow-sm`}
                >
                  <feature.icon />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="space-y-4">
                <div className="relative h-[200px] w-full rounded-lg overflow-hidden mb-4">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="object-cover w-full h-full"
                  />
                  <div className={`absolute inset-0 ${feature.color} opacity-20`} />
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
                <ul className="space-y-3 pt-2">
                  {feature.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span
                        className={`inline-flex h-2.5 w-2.5 shrink-0 rounded-full ${feature.color} mt-2`}
                      ></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    )
  }

  return (
    <motion.div
      key={feature.id}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <AccordionItem
        value={feature.id}
        className={cn(
          "border rounded-xl overflow-hidden mb-5 transition-all duration-300",
          "data-[state=open]:shadow-lg data-[state=open]:border-primary/20",
          "hover:border-primary/20 hover:shadow-md",
          `data-[state=open]:border-l-4 data-[state=open]:${feature.borderColor}`,
        )}
      >
        <AccordionTrigger className="hover:no-underline py-6 px-6 group">
          <div className="flex items-center gap-4 text-left">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${feature.color} text-white shadow-sm`}
            >
              <feature.icon />
            </div>
            <h3
              className={cn(
                "text-xl font-semibold transition-colors",
                `group-hover:${feature.textColor}`,
                `data-[state=open]:${feature.textColor}`,
              )}
            >
              {feature.title}
            </h3>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <div className="space-y-4">
            <p className="text-muted-foreground">{feature.description}</p>
            <ul className="space-y-3 pt-2">
              {feature.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className={`inline-flex h-2.5 w-2.5 shrink-0 rounded-full ${feature.color} mt-2`}
                  ></span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  )
}
