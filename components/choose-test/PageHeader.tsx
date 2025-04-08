"use client";
import { motion } from "framer-motion";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: HeaderProps) {
  return (
    <header className="text-center mb-16">
      <motion.h1 
        className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6,
          ease: "easeOut"
        }}
      >
        {title}
      </motion.h1>
      <motion.p 
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.6,
          delay: 0.2, 
          ease: "easeOut"
        }}
      >
        {subtitle}
      </motion.p>
    </header>
  );
}
