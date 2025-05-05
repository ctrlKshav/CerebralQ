import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Brain, HeartHandshake, Layers3, LineChart, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { OCEANIllustration } from "./OCEANIllustration";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function OCEANSection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          icon={<Layers3 className="h-5 w-5 text-primary" />}
          label="Personality Assessment"
          title="The Big Five (OCEAN) Model"
          description="Explore the five core dimensions that shape your behavior, emotions, and cognitive patterns."
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">What is the OCEAN Model?</h3>
                  <p className="text-muted-foreground">
                    The OCEAN model, also known as the Big Five or Five-Factor Model, measures five 
                    key personality dimensions that researchers widely accept as the fundamental traits 
                    that form human personality:
                  </p>
                </div>
                
                <ul className="space-y-3">
                  <li className="pl-4 border-l-2 border-blue-500/40">
                    <span className="font-medium">Openness:</span> Appreciation for adventure, unusual ideas, and curiosity
                  </li>
                  <li className="pl-4 border-l-2 border-emerald-500/40">
                    <span className="font-medium">Conscientiousness:</span> Organization, dependability, and self-discipline
                  </li>
                  <li className="pl-4 border-l-2 border-amber-500/40">
                    <span className="font-medium">Extraversion:</span> Energy, sociability, and tendency to seek stimulation
                  </li>
                  <li className="pl-4 border-l-2 border-purple-500/40">
                    <span className="font-medium">Agreeableness:</span> Compassion, cooperativeness, and warmth toward others
                  </li>
                  <li className="pl-4 border-l-2 border-red-500/40">
                    <span className="font-medium">Neuroticism:</span> Tendency to experience negative emotions and stress
                  </li>
                </ul>
                
                <Separator />
                
                <div>
                  <p className="text-muted-foreground mb-6">
                    Your score on each dimension provides insight into your personality traits and 
                    how you typically respond to different situations and environments.
                  </p>
                  
                  <Button className="rounded-full px-6">
                    Take the OCEAN Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Right side: OCEAN Certificate Illustration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex justify-center"
          >
            <OCEANIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 