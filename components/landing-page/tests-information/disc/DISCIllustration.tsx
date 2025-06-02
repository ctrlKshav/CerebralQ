import { Target, Users, Shield, CheckCircle } from "lucide-react";
import { TestIllustration, Trait } from '../shared/TestIllustration';

export function DISCIllustration() {
  const traits: Trait[] = [
    {
      title: "Dominance",
      value: 70,
      icon: <Target size={12} className="text-red-500" />,
      color: "red"
    },
    {
      title: "Influence",
      value: 85,
      icon: <Users size={12} className="text-amber-500" />,
      color: "amber"
    },
    {
      title: "Steadiness",
      value: 60,
      icon: <Shield size={12} className="text-emerald-500" />,
      color: "green"
    },
    {
      title: "Conscientiousness",
      value: 75,
      icon: <CheckCircle size={12} className="text-blue-500" />,
      color: "blue"
    }
  ];

  const discIcon = (
    <div className="relative h-16 w-16">
      <div className="absolute inset-0 bg-red-500/20 rounded-full transform rotate-0"></div>
      <div className="absolute inset-0 bg-amber-500/20 rounded-full transform rotate-90"></div>
      <div className="absolute inset-0 bg-emerald-500/20 rounded-full transform rotate-180"></div>
      <div className="absolute inset-0 bg-blue-500/20 rounded-full transform rotate-270"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold">DISC</span>
      </div>
    </div>
  );

  return (
    <TestIllustration
      testType="DISC"
      title="Behavioral Style"
      subtitle="Your DISC Profile"
      traits={traits}
      centerIcon={discIcon}
      summary="You demonstrate strong influence and conscientiousness, with balanced dominance and steadiness in your behavioral style."
      footerIcon={<Target size={12} />}
      footerText="Cerebral Quotient Assessment"
      cardClassName="bg-gradient-to-br from-background to-secondary/10 border rounded-xl shadow-md"
    />
  );
} 