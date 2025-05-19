import { Badge, Layers } from "lucide-react";
import { TestInfo } from "../shared/TestInfo";
import { MBTIIllustration } from "./MBTIIllustration";

export function MBTISection() {
  const whatIsContent = (
    <p className="text-muted-foreground">
      The Myers-Briggs Type Indicator (MBTI) is a self-report questionnaire designed to identify a person's personality type, strengths, and preferences. It's based on Carl Jung's theory of psychological types and categorizes people into 16 distinct personality types.
    </p>
  );

  const benefitsContent = (
    <ul className="space-y-2 text-muted-foreground">
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>Gain insights into your natural strengths and potential blind spots</span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>Improve communication and relationships with others</span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>Make more informed career and educational choices</span>
      </li>
      <li className="flex items-start">
        <Badge className="mr-2 mt-1 h-4 w-4 text-primary" />
        <span>Enhance self-awareness and personal development</span>
      </li>
    </ul>
  );

  return (
    <TestInfo
      icon={<Layers className="h-5 w-5 text-primary" />}
      label="Personality Assessment"
      title="Myers-Briggs Type Indicator (MBTI)"
      description="Discover your unique psychological type and gain insight into how you perceive the world and make decisions."
      whatIsTitle="What is MBTI?"
      whatIsContent={whatIsContent}
      benefitsTitle="Benefits of MBTI Assessment"
      benefitsContent={benefitsContent}
      illustration={<MBTIIllustration />}
      ctaText="Take MBTI Assessment"
      onCtaClick={() => console.log('MBTI assessment clicked')}
    />
  );
}