import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Fingerprint, Layers, Lightbulb, Users } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// The 4 MBTI dimensions
const dimensions = [
  {
    title: "Mind",
    types: ["Introversion (I)", "Extraversion (E)"],
    description: "How we interact with our surroundings",
    icon: <Users size={18} className="text-primary" />,
    color: "border-l-primary/40"
  },
  {
    title: "Energy",
    types: ["Sensing (S)", "Intuition (N)"],
    description: "How we see the world & process information",
    icon: <Lightbulb size={18} className="text-amber-500" />,
    color: "border-l-amber-500/40"
  },
  {
    title: "Nature",
    types: ["Thinking (T)", "Feeling (F)"],
    description: "How we make decisions & cope with emotions",
    icon: <BadgeCheck size={18} className="text-emerald-500" />,
    color: "border-l-emerald-500/40"
  },
  {
    title: "Tactics",
    types: ["Judging (J)", "Perceiving (P)"],
    description: "How we approach work, planning & decision-making",
    icon: <Fingerprint size={18} className="text-violet-500" />,
    color: "border-l-violet-500/40"
  }
];

const typeCategories = [
  { 
    name: "Analysts", 
    types: ["INTJ", "INTP", "ENTJ", "ENTP"],
    description: "Strategic thinkers using logic & rationality"
  },
  { 
    name: "Diplomats", 
    types: ["INFJ", "INFP", "ENFJ", "ENFP"],
    description: "Empathetic idealists guided by values & principles"
  },
  { 
    name: "Sentinels", 
    types: ["ISTJ", "ISFJ", "ESTJ", "ESFJ"],
    description: "Practical organizers valuing cooperation & security"
  },
  { 
    name: "Explorers", 
    types: ["ISTP", "ISFP", "ESTP", "ESFP"],
    description: "Versatile experimenters seeking freedom & excitement"
  }
];

export function MBTISection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/20 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,250,0.05),transparent_40%)] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(250,180,120,0.05),transparent_40%)] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-full">
              <Layers className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm font-medium uppercase tracking-wider text-primary">Personality Assessment</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
            Discover Your MBTI Profile
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The Myers-Briggs Type Indicator® helps you understand your unique psychological preferences
            and how you perceive the world and make decisions.
          </p>
        </motion.div>
        
        {/* MBTI Dimensions - Modern, horizontal layout */}
        <motion.div 
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">The Four Key Dimensions</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              MBTI is based on four psychological dimensions, each representing two opposite preferences. 
              Your unique combination forms your personality type.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {dimensions.map((dimension, index) => (
              <motion.div
                key={dimension.title}
                variants={fadeIn}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl overflow-hidden"
              >
                <div className="px-6 py-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-full bg-background">
                      {dimension.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{dimension.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{dimension.description}</p>
                  
                  <div className="space-y-2">
                    {dimension.types.map((type, i) => (
                      <div 
                        key={type} 
                        className={`pl-3 py-2 border-l-2 ${dimension.color} text-sm font-medium`}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* 16 Personality Types - More professional table */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3">The 16 Personality Types</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each personality type is a unique combination of the four dimensions, 
              resulting in 16 distinctive personality profiles.
            </p>
          </div>
          
          <div className="space-y-8">
            {typeCategories.map((category, index) => (
              <motion.div
                key={category.name}
                variants={fadeIn}
                className="relative"
              >
                <div className="bg-card/30 border border-border rounded-lg overflow-hidden">
                  <div className="border-b border-border bg-muted/30 px-6 py-4">
                    <h4 className="text-lg font-semibold">{category.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{category.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {category.types.map((type) => (
                        <div 
                          key={type} 
                          className="bg-background border border-border rounded-md p-4 hover:border-primary/30 hover:shadow-sm transition-all"
                        >
                          <div className="text-xl font-bold mb-1">{type}</div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {type === "INTJ" ? "The Architect" :
                             type === "INTP" ? "The Logician" : 
                             type === "ENTJ" ? "The Commander" :
                             type === "ENTP" ? "The Debater" :
                             type === "INFJ" ? "The Advocate" :
                             type === "INFP" ? "The Mediator" :
                             type === "ENFJ" ? "The Protagonist" :
                             type === "ENFP" ? "The Campaigner" :
                             type === "ISTJ" ? "The Logistician" :
                             type === "ISFJ" ? "The Defender" :
                             type === "ESTJ" ? "The Executive" :
                             type === "ESFJ" ? "The Consul" :
                             type === "ISTP" ? "The Virtuoso" :
                             type === "ISFP" ? "The Artist" :
                             type === "ESTP" ? "The Entrepreneur" :
                             "The Entertainer"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex justify-center"
        >
          <Button className="rounded-full px-8 py-6 h-auto text-base shadow-lg shadow-primary/20">
            Take the MBTI Assessment
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
