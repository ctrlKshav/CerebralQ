'use client';
import { motion } from 'framer-motion';
import { PageHeader } from '@/components/choose-test/PageHeader';
import { InfoBanner } from '@/components/choose-test/InfoBanner';
import { TestCard } from '@/components/choose-test/TestCard';
import { tests } from '@/data/chooseTest';

export default function ChooseTestPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <PageHeader 
          title="Discover Yourself" 
          subtitle="Embark on a journey of self-discovery through scientifically designed assessments that reveal your unique personality traits, strengths, and potential."
        />

        <motion.div
          className="grid md:grid-cols-2 gap-16 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {tests.map((test, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TestCard test={test} />
            </motion.div>
          ))}
        </motion.div>

        <InfoBanner />
      </div>
    </div>
  );
}
