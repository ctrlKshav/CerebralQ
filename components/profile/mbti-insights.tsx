"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Sparkles, LucideIcon, Briefcase, Heart, Brain } from "lucide-react"
import { motion } from "framer-motion"

interface MBTIInsightsProps {
  personalityType: string
}

interface PersonalityInfo {
  alias: string;
  compatibleTypes: string[];
  careerFields: string[];
  strengths: string[];
  challenges: string[];
  percentage: number; // population percentage
}

const personalityDatabase: Record<string, PersonalityInfo> = {
  "INFP": {
    alias: "The Mediator",
    compatibleTypes: ["ENFJ", "ENTJ", "INFJ", "INTJ"],
    careerFields: ["Writer", "Counselor", "Artist", "Designer"],
    strengths: ["Empathy", "Creativity", "Idealism", "Adaptability"],
    challenges: ["Perfectionism", "Taking criticism", "Practical matters", "Overthinking"],
    percentage: 4.4
  },
  "INFJ": {
    alias: "The Advocate",
    compatibleTypes: ["ENFP", "ENTP", "INFP", "INTJ"],
    careerFields: ["Psychologist", "Nonprofit Leader", "Author", "Spiritual Guide"],
    strengths: ["Insight", "Compassion", "Vision", "Determination"],
    challenges: ["Burnout", "Over-sensitivity", "Perfectionism", "Privacy"],
    percentage: 1.5
  },
  "INTP": {
    alias: "The Thinker",
    compatibleTypes: ["ENTJ", "ENFJ", "INTJ", "INFP"],
    careerFields: ["Philosopher", "Software Developer", "Researcher", "Mathematician"],
    strengths: ["Logic", "Curiosity", "Innovation", "Objectivity"],
    challenges: ["Social engagement", "Procrastination", "Emotional expression", "Routine"],
    percentage: 3.3
  },
  "INTJ": {
    alias: "The Architect",
    compatibleTypes: ["ENFP", "ENTP", "INFP", "INTP"],
    careerFields: ["Scientist", "Engineer", "Strategist", "Analyst"],
    strengths: ["Strategic thinking", "Independence", "Determination", "Knowledge-seeking"],
    challenges: ["Social situations", "Emotional expression", "Patience with others", "Flexibility"],
    percentage: 2.1
  },
  "ENFP": {
    alias: "The Campaigner",
    compatibleTypes: ["INFJ", "INTJ", "ENFJ", "ENTJ"],
    careerFields: ["Entrepreneur", "Actor", "Marketing Specialist", "Journalist"],
    strengths: ["Enthusiasm", "Creativity", "Sociability", "Open-mindedness"],
    challenges: ["Focus", "Follow-through", "Over-sensitivity", "Organization"],
    percentage: 8.1
  },
  "ENFJ": {
    alias: "The Protagonist",
    compatibleTypes: ["INFP", "ISFP", "INTP", "ISTP"],
    careerFields: ["Teacher", "Coach", "HR Manager", "Therapist"],
    strengths: ["Leadership", "Communication", "Empathy", "Reliability"],
    challenges: ["People-pleasing", "Overextending", "Criticism sensitivity", "Idealism"],
    percentage: 2.5
  },
  "ENTP": {
    alias: "The Debater",
    compatibleTypes: ["INFJ", "INTJ", "ENFP", "ENTJ"],
    careerFields: ["Lawyer", "Inventor", "Consultant", "Comedian"],
    strengths: ["Quick thinking", "Originality", "Confidence", "Versatility"],
    challenges: ["Consistency", "Authority", "Sensitivity", "Follow-through"],
    percentage: 3.2
  },
  "ENTJ": {
    alias: "The Commander",
    compatibleTypes: ["INTP", "INFP", "ENTP", "ENFJ"],
    careerFields: ["CEO", "Military Leader", "Project Manager", "Entrepreneur"],
    strengths: ["Leadership", "Efficiency", "Vision", "Decisiveness"],
    challenges: ["Empathy", "Patience", "Work-life balance", "Stubbornness"],
    percentage: 1.8
  },
  "ISFP": {
    alias: "The Adventurer",
    compatibleTypes: ["ENFJ", "ESFJ", "ESTJ", "ENTJ"],
    careerFields: ["Musician", "Chef", "Photographer", "Craftsman"],
    strengths: ["Artistic talent", "Flexibility", "Empathy", "Present-focus"],
    challenges: ["Planning", "Criticism", "Assertiveness", "Long-term goals"],
    percentage: 8.8
  },
  "ISFJ": {
    alias: "The Defender",
    compatibleTypes: ["ESFP", "ESTP", "ENFJ", "ENTJ"],
    careerFields: ["Nurse", "Librarian", "Social Worker", "Administrator"],
    strengths: ["Loyalty", "Detail-orientation", "Compassion", "Reliability"],
    challenges: ["Change", "Assertiveness", "Overworking", "Conflict"],
    percentage: 13.8
  },
  "ISTP": {
    alias: "The Virtuoso",
    compatibleTypes: ["ENFJ", "ESFJ", "ENTJ", "ESTJ"],
    careerFields: ["Mechanic", "Pilot", "Athlete", "Technician"],
    strengths: ["Practicality", "Adaptability", "Problem-solving", "Calmness"],
    challenges: ["Emotional connection", "Long-term planning", "Rules", "Commitment"],
    percentage: 5.4
  },
  "ISTJ": {
    alias: "The Logistician",
    compatibleTypes: ["ESFP", "ESTP", "ISFJ", "ENFJ"],
    careerFields: ["Accountant", "Inspector", "Manager", "Law Enforcement"],
    strengths: ["Responsibility", "Organization", "Integrity", "Practicality"],
    challenges: ["Flexibility", "Emotional expression", "Change", "Creativity"],
    percentage: 11.6
  },
  "ESFP": {
    alias: "The Entertainer",
    compatibleTypes: ["ISFJ", "ISTJ", "ENFP", "ENTP"],
    careerFields: ["Performer", "Event Planner", "Salesperson", "Designer"],
    strengths: ["Spontaneity", "Energy", "Sociability", "Optimism"],
    challenges: ["Planning", "Focus", "Criticism", "Depth"],
    percentage: 8.5
  },
  "ESFJ": {
    alias: "The Consul",
    compatibleTypes: ["ISFP", "ISTP", "ENFJ", "ENTJ"],
    careerFields: ["Teacher", "Nurse", "Event Coordinator", "Customer Service"],
    strengths: ["Warmth", "Cooperation", "Duty", "Sociability"],
    challenges: ["Change", "Criticism", "Independence", "Over-sensitivity"],
    percentage: 12.3
  },
  "ESTP": {
    alias: "The Entrepreneur",
    compatibleTypes: ["ISFJ", "ISTJ", "ENFJ", "ENTP"],
    careerFields: ["Salesperson", "Athlete", "Trader", "Emergency Responder"],
    strengths: ["Boldness", "Practicality", "Sociability", "Adaptability"],
    challenges: ["Patience", "Planning", "Sensitivity", "Rules"],
    percentage: 4.3
  },
  "ESTJ": {
    alias: "The Executive",
    compatibleTypes: ["ISFP", "ISTP", "INTP", "ENFJ"],
    careerFields: ["Manager", "Judge", "Supervisor", "Business Owner"],
    strengths: ["Orderliness", "Leadership", "Reliability", "Decisiveness"],
    challenges: ["Flexibility", "Empathy", "Relaxation", "Innovation"],
    percentage: 8.7
  }
};

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
  // Get personality info from database or use default
  const personalityInfo = personalityDatabase[personalityType] || personalityDatabase["default"];
  
  // Mock personality distribution data for comparison
  const personalityDistribution = {
    "INFP": 4.4,
    "INTJ": 2.1,
    "ENFJ": 2.5,
    "ISFP": 8.8,
    "ESFJ": 12.3,
    "ISTJ": 11.6,
    "ESTJ": 8.7,
    "ENFP": 8.1,
  };
  
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
                  {personalityDistribution[personalityType as keyof typeof personalityDistribution] || personalityInfo.percentage}% of
                  population
                </span>
              </div>

              <div className="h-10 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
                  style={{
                    width: `${personalityDistribution[personalityType as keyof typeof personalityDistribution] || personalityInfo.percentage}%`,
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
