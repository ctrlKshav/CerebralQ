"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { personalityDatabase } from "@/data/mbti/oldData/personalityDatabase"
import { CheckCircle, AlertCircle, Star, TrendingUp } from "lucide-react"

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
        <Card className="border-primary/20 shadow-sm">
          <CardHeader className="bg-primary/5 border-b border-primary/10">
            <CardTitle className="text-2xl">{personalityType}</CardTitle>
            <CardDescription className="text-lg">{personalityInfo.alias}</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed">{personalityInfo.description}</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div 
                className="rounded-lg overflow-hidden shadow-sm border border-primary/10"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-emerald-100 dark:bg-emerald-950/30 border-b border-emerald-200 dark:border-emerald-800 p-3 flex items-center gap-3">
                  <Star className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  <h4 className="font-medium text-emerald-800 dark:text-emerald-200">Strengths</h4>
                </div>
                <ul className="py-4 px-2 space-y-2">
                  {personalityInfo.strengths.map((strength, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.05 * index }}
                      className="flex items-start gap-3 px-4"
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-500 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span>{strength}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="rounded-lg overflow-hidden shadow-sm border border-primary/10"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-amber-50 dark:bg-amber-950/30 border-b border-amber-200 dark:border-amber-800 p-3 flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <h4 className="font-medium text-amber-800 dark:text-amber-200">Growth Areas</h4>
                </div>
                <ul className="py-4 px-2 space-y-2">
                  {personalityInfo.challenges.map((challenge, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.05 * index }}
                      className="flex items-start gap-3 px-4"
                    >
                      <AlertCircle className="h-4 w-4 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                      <span>{challenge}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
