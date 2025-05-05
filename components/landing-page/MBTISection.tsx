
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layers } from "lucide-react";

const personalityTypes = [
  { id: "INTJ", label: "The Architect", color: "from-violet-500/20 to-indigo-500/20" },
  { id: "INFJ", label: "The Advocate", color: "from-blue-500/20 to-teal-500/20" },
  { id: "ENFP", label: "The Campaigner", color: "from-amber-500/20 to-orange-500/20" },
  { id: "ESTP", label: "The Entrepreneur", color: "from-red-500/20 to-orange-500/20" },
];

const traits = [
  { name: "Introversion (I)", color: "bg-cerebral-soft-blue/30", position: "left-[10%] top-[20%]" },
  { name: "Extraversion (E)", color: "bg-cerebral-soft-orange/30", position: "right-[10%] top-[20%]" },
  { name: "Sensing (S)", color: "bg-cerebral-soft-green/30", position: "left-[10%] bottom-[20%]" },
  { name: "Intuition (N)", color: "bg-cerebral-soft-purple/30", position: "right-[10%] bottom-[20%]" },
];

export function MBTISection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/20 -z-10"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">MBTI Assessment</h2>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Discover Your Personality Type</h3>
            
            <p className="text-lg text-muted-foreground mb-6">
              The Myers-Briggs Type Indicator (MBTI) identifies how you perceive the world and make decisions, 
              classifying personalities into 16 distinct types based on four key dichotomies.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {traits.map((trait) => (
                <motion.div
                  key={trait.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`${trait.color} p-4 rounded-lg`}
                >
                  <h4 className="font-medium mb-1">{trait.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {trait.name.includes("(I)") ? "Internal focus" : 
                     trait.name.includes("(E)") ? "External focus" : 
                     trait.name.includes("(S)") ? "Concrete details" : "Patterns & possibilities"}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <Button className="rounded-full px-6">
              Take the MBTI Assessment
            </Button>
          </motion.div>
          
          {/* Right visualization */}
          <div className="relative h-[500px]">
            {/* Central circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center z-10"
            >
              <span className="text-xl font-semibold">16<br/>Types</span>
            </motion.div>
            
            {/* Orbiting personality types */}
            {personalityTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                className={`absolute glass-card rounded-lg p-4 shadow-lg border border-white/10 w-[140px] ${index === 0 ? 'left-0 top-[30%]' : 
                                                                index === 1 ? 'left-[20%] top-[10%]' :
                                                                index === 2 ? 'right-[20%] top-[10%]' :
                                                                'right-0 top-[30%]'}`}
              >
                <div className={`h-16 rounded-lg mb-3 bg-gradient-to-br ${type.color} flex items-center justify-center text-2xl font-bold`}>
                  {type.id}
                </div>
                <h4 className="text-center text-sm font-medium">{type.label}</h4>
              </motion.div>
            ))}
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
                d="M140 250 L250 250" 
                stroke="currentColor" 
                strokeWidth="1"
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.4 }}
                d="M250 250 L110 155" 
                stroke="currentColor" 
                strokeWidth="1"
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
                d="M250 250 L390 155" 
                stroke="currentColor" 
                strokeWidth="1"
              />
              <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
                d="M250 250 L360 250" 
                stroke="currentColor" 
                strokeWidth="1"
              />
            </svg>
            
            {/* Additional personality types floating/rotating in background */}
            <div className="absolute inset-0 overflow-hidden">
              {["ISFP", "ESFJ", "ENTJ", "ISFJ", "INTP", "ENTP"].map((type, idx) => (
                <motion.div
                  key={type}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.15 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + (idx * 0.1), duration: 0.8 }}
                  className="absolute text-xl font-bold"
                  style={{
                    left: `${20 + (idx * 10)}%`,
                    top: `${50 + (idx % 3 * 15)}%`,
                    transform: `rotate(${(idx % 2) * 10}deg)`
                  }}
                >
                  {type}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
