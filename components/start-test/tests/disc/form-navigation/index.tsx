"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { ProgressBar } from "./ProgressBar";
import { SectionAndQuestionCounter } from "./SectionAndQuestionCounter";
import { ErrorMessage } from "./ErrorMessage";
import { NavigationButtons } from "./NavigationButtons";

interface FormNavigationProps {
    onNext: () => void;
    onPrev: () => void;
    currentQuestionCount: number;
    totalQuestions: number;
    isTestCompleted: boolean;
}

export function FormNavigation({
    onNext,
    onPrev,
    currentQuestionCount,
    totalQuestions,
    isTestCompleted,
}: FormNavigationProps) {

    const {
        formState: { errors },
        trigger,
    } = useFormContext();

    // Only show errors that were triggered by the Next button
    const currentErrors = Object.keys(errors.answers || {}).length > 0;

    const progressPercentage =
        ((currentQuestionCount - 1) / totalQuestions) * 100;

    const [showNavButtons, setShowNavButtons] = useState(false);
    const prevSectionComplete = useRef(false);

    // useEffect(() => {
    //     if (isSectionComplete && !prevSectionComplete.current) {
    //         setShowNavButtons(true);
    //     } else if (!isSectionComplete) {
    //         setShowNavButtons(false);
    //     }
    //     prevSectionComplete.current = isSectionComplete;
    // }, [isSectionComplete]);

    return (
        <div className="flex flex-col gap-4">
            <ErrorMessage message={currentErrors ? "Please answer all questions before proceeding" : undefined} />

            <motion.div
                layout
                className="sticky bottom-0 z-20 "
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <div className="flex flex-col gap-1">
                    <ProgressBar value={progressPercentage} />
                    <SectionAndQuestionCounter
                        currentQuestion={currentQuestionCount}
                        totalQuestions={totalQuestions}
                    />
                </div>

                <div>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="nav-buttons"
                            layout
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="mt-2"
                        >
                            <NavigationButtons
                                isFirstStep={currentQuestionCount === 1}
                                isLastStep={currentQuestionCount === totalQuestions}
                                isCompleting={false}
                                onPrev={onPrev}
                                onNext={onNext}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}