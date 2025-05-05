import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge, BadgeCheck, Fingerprint, Layers, Lightbulb, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-secondary/20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(250,180,120,0.05),transparent_40%)] pointer-events-none"></div>
      
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
            <div className="relative w-full max-w-md">
              <div className="bg-gradient-to-br from-card to-background rounded-xl p-6 shadow-lg">
                <div className=" rounded-lg p-5 relative">
                 
                  
                  <div className="flex justify-center mb-4">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="h-20 w-20 rounded-full  flex items-center justify-center">
                        <span className="text-3xl font-bold text-primary">ENFJ</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-center text-lg font-semibold mb-1">The Protagonist</h3>
                  <p className="text-center text-xs text-muted-foreground mb-4">Charismatic & Inspiring Leader</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <Users size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-medium">Extraversion</div>
                        <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                          <div className="h-full bg-primary rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="mr-2">
                        <Lightbulb size={16} className="text-amber-500" />
                      </div>
                      <div>
                        <div className="text-xs font-medium">Intuition</div>
                        <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: '82%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="mr-2">
                        <BadgeCheck size={16} className="text-emerald-500" />
                      </div>
                      <div>
                        <div className="text-xs font-medium">Feeling</div>
                        <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="mr-2">
                        <Fingerprint size={16} className="text-violet-500" />
                      </div>
                      <div>
                        <div className="text-xs font-medium">Judging</div>
                        <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                          <div className="h-full bg-violet-500 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    <p className="mb-2 text-center">Strengths: Charismatic, Empathetic, Natural Leader</p>
                    <p className="text-center">Challenges: Idealistic, Sensitive to Criticism</p>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <div className="h-6 w-6 rounded-full border border-border flex items-center justify-center">
                        <Layers size={12} />
                      </div>
                      <span>CerebralQ Assessment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 