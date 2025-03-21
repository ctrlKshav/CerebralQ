import React, { useState } from "react";
import { ResultData } from "@/types/tests/mbti";
import {
  CheckCircle,
  MessageSquare,
  Clock,
  Target,
  Sun,
  Moon,
  PenTool,
  Edit3,
  Users
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import SectionNumber from "@/components/ui/section-number";

interface DailyHabitsSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const DailyHabitsSection = ({ data, sectionNumber = 6 }: DailyHabitsSectionProps) => {
  const { growth, username, actionItems } = data;
  const [notes, setNotes] = useState<string[]>(Array(growth.journalingPrompts.length).fill(""));

  const handleNoteChange = (index: number, value: string) => {
    const newNotes = [...notes];
    newNotes[index] = value;
    setNotes(newNotes);
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden bg-background">
    
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-5">
              <SectionNumber number={sectionNumber} />
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Daily Habits & Communication
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              Your Daily Habits, {username}
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg md:text-xl text-card-foreground">
                You love a routine that keeps you on track, {username}, and it totally works for you—your days are focused and productive, and you feel best when you're in control. Adding a little downtime can help you recharge for your big goals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Growth Milestones - Two column layout */}
        <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 lg:px-16 mb-16">
          {/* Morning and Day Habits */}
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-primary p-3 mr-4 shadow flex items-center justify-center">
                  <Sun className="h-6 w-6 text-primary-foreground" strokeWidth={2.2} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Your Daily Routine
                </h3>
              </div>

              <ul className="space-y-5 text-base ml-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg mb-1 text-card-foreground">Morning Routine:</p>
                    <p className="text-card-foreground">
                      Start your morning with a 5-minute goal check—like writing down one thing you want to achieve today.
                    </p>
                  </div>
                </li>
                <li className="flex items-start mt-4">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg mb-1 text-card-foreground">During the Day:</p>
                    <p className="text-card-foreground">
                      Add a small, relaxing habit—like taking a quick walk after lunch—to give your mind a break.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Communication and Evening Habits */}
          <Card className="h-full">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="rounded-full bg-secondary p-3 mr-4 shadow flex items-center justify-center">
                  <Moon className="h-6 w-6 text-secondary-foreground" strokeWidth={2.2} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Communication & Wind-down
                </h3>
              </div>

              <ul className="space-y-5 text-base ml-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full border-2 border-secondary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg mb-1 text-card-foreground">Conversation Style:</p>
                    <p className="text-card-foreground">
                      You're confident and direct when you talk, always getting your point across with clarity.
                    </p>
                  </div>
                </li>
                <li className="flex items-start mt-4">
                  <div className="h-6 w-6 rounded-full border-2 border-secondary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-lg mb-1 text-card-foreground">Evening Wind-down:</p>
                    <p className="text-card-foreground">
                      Wind down with a 10-minute habit, like reading a chapter of a book, to relax before bed.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Let's Make It Happen section */}
        <Card className="mb-16 mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 md:w-3/5">
              <div className="flex items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-card-foreground">
                  Let's Make It Happen
                </h3>
              </div>

              <ul className="space-y-6 ml-4">
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                    1
                  </div>
                  <p className="text-card-foreground text-base md:text-lg">
                    Add a warm touch to your conversations—like starting with "I'm really excited to hear your thoughts on this!"
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                    2
                  </div>
                  <p className="text-card-foreground text-base md:text-lg">
                    Ask a friend a lighter question, like "What's been the best part of your week?"—it'll spark a more relaxed chat.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">
                    3
                  </div>
                  <p className="text-card-foreground text-base md:text-lg">
                    {actionItems.length > 0 ? actionItems[4].description : "Add a small relaxing habit to your daily routine—try a quick walk after lunch or reading before bed."}
                  </p>
                </li>
              </ul>
            </div>

            {/* Image section */}
            <div className="md:w-2/5 h-auto max-h-[350px] relative border-t md:border-t-0 md:border-l border-border">
              <img
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Daily habits and communication"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Card>

        {/* Reflection Prompts Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-5">
              <div className="bg-primary p-3 rounded-full shadow">
                <PenTool className="h-6 w-6 text-primary-foreground" strokeWidth={2} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground ml-4">
                Reflection Prompts
              </h3>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base md:text-lg">
              Use these questions to deepen your self-awareness and enhance your daily interactions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {growth.journalingPrompts.map((prompt, index) => {
              // Define different color schemes based on index using shadcn variables
              const colorSchemes = [
                {
                  bg: "bg-primary",
                  icon: <Edit3 className="h-6 w-6 text-primary-foreground" strokeWidth={2} />,
                  accent: "border-primary focus:ring-primary/50"
                },
                {
                  bg: "bg-secondary",
                  icon: <Target className="h-6 w-6 text-secondary-foreground" strokeWidth={2} />,
                  accent: "border-secondary focus:ring-secondary/50"
                },
                {
                  bg: "bg-accent",
                  icon: <Users className="h-6 w-6 text-accent-foreground" strokeWidth={2} />,
                  accent: "border-accent focus:ring-accent/50"
                },
              ];
              
              const scheme = colorSchemes[index % colorSchemes.length];
              
              return (
                <Card key={index} className="border border-border shadow hover:shadow-md transition-all">
                  <div className="grid lg:grid-cols-2 h-full">
                    <div className="p-8 bg-card flex flex-col justify-center">
                      <div className="flex items-start">
                        <div className={`rounded-full p-3 flex-shrink-0 shadow ${scheme.bg}`}>
                          {scheme.icon}
                        </div>
                        <div className="ml-4">
                          <div className="inline-block px-2 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground mb-2">
                            Prompt {index + 1}
                          </div>
                          <h4 className="font-bold text-lg text-card-foreground">{prompt.question}</h4>
                          <p className="text-muted-foreground mt-2 italic font-medium text-sm">{prompt.hint}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 bg-card border-t lg:border-t-0 lg:border-l border-border">
                      <h5 className="font-medium text-base text-card-foreground mb-3 flex items-center">
                        <PenTool className="h-5 w-5 mr-2 text-muted-foreground" />
                        Your Thoughts
                      </h5>
                      <Textarea 
                        className={`w-full p-3 rounded-lg border-2 ${scheme.accent} focus:outline-none focus:ring-2 focus:border-transparent min-h-[180px] bg-muted/40 text-sm md:text-base`}
                        placeholder="Write your reflection here..."
                        value={notes[index]}
                        onChange={(e) => handleNoteChange(index, e.target.value)}
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyHabitsSection;
