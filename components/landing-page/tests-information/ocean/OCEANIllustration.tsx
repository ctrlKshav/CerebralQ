import { Brain, HeartHandshake, Layers3, LineChart, Sparkles } from "lucide-react";
import { TestIllustration, Trait } from '../shared/TestIllustration';

export function OCEANIllustration() {
  const traits: Trait[] = [
    {
      title: "Openness",
      value: 80,
      icon: <Sparkles size={12} className="text-blue-500" />,
      color: "blue"
    },
    {
      title: "Conscientiousness",
      value: 65,
      icon: <LineChart size={12} className="text-emerald-500" />,
      color: "green"
    },
    {
      title: "Extraversion",
      value: 55,
      icon: <HeartHandshake size={12} className="text-amber-500" />,
      color: "amber"
    },
    {
      title: "Agreeableness",
      value: 75,
      icon: <HeartHandshake size={12} className="text-purple-500" />,
      color: "purple"
    },
    {
      title: "Neuroticism",
      value: 40,
      icon: <Brain size={12} className="text-red-500" />,
      color: "red"
    }
  ];

  const oceanIcon = (
    <div className="relative h-16 w-16">
      <div className="absolute inset-0 bg-blue-500/20 rounded-full transform rotate-0"></div>
      <div className="absolute inset-0 bg-emerald-500/20 rounded-full transform rotate-45"></div>
      <div className="absolute inset-0 bg-amber-500/20 rounded-full transform rotate-90"></div>
      <div className="absolute inset-0 bg-purple-500/20 rounded-full transform rotate-135"></div>
      <div className="absolute inset-0 bg-red-500/20 rounded-full transform rotate-180"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold">OCEAN</span>
      </div>
    </div>
  );

  return (
    <TestIllustration
      testType="OCEAN"
      title="Personality Dimensions"
      subtitle="Your Big Five Personality Traits"
      traits={traits}
      centerIcon={oceanIcon}
      summary="You show high openness to new experiences and strong agreeableness, with moderate conscientiousness and extraversion."
      footerIcon={<Layers3 size={12} />}
      footerText="Cerebral Quotient Assessment"
      cardClassName="bg-gradient-to-br from-background to-secondary/10 border rounded-xl shadow-md"
    />
  );
}