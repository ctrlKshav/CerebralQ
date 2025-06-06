"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { ProgressBar } from "./ProgressBar";
import { SectionAndQuestionCounter } from "./SectionAndQuestionCounter";
import { NavigationButtons } from "./NavigationButtons";

interface FormNavigationProps {
    onNext: () => void;
    onPrev: () => void;
    currentQuestionCount: number;
    totalQuestions: number;
    showNext: boolean
    setShowNext: (value: boolean) => void
}

export function FormNavigation({
    onNext,
    onPrev,
    currentQuestionCount,
    totalQuestions,
    showNext,
    setShowNext
}: FormNavigationProps) {

    const progressPercentage =
        ((currentQuestionCount - 1) / totalQuestions) * 100;

    return (
        <div className="flex flex-col gap-4">
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
                                onPrev={onPrev}
                                onNext={onNext}
                                showNext={showNext}
                                setShowNext={setShowNext}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}