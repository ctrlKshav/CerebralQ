import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  delay = 0,
  once = true,
}) => {
  return (
    <motion.div
      className={cn("group", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ 
        duration: 0.5, 
        delay, 
        ease: "easeOut",
        // Add these properties to prevent flickering
        opacity: {
          duration: 0.4,
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard; 