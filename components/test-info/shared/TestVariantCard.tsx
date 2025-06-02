"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Award, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TestVariantCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  duration: string;
  questions: number;
  accuracy: string;
  testUrl: string;
  delay?: number;
}

const TestVariantCard: React.FC<TestVariantCardProps> = ({
  title,
  subtitle,
  description,
  features,
  duration,
  questions,
  accuracy,
  testUrl,
  delay = 0,
}) => {
  return (
    <motion.div
      className="bg-card rounded-xl shadow-md border border-muted overflow-hidden flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Card Header */}
      <div className="p-6 border-b border-muted">
        <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-grow">
        <p className="text-card-foreground mb-6">{description}</p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-primary"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 2.5z"></path>
            </svg>
            <span className="text-sm text-muted-foreground">{questions} Questions</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{accuracy}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-card-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="p-6 border-t border-muted mt-auto">
        <Link href={testUrl} className="w-full">
          <Button className="w-full" variant="default">
            Take This Test
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default TestVariantCard;
