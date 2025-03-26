import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Brain, InfoIcon } from "lucide-react";
import Link from "next/link";
import {
  HybridTooltip,
  HybridTooltipContent,
  HybridTooltipTrigger,
} from "@/components/ui/tooltip-hybrid";
import { TooltipProvider } from "@/components/ui/tooltip";
import { TestTypeBadge, DifficultyBadge } from "./badges";

export const TestOverviewCard = ({ testData }: { testData: any }) => (
  <Card className="h-full flex flex-col">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-2xl">
        <Brain className="h-6 w-6" />
        Test Overview
      </CardTitle>
      <CardDescription>
        A comprehensive overview of the {testData.name} assessment
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-6 flex-grow flex flex-col justify-between">
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <TestTypeBadge type={testData.category} />
          <DifficultyBadge level={testData.difficulty_level} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-primary/5 p-3 rounded-lg">
            <div className="text-sm text-muted-foreground">Questions</div>
            <div className="font-medium text-lg">{testData.num_questions}</div>
          </div>

          <div className="bg-primary/5 p-3 rounded-lg">
            <div className="text-sm text-muted-foreground">Duration</div>
            <div className="font-medium text-lg">
              {testData.time_estimate_minutes} minutes
            </div>
          </div>

          <div className="bg-primary/5 p-3 rounded-lg">
            <div className="text-sm text-muted-foreground">Age Range</div>
            <div className="font-medium text-lg">{testData.min_age}+ years</div>
          </div>

          <div className="bg-primary/5 p-3 rounded-lg">
            <div className="text-sm text-muted-foreground flex items-center gap-1.5">
              Validity Period
              <TooltipProvider delayDuration={100}>
                <HybridTooltip>
                  <HybridTooltipTrigger asChild>
                    <InfoIcon className="h-4 w-4 text-muted-foreground" />
                  </HybridTooltipTrigger>
                  <HybridTooltipContent
                    side="right"
                    className="max-w-xs p-3 text-white"
                  >
                    <p>
                      <Link href={"/sign-up"} className="font-bold underline">
                        Create an account
                      </Link>{" "}
                      and we'll send you a reminder before your test results
                      expire!
                    </p>
                  </HybridTooltipContent>
                </HybridTooltip>
              </TooltipProvider>
            </div>
            <div className="font-medium text-lg">
              {testData.validity_period_days} days
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="font-medium text-lg border-b pb-1">Key Benefits</h4>
        <div className="space-y-3">
          {testData.test_benefits.map((benefit: any, index: number) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-primary/5 p-3 rounded-lg"
            >
              <div className="p-2  rounded-md">
                <benefit.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="font-medium">{benefit.title}</div>
                <div className="text-sm text-muted-foreground">
                  {benefit.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);
