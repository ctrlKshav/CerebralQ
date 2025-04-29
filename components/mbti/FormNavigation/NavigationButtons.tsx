import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationButtonsProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  isCompleting: boolean;
  onPrev: () => void;
  onNext: () => void;
  highlightNext?: boolean;
}

export function NavigationButtons({
  isFirstStep,
  isLastStep,
  isCompleting,
  onPrev,
  onNext,
  highlightNext = false,
}: NavigationButtonsProps) {
  return (
    <div className="flex justify-between">
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          type="button"
          variant="outline"
          onClick={onPrev}
          disabled={isFirstStep}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </Button>
      </motion.div>
      {isLastStep ? (
        <Button
          type="submit"
          variant={"default"}
          className="gap-2 hover:scale-105 active:scale-95 transition-transform duration-200"
        >
          {isCompleting ? "Submitting..." : "Complete"}
        </Button>
      ) : (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            onClick={onNext}
            variant={"default"}
            className={`gap-2 hover:scale-105 active:scale-95 `}
            autoFocus={highlightNext}
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
