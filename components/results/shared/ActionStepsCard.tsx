import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ActionStep {
  number: number;
  description: string;
}

interface ActionStepsCardProps {
  title?: string;
  steps: ActionStep[];
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

const ActionStepsCard = ({
  title = "Let's Make It Happen",
  steps,
  imageSrc,
  imageAlt = "Action steps",
  className = "",
}: ActionStepsCardProps) => {
  return (
    <Card className={`h-full  ${className} shadow-none border-0 sm:border overflow-hidden`}>
      <div className="flex flex-col md:flex-row">
        <CardContent className={`px-0 sm:p-8 ${!imageSrc ? 'w-full' : 'md:w-3/5'}`}>
          <div className="flex items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
              {title}
            </h3>
          </div>

          <ul className="space-y-5 text-base ml-4">
            {steps.map((step) => (
              <li key={`action-step-${step.number}`} className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                  {step.number}
                </div>
                <p className="text-card-foreground text-base md:text-lg">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>

        {imageSrc && (
          <div className="md:w-2/5 sm:min-h-[320px] h-[340px] max-h-[360px] relative border-t md:border-t-0 md:border-l border-border flex">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1470}
              height={640}
              className="object-cover w-full h-auto"
              priority={false}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ActionStepsCard;
