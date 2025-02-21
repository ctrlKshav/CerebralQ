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
      result: "", // default empty result
      createdAt: new Date().toISOString(), // set default createdAt
    },
  });

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
    const currentSectionQuestions = currentTest.questions.filter(
      q => q.section === currentSectionId
    );
    const unansweredQuestions = currentSectionQuestions.filter(
      question => !methods.getValues().answers[question.id]
    );
    if (unansweredQuestions.length > 0) {
      unansweredQuestions.forEach(question => {
        methods.setError(`answers.${question.id}`, {
          type: 'required',
          message: 'Please answer this question'
        });
      });
      return;
    }
    methods.clearErrors();
    saveProgress(data);
    const personalityResult = calculateMBTI(data.answers, currentTest.questions);
    console.log("Form submitted:", data);
    console.log("Personality Type:", personalityResult);
  };

  const handleNext = () => {
    // Check if all questions in current section are answered
    const currentSectionQuestions = currentTest.questions.filter(
      q => q.section === currentSectionId
    );
    
    const unansweredQuestions = currentSectionQuestions.filter(
      question => !methods.getValues().answers[question.id]
    );

    if (unansweredQuestions.length > 0) {
      unansweredQuestions.forEach(question => {
        methods.setError(`answers.${question.id}`, {
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
    }
    saveProgress(methods.getValues());
  };

  const handlePrev = () => {
    // Clear any errors when going back
    methods.clearErrors();
    if (currentSectionId > 1) {
      setCurrentSectionId(prev => prev - 1);
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
          <div className="flex-1 md:ml-80 mt-16 md:mt-0">
            <div className="min-h-screen relative">
              <div className="p-8 pb-32">
                <div className="max-w-5xl mx-auto min-h-[calc(100vh-12rem)] flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSectionId}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      {sectionQuestions.map((question) => (
                        <QuestionCard
                          key={question.id}
                          question={question}
                          name={`answers.${question.id}`}
                        />
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              {/* Fixed Bottom Navigation */}
              <div className="fixed bottom-0 left-0 right-0 md:left-80 border-t bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm">
                <div className="max-w-3xl mx-auto px-8 py-6">
                  <FormNavigation
                    onSubmit={onSubmit}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    isFirstStep={currentSectionId === 1}
                    isLastStep={currentSectionId === currentTest.sections.length}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}