import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Award, Brain, HeartHandshake, Layers3, LineChart, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

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
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background dark:from-secondary/20 dark:to-background -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_20%,rgba(120,250,120,0.05),transparent_40%)] pointer-events-none"></div>
      
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
            <div className="relative w-full max-w-md">
              <div className="bg-gradient-to-br from-background to-secondary/10  rounded-xl p-6 shadow-lg">
                <div className=" rounded-lg p-5 relative">
                
                  
                  <div className="flex justify-center mb-8 mt-3">
                    <div className="relative h-16 w-16">
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full transform rotate-0"></div>
                      <div className="absolute inset-0 bg-emerald-500/20 rounded-full transform rotate-45"></div>
                      <div className="absolute inset-0 bg-amber-500/20 rounded-full transform rotate-90"></div>
                      <div className="absolute inset-0 bg-purple-500/20 rounded-full transform rotate-135"></div>
                      <div className="absolute inset-0 bg-red-500/20 rounded-full transform rotate-180"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold">OCEAN</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-center text-lg font-semibold mb-1">Personality Dimensions</h3>
                  <p className="text-center text-xs text-muted-foreground mb-5">Your Big Five Personality Traits</p>
                  
                  {/* Radar Chart Style Visualization */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center rounded-full bg-blue-500/20 p-1 mr-3">
                        <Sparkles size={12} className="text-blue-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs">
                          <span>Openness</span>
                          <span>80%</span>
                        </div>
                        <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                          <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center justify-center rounded-full bg-emerald-500/20 p-1 mr-3">
                        <LineChart size={12} className="text-emerald-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs">
                          <span>Conscientiousness</span>
                          <span>65%</span>
                        </div>
                        <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center justify-center rounded-full bg-amber-500/20 p-1 mr-3">
                        <HeartHandshake size={12} className="text-amber-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs">
                          <span>Extraversion</span>
                          <span>55%</span>
                        </div>
                        <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: '55%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center justify-center rounded-full bg-purple-500/20 p-1 mr-3">
                        <HeartHandshake size={12} className="text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs">
                          <span>Agreeableness</span>
                          <span>75%</span>
                        </div>
                        <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                          <div className="h-full bg-purple-500 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex items-center justify-center rounded-full bg-red-500/20 p-1 mr-3">
                        <Brain size={12} className="text-red-500" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-xs">
                          <span>Neuroticism</span>
                          <span>40%</span>
                        </div>
                        <div className="w-full h-1.5 bg-muted rounded-full mt-1">
                          <div className="h-full bg-red-500 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-xs text-center text-muted-foreground">
                    <p>You show high openness to new experiences and strong agreeableness, with moderate conscientiousness and extraversion.</p>
                  </div>
                  
                  <div className="flex justify-center mt-4">
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <div className="h-6 w-6 rounded-full border border-border flex items-center justify-center">
                        <Layers3 size={12} />
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