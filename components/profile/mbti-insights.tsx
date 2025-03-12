"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Sparkles, LucideIcon, Briefcase, Heart, Brain } from "lucide-react"
import { motion } from "framer-motion"
import { personalityDatabase } from "@/data/mbti/personalityDatabase"

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
  <Card className="h-full border-primary/20">
    <CardHeader className="pb-3">
      <CardTitle className="flex items-center gap-2">
        <Icon className={`h-5 w-5 ${iconColor}`} />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-2">
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default function MBTIInsights({ personalityType }: MBTIInsightsProps) {
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
    <section className="space-y-8">
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
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Personality Distribution</CardTitle>
            <CardDescription className="text-base">How common is your personality type?</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-medium text-lg">{personalityType}</span>
                <span className="text-base">
                  {personalityInfo.percentage}% of population
                </span>
              </div>

              <div className="h-10 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                  style={{
                    width: `${personalityInfo.percentage}%`,
                  }}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                {Object.entries(personalityDistribution)
                  .sort((a, b) => b[1] - a[1])
                  .slice(0, 8)
                  .map(([type, percentage]) => (
                    <div
                      key={type}
                      className={`p-3 rounded-md ${type === personalityType ? "bg-primary/20" : "bg-muted"}`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-base">{type}</span>
                        <span className="text-sm">{percentage}%</span>
                      </div>
                      <div className="h-2 bg-background/50 rounded-full mt-2">
                        <div
                          className={`h-full rounded-full ${type === personalityType ? "bg-primary" : "bg-primary/30"}`}
                          style={{ width: `${percentage * 5}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
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
