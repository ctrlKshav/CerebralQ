import { MBTIResult } from "@/types/profileTypes";
import { CheckCircle, Calendar, MoreHorizontal } from "lucide-react";
import SectionHeader from "./shared/SectionHeader";

interface HEXACOAssessmentProps {
  result: MBTIResult; // Using MBTI type temporarily until we create a proper HEXACO type
}

export default function HEXACOAssessment({ result }: HEXACOAssessmentProps) {
  // Here we're creating a simulated HEXACO assessment using the MBTI data
  // In a real implementation, this would use actual HEXACO data
  const hexacoTraits = [
    {
      name: "Honesty-Humility",
      score: 75,
      description:
        "High scorers avoid manipulating others for personal gain, feel little temptation to break rules, are uninterested in wealth and status, and feel no entitlement to elevated social status.",
    },
    {
      name: "Emotionality",
      score: 60,
      description:
        "High scorers experience fear of physical dangers, experience anxiety in response to life's stresses, feel a need for emotional support from others, and feel empathy and attachment to others.",
    },
    {
      name: "Extraversion",
      score: 40,
      description:
        "High scorers feel positively about themselves, feel confident when leading or addressing groups, enjoy social gatherings and interactions, and experience positive feelings of enthusiasm and energy.",
    },
    {
      name: "Agreeableness",
      score: 85,
      description:
        "High scorers forgive the wrongs they suffered, are lenient in judging others, are willing to compromise and cooperate with others, and can easily control their temper.",
    },
    {
      name: "Conscientiousness",
      score: 90,
      description:
        "High scorers organize their time and physical surroundings, work in a disciplined way toward goals, strive for accuracy and perfection in tasks, and deliberate carefully when making decisions.",
    },
    {
      name: "Openness to Experience",
      score: 70,
      description:
        "High scorers become absorbed in the beauty of art and nature, are inquisitive about various domains of knowledge, use their imagination freely, and take an interest in unusual ideas or people.",
    },
  ];

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
            {hexacoTraits.map((trait, index) => (
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
