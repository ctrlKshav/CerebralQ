import { Button } from "@/components/ui/button";
import { MBTIResponse } from "@/shared/schema";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useFormContext } from "react-hook-form";

interface FormNavigationProps {
  onSubmit: (data: MBTIResponse) => void;
  onNext: () => void;
  onPrev: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function FormNavigation({ 
  onSubmit,
  onNext, 
  onPrev, 
  isFirstStep, 
  isLastStep 
}: FormNavigationProps) {
  const methods = useFormContext();
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

      {isLastStep ? (
        // Render submit button without motion wrapper when complete
        <Button
          type="submit"
          className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          Complete
        </Button>
      ) : (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            onClick={onNext}
            className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
