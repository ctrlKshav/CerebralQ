import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, Save } from "lucide-react";
import { ResultData } from "@/types/tests/mbti";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "./shared/SectionHeader";
import { formatWithUsername } from "../../lib/formatWithUsername";

interface ActionPlanSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const ActionPlanSection = ({ data, sectionNumber = 10 }: ActionPlanSectionProps) => {
  const { username, personalityType = "ENTJ", actionItems } = data;

  
  // Initialize state for checkboxes
  const [checkedItems, setCheckedItems] = useState<{[key: number]: boolean}>({});
  
  const toggleItem = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
      
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <SectionHeader
          title="Your Action Plan"
          subtitle="Practical Steps for Growth"
          description={formatWithUsername(`Here's a little checklist to help you shine as an ${personalityType}—keep this handy and check in monthly, {username}!`, username)}
          sectionNumber={sectionNumber}
        />

        {/* Main content with image - full width layout */}
        <Card className="mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Your {personalityType} Action Plan
                </h3>
              </div>
              
              {/* Checklist */}
              <div className="bg-card/50 rounded-xl p-6 mb-10 shadow-sm">
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
                        className={`ml-3 text-base md:text-lg ${checkedItems[index] ? 'text-muted-foreground line-through' : 'text-card-foreground'}`}
                      >
                        {item.description}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg font-medium text-primary mb-8">
                You're killing it{username ? `, ${username}` : "" }! Save this plan and let's keep growing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-primary-foreground py-6 px-8 rounded-full font-medium">
                  <Save className="mr-2 h-5 w-5" /> 
                  Save Your Report
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 py-6 px-8 rounded-full font-medium">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
              </div>
            </div>
            
            {/* Image section - Updated with Next.js Image */}
            <div className="md:w-2/5 h-auto sm:min-h-[400px] relative border-t md:border-t-0 md:border-l border-border">
              <div className="relative w-full h-full" style={{ minHeight: "400px", maxHeight: "600px" }}>
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