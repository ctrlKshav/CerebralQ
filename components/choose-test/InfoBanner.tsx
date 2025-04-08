import { motion } from "framer-motion";
import { Lock, CheckCircle, Info } from "lucide-react";

export function InfoBanner() {
  const bannerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    }
  };

  const items = [
    {
      icon: <Lock className="h-5 w-5 text-gray-400 mr-2" />,
      text: "Your data is secure and confidential"
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-gray-400 mr-2" />,
      text: "All tests are research-backed"
    },
    {
      icon: <Info className="h-5 w-5 text-gray-400 mr-2" />,
      text: "Free to use"
    }
  ];

  return (
    <motion.div 
      className="bg-card text-card-foreground border border-border rounded-lg p-6 shadow-sm text-center"
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            {item.icon}
            <span className="text-sm text-muted-foreground">{item.text}</span>
            {index < items.length - 1 && (
              <div className="hidden md:block h-4 w-px bg-muted ml-6"></div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
