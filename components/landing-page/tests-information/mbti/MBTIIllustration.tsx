import { BadgeCheck, Fingerprint, Layers, Lightbulb, Users } from "lucide-react";
import { TestIllustration, Trait } from '../shared/TestIllustration';

export function MBTIIllustration() {
  const traits: Trait[] = [
    {
      title: "Extraversion",
      value: 75,
      icon: <Users size={16} className="text-primary" />,
      color: "primary"
    },
    {
      title: "Intuition",
      value: 82,
      icon: <Lightbulb size={16} className="text-amber-500" />,
      color: "amber"
    },
    {
      title: "Feeling",
      value: 88,
      icon: <BadgeCheck size={16} className="text-emerald-500" />,
      color: "green"
    },
    {
      title: "Judging",
      value: 70,
      icon: <Fingerprint size={16} className="text-violet-500" />,
      color: "violet"
    }
  ];

  return (
    <TestIllustration
      testType="MBTI"
      title="The Protagonist"
      subtitle="Charismatic & Inspiring Leader"
      traits={traits}
      centerIcon={
        <div className="h-20 w-20 rounded-full flex items-center justify-center">
          <span className="text-3xl font-bold text-primary">ENFJ</span>
        </div>
      }
      summary="You are charismatic, empathetic, and organized, with a natural ability to inspire and lead others."
      footerIcon={<Layers size={12} />}
      footerText="Cerebral Quotient Assessment"
    />
  );
}