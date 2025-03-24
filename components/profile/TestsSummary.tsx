"use client"

import { UserProfile } from "@/types/supabase/user-profile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface TestsSummaryProps {
  userData: UserProfile
}

export default function TestsSummary({ userData }: TestsSummaryProps) {
  // Define animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  }

  // Get personality traits to display
  const personalityTraits = Object.keys(userData.raw_score.traitScores).map(traitKey => {
    const trait = userData.raw_score.traitScores[traitKey as keyof typeof userData.raw_score.traitScores]
    const dominant = trait.dominant === "left" ? traitKey.split("-")[0] : traitKey.split("-")[1]
    const percentage = trait.dominant === "left" ? trait.leftPercentage : trait.rightPercentage
    return { trait: dominant, percentage, traitKey }
  })

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold">MBTI Profile</h2>
      
      <div className="grid grid-cols-1 gap-6">
         {/* Personality Type Card */}
         <motion.div variants={itemVariants}>
          <Card className="border-primary/20">
            <CardHeader className="bg-primary-50 dark:bg-primary/10 pb-2">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Personality Type
              </CardTitle>
              <CardDescription>Myers-Briggs assessment</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                  <span className="text-4xl font-bold text-primary">{userData.raw_score.personalityType}</span>
                </div>
                
                <div className="mt-6 w-full">
                  <h4 className="text-sm text-center font-medium mb-2">Trait Breakdown</h4>
                  <div className="space-y-2">
                    {personalityTraits.map((item, i) => {
                      const [left, right] = item.traitKey.split('-');
                      return (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="font-medium w-6">{left}</span>
                        <div className="flex items-center gap-2 flex-1 mx-2">
                          <div className="w-full h-2 bg-muted rounded-full">
                            <div 
                              className={cn(
                                "h-full rounded-full", 
                                item.trait === left ? "bg-primary rounded-r-none" : "bg-primary rounded-l-none ml-auto"
                              )}
                              style={{ 
                                width: `${item.trait === left ? item.percentage : 100 - item.percentage}%` 
                              }} 
                            />
                          </div>
                        </div>
                        <span className="font-medium w-6 text-right">{right}</span>
                      </div>
                    )})}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
