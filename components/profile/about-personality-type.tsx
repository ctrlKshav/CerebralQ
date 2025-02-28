"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface AboutPersonalityTypeProps {
  personalityType: string
  alias: string
  description: string
}

export default function AboutPersonalityType({ 
  personalityType, 
  alias, 
  description 
}: AboutPersonalityTypeProps) {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary text-primary">
          <span className="text-lg font-medium">1</span>
        </div>
        <h2 className="text-3xl font-semibold text-foreground">Personality Type</h2>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.4 }}
      >
        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">{personalityType}</CardTitle>
            <CardDescription className="text-lg">{alias}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed">{description}</p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="font-bold text-md">Strengths</h4>
                <ul className="mt-3 text-base space-y-2">
                  <li>Creative thinking</li>
                  <li>Empathetic understanding</li>
                  <li>Value-driven decisions</li>
                </ul>
              </div>
              <div className="bg-primary/10 rounded-lg p-4">
                <h4 className="font-bold text-md">Growth Areas</h4>
                <ul className="mt-3 text-base space-y-2">
                  <li>Practical implementation</li>
                  <li>Handling criticism</li>
                  <li>Setting boundaries</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
