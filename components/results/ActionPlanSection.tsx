import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Download, ClipboardCheck, Save } from "lucide-react";
import { ResultData } from "@/types/tests/mbti";

interface ActionPlanSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const ActionPlanSection = ({ data, sectionNumber = 10 }: ActionPlanSectionProps) => {
  const { username = "there", personalityType = "ENTJ" } = data;
  
  // Default action items if not provided in data
  const defaultItems = [
    "Ask a coworker for input: Say \"What do you think we could do differently here?\"",
    "Share a feeling with a loved one: Say \"I've been feeling a bit overwhelmed lately.\"",
    "Let your friends take the lead on a plan: Say \"What do you guys want to do this time?\"",
    "Reflect on what keeps you going: Journal about one big goal you're working toward.",
    "Join our community chat and say hi to another ENTJ—you'll love connecting!"
  ];
  
  // Initialize state for checkboxes
  const [checkedItems, setCheckedItems] = useState<{[key: number]: boolean}>({});
  
  const toggleItem = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-mbti-purple text-white text-lg font-bold shadow-md">
                {sectionNumber}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-mbti-purple">
                Your Action Plan
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 font-medium">
              Practical Steps for Growth
            </p>
          </div>
          
          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700">
              Here's a little checklist to help you shine as an {personalityType}—keep this handy and check in monthly, {username}!
            </p>
          </div>
        </div>

        {/* Main content with image - full width layout */}
        <div className="glass-card rounded-xl p-0 mb-16 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  Your {personalityType} Action Plan
                </h3>
              </div>
              
              {/* Checklist */}
              <div className="bg-white/70 rounded-xl p-6 mb-10 backdrop-blur-sm shadow-sm">
                <ul className="space-y-4">
                  {defaultItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Checkbox 
                        id={`item-${index}`} 
                        className="h-5 w-5 rounded-sm mt-1 border-2 border-mbti-purple data-[state=checked]:bg-mbti-purple data-[state=checked]:text-white"
                        checked={checkedItems[index] || false}
                        onCheckedChange={() => toggleItem(index)}
                      />
                      <label 
                        htmlFor={`item-${index}`} 
                        className={`ml-3 text-base md:text-lg ${checkedItems[index] ? 'text-gray-400 line-through' : 'text-gray-700'}`}
                      >
                        {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg font-medium text-mbti-purple mb-8">
                You're killing it, {username}! Save this plan and let's keep growing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-mbti-purple hover:bg-mbti-purple/90 text-white py-6 px-8 rounded-full font-medium">
                  <Save className="mr-2 h-5 w-5" /> 
                  Save Your Report
                </Button>
                <Button size="lg" variant="outline" className="border-mbti-purple text-mbti-purple hover:bg-mbti-purple/10 py-6 px-8 rounded-full font-medium">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
              </div>
            </div>
            
            {/* Image section */}
            <div className="md:w-2/5 h-auto sm:min-h-[400px] relative">
              <img 
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" 
                alt="Person planning and organizing"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionPlanSection;
