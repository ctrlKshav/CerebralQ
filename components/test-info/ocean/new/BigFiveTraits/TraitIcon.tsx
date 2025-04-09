import { Brain, CheckCircle, Heart, LineChart, Sparkles } from "lucide-react";

interface TraitIconProps {
  traitName: string;
  size?: number;
  className?: string;
}

const TraitIcon = ({ traitName, size = 16, className = "" }: TraitIconProps) => {
  switch (traitName) {
    case "Openness":
      return <Sparkles size={size} className={className} />;
    case "Conscientiousness":
      return <CheckCircle size={size} className={className} />;
    case "Extraversion":
      return <LineChart size={size} className={className} />;
    case "Agreeableness":
      return <Heart size={size} className={className} />;
    case "Neuroticism":
      return <Brain size={size} className={className} />;
    default:
      return <Sparkles size={size} className={className} />;
  }
};

export default TraitIcon;
