"use client"
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mbtiResponseSchema, type MBTIResponse } from "@/shared/schema";
import { testData } from "@/data/mbti";
import { saveProgress, loadProgress } from "@/lib/mbti-storage";
import { ProgressTracker } from "@/components/mbti/progress-tracker";
import { QuestionCard } from "@/components/mbti/question-card";
import { FormNavigation } from "@/components/mbti/form-navigation";
import { X, Menu } from "lucide-react";
import { calculateMBTI } from "@/lib/calculate-mbti";
import { smoothScrollToTop } from "@/lib/utils";
import { TestForm } from "./test-form";

export default function MBTITest() {
  const [currentSectionId, setCurrentSectionId] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const currentTest = testData[0];
  const sectionQuestions = currentTest.questions
    .filter(q => q.section === currentSectionId)

  const methods = useForm<MBTIResponse>({
    resolver: zodResolver(mbtiResponseSchema),
    defaultValues: {
      id: 0, // provide a default id
      answers: {},
      personalityType: "", // default empty result
      createdAt: new Date().toISOString(), // set default createdAt
    },
  });

  // useEffect(() => {
  //   window.scrollTo(0,0)
  // }, [currentSectionId])
  
  // useEffect(() => {
  //   const savedProgress = loadProgress();
  //   if (savedProgress) {
  //     methods.reset(savedProgress);
  //     const lastAnsweredSection = Math.max(
  //       ...Object.keys(savedProgress.answers)
  //         .map(key => currentTest.questions.find(q => q.id === key)?.section || 1)
  //     );
  //     setCurrentSectionId(lastAnsweredSection);
  //   }
  // }, []);

  const onSubmit = async (data: MBTIResponse) => {
    console.log('hello')
    console.log(data)
    const currentSectionQuestions = currentTest.questions.filter(
      q => q.section === currentSectionId
    );
    const unansweredQuestions = currentSectionQuestions.filter(
      question => !methods.getValues().answers[question.id]?.selectedScore
    );
    if (unansweredQuestions.length > 0) {
      unansweredQuestions.forEach(question => {
        methods.setError(`answers.${question.id}.selectedScore`, {
          type: 'required',
          message: 'Please answer this question'
        });
      });
      return;
    }
    methods.clearErrors();
    const personalityResult = calculateMBTI(data.answers, currentTest.questions);
    data.personalityType = personalityResult.personalityType
    saveProgress(data);
    console.log("submitted:", data);
  };

  const handleNext = () => {
    // Check if all questions in current section are answered
    const currentSectionQuestions = currentTest.questions.filter(
      q => q.section === currentSectionId
    );
    
    const unansweredQuestions = currentSectionQuestions.filter(
      question => !methods.getValues().answers[question.id]?.selectedScore
    );

    if (unansweredQuestions.length > 0) {
      unansweredQuestions.forEach(question => {
        methods.setError(`answers.${question.id}.selectedScore`, {
          type: 'required',
          message: 'Please answer this question'
        });
      });
      return;
    }

    // Clear any existing errors before moving to next section
    methods.clearErrors();

    if (currentSectionId < currentTest.sections.length) {
      setCurrentSectionId(prev => prev + 1);
      smoothScrollToTop();
    }
    
    saveProgress(methods.getValues());
    
    
  };

  const handlePrev = () => {
    // Clear any errors when going back
    methods.clearErrors();
    if (currentSectionId > 1) {
      setCurrentSectionId(prev => prev - 1);
      smoothScrollToTop();
    }
  };

  const handleSectionClick = (sectionId: number) => {
    // Clear any errors when using section navigation
    methods.clearErrors();
    setCurrentSectionId(sectionId);
    setIsSidebarOpen(false);
  };

  const currentStepText = `Step ${currentSectionId} of ${currentTest.sections.length}`;

  // Remove the watch effect that was clearing errors
  // We only want to clear errors on specific user actions now
  const answers = methods.watch('answers');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-80 fixed top-4 left-0 bottom-0 shadow-sm border-r backdrop-blur-sm">
            <div className="h-full flex flex-col">
              <div className="p-6">
                <span className="font-bold text-xl">{currentTest.test_name}</span>
              </div>
              <div className="flex-1 overflow-y-auto px-6 pb-6">
                <ProgressTracker
                  currentSection={currentSectionId}
                  sections={currentTest.sections}
                  onSectionClick={handleSectionClick}
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Topbar */}
          <div className="md:hidden fixed top-0 left-0 right-0 z-10 dark:bg-gray-800/50 backdrop-blur-sm p-4 flex justify-between items-center">
            <div>
              <span className="font-bold text-xl">{currentTest.test_name}</span>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {currentStepText}
              </div>
            </div>
            <button 
              type="button" 
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-700 dark:text-gray-300"
            >
              <Menu size={24} />
            </button>
          </div>
          
          {/* Mobile Sidebar Overlay from Right */}
          {isSidebarOpen && (
            <div className="md:hidden fixed inset-0 z-20 bg-black/50 flex justify-end">
              <div className="w-64 bg-white dark:bg-gray-900 p-4 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-bold text-xl">Sections</span>
                  <button 
                    type="button" 
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-gray-700 dark:text-gray-300"
                  >
                    <X size={24} />
                  </button>
                </div>
                <ProgressTracker
                  currentSection={currentSectionId}
                  sections={currentTest.sections}
                  onSectionClick={handleSectionClick}
                />
              </div>
              <div className="flex-1" onClick={() => setIsSidebarOpen(false)} />
            </div>
          )}

          {/* Main Content */}
          <TestForm
            currentSectionId={currentSectionId}
            questions={currentTest.questions}
            sections={currentTest.sections}
            onNext={handleNext}
            onPrev={handlePrev}
            onSubmit={onSubmit}
          />
        </form>
      </FormProvider>
    </div>
  );
}