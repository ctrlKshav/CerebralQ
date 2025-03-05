"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface TestHistoryProps {
  fullTestHistory: Array<{
    id: string
    type: string
    date: string
    score: number
    details: Record<string, any>
  }>
}

export default function TestHistory({ fullTestHistory }: TestHistoryProps) {
  const testHistory = fullTestHistory.slice(0,3)
  return (
    <section className="space-y-6">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold"
      >
        Test History
      </motion.h2>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <Card>
          <CardHeader>
            <CardTitle>Test Timeline</CardTitle>
            <CardDescription>History of cognitive assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {testHistory.map((test, index) => (
                <Collapsible key={test.id}>
                  <div className="relative pl-8 pb-4">
                    {/* Timeline line */}
                    {index < testHistory.length - 1 && (
                      <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-border" />
                    )}

                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <Calendar className="h-3 w-3 text-primary" />
                    </div>

                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{test.type} Assessment</h4>
                        <p className="text-sm text-muted-foreground">{new Date(test.date).toLocaleDateString()}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Score: {test.score}</span>
                        <CollapsibleTrigger className="rounded-full p-1 hover:bg-muted">
                          <ChevronDown className="h-4 w-4" />
                          <span className="sr-only">Toggle details</span>
                        </CollapsibleTrigger>
                      </div>
                    </div>

                    <CollapsibleContent>
                      <div className="mt-2 p-3 bg-muted rounded-md text-sm">
                        <h5 className="font-medium mb-1">Detailed Results</h5>
                        <ul className="space-y-1">
                          {Object.entries(test.details).map(([key, value]) => (
                            <li key={key} className="flex justify-between">
                              <span className="text-muted-foreground">{key}:</span>
                              <span>{value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              ))}

              {testHistory.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">No test history available</div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
