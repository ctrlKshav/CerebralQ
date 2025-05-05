import { ReactNode } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

interface SectionHeaderProps {
  icon: ReactNode;
  label: string;
  title: string;
  description: string;
}

export function SectionHeader({ icon, label, title, description }: SectionHeaderProps) {
  return (
    <motion.div 
      className="text-center mb-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-full">
          {icon}
        </div>
        <span className="text-sm font-medium uppercase tracking-wider text-primary">{label}</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {title}
      </h2>
      
      <p className="text-base text-muted-foreground max-w-xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
} 