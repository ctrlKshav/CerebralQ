"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { features } from "@/data/features"
import { useIsMobile } from "@/hooks/use-mobile"
import { SectionHeader } from "./SectionHeader"
import { ChartBar } from "lucide-react"

export function Features() {
    const [activeFeature, setActiveFeature] = useState(features[0].id)
    const isMobile = useIsMobile()
    const featuresRef = useRef<HTMLDivElement>(null)
    console.log(features);


    return (
        <section className="relative py-24 px-6 overflow-hidden ">

            <SectionHeader
                icon={<ChartBar className="h-5 w-5 text-primary" />}
                label="Premium Features"
                title="What's included?"
                description="Explore the powerful tools and visualizations that make Cerebral Quotient the premier personality assessment platform."
            />

            <div className="container px-4 md:px-6">

                {/* Mobile view: Stacked layout */}
                {isMobile && (
                    <div className="mx-auto max-w-3xl">
                        {features.map((feature, index) => (
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
                                                    <Image
                                                        src={feature.image || "/placeholder.svg"}
                                                        alt={feature.title}
                                                        fill
                                                        className="object-cover"
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
                        ))}
                    </div>
                )}

                {/* Desktop view: Side-by-side layout */}
                {!isMobile && (
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
                                    ))}
                                </Accordion>
                            </div>
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
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
