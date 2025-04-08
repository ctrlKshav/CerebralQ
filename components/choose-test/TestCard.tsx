"use client"
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  CheckCircle,
  Clock,
  Shield,
  ChevronRight,
  BarChart3,
  LineChart,
  Users,
  BookOpen,
  CalendarClock
} from "lucide-react";
import { type TestInfo } from "@/types/chooseTest";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TestCardProps {
  test: TestInfo;
}

export function TestCard({ test }: TestCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BarChart3": return <BarChart3 className="h-6 w-6" />;
      case "LineChart": return <LineChart className="h-6 w-6" />;
      case "Users": return <Users className="h-4 w-4" />;
      case "CheckCircle": return <CheckCircle className="h-4 w-4" />;
      case "Clock": return <Clock className="h-4 w-4" />;
      case "Shield": return <Shield className="h-4 w-4" />;
      case "BookOpen": return <BookOpen className="h-4 w-4" />;
      case "CalendarClock": return <CalendarClock className="h-4 w-4" />;
      default: return <BarChart3 className="h-6 w-6" />;
    }
  };

  const cardVariants = {
    initial: { y: 0 },
    hover: { y: -5 }
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 }
  };

  return (
    <TooltipProvider>
      <motion.div
        className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl bg-card text-card-foreground border border-border group"
        initial="initial"
        whileHover="hover"
        transition={{ duration: 0.3 }}
        variants={cardVariants}
      >
        <Link href={test.path}>
          <div className="p-6 md:p-8 cursor-pointer">
            <div className={`absolute top-0 right-0 w-32 h-32 opacity-20 rounded-bl-full ${test.gradientClass}`}></div>
            
            <div className="flex items-start mb-4">
              <div className={`mr-4 p-3 rounded-lg ${test.gradientClass} text-white`}>
                {getIcon(test.icon)}
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-2">
                  <h2 className="text-2xl font-semibold mr-2">{test.title}</h2>
                  <Badge variant="secondary" className={`${test.badgeClass} rounded-full px-3 py-1 text-xs font-medium`}>
                    {test.badge}
                  </Badge>
                </div>
                <div className="flex mt-2 gap-2">
                  <Badge variant="secondary" className={`rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300`}>
                    <Clock className="h-3 w-3 mr-1" />
                    {test.testDuration}
                  </Badge>
                  <Badge variant="secondary" className={`rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1 bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300`}>
                    <Users className="h-3 w-3 mr-1" />
                    {test.traitCount}
                  </Badge>
                </div>
                <p className="mt-3 text-muted-foreground text-sm leading-relaxed">{test.description}</p>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              {test.features.map((feature, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <div className="flex items-center">
                      <span className={`w-8 h-8 flex items-center justify-center rounded-full ${feature.iconBgClass} mr-3`}>
                        {getIcon(feature.icon)}
                      </span>
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{feature.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
            
            <div className="mt-8 flex justify-between items-center">
              <div className="flex -space-x-2">
                {test.avatars.map((avatar, index) => (
                  <div 
                    key={index} 
                    className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs text-muted-foreground"
                    style={{ zIndex: 3 - index }}
                  >
                    {avatar.initial}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">{test.testsTaken}</span>
            </div>
            
            <div className="mt-6">
              <span className={`inline-flex items-center ${test.textColorClass} font-medium group-hover:underline`}>
                Start {test.title}
                <motion.div
                  variants={arrowVariants}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.div>
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    </TooltipProvider>
  );
}
