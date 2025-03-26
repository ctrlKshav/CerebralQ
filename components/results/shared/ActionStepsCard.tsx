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
    <Card className={`overflow-hidden ${className} border-0 sm:border shadow-none sm:shadow`}>
      <div className="flex flex-col md:flex-row">
        <div className="p-0 sm:p-8 md:w-3/5">
          <div className="flex items-center mb-6">
            <h1 className="text-2xl md:text-2xl font-bold text-card-foreground">
              {title}
            </h1>
          </div>

          <ul className="space-y-6 ml-4">
            {steps.map((step) => (
              <li key={step.number} className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                  {step.number}
                </div>
                <p className="text-card-foreground text-base md:text-lg">
                  {step.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {imageSrc && (
          <div className="md:w-2/5  sm:min-h-[320px] h-[340px] max-h-[360px] relative border-t md:border-t-0 md:border-l border-border flex bg-red-500">
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
