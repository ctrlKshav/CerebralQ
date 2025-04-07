"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  description: string;
  gradient?: boolean;
}

export function SectionHeader({ 
  title, 
  description, 
  gradient = true 
}: SectionHeaderProps) {
  return (
    <div className="relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto px-4 pb-16 relative z-10"
      >
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold tracking-tight mb-6 ${
            gradient 
              ? "bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70" 
              : "text-primary"
          }`}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h2>
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </motion.div>
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none" />
    </div>
  );
}
