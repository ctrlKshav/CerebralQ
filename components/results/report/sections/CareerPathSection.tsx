import React from "react";
import {
  CareerPathFull,
  CareerPathFree,
} from "@/types/tests/mbti/personalityDatabase";
import {
  CheckCircle,
  Briefcase,
  Award,
  MessageSquare,
  Target,
} from "lucide-react";
import SuperpowersCard from "../../shared/SuperpowersCard";
import GrowthAreasCard from "../../shared/GrowthAreasCard";
import ActionStepsCard from "../../shared/ActionStepsCard";
import SectionHeader from "../../shared/SectionHeader";
import { formatWithUsername } from "../../../../lib/formatWithUsername";
import CareeerSuggestions from "./CareerSuggestionsSection";
import BlurredCareerSuggestionsCard from "../../shared/CareerSuggestion/BlurredCareerSuggestionsCard";

interface CareerPathSectionProps {
  firstname: string | null;
  career: CareerPathFull | CareerPathFree;
  sectionNumber?: number;
  id?: string;
  isPaidUser?: boolean;
  onUpgradeClick?: () => void;
}

const CareerPathSection = ({
  firstname,
  career,
  sectionNumber = 3,
  id = "career-path",
  isPaidUser = false,
}: CareerPathSectionProps) => {
  const { superpowers, growthAreas, actionSteps } = career;

  // Check if career is CareerPathFull (has suggestions)
  const hasSuggestions =
    "suggestions" in career && career.suggestions?.length > 0;

  return (
    <section
      id={id}
      className="py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background scroll-mt-16"
    >
      <div className="">
        {/* Section header */}
        <SectionHeader
          title="Your Career Path"
          subtitle={formatWithUsername(
            "How You Shine at Work, {firstname}",
            firstname
          )}
          description={formatWithUsername(
            "You're a total force in jobs where you can lead and strategize—like business management, entrepreneurship, or even something high-stakes like law. You love roles that let you take charge and achieve big goals, but you might get frustrated if the work feels inefficient or if others don't keep up with your pace.",
            firstname
          )}
          sectionNumber={sectionNumber}
        />

        {/* Career Superpowers and Growth Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Career Superpowers */}
          <SuperpowersCard
            firstname={firstname}
            title="Your Career Superpowers"
            items={superpowers}
            icon={<Award className="h-6 w-6" strokeWidth={2.2} />}
          />

          {/* Growth Areas */}
          <GrowthAreasCard
            firstname={firstname}
            title="Where You Can Grow a Bit"
            items={growthAreas}
            icon={<Briefcase className="h-6 w-6 " strokeWidth={2.2} />}
          />
        </div>

        {/* "Let's get started on this!" section */}
        <div className="">
          <ActionStepsCard
            firstname={firstname}
            steps={actionSteps}
            imageSrc="https://res.cloudinary.com/dhix3y82h/image/upload/v1745393727/careerPath_orckon.jpg"
            imageAlt="Team collaboration"
            className="mb-16"
            objectFit="object-fit"
          />
        </div>

        {/* Career Suggestions - render if available */}
        {hasSuggestions ? (
          <div className="mb-16">
            <CareeerSuggestions
              careerSuggestions={(career as CareerPathFull).suggestions}
            />
          </div>
        ) : (
          <BlurredCareerSuggestionsCard />
        )}
      </div>
    </section>
  );
};

export default CareerPathSection;
