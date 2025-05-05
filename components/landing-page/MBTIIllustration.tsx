import { BadgeCheck, Fingerprint, Layers, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function MBTIIllustration() {
  return (
    <div className="relative w-full max-w-md">
      <Card className="border border-border rounded-xl shadow-md">
        <CardContent className="p-6">
          <div className="rounded-lg p-5 relative">
            <div className="flex justify-center mb-4">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="h-20 w-20 rounded-full flex items-center justify-center">
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
                <div className="flex-1">
                  <div className="text-xs font-medium">Extraversion</div>
                  <Progress value={75} className="h-1.5 mt-1" indicatorClassName="bg-primary" />
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-2">
                  <Lightbulb size={16} className="text-amber-500" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium">Intuition</div>
                  <Progress value={82} className="h-1.5 mt-1" indicatorClassName="bg-amber-500" />
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-2">
                  <BadgeCheck size={16} className="text-emerald-500" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium">Feeling</div>
                  <Progress value={88} className="h-1.5 mt-1" indicatorClassName="bg-emerald-500" />
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="mr-2">
                  <Fingerprint size={16} className="text-violet-500" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium">Judging</div>
                  <Progress value={70} className="h-1.5 mt-1" indicatorClassName="bg-violet-500" />
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
        </CardContent>
      </Card>
    </div>
  );
} 