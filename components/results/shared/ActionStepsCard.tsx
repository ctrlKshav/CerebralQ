import React from "react";
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
    <Card className={`overflow-hidden ${className}`}>
      <div className="flex flex-col md:flex-row">
        <div className="p-8 md:w-3/5">
          <div className="flex items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
              {title}
            </h3>
          </div>

          <ul className="space-y-6 ml-4">
            {steps.map((step) => (
              <li key={step.number} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary text-white text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
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
          <div className="md:w-2/5 h-auto sm:min-h-[320px] relative border-t md:border-t-0 md:border-l border-border">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ActionStepsCard;
