"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Brain, FileText, Share2, BarChart3, Lightbulb } from "lucide-react"

// Feature data structure with enhanced copy and styling
const features = [
    {
        id: "comprehensive-assessments",
        title: "Complete Assessment Suite",
        description:
            "Access all major personality frameworks in one platform. Get insights from MBTI, Big Five, HEXACO, and DISC to understand your complete psychological profile.",
        details: [
            "Myers-Briggs Type Indicator (MBTI)",
            "Big Five Personality Dimensions",
            "HEXACO Personality Inventory",
            "DISC Behavioral Assessment",
            "Unified results across all frameworks",
        ],
        image: "/placeholder.svg?height=500&width=600&text=Assessments",
        icon: <Brain className="h-5 w-5" />,
        color: "bg-violet-600",
        textColor: "text-violet-600",
        borderColor: "border-violet-600",
    },
    {
        id: "detailed-reports",
        title: "In-Depth PDF Reports",
        description:
            "Receive beautifully designed reports with actionable insights. Each report includes career guidance, relationship compatibility, and personal growth recommendations.",
        details: [
            "Comprehensive personality analysis",
            "Career path recommendations",
            "Relationship compatibility insights",
            "Personal growth strategies",
            "Downloadable and shareable formats",
        ],
        image: "/placeholder.svg?height=500&width=600&text=Reports",
        icon: <FileText className="h-5 w-5" />,
        color: "bg-emerald-600",
        textColor: "text-emerald-600",
        borderColor: "border-emerald-600",
    },
    {
        id: "shareable-profiles",
        title: "Custom Profile Pages",
        description:
            "Create your digital personality identity with a custom URL. Share your profile with employers, partners, or friends to help them understand your unique traits.",
        details: [
            "Personal URL (cerebralquotient.com/username)",
            "Interactive personality visualizations",
            "Social media integration",
            "Privacy control settings",
            "Professional presentation options",
        ],
        image: "/placeholder.svg?height=500&width=600&text=Profiles",
        icon: <Share2 className="h-5 w-5" />,
        color: "bg-rose-600",
        textColor: "text-rose-600",
        borderColor: "border-rose-600",
    },
    {
        id: "advanced-analytics",
        title: "Powerful Analytics Dashboard",
        description:
            "Track your psychological evolution over time. Our analytics platform shows how life events shape your personality and helps you understand your behavioral patterns.",
        details: [
            "Longitudinal trait tracking",
            "Comparative analysis tools",
            "Behavioral pattern recognition",
            "Historical data visualization",
            "Personalized insight reports",
        ],
        image: "/placeholder.svg?height=500&width=600&text=Analytics",
        icon: <BarChart3 className="h-5 w-5" />,
        color: "bg-amber-600",
        textColor: "text-amber-600",
        borderColor: "border-amber-600",
    },
    {
        id: "expert-science",
        title: "Research-Backed Methodology",
        description:
            "Trust assessments built on solid psychological science. Our platform uses validated methodologies developed with leading researchers and academic institutions.",
        details: [
            "Psychometrically validated instruments",
            "Evidence-based assessment design",
            "Ongoing validation studies",
            "Academic research partnerships",
            "Transparent reliability metrics",
        ],
        image: "/placeholder.svg?height=500&width=600&text=Science",
        icon: <Lightbulb className="h-5 w-5" />,
        color: "bg-blue-600",
        textColor: "text-blue-600",
        borderColor: "border-blue-600",
    },
]

export default function FeaturesComponent() {
    const [activeFeature, setActiveFeature] = useState(features[0].id)
    const [isMobile, setIsMobile] = useState(false)
    const featuresRef = useRef<HTMLDivElement>(null)

    // Check if we're on mobile for responsive adjustments
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 overflow-hidden relative bg-background">
            {/* Decorative background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.02] dark:opacity-[0.03]" />
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            </div>

            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                >
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        Platform Features
                    </div>
                    <div className="space-y-3 max-w-3xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                            Unlock Your True Personality
                        </h2>
                        <p className="text-muted-foreground md:text-xl/relaxed">
                            Cerebral Quotient delivers comprehensive personality insights through scientifically validated
                            assessments, detailed reports, and powerful analytics.
                        </p>
                    </div>
                </motion.div>

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
                                                    {feature.icon}
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
                                                            {feature.icon}
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
                                                                    {feature.icon}
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
