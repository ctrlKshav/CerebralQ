import { Badge, Target } from "lucide-react";
import { TestInfo } from "../shared/TestInfo";
import { DISCIllustration } from "./DISCIllustration";

export function DISCSection() {
  const whatIsContent = (
    <p className="text-muted-foreground">
      The DISC assessment is a powerful behavioral assessment tool that helps you understand your behavioral style and how you interact with others. It measures four key dimensions of behavior: Dominance, Influence, Steadiness, and Conscientiousness, providing valuable insights into your communication preferences and work style.
    </p>
  );

  const benefitsContent = (
    <ul className="space-y-2 text-muted-foreground">
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>
          Enhance your communication effectiveness with different personality types
        </span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>Improve team dynamics and collaboration</span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>Develop stronger leadership and management skills</span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>Build more effective relationships in both professional and personal settings</span>
      </li>
    </ul>
  );

  return (
    <TestInfo
      urlID="disc"
      icon={<Target className="h-5 w-5 text-primary" />}
      label="Behavioral Assessment"
      title="DISC Personality Assessment"
      description="Discover your behavioral style and learn how to adapt your communication to work more effectively with others."
      whatIsTitle="What is DISC?"
      whatIsContent={whatIsContent}
      benefitsTitle="Benefits of DISC Assessment"
      benefitsContent={benefitsContent}
      illustration={<DISCIllustration />}
      ctaText="Take DISC Assessment"
    />
  );
} 