import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface FormNavigationProps {
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function FormNavigation({ 
  onNext, 
  onPrev, 
  isFirstStep, 
  isLastStep 
}: FormNavigationProps) {
  return (
    <div className="flex justify-between mt-8">
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

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button
          type={isLastStep ? "submit" : "button"}
          onClick={isLastStep ? undefined : onNext}
          className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          {isLastStep ? "Complete" : "Next"}
          {!isLastStep && <ArrowRight className="h-4 w-4" />}
        </Button>
      </motion.div>
    </div>
  );
}
