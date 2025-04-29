import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, Save } from "lucide-react";
import { ActionItem, ResultData } from "@/types/tests/mbti/results";
import { Card } from "@/components/ui/card";
import SectionHeader from "../../shared/SectionHeader";
import { formatWithUsername } from "../../../../lib/formatWithUsername";
import { handleShare } from "@/lib/shareUtils";
import { PDFGenerator } from "@/components/pdf/PDFGenerator";
import { Share2 } from "lucide-react";
import { sampleResultData } from "@/data/mbti/mbtiResultData";
import { useRouter } from "next/navigation";

interface ActionPlanSectionProps {
  username: string | null;
  firstname: string | null;
  resultData: ResultData;
  personalityType: string;
  actionItems: ActionItem[];
  sectionNumber?: number;
  id?: string;
}

const ActionPlanSection = ({
  username,
  firstname,
  resultData,
  personalityType,
  actionItems,
  sectionNumber = 10,
  id = "action-plan-section",
}: ActionPlanSectionProps) => {
  // Initialize state for checkboxes based on completed status from data
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [isSharing, setIsSharing] = useState(false);
  const isDemoUser = !firstname;
  const router = useRouter();

  // Initialize checkedItems from the data
  useEffect(() => {
    const initialCheckedState = actionItems.reduce<{ [key: number]: boolean }>(
      (acc, item, index) => {
        acc[index] = item.completed;
        return acc;
      },
      {}
    );
    setCheckedItems(initialCheckedState);
  }, [actionItems]);

  const toggleItem = (index: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const shareResults = async () => {
    try {
      setIsSharing(true);

      // Handle sharing without saving to database (now handled in Results component)
      const title = `My Personality Type: ${personalityType}`;
      const text = `I'm an ${personalityType}! Check out my personality profile on CerebralQuotient.`;

      // Determine share URL based on user status
      const url = isDemoUser ? `result` : `${username}`;

      // Use the existing share function
      await handleShare(title, text, url, isDemoUser);

      // Redirect demo users to sign up
      if (isDemoUser) {
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
      className="py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background scroll-mt-16"
      id={id}
    >
      <div className=" ">
        {/* Section header */}
        <SectionHeader
          title="Your Action Plan"
          subtitle="Practical Steps for Growth"
          description={formatWithUsername(
            `Here's a little checklist to help you shine as an ${personalityType}—keep this handy and check in monthly, {firstname}!`,
            firstname
          )}
          sectionNumber={sectionNumber}
        />

        {/* Main content with image - full width layout */}
        <Card className="mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Your {personalityType} Action Plan
                </h3>
              </div>

              {/* Checklist */}
              <div className="bg-muted/30 rounded-xl p-5 md:p-6 mb-8 shadow-sm">
                <ul className="space-y-4">
                  {actionItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Checkbox
                        id={`item-${index}`}
                        className="h-5 w-5 rounded-sm mt-1 border-2 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                        checked={checkedItems[index] || false}
                        onCheckedChange={() => toggleItem(index)}
                      />
                      <label
                        htmlFor={`item-${index}`}
                        className={`ml-3 text-base md:text-lg cursor-pointer ${checkedItems[index] ? "text-muted-foreground line-through" : "text-card-foreground"}`}
                      >
                        {item.task || item.description}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-base md:text-lg font-medium text-primary mb-6 md:mb-8">
                You're making great progress{firstname ? `, ${firstname}` : ""}!
                Save this plan and continue your growth journey.
              </p>

              <div className="flex flex-col sm:flex-row justify-start gap-3 pt-2">
                <Button
                  variant="default"
                  size="sm"
                  onClick={shareResults}
                  disabled={isSharing}
                  className=""
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  {isSharing
                    ? "Processing..."
                    : isDemoUser
                      ? "Save & Share"
                      : "Share Results"}
                </Button>
                <PDFGenerator
                  resultData={resultData}
                  fileName={`${personalityType}-personality-report.pdf`}
                />
              </div>
            </div>

            {/* Image section */}
            <div className="md:w-2/5 h-auto sm:min-h-[320px] relative border-t md:border-t-0 md:border-l border-border">
              <div className="relative w-full h-full min-h-[250px] md:min-h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                  alt="Person planning and organizing"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority={false}
                  className="object-cover"
                  quality={85}
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ActionPlanSection;
