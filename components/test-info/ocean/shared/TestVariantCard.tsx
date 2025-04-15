import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, ClipboardList, InfoIcon } from "lucide-react";
import Link from "next/link";
import AnimatedCard from "./AnimatedCard";
import { TestVariant } from "@/types/tests/test-info/ocean/test-variants";
import { HybridTooltip, HybridTooltipTrigger, HybridTooltipContent } from "@/components/ui/tooltip-hybrid";

type TestVariantCardProps = TestVariant & {
  delay?: number;
};

const TestVariantCard: React.FC<TestVariantCardProps> = ({
  title,
  subtitle,
  icon,
  timeEstimate,
  questionCount,
  description,
  additionalInfo,
  testPath,
  acronymMeaning,
  testOrigin,
  colorScheme,
  delay = 0,
}) => {
  return (
    <AnimatedCard 
      delay={delay}
      once={true}
      className={`relative rounded-xl overflow-hidden shadow-lg border ${colorScheme.border} hover:shadow-xl h-full flex flex-col`}
    >
      <div className={`absolute inset-0 ${colorScheme.hover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Decorative elements */}
      <div className={`absolute -top-10 -right-10 w-20 h-20 ${colorScheme.accent} rotate-12 transform origin-bottom-left`}></div>
      
      <div className="relative p-6 flex flex-col flex-1">
        {/* Icon & Title section */}
        <div className="text-center mb-5">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorScheme.iconGradient} flex items-center justify-center text-white shadow-md mb-4 mx-auto`}>
            {icon}
          </div>
          <div className="flex items-center justify-center gap-2">
            <h3 className="text-xl font-bold text-card-foreground mb-1">{title}</h3>
            <HybridTooltip delayDuration={100}>
              <HybridTooltipTrigger asChild>
                <button className={`inline-flex items-center justify-center rounded-full w-5 h-5 ${colorScheme.badge} ${colorScheme.badgeText} :${colorScheme.hover} hover:text-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors`}>
                  <InfoIcon className="w-3 h-3" />
                  <span className="sr-only">Test information</span>
                </button>
              </HybridTooltipTrigger>
              <HybridTooltipContent 
                side="top" 
                align="center" 
                className={`max-w-xs p-4 bg-card border ${colorScheme.badgeBorder} shadow-md text-card-foreground`}
                sideOffset={5}
              >
                <div className="space-y-2">
                  <p className={`font-medium ${colorScheme.badgeText}`}>{acronymMeaning}</p>
                  <p className="text-xs text-muted-foreground">{testOrigin}</p>
                </div>
              </HybridTooltipContent>
            </HybridTooltip>
          </div>
          <p className="text-muted-foreground text-sm">{subtitle}</p>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mt-3 justify-center">
            <Badge variant="outline" className={`${colorScheme.badge} ${colorScheme.badgeText} ${colorScheme.badgeBorder}`}>
              <Clock className="w-3 h-3 mr-1" /> {timeEstimate}
            </Badge>
            <Badge variant="outline" className={`${colorScheme.badge} ${colorScheme.badgeText} ${colorScheme.badgeBorder}`}>
              <ClipboardList className="w-3 h-3 mr-1" /> {questionCount}
            </Badge>
          </div>
        </div>
        
        {/* Divider */}
        <div className={`w-16 h-1 ${colorScheme.accent} rounded-full mx-auto mb-5`}></div>
        
        {/* Description section */}
        <div className="relative z-10 text-center flex-1 flex flex-col">
          <h4 className="text-lg font-medium text-card-foreground mb-3">{subtitle}</h4>
          <p className="text-muted-foreground mb-4 text-sm">{description}</p>
          <p className="text-muted-foreground mb-6 text-sm">{additionalInfo}</p>
          
          <div className="mt-auto">
            <Link href={testPath} className="w-full block">
              <Button variant="outline" className={`w-full bg-transparent ${colorScheme.buttonHover} ${colorScheme.buttonText} hover:text-white dark:hover:text-white ${colorScheme.badgeBorder} ${colorScheme.border} group`}>
                Start {title} Test <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </AnimatedCard>
  );
};

export default TestVariantCard; 