import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge, BadgeCheck, Fingerprint, Layers, Lightbulb, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { MBTIIllustration } from "./MBTIIllustration";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function MBTISection() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          icon={<Layers className="h-5 w-5 text-primary" />}
          label="Personality Assessment"
          title="Myers-Briggs Type Indicator (MBTI)"
          description="Discover your unique psychological type and gain insight into how you perceive the world and make decisions."
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
                  <h3 className="text-xl font-semibold mb-3">What is MBTI?</h3>
                  <p className="text-muted-foreground">
                    The Myers-Briggs Type Indicator (MBTI) is a personality assessment that 
                    categorizes individuals into 16 distinct personality types based on four dimensions:
                  </p>
                </div>
                
                <ul className="space-y-3">
                  <li className="pl-4 border-l-2 border-primary/40">
                    <span className="font-medium">Mind:</span> Introversion (I) vs. Extraversion (E)
                  </li>
                  <li className="pl-4 border-l-2 border-amber-500/40">
                    <span className="font-medium">Energy:</span> Sensing (S) vs. Intuition (N)
                  </li>
                  <li className="pl-4 border-l-2 border-emerald-500/40">
                    <span className="font-medium">Nature:</span> Thinking (T) vs. Feeling (F)
                  </li>
                  <li className="pl-4 border-l-2 border-violet-500/40">
                    <span className="font-medium">Tactics:</span> Judging (J) vs. Perceiving (P)
                  </li>
                </ul>
                
                <Separator />
                
                <div>
                  <p className="text-muted-foreground mb-6">
                    Understanding your MBTI type can help you recognize your strengths, 
                    improve communication, and make better career and personal decisions.
                  </p>
                  
                  <Button className="rounded-full px-6">
                    Take the MBTI Assessment
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Right side: MBTI Certificate Illustration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex justify-center"
          >
            <MBTIIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 