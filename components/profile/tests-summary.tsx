"use client"

import { UserProfile } from "@/data/profile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Activity, Users, LineChart, Trophy, Star } from "lucide-react"
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

  // Format Big Five traits for display
  const bigFiveTraits = [
    { name: "Openness", value: userData.raw_score.bigFive.openness, color: "bg-blue-500" },
    { name: "Conscientiousness", value: userData.raw_score.bigFive.conscientiousness, color: "bg-purple-500" },
    { name: "Extraversion", value: userData.raw_score.bigFive.extraversion, color: "bg-green-500" },
    { name: "Agreeableness", value: userData.raw_score.bigFive.agreeableness, color: "bg-amber-500" },
    { name: "Neuroticism", value: userData.raw_score.bigFive.neuroticism, color: "bg-red-500" },
  ]

  // Get personality traits to display
  const personalityTraits = Object.keys(userData.raw_score.traitScores).map(traitKey => {
    const trait = userData.raw_score.traitScores[traitKey as keyof typeof userData.raw_score.traitScores]
    const dominant = trait.dominant === "left" ? traitKey.split("-")[0] : traitKey.split("-")[1]
    const percentage = trait.dominant === "left" ? trait.leftPercentage : trait.rightPercentage
    return { trait: dominant, percentage }
  })

  // Define cognitive skills with corresponding icons
  const cognitiveSkills = [
    { name: "Verbal", value: userData.raw_score.cognitivePercentile.verbal, icon: <Users className="w-5 h-5" /> },
    { name: "Numerical", value: userData.raw_score.cognitivePercentile.numerical, icon: <Activity className="w-5 h-5" /> },
    { name: "Abstract", value: userData.raw_score.cognitivePercentile.abstract, icon: <Brain className="w-5 h-5" /> },
    { name: "Spatial", value: userData.raw_score.cognitivePercentile.spatial, icon: <LineChart className="w-5 h-5" /> },
    { name: "Memory", value: userData.raw_score.cognitivePercentile.memory, icon: <Star className="w-5 h-5" /> },
  ]

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold">Complete Psyche</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

         {/* Personality Type Card */}
         <motion.div variants={itemVariants} className="md:col-span-1">
          <Card className="h-full border-primary/20">
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
                  <h4 className="text-sm text-center font-medium mb-2">Dominant Traits</h4>
                  <div className="space-y-2">
                    {personalityTraits.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="font-medium">{item.trait}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full">
                            <div 
                              className="h-full bg-primary rounded-full" 
                              style={{ width: `${item.percentage}%` }} 
                            />
                          </div>
                          <span className="text-xs w-8">{Math.round(item.percentage)}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* IQ Score Card */}
        <motion.div variants={itemVariants} className="md:col-span-1">
          <Card className="h-full border-primary/20 overflow-hidden">
            <CardHeader className="bg-primary-50 dark:bg-primary/10 pb-2">
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                IQ Assessment
              </CardTitle>
              <CardDescription>General cognitive abilities</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center">
                <div className="relative w-36 h-36">
                  {/* Circular background */}
                  <div className="absolute inset-0 rounded-full border-8 border-muted/30" />
                  
                  {/* Score circle */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="72"
                      cy="72"
                      r="64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                      className="text-primary"
                      strokeDasharray={`${Math.min(100, userData.raw_score.iq.percentile) * 4} 400`}
                    />
                  </svg>
                  
                  {/* Score text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold">{userData.raw_score.iq.score}</span>
                    <span className="text-sm text-muted-foreground">IQ Score</span>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">Higher than {userData.raw_score.iq.percentile}% of test takers</p>
                  <p className="text-xs mt-2">Population average: {userData.raw_score.iq.populationAverage}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
         
        {/* OCEAN (Big Five) Card */}
        <motion.div variants={itemVariants} className="md:col-span-1">
          <Card className="h-full border-primary/20">
            <CardHeader className="bg-primary-50 dark:bg-primary/10 pb-2">
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                OCEAN Profile
              </CardTitle>
              <CardDescription>Big Five personality traits</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                {bigFiveTraits.map((trait, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{trait.name}</span>
                      <span className="text-sm">{Math.round(trait.value * 100)}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full rounded-full", trait.color)} 
                        style={{ width: `${trait.value * 100}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Cognitive Skills Breakdown - Full Width */}
        <motion.div variants={itemVariants} className="md:col-span-3">
          <Card className="border-primary/20">
            <CardHeader className="bg-primary-50 dark:bg-primary/10 pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  Cognitive Skills Breakdown
                </CardTitle>
                <CardDescription>Percentile ranking across cognitive domains</CardDescription>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-primary-foreground"></div>
                <span>Percentile Ranking</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-8">
                {cognitiveSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="relative w-24 h-24">
                      {/* Background circle */}
                      <div className="absolute inset-0 rounded-full border-4 border-muted/30" />
                      
                      {/* Score circle */}
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="44"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          className={`text-primary/80`}
                          strokeDasharray={`${skill.value * 2.75} 400`}
                        />
                      </svg>
                      
                      {/* Icon and score */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="p-1.5 rounded-full bg-primary/10 mb-1">
                          {skill.icon}
                        </div>
                        <span className="text-lg font-bold">{skill.value}%</span>
                      </div>
                    </div>
                    <span className="mt-2 text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  )
}
