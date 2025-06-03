"use client";
import React from "react";
import { motion } from "framer-motion";

interface WaveAnimationProps {
  isMobile: boolean;
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({ isMobile }) => {
  return (
    <motion.div
      className="absolute inset-0 z-0 text-primary/10 dark:text-white/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.07 }}
      transition={{ duration: 1.5 }}
    >
      <motion.svg 
        viewBox={isMobile ? "0 0 400 200" : "0 0 1000 1000"}
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full"
      >
        <motion.path
          d={isMobile 
            ? "M0,100 Q100,70 200,100 T400,100 L400,200 L0,200 Z" 
            : "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z"
          }
          fill="currentColor"
          animate={{
            d: isMobile ? [
              "M0,100 Q100,70 200,100 T400,100 L400,200 L0,200 Z",
              "M0,100 Q100,130 200,100 T400,100 L400,200 L0,200 Z", 
              "M0,100 Q100,70 200,100 T400,100 L400,200 L0,200 Z"
            ] : [
              "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z",
              "M0,500 Q250,600 500,500 T1000,500 L1000,1000 L0,1000 Z", 
              "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z"
            ]
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 8,
            ease: "easeInOut"
          }}
        />
      </motion.svg>
    </motion.div>
  );
};

export default WaveAnimation;
