import { Badge, Layers3 } from "lucide-react";
import { TestInfo } from "../shared/TestInfo";
import { OCEANIllustration } from "./OCEANIllustration";

export function OCEANSection() {
  const whatIsContent = (
    <p className="text-muted-foreground">
      The Big Five personality traits, also known as the OCEAN model, is a
      widely accepted framework that describes human personality along five
      dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and
      Neuroticism.
    </p>
  );

  const benefitsContent = (
    <ul className="space-y-2 text-muted-foreground">
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>
          Scientifically validated approach to understanding personality
        </span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>
          Identify your unique personality profile across five dimensions
        </span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>
          Gain insights into your behavioral tendencies and emotional responses
        </span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>
          Understand how your personality influences your life choices
        </span>
      </li>
    </ul>
  );

  return (
    <TestInfo
      icon={<Layers3 className="h-5 w-5 text-primary" />}
      label="Personality Assessment"
      title="The Big Five (OCEAN) Model"
      description="Explore the five core dimensions that shape your behavior, emotions, and cognitive patterns."
      whatIsTitle="What is the OCEAN Model?"
      whatIsContent={whatIsContent}
      benefitsTitle="Benefits of OCEAN Assessment"
      benefitsContent={benefitsContent}
      illustration={<OCEANIllustration />}
      ctaText="Take OCEAN Assessment"
      onCtaClick={() => console.log("OCEAN assessment clicked")}
    />
  );
}
