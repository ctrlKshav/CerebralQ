import { Heart, Brain, Users, HeartHandshake, CheckCircle, Sparkles } from "lucide-react";
import { TestIllustration, Trait } from '../shared/TestIllustration';

export function HEXACOIllustration() {
  const traits: Trait[] = [
    {
      title: "Honesty-Humility",
      value: 85,
      icon: <Heart size={12} className="text-violet-500" />,
      color: "violet"
    },
    {
      title: "Emotionality",
      value: 60,
      icon: <Brain size={12} className="text-red-500" />,
      color: "red"
    },
    {
      title: "Extraversion",
      value: 70,
      icon: <Users size={12} className="text-amber-500" />,
      color: "amber"
    },
    {
      title: "Agreeableness",
      value: 75,
      icon: <HeartHandshake size={12} className="text-emerald-500" />,
      color: "green"
    },
    {
      title: "Conscientiousness",
      value: 80,
      icon: <CheckCircle size={12} className="text-blue-500" />,
      color: "blue"
    },
    {
      title: "Openness",
      value: 65,
      icon: <Sparkles size={12} className="text-purple-500" />,
      color: "purple"
    }
  ];

  const hexacoIcon = (
    <div className="relative h-16 w-16">
      <div className="absolute inset-0 bg-violet-500/20 rounded-full transform rotate-0"></div>
      <div className="absolute inset-0 bg-red-500/20 rounded-full transform rotate-60"></div>
      <div className="absolute inset-0 bg-amber-500/20 rounded-full transform rotate-120"></div>
      <div className="absolute inset-0 bg-emerald-500/20 rounded-full transform rotate-180"></div>
      <div className="absolute inset-0 bg-blue-500/20 rounded-full transform rotate-240"></div>
      <div className="absolute inset-0 bg-purple-500/20 rounded-full transform rotate-300"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-bold">HEXACO</span>
      </div>
    </div>
  );

  return (
    <TestIllustration
      testType="HEXACO"
      title="Personality Dimensions"
      subtitle="Your HEXACO Profile"
      traits={traits}
      centerIcon={hexacoIcon}
      summary="You show high honesty-humility and conscientiousness, with balanced emotionality and openness to experience."
      footerIcon={<Brain size={12} />}
      footerText="Cerebral Quotient Assessment"
      cardClassName="bg-gradient-to-br from-background to-secondary/10 border rounded-xl shadow-md"
    />
  );
} 