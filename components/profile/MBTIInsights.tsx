"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Sparkles, LucideIcon, Briefcase, Heart, Brain, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { personalityDatabase } from "@/data/mbti/oldData/personalityDatabase"
import { Button } from "@/components/ui/button"

interface MBTIInsightsProps {
  personalityType: string
}

interface InsightCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  iconColor: string;
}

const InsightCard = ({ title, items, icon: Icon, iconColor }: InsightCardProps) => (
  <Card className="h-full border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-300">
    <CardHeader className="pb-3 bg-muted/40">
      <CardTitle className="flex items-center gap-2">
        <div className={`p-1.5 rounded-md ${iconColor.replace('text-', 'bg-').replace('-500', '-100')}`}>
          <Icon className={`h-4 w-4 ${iconColor}`} />
        </div>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-4">
      <ul className="space-y-2.5">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2.5">
            <div className={`w-2 h-2 rounded-full ${iconColor}`} />
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default function MBTIInsights({ personalityType }: MBTIInsightsProps) {
  const [showAllTypes, setShowAllTypes] = useState(false);
  
  // Get personality info from database
  const personalityInfo = personalityDatabase[personalityType];
  
  if (!personalityInfo) {
    return <div>Personality type not found</div>;
  }
  
  // Personality distribution data from database
  const personalityDistribution: Record<string, number> = {};
  
  // Add all personality types to distribution
  Object.entries(personalityDatabase).forEach(([type, info]) => {
    personalityDistribution[type] = info.percentage;
  });
  
  return (
    <section className="space-y-10">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold"
      >
        MBTI Insights
      </motion.h2>

      {/* Population Distribution */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card className="border border-primary/20 shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="bg-muted/30 border-b border-primary/10">
            <CardTitle className="text-2xl flex items-center gap-2">
              <div className="bg-primary/10 p-1.5 rounded-lg">
                <Users className="h-5 w-5 text-primary" />
              </div>
              Personality Distribution
            </CardTitle>
            <CardDescription className="text-base">How common is your personality type?</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              {/* Enhanced user's personality type display */}
              <motion.div 
                className="p-6 rounded-xl bg-card border-2 border-primary/30 shadow-sm"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary p-2.5 rounded-lg text-white">
                      <span className="font-bold text-lg">{personalityType}</span>
                    </div>
                    <div className="font-medium">Your personality type</div>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-full text-center">
                    <span className="font-semibold text-primary">
                      {personalityInfo.percentage}% of population
                    </span>
                  </div>
                </div>

                <div className="h-12 bg-muted rounded-xl overflow-hidden relative">
                  <div
                    className="h-full bg-primary rounded-xl flex items-center justify-end px-3 transition-all duration-1000"
                    style={{
                      width: `${Math.max(personalityInfo.percentage, 10)}%`,
                    }}
                  >
                    {personalityInfo.percentage >= 8 && (
                      <span className="text-white font-medium">
                        {personalityInfo.percentage}%
                      </span>
                    )}
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.8),transparent)]"></div>
                </div>
                
                <div className="mt-3 text-sm text-muted-foreground">
                  {personalityInfo.percentage > 10 
                    ? "Your personality type is quite common in the general population." 
                    : personalityInfo.percentage < 3
                      ? "Your personality type is quite rare among the general population."
                      : "Your personality type represents a moderate percentage of the population."}
                </div>
              </motion.div>

              <div className="flex justify-between items-center">
                <h4 className="font-medium text-base">Compare with other personality types</h4>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowAllTypes(!showAllTypes)}
                  className="flex items-center gap-1 border-primary/30 text-primary hover:bg-primary/5"
                >
                  {showAllTypes ? "Hide" : "Show"} all types
                  {showAllTypes ? 
                    <ChevronUp className="h-4 w-4" /> : 
                    <ChevronDown className="h-4 w-4" />
                  }
                </Button>
              </div>

              <AnimatePresence>
                {showAllTypes && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                      {Object.entries(personalityDistribution)
                        .sort((a, b) => b[1] - a[1])
                        .map(([type, percentage]) => (
                          <motion.div
                            key={type}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className={`p-4 rounded-lg shadow-sm ${
                              type === personalityType 
                                ? "bg-primary/10 border border-primary/30" 
                                : "bg-muted hover:bg-muted/80 transition-colors"
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className={`font-medium text-base ${
                                type === personalityType ? "text-primary" : ""
                              }`}>{type}</span>
                              <span className="text-sm px-2 py-0.5 rounded bg-background/80">{percentage}%</span>
                            </div>
                            <div className="h-2 bg-background/50 rounded-full mt-3 overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  type === personalityType ? "bg-primary" : "bg-primary/30"
                                }`}
                                style={{ width: `${percentage * 5}%` }}
                              />
                            </div>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* MBTI Insight Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, staggerChildren: 0.1 }}
      >
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
          <InsightCard
            title="Compatible Types"
            items={personalityInfo.compatibleTypes}
            icon={Heart}
            iconColor="text-pink-500"
          />
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
          <InsightCard
            title="Career Paths"
            items={personalityInfo.careerFields}
            icon={Briefcase}
            iconColor="text-blue-500"
          />
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
          <InsightCard
            title="Key Strengths"
            items={personalityInfo.strengths}
            icon={Sparkles}
            iconColor="text-amber-500"
          />
        </motion.div>
        
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
          <InsightCard
            title="Growth Areas"
            items={personalityInfo.challenges}
            icon={Brain}
            iconColor="text-purple-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
