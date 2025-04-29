"use client";
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
  CalendarClock,
} from "lucide-react";
import { type TestInfo } from "@/types/chooseTest";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TestCardProps {
  test: TestInfo;
}

export function TestCard({ test }: TestCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BarChart3":
        return <BarChart3 className="h-6 w-6" />;
      case "LineChart":
        return <LineChart className="h-6 w-6" />;
      case "Users":
        return <Users className="h-4 w-4" />;
      case "CheckCircle":
        return <CheckCircle className="h-4 w-4" />;
      case "Clock":
        return <Clock className="h-4 w-4" />;
      case "Shield":
        return <Shield className="h-4 w-4" />;
      case "BookOpen":
        return <BookOpen className="h-4 w-4" />;
      case "CalendarClock":
        return <CalendarClock className="h-4 w-4" />;
      default:
        return <BarChart3 className="h-6 w-6" />;
    }
  };

  const cardVariants = {
    initial: { y: 0 },
    hover: { y: -5 },
  };

  const arrowVariants = {
    initial: { x: 0 },
    hover: { x: 5 },
  };

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl bg-card text-card-foreground border border-border group h-full"
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3 }}
      variants={cardVariants}
    >
      <Link href={test.path}>
        <div className="p-6 md:p-8 cursor-pointer flex flex-col justify-between h-full">
          <div
            className={`absolute top-0 right-0 w-32 h-32 opacity-20 rounded-bl-full ${test.colorClass}`}
          ></div>

          <div className="flex items-start mb-4 h-full">
            <div
              className={`mr-4 p-3 rounded-lg ${test.colorClass} text-white`}
            >
              {getIcon(test.icon)}
            </div>
            <div>
              <h2 className="text-2xl font-semibold mr-2">{test.title}</h2>
              <div className="flex mt-2 gap-2">
                <Badge
                  variant="default"
                  className={`rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1 ${test.colorClass} hover:${test.colorClass} opacity-80 text-white`}
                >
                  <Clock className="h-3 w-3 mr-1" />
                  {test.badges.testDuration}
                </Badge>
                <Badge
                  variant="default"
                  className={`rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1 ${test.colorClass} hover:${test.colorClass} opacity-80 text-white`}
                >
                  <Users className="h-3 w-3 mr-1" />
                  {test.badges.traitCount}
                </Badge>
                <Badge
                  variant="default"
                  className={`rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1 ${test.colorClass} hover:${test.colorClass} opacity-80 text-white`}
                >
                  {test.badges.quality}
                </Badge>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {test.description}
              </p>
            </div>
          </div>

          <div className="h-full">
            <div className="space-y-4 mt-6">
              {test.features.map((feature, index) => (
                <div className="flex items-center">
                  <span
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${feature.iconColorClass} mr-3`}
                  >
                    {getIcon(feature.icon)}
                  </span>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex justify-between items-center">
            
              <span className="text-sm text-muted-foreground">
                {test.testsTaken}
              </span>
            </div>
            <div className="mt-6">
              <span
                className={`inline-flex items-center ${test.textColorClass} font-medium group-hover:underline`}
              >
                Explore More
                <motion.div
                  variants={arrowVariants}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="ml-2 h-4 w-4" />
                </motion.div>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
