import type { Feature } from "@/types/features";
import { CheckCircle } from "lucide-react";

interface FeatureContentProps {
  feature: Feature;
}

export default function FeatureContent({ feature }: FeatureContentProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {feature.title}
        </h3>
        <p className="text-muted-foreground md:text-lg">{feature.subtitle}</p>
      </div>
      <ul className="space-y-3">
        {feature.bulletPoints.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
