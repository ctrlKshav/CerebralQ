import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import CQLogo from "@/components/CQLogo";

// Upgrade overlay components
export const UpgradeOverlay = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 backdrop-blur-md bg-background/60">
      <UpgradeCard />
    </div>
  );
};

const UpgradeCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-card border rounded-xl shadow-lg max-w-md w-full mx-6"
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-center mb-6">
          <CQLogo className="w-28 h-28" />
        </div>

        <h3 className="text-2xl font-bold text-center mb-2">
          Unlock Your Full Report
        </h3>
        <p className="text-muted-foreground text-center mb-6">
          Gain complete access to all your personality insights and detailed
          career recommendations
        </p>

        <div className="space-y-3 mb-6">
          <BenefitItem text="Discover personalized career paths with detailed matches" />
          <BenefitItem text="Access relationship compatibility insights" />
          <BenefitItem text="Get growth journey recommendations and daily habits" />
          <BenefitItem text="Receive community connection suggestions" />
        </div>

        <Button className="w-full py-6 text-base font-medium" size="lg">
          Upgrade to Full Report <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3">
    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
      <div className="h-2 w-2 rounded-full bg-primary" />
    </div>
    <span className="text-sm">{text}</span>
  </div>
);
