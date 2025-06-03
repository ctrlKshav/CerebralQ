import { Badge, Layers } from "lucide-react";
import { TestInfo } from "../shared/TestInfo";
import { HEXACOIllustration } from "./HEXACOIllustration";

export function HEXACOSection() {
  const whatIsContent = (
    <p className="text-muted-foreground">
      The HEXACO Personality Assessment is a comprehensive personality test that measures six major dimensions of personality: Honesty-Humility, Emotionality, Extraversion, Agreeableness, Conscientiousness, and Openness to Experience. This scientifically validated assessment provides deep insights into your personality traits and behavioral tendencies.
    </p>
  );

  const benefitsContent = (
    <ul className="space-y-2 text-muted-foreground">
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>
          Gain a comprehensive understanding of your personality traits and tendencies
        </span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>Identify areas for personal growth and development</span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>Make more informed decisions about career paths and relationships</span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>Develop better self-awareness and emotional intelligence</span>
      </li>
    </ul>
  );

  return (
    <TestInfo
      urlID="hexaco"
      icon={<Layers className="h-5 w-5 text-primary" />}
      label="Personality Assessment"
      title="HEXACO Personality Assessment"
      description="Explore the six dimensions of your personality and gain valuable insights into your behavioral patterns and tendencies."
      whatIsTitle="What is HEXACO?"
      whatIsContent={whatIsContent}
      benefitsTitle="Benefits of HEXACO Assessment"
      benefitsContent={benefitsContent}
      illustration={<HEXACOIllustration />}
      ctaText="Take HEXACO Assessment"
    />
  );
} 