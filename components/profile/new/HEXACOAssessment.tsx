import { HEXACOResult, MBTIResult } from "@/types/profileTypes";
import { CheckCircle, Calendar, MoreHorizontal } from "lucide-react";
import SectionHeader from "./shared/SectionHeader";

interface HEXACOAssessmentProps {
  result: HEXACOResult;
}

export default function HEXACOAssessment({ result }: HEXACOAssessmentProps) {

  const getBarColor = (traitName: string) => {
    switch (traitName) {
      case "Honesty-Humility":
        return "bg-teal-500";
      case "Emotionality":
        return "bg-rose-500";
      case "Extraversion":
        return "bg-amber-500";
      case "Agreeableness":
        return "bg-sky-500";
      case "Conscientiousness":
        return "bg-purple-500";
      case "Openness to Experience":
        return "bg-emerald-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="bg-background rounded-xl shadow-md p-8">
      <SectionHeader
        title="HEXACO Assessment"
        description="Six-factor Personality Structure"
        updatedAt={result.updatedAt}
      />

      {/* Main content */}
      <div className="space-y-12">
        {/* Overview */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-400">
            About HEXACO
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            The HEXACO model of personality structure is a six-dimensional model
            of human personality that was created by Ashton and Lee based on
            findings from lexical studies. The six factors, or dimensions,
            include Honesty-Humility (H), Emotionality (E), Extraversion (X),
            Agreeableness (A), Conscientiousness (C), and Openness to Experience
            (O).
          </p>
        </div>

        {/* Trait bars */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <h3 className="text-xl font-semibold mb-5 text-emerald-700 dark:text-emerald-400">
            Personality Traits
          </h3>

          <div className="space-y-8">
            {Object.values(result.hexacoTraits).map((trait, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{trait.name}</span>
                  <span className="text-sm font-medium">{trait.score}%</span>
                </div>
                <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${getBarColor(trait.name)} rounded-full`}
                    style={{ width: `${trait.score}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Characteristics */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-5 text-emerald-700 dark:text-emerald-400">
            HEXACO Profile Summary
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle className="text-emerald-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
              <span>
                Your profile shows high Conscientiousness, suggesting you're
                organized and disciplined.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-emerald-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
              <span>
                High Agreeableness indicates you tend to be forgiving and
                patient with others.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-emerald-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
              <span>
                Moderate to high Honesty-Humility suggests you value fairness
                and sincerity in relationships.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-emerald-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
              <span>
                Your mid-range Extraversion score balances social energy with
                need for solitude.
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="text-emerald-500 mt-0.5 mr-3 h-5 w-5 flex-shrink-0" />
              <span>
                Strong Openness to Experience indicates creative thinking and
                intellectual curiosity.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
