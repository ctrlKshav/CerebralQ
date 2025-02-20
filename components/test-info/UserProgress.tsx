"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getUserProgress, UserProgressInterface } from "@/lib/supabase"

export default function UserProgress({ testId }: { testId: string }) {
  const [progress, setProgress] = useState<UserProgressInterface | null>(null)

  useEffect(() => {
    async function fetchProgress() {
      const data = getUserProgress(testId)
      setProgress(data)
    }
    fetchProgress()
  }, [testId])

  if (!progress) return null

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p>Previous Score: {progress.score}</p>
          <p>Taken on: {new Date(progress.timestamp).toLocaleDateString()}</p>
        </div>
        <p>Validity: {progress.validity}</p>
        <Button variant="outline">View Detailed Results</Button>
      </CardContent>
    </Card>
  )
}

