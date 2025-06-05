import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { MouseEvent } from "react";
import { useFormContext } from "react-hook-form";

interface NavigationButtonsProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  onPrev: () => void;
  onNext: () => void;
  showNext: boolean;
  setShowNext: (value: boolean) => void;
}

export function NavigationButtons({
  isFirstStep,
  isLastStep,
  onPrev,
  onNext,
  showNext,
  setShowNext
}: NavigationButtonsProps) {
  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onNext();
  };

  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <div className="flex justify-between">
      <Button
        type="button"
        variant="outline"
        onClick={onPrev}
        disabled={isFirstStep}
        aria-disabled={isFirstStep}
        className="gap-2 hover:scale-105 active:scale-95 transition-transform duration-200"
      >
        <ArrowLeft className="h-4 w-4" />
        Previous
      </Button>
      {isLastStep ? (
        <Button
          type="submit"
          variant={"default"}
          disabled={isSubmitting || !isLastStep || !showNext}
          aria-disabled={isSubmitting || !isLastStep || !showNext}
          className="gap-2 hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          {isSubmitting ? "Submitting..." : "Complete"}
        </Button>
      ) : (
        <Button
          type="button"
          onClick={handleNext}
          variant={"default"}
          disabled={isSubmitting || isLastStep || !showNext}
          aria-disabled={isSubmitting || isLastStep || !showNext}
          className={`gap-2 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 `}
        >
          <span className="inline-block">Next</span>
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      )}
    </div>
  );
}
