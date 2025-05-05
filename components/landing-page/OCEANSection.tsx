
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layers3 } from "lucide-react";

const oceanTraits = [
  { 
    name: "Openness", 
    description: "Appreciation for art, emotion, adventure, unusual ideas, imagination, curiosity, and variety of experience.", 
    color: "bg-cerebral-soft-blue/30",
    spectrum: ["Traditional", "Creative"] 
  },
  { 
    name: "Conscientiousness", 
    description: "A tendency to be organized and dependable, show self-discipline, act dutifully, aim for achievement, and prefer planned rather than spontaneous behavior.", 
    color: "bg-cerebral-soft-green/30",
    spectrum: ["Flexible", "Organized"] 
  },
  { 
    name: "Extraversion", 
    description: "Energy, positive emotions, assertiveness, sociability and the tendency to seek stimulation in the company of others, and talkativeness.", 
    color: "bg-cerebral-soft-orange/30",
    spectrum: ["Reserved", "Outgoing"] 
  },
  { 
    name: "Agreeableness", 
    description: "A tendency to be compassionate and cooperative rather than suspicious and antagonistic towards others.", 
    color: "bg-cerebral-soft-yellow/30",
    spectrum: ["Challenging", "Accommodating"] 
  },
  { 
    name: "Neuroticism", 
    description: "A tendency to experience unpleasant emotions easily, such as anger, anxiety, depression, and vulnerability.", 
    color: "bg-cerebral-soft-purple/30",
    spectrum: ["Resilient", "Sensitive"] 
  }
];

export function OCEANSection() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background dark:from-secondary/20 dark:to-background -z-10"></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Layers3 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-primary">OCEAN Assessment</h2>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6">The Big Five Personality Dimensions</h3>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The OCEAN model, also known as the Five-Factor Model, measures the five core personality dimensions 
            that shape human behavior, emotions, and cognitive patterns.
          </p>
        </div>
        
        <div className="grid gap-8">
          {oceanTraits.map((trait, index) => (
            <motion.div
              key={trait.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`${trait.color} rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-6`}>
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-bold mb-2">{trait.name}</h3>
                  <p className="text-sm text-muted-foreground">{trait.description}</p>
                </div>
                
                <div className="flex-1">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>{trait.spectrum[0]}</span>
                    <span>{trait.spectrum[1]}</span>
                  </div>
                  
                  <div className="h-2 bg-white/20 dark:bg-black/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(index + 2) * 15}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      className="h-full bg-primary"
                    ></motion.div>
                  </div>
                </div>
                
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-5 text-6xl font-bold hidden md:block">
                  {trait.name.charAt(0)}
                </div>
              </div>
              
              {/* Connecting line */}
              {index < oceanTraits.length - 1 && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 24, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                  className="h-6 w-px bg-border mx-auto"
                ></motion.div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button className="rounded-full px-6">
            Take the OCEAN Assessment
          </Button>
        </div>
      </div>
    </section>
  );
}
