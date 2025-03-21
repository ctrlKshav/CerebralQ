import React, { useState } from "react";
import { ResultData } from "@/types/tests/mbti";
import {
  CheckCircle,
  Coffee,
  MessageSquare,
  Clock,
  Target,
  Sun,
  Moon,
  MessageCircle,
  PenTool,
  Edit3,
  Users
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface DailyHabitsSectionProps {
  data: ResultData;
  sectionNumber?: number;
}

const DailyHabitsSection = ({ data, sectionNumber = 6 }: DailyHabitsSectionProps) => {
  const { growth, username } = data;
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
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-lg font-bold shadow-md">
                {sectionNumber}
              </div>
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
              <p className="text-lg md:text-xl text-foreground">
                You love a routine that keeps you on track, {username}, and it totally works for you—your days are focused and productive, and you feel best when you're in control. Adding a little downtime can help you recharge for your big goals.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Daily Habits Section */}
        <Card className="mb-16 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="p-8 lg:w-3/5">
              <div className="flex items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  Let's Make It Happen
                </h3>
              </div>
              
              <ul className="space-y-6 ml-4">
                <li className="flex items-start">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-amber-500 text-primary-foreground mr-4 flex-shrink-0 shadow-md">
                    <Sun className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Morning Routine</h4>
                    <p className="text-foreground text-base md:text-lg">
                      Start your morning with a 5-minute goal check—like writing down one thing you want to achieve today.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-primary-foreground mr-4 flex-shrink-0 shadow-md">
                    <Clock className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">During the Day</h4>
                    <p className="text-foreground text-base md:text-lg">
                      Add a small, relaxing habit—like taking a quick walk after lunch—to give your mind a break.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground mr-4 flex-shrink-0 shadow-md">
                    <Moon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Evening Wind-down</h4>
                    <p className="text-foreground text-base md:text-lg">
                      Wind down with a 10-minute habit, like reading a chapter of a book, to relax before bed.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Image */}
            <div className="lg:w-2/5 sm:min-h-[350px] lg:min-h-full relative">
              <img 
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Structured morning routine" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </Card>

        {/* Communication Section */}
        <Card className="mb-16 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="p-8 lg:w-3/5">
              <div className="flex items-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  How You Chat with Others
                </h3>
              </div>
              
              <p className="text-foreground text-base md:text-lg mb-6 ml-2">
                You're confident and direct when you talk, {username}, always getting your point across with clarity. You love conversations that are goal-oriented, but sometimes you might come across as too intense without meaning to.
              </p>
              
              <div className="ml-2 space-y-5">
                <h4 className="font-medium text-lg text-foreground mb-3 flex items-center">
                  <CheckCircle className="h-5 w-5 text-primary mr-2" /> Let's Make It Happen:
                </h4>
                <div className="flex items-start ml-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">1</div>
                  <p className="text-foreground text-base md:text-lg">
                    Add a warm touch to your conversations—like starting with "I'm really excited to hear your thoughts on this!"
                  </p>
                </div>
                <div className="flex items-start ml-4">
                  <div className="h-8 w-8 rounded-full bg-primary text-primary-foreground text-base grid place-items-center mr-4 mt-1 flex-shrink-0">2</div>
                  <p className="text-foreground text-base md:text-lg">
                    Ask a friend a lighter question, like "What's been the best part of your week?"—it'll spark a more relaxed chat.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="lg:w-2/5 sm:min-h-[350px] lg:min-h-full relative">
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="People in conversation" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </Card>

        {/* Reflection Prompts Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-5">
              <div className="bg-primary p-3 rounded-full shadow-lg">
                <PenTool className="h-6 w-6 text-primary-foreground drop-shadow-sm" strokeWidth={2} />
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
              // Define different color schemes based on index
              const colorSchemes = [
                {
                  bg: "bg-primary",
                  icon: <Edit3 className="h-6 w-6 text-primary-foreground" strokeWidth={2} />,
                  accent: "border-primary focus:ring-primary/50"
                },
                {
                  bg: "bg-amber-500",
                  icon: <Target className="h-6 w-6 text-primary-foreground" strokeWidth={2} />,
                  accent: "border-amber-200 focus:ring-amber-400/50"
                },
                {
                  bg: "bg-blue-500",
                  icon: <Users className="h-6 w-6 text-primary-foreground" strokeWidth={2} />,
                  accent: "border-blue-200 focus:ring-blue-400/50"
                },
                {
                  bg: "bg-emerald-500",
                  icon: <MessageSquare className="h-6 w-6 text-primary-foreground" strokeWidth={2} />,
                  accent: "border-emerald-200 focus:ring-emerald-400/50"
                }
              ];
              
              const scheme = colorSchemes[index % colorSchemes.length];
              
              return (
                <Card key={index} className="border border-border shadow-md hover:shadow-lg transition-all">
                  <div className="grid lg:grid-cols-2 h-full">
                    <div className="p-8 bg-card flex flex-col justify-center">
                      <div className="flex items-start">
                        <div className={`rounded-full p-3 flex-shrink-0 shadow-md ${scheme.bg}`}>
                          {scheme.icon}
                        </div>
                        <div className="ml-4">
                          <div className="inline-block px-2 py-1 bg-muted rounded-full text-xs font-semibold text-muted-foreground mb-2">
                            Prompt {index + 1}
                          </div>
                          <h4 className="font-bold text-lg text-foreground">{prompt.question}</h4>
                          <p className="text-muted-foreground mt-2 italic font-medium text-sm">{prompt.hint}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8 bg-card border-l border-border">
                      <h5 className="font-medium text-base text-foreground mb-3 flex items-center">
                        <PenTool className="h-5 w-5 mr-2 text-muted-foreground" />
                        Your Thoughts
                      </h5>
                      <Textarea 
                        className={`w-full p-3 rounded-lg border-2 ${scheme.accent} focus:outline-none focus:ring-2 focus:border-transparent min-h-[180px] bg-muted text-sm md:text-base`}
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
