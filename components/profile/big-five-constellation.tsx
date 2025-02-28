"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { BigFiveRadarChart } from "./charts/big-five-radar"

interface BigFiveConstellationProps {
  bigFiveTraits: {
    openness: number
    conscientiousness: number
    extraversion: number
    agreeableness: number
    neuroticism: number
  }
}

export default function BigFiveConstellation({ bigFiveTraits }: BigFiveConstellationProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
          <span className="text-lg font-medium">3</span>
        </div>
        <h2 className="text-3xl font-semibold text-foreground">OCEAN Profile</h2>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5 }}
      >
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Big 5 Constellation</CardTitle>
            <CardDescription className="text-lg">Fundamental dimensions of personality</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3 h-64 md:h-72">
                <BigFiveRadarChart data={bigFiveTraits} />
              </div>

              <div className="md:w-1/3 grid grid-cols-5 md:grid-cols-1 gap-3 text-center md:text-left">
                <TooltipProvider>
                  {Object.entries({
                    O: { label: "Openness", value: bigFiveTraits.openness, description: "Appreciation for art, emotion, adventure, unusual ideas, imagination, and curiosity" },
                    C: { label: "Conscientiousness", value: bigFiveTraits.conscientiousness, description: "Tendency to be organized, disciplined, dependable, and to prefer planned rather than spontaneous behavior" },
                    E: { label: "Extraversion", value: bigFiveTraits.extraversion, description: "Energy, positive emotions, assertiveness, sociability and the tendency to seek stimulation in the company of others" },
                    A: { label: "Agreeableness", value: bigFiveTraits.agreeableness, description: "Tendency to be compassionate and cooperative rather than suspicious and antagonistic towards others" },
                    N: { label: "Neuroticism", value: bigFiveTraits.neuroticism, description: "Tendency to experience unpleasant emotions easily, such as anger, anxiety, depression, and vulnerability" },
                  }).map(([key, { label, value, description }]) => (
                    <Tooltip key={key}>
                      <TooltipTrigger asChild>
                        <div className="flex md:flex-row items-center justify-center md:justify-start gap-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/20 text-primary font-medium text-lg"
                          >
                            {key}
                          </div>
                          <span className="text-base mt-1">{Math.round(value * 100)}%</span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <p className="font-medium">{label}</p>
                        <p className="text-sm text-muted-foreground">Score: {Math.round(value * 100)}%</p>
                        <p className="text-xs mt-2">{description}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-bold text-md mb-3">What is the Big Five?</h4>
                <p className="text-sm leading-relaxed">
                  The Big Five (OCEAN) model is one of the most scientifically validated frameworks for understanding personality. 
                  It measures five key dimensions that, together, provide a comprehensive view of your personality traits and tendencies.
                </p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg">
                <h4 className="font-bold text-md mb-3">Your Unique Pattern</h4>
                <p className="text-sm leading-relaxed">
                  Your particular constellation of traits suggests someone who is highly creative and open to new experiences, 
                  conscientious in their duties, somewhat reserved in social situations, highly cooperative with others, 
                  and emotionally stable even under pressure.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
