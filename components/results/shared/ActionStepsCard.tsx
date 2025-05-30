﻿import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { formatWithUsername } from "@/lib/formatWithUsername";

interface ActionStep {
  number: number;
  description: string;
}

interface ActionStepsCardProps {
  firstname?: string | null;
  title?: string;
  steps: ActionStep[];
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  objectFit?: string;
}

const ActionStepsCard = ({
  firstname,
  title = "Let's Get Started on this!",
  steps,
  imageSrc,
  imageAlt = "Action steps",
  className = "",
  objectFit = "object-cover",
}: ActionStepsCardProps) => {
  return (
    <Card className={`h-full ${className} shadow-none border-0 sm:border overflow-hidden`}>
      <div className="flex flex-col md:flex-row">
        <CardContent className={`px-0 sm:p-8 ${!imageSrc ? 'w-full' : 'md:w-3/5'}`}>
          <div className="flex items-center mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
              {title}
            </h3>
          </div>

          <ul className="space-y-5 text-base ml-4">
            {steps.map((step) => (
              <li key={`action-step-${step.number}`} className="flex items-start">
                <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 flex-shrink-0 relative -top-1 md:-top-0.5">
                  {step.number}
                </div>
                <p className="mt-0 text-card-foreground text-base md:text-lg">
                  {formatWithUsername(step.description, firstname)}
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
              className={`w-full h-auto ${objectFit}`}
              priority={false}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default ActionStepsCard;