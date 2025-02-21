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
        // Render submit button without motion wrapper when complete
        <Button
          type="submit"
          variant={"default"}
          className="gap-2"
        >
          Complete
        </Button>
      ) : (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="button"
            onClick={onNext}
            variant={"default"}
            className="gap-2"
          >
            Next
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
