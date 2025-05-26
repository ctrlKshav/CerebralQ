import { features } from "@/data/landing-page/features";
import FeatureCard from "./FeaturesCard";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/landing-page/SectionHeader";
import { ChartBar } from "lucide-react";

export function Features() {
  return (
    <section className="py-12 sm:py-24 px-6 sm:container ">
      <SectionHeader
        icon={<ChartBar className="h-5 w-5 text-primary" />}
        label="Premium Features"
        title="Personality Insights"
        description="Discover the powerful features that make Cerebral Quotient the leading personality assessment platform."
      />
      <div className="space-y-16 md:space-y-24  overflow-hidden">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
            reverse={index % 2 !== 0}
            className={cn(
              "transition-all duration-700",
            )}
            id={`feature-${feature.id}`}
          />
        ))}
      </div>
    </section>
  );
}
