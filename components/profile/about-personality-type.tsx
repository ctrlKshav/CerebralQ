"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { personalityDatabase } from "@/data/mbti/personalityDatabase"

interface AboutPersonalityTypeProps {
  personalityType: string
  sectionNumber: number
}

export default function AboutPersonalityType({ 
  personalityType, 
  sectionNumber
}: AboutPersonalityTypeProps) {
  const personalityInfo = personalityDatabase[personalityType];
  
  if (!personalityInfo) {
    return <div>Personality type not found</div>;
  }
  
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
          <span className="text-lg font-medium">{sectionNumber}</span>
        </div>
        <h2 className="text-3xl font-semibold text-foreground">Personality Type</h2>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4 }}
      >
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">{personalityType}</CardTitle>
            <CardDescription className="text-lg">{personalityInfo.alias}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">{personalityInfo.description}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="font-bold text-md">Strengths</h4>
                <ul className="mt-3 text-base space-y-2">
                  {personalityInfo.strengths.map((strength, index) => (
                    <li key={index}>{strength}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="font-bold text-md">Growth Areas</h4>
                <ul className="mt-3 text-base space-y-2">
                  {personalityInfo.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
