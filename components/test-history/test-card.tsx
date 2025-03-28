import { format } from "date-fns";
import { Calendar, Sparkles, Brain, Zap, Flame } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestResult } from "./mock-data";

interface TestCardProps {
  result: TestResult;
}

export default function TestCard({ result }: TestCardProps) {
  // Map for trait icons and colors
  const traitIcons = [
    { icon: Brain, label: "Mental Preference" },
    { icon: Sparkles, label: "Information Processing" },
    { icon: Zap, label: "Decision Making" },
    { icon: Flame, label: "Lifestyle Approach" }
  ];

  return (
    <Card
      className="group relative overflow-hidden border-0 bg-background/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ease-out w-full min-h-[350px] hover:scale-[1.01] dark:border-white/5 border-black/10 shadow-lg"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${result.color} dark:opacity-15 opacity-20 group-hover:opacity-25 transition-opacity duration-500`}
      ></div>
      <div
        className="absolute inset-0 dark:opacity-10 opacity-20 group-hover:opacity-25 transition-opacity duration-500"
        style={{
          backgroundImage: `url(${result.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 bg-white/25 dark:bg-black/30"></div>
      
      <CardHeader className="relative z-10 pb-6 pt-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className={`text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${result.color}`}>
                  {result.type}
                </div>
              </div>
              <p className="text-md dark:text-muted-foreground/90 text-muted-foreground/70">{result.description}</p>
            </div>
            <span className="text-sm text-muted-foreground flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-md border dark:border-white/10 border-black/10">
              <Calendar className="h-4 w-4" />
              {format(result.date, "MMM d, yyyy")}
            </span>
          </div>
          
          <div className="space-y-2">
            
            <p className="text-2xl font-medium leading-relaxed dark:text-white/90 text-black/80">
              {result.highlight}
            </p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-0 pb-14 px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {result.traits.map((trait, i) => {
            const TraitIcon = traitIcons[i].icon;
            return (
              <div
                key={trait}
                className={`relative group/trait overflow-hidden rounded-lg bg-background/60 backdrop-blur-sm 
                  shadow-sm hover:shadow-md transition-all duration-300 border-0`}
              >
                <div className={`h-1 w-full bg-gradient-to-r ${result.color}`}></div>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-gray-500 font-medium">{traitIcons[i].label}</span>
                  </div>
                  <p className="font-semibold text-sm">{trait}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
