import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { PersonalityDescription } from "@/types/tests/ocean/results";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { handleShare } from "@/lib/shareUtils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Share2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { sampleResultData } from "@/data/tests/ocean/oceanSampleData";

interface HeroSectionProps {
  personalityType: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  firstname: string | null;
  id?: string;
  username: string | null;
  historyPage: boolean;
  traitScores?: {
    openness: { score: number; total: number; percentage: number };
    conscientiousness: { score: number; total: number; percentage: number };
    extraversion: { score: number; total: number; percentage: number };
    agreeableness: { score: number; total: number; percentage: number };
    neuroticism: { score: number; total: number; percentage: number };
  };
}

const OceanTraitChart = ({ traitScores }: { traitScores: HeroSectionProps["traitScores"] }) => {
  // Transform trait scores into a format suitable for recharts
  const data = [
    {
      trait: "Openness",
      score: traitScores?.openness.percentage || 0,
      fill: "#4f46e5" // indigo
    },
    {
      trait: "Conscientiousness",
      score: traitScores?.conscientiousness.percentage || 0,
      fill: "#ec4899" // pink
    },
    {
      trait: "Extraversion",
      score: traitScores?.extraversion.percentage || 0,
      fill: "#3b82f6" // blue
    },
    {
      trait: "Agreeableness",
      score: traitScores?.agreeableness.percentage || 0,
      fill: "#10b981" // emerald
    },
    {
      trait: "Neuroticism",
      score: traitScores?.neuroticism.percentage || 0,
      fill: "#f59e0b" // amber
    }
  ];

  return (
    <Card className="w-full h-full p-2 shadow-lg bg-card/80 backdrop-blur-sm">
      <CardHeader className="py-5 px-6">
        <div className="text-center space-y-2">
          <h3 className="text-4xl font-extrabold tracking-tight bg-clip-text text-primary">
            Your OCEAN Certificate
          </h3>
          <p className="text-muted-foreground font-semibold">Big Five Traits Breakdown</p>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
            <YAxis type="category" dataKey="trait" width={140} />
            <Tooltip
              formatter={(value: number) => [`${value}%`, 'Score']}
              labelFormatter={(label: string) => `${label} Trait`}
              contentStyle={{ borderRadius: '8px' }}
            />
            <Bar
              dataKey="score"
              barSize={40}
              radius={[4, 4, 4, 4]}
            >
              {data.map((entry, index) => (
                <Bar key={`bar-${index}`} dataKey="score" fill={entry.fill} />
              ))}
              <LabelList dataKey="score" position="right" formatter={(value: number) => `${value}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

const HeroSection = ({
  personalityType,
  personalityDescription,
  completionDate,
  firstname,
  id,
  username,
  historyPage = false,
  traitScores = sampleResultData.traitScores,
}: HeroSectionProps) => {
  const alias = personalityDescription.alias;
  const description = personalityDescription.description(firstname, false);

  const [isSharing, setIsSharing] = useState(false);
  const router = useRouter();

  const shareResults = async () => {
    try {
      setIsSharing(true);

      // Handle sharing without saving to database (now handled in Results component)
      const title = `My Personality Type: ${personalityType}`;
      const text = `I'm an ${personalityType}! Check out my personality profile on CerebralQuotient.`;

      // Determine share URL based on user status
      const url = !username ? `result` : `${username}`;

      // Use the existing share function
      await handleShare(title, text, url, username ? false : true);

      // Redirect demo users to sign up
      if (!username) {
        router.push(
          "/sign-up?info=" +
          encodeURIComponent("You need an account to share your profile.")
        );
      }
    } catch (error) {
      console.error("Error sharing results:", error);
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <section
      id={id}
      className=" flex flex-col justify-center items-center py-20 px-4 overflow-hidden relative max-w-[90vw] mx-auto"
    >
      <div className="w-full mx-auto text-center md:text-left ">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 lg:gap-16   ">
          <div className="w-1/2 space-y-6 animate-fade-in md:mr-4">
            <Badge className="bg-primary text-primary-foreground py-1.5 px-4 rounded-full">
              Completed on {completionDate}
            </Badge>

            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Hey{" "}
                <span
                  className={`${firstname ? "text-primary decoration-2" : "decoration-1"
                    }`}
                >
                  {firstname || "there"}!
                </span>{" "}
                <br />
                You're a{" "}
                <span className="text-primary decoration-2">
                  {personalityType}.
                </span>
                <br />
                <span className=" font-semibold">{alias}.</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">{description}</p>

            <p className="text-lg text-muted-foreground">
              Does that sound like you
              {firstname ? (
                <>
                  ,{" "}
                  <span className="font-semibold text-primary">
                    {firstname}
                  </span>
                </>
              ) : (
                ""
              )}
              ? Let's dive into what makes you so incredible!
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
              <Button
                variant="default"
                size="sm"
                onClick={shareResults}
                disabled={isSharing}
              >
                <Share2 className="w-4 h-4 mr-2" />
                {isSharing
                  ? "Processing..."
                  : !username
                    ? "Save & Share"
                    : "Share Results"}
              </Button>
              <Link href={`${historyPage ? "/account/report/mbti" : "/report/mbti"}`}>
                <Button variant="outline">View Detailed Report</Button>
              </Link>
            </div>
          </div>

          <div className="flex-grow-1 w-1/2  md:flex items-center justify-center hidden animate-fade-in">
            <OceanTraitChart traitScores={traitScores} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
