import { Info } from "lucide-react";

type TraitType = {
  name: string;
  image: string;
  alt: string;
  tags: string[];
  description: string;
  tagline: string;
  gradient: string;
  imageSvg: string;
};

interface TraitContentProps {
  trait: TraitType;
}

const TraitContent = ({ trait }: TraitContentProps) => {
  const renderStrengths = () => {
    let strengths: string[] = [];
    
    switch (trait.name) {
      case "Openness":
        strengths = [
          "Creative problem-solving abilities",
          "Appreciation for art, beauty, and innovation",
          "Intellectual curiosity and love of learning"
        ];
        break;
      case "Conscientiousness":
        strengths = [
          "Strong work ethic and attention to detail",
          "Reliability and dependability", 
          "Goal-oriented with good planning abilities"
        ];
        break;
      case "Extraversion":
        strengths = [
          "Strong social skills and networking abilities",
          "Energetic and enthusiastic approach to life",
          "Leadership potential and persuasiveness"
        ];
        break;
      case "Agreeableness":
        strengths = [
          "Ability to maintain harmonious relationships",
          "Empathy and understanding of others' needs",
          "Cooperative approach to conflict resolution"
        ];
        break;
      case "Neuroticism":
        strengths = [
          "Heightened awareness of potential problems",
          "Emotional depth and sensitivity", 
          "Self-awareness and attentiveness to feelings"
        ];
        break;
    }
    
    return strengths;
  };

  const getTraitContext = () => {
    switch (trait.name) {
      case "Openness": 
        return "process new information and experiences";
      case "Conscientiousness":
        return "approach responsibilities and maintain order in your life";
      case "Extraversion":
        return "interact with others and gain energy from social situations";
      case "Agreeableness":
        return "approach relationships and consider the needs of others";
      default:
        return "experience and regulate emotions, particularly negative ones";
    }
  };

  return (
    <div>
      {/* Trait image */}
      <div className="mb-6 overflow-hidden rounded-lg">
        <img 
          src={trait.image} 
          alt={trait.alt} 
          className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {trait.tags.map((tag, idx) => (
          <span 
            key={idx}
            className="px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/5 hover-lift"
          >
            {tag}
          </span>
        ))}
      </div>
      
      {/* Description */}
      <div className="prose prose-sm max-w-none">
        <p className="text-muted-foreground leading-relaxed mb-4">{trait.description}</p>
        
        <div className="bg-muted/50 p-4 rounded-lg border border-muted/80 mb-5 transition-soft hover:border-primary/30">
          <h4 className="text-base font-medium text-foreground mb-2 flex items-center">
            <Info className="w-4 h-4 text-primary mr-2" />
            What This Means For You
          </h4>
          <p className="text-sm text-muted-foreground">
            Your score on {trait.name.toLowerCase()} provides insight into how you {getTraitContext()}.
          </p>
        </div>
        
        <div>
          <h4 className="text-base font-medium text-foreground mb-2">Potential Strengths</h4>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mb-0">
            {renderStrengths().map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TraitContent;
