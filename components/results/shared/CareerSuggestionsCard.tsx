"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { Compass } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TooltipProvider } from "@/components/ui/tooltip"
import { HybridTooltip, HybridTooltipContent, HybridTooltipTrigger } from "@/components/ui/tooltip-hybrid"
import { CareerPath, MBTITrait } from "@/types/tests/mbti"

interface CareerSuggestionsCardProps {
  career?: CareerPath
  className?: string
}

// Default career data to use when none is provided
const defaultCareer: CareerPath = {
  summary: "Your personality type indicates strong leadership qualities with analytical thinking and strategic vision.",
  superpowers: [
    {
      title: "Strategic Vision",
      description: "Ability to see the big picture and plan for long-term success.",
    },
    {
      title: "Analytical Thinking",
      description: "Skilled at breaking down complex problems into manageable parts.",
    },
  ],
  growthAreas: [
    {
      title: "Emotional Intelligence",
      description: "Developing greater awareness of others' feelings and needs.",
    },
    {
      title: "Patience",
      description: "Taking time to consider all perspectives before making decisions.",
    },
  ],
  matches: [
    {
      title: "Business Management",
      description:
        "Lead teams and organizations to achieve strategic goals through planning, organizing, and coordinating resources.",
      matchPercentage: 92,
      mbtiTraits: [
        {
          trait: "E",
          description: "Your extraverted nature helps you connect with team members and build effective networks.",
        },
        {
          trait: "T",
          description: "Your logical thinking enables objective decision-making based on facts and data.",
        },
        { trait: "J", description: "Your structured approach ensures projects stay organized and meet deadlines." },
      ],
    },
    {
      title: "Entrepreneurship",
      description:
        "Create and build your own business ventures, identifying opportunities and taking calculated risks to innovate.",
      matchPercentage: 88,
      mbtiTraits: [
        { trait: "N", description: "Your intuitive thinking helps you spot future opportunities others might miss." },
        {
          trait: "T",
          description: "Your analytical approach helps you make strategic decisions even in uncertain conditions.",
        },
        {
          trait: "P",
          description: "Your adaptable nature allows you to pivot quickly when market conditions change.",
        },
      ],
    },
    {
      title: "Law",
      description:
        "Analyze complex legal issues, advocate for clients, and help navigate the intricacies of the legal system.",
      matchPercentage: 85,
      mbtiTraits: [
        {
          trait: "T",
          description: "Your logical thinking helps you analyze complex legal arguments without emotional bias.",
        },
        {
          trait: "J",
          description: "Your methodical approach helps you manage cases and meet court deadlines effectively.",
        },
        {
          trait: "S",
          description: "Your attention to detail helps you notice critical facts in legal documents and testimony.",
        },
      ],
    },
    {
      title: "Engineering",
      description:
        "Design, develop, and implement technical solutions to solve real-world problems through applied science and mathematics.",
      matchPercentage: 82,
      mbtiTraits: [
        {
          trait: "T",
          description: "Your logical approach helps you solve technical problems through systematic analysis.",
        },
        {
          trait: "S",
          description: "Your practical mindset ensures you create solutions that work in real-world conditions.",
        },
        {
          trait: "J",
          description: "Your structured thinking helps you manage complex projects with multiple components.",
        },
      ],
    },
  ],
  actionSteps: [
    {
      number: 1,
      description: "Take courses in communication and emotional intelligence.",
    },
    {
      number: 2,
      description: "Connect with experienced professionals in your field of interest.",
    },
  ],
}

export default function CareerSuggestionsCard({ career = defaultCareer, className = "" }: CareerSuggestionsCardProps) {
  const careerData = career || defaultCareer
  const matches = careerData.matches || []

  const getCareerImage = (title: string) => {
    const images: Record<string, string> = {
      "Business Management": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
      "Entrepreneurship": "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?auto=format&fit=crop&w=800&q=80",
      "Law": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      "Engineering": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    }

    return images[title] || "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
  }

  const getTraitColor = (trait: MBTITrait) => {
    const colors: Record<MBTITrait, string> = {
      E: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
      I: "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800",
      S: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800",
      N: "bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-900/30 dark:text-teal-300 dark:border-teal-800",
      T: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800",
      F: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800",
      J: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-800",
      P: "bg-pink-100 text-pink-800 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-800",
    }
    return colors[trait]
  }

  const getTraitFullName = (trait: MBTITrait) => {
    const names: Record<MBTITrait, string> = {
      E: "Extraversion",
      I: "Introversion",
      S: "Sensing",
      N: "Intuition",
      T: "Thinking",
      F: "Feeling",
      J: "Judging",
      P: "Perceiving",
    }
    return names[trait]
  }

  return (
    <div className={`${className} py-12  mx-auto`}>
      {/* Add section header */}
      <div className="text-center mb-14">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6">
            Career Suggestions
          </h2>
          
        </motion.div>
        
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed mb-8">
          These career paths naturally complement your personality traits and abilities, 
          offering environments where you're likely to thrive and find fulfillment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 px-4">
        {matches.map((match, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden border bg-card h-full flex flex-col hover:shadow-xl transition-all duration-300">
              <div className="relative h-56 md:h-64 overflow-hidden">
                <Image
                  src={getCareerImage(match.title)}
                  alt={match.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={`py-1.5 px-3 font-medium bg-background/90 backdrop-blur-sm text-sm ${
                      match.matchPercentage >= 90 ? 'bg-green-500/20 text-green-600' :
                      match.matchPercentage >= 80 ? 'bg-blue-500/20 text-blue-600' :
                      'bg-orange-500/20 text-orange-600'
                    }`}
                  >
                    
                    {match.matchPercentage}% Match
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6 md:p-7 flex-grow flex flex-col">
                <h3 className="font-bold text-2xl tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {match.title}
                </h3>
                <p className="text-muted-foreground text-base mb-6 leading-relaxed">
                  {match.description}
                </p>

                {match.mbtiTraits && match.mbtiTraits.length > 0 && (
                  <div className="mt-auto">
                    <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                      Personality Traits Match
                      <span className="inline-block w-full h-px bg-border flex-grow" />
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <TooltipProvider delayDuration={100}>
                        {match.mbtiTraits.map((traitDetail, i) => (
                          <HybridTooltip key={i}>
                            <HybridTooltipTrigger asChild>
                              <div
                                className={`flex items-center gap-2 p-2 rounded-md ${getTraitColor(
                                  traitDetail.trait
                                )} hover:bg-opacity-70 transition-colors `}
                              >
                                <Badge
                                  variant="outline"
                                  className={`${getTraitColor(traitDetail.trait)} border-0 h-7 w-7 flex items-center justify-center p-0`}
                                >
                                  {traitDetail.trait}
                                </Badge>
                                <span className="text-sm font-medium">
                                  {getTraitFullName(traitDetail.trait)}
                                </span>
                              </div>
                            </HybridTooltipTrigger>
                            <HybridTooltipContent side="top" className="max-w-[280px] p-4 text-sm">
                              <p className="font-medium">{getTraitFullName(traitDetail.trait)}</p>
                              <p className="mt-1.5">{traitDetail.description}</p>
                            </HybridTooltipContent>
                          </HybridTooltip>
                        ))}
                      </TooltipProvider>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}