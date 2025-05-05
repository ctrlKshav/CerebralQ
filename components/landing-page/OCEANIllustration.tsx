import { Brain, HeartHandshake, Layers3, LineChart, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function OCEANIllustration() {
  return (
    <div className="relative w-full max-w-md">
      <Card className="bg-gradient-to-br from-background to-secondary/10 border rounded-xl shadow-md">
        <CardContent className="p-6">
          <div className="rounded-lg p-5 relative">
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
                  <Progress value={80} className="h-1.5 mt-1" indicatorClassName="bg-blue-500" />
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
                  <Progress value={65} className="h-1.5 mt-1" indicatorClassName="bg-emerald-500" />
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
                  <Progress value={55} className="h-1.5 mt-1" indicatorClassName="bg-amber-500" />
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
                  <Progress value={75} className="h-1.5 mt-1" indicatorClassName="bg-purple-500" />
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
                  <Progress value={40} className="h-1.5 mt-1" indicatorClassName="bg-red-500" />
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
        </CardContent>
      </Card>
    </div>
  );
} 