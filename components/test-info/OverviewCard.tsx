import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TestData } from "@/lib/supabase"

export default function OverviewCard({ test }: { test: TestData }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Test Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{test.description}</p>
        <div className="flex justify-between items-center">
          <span>Number of Questions:</span>
          <span className="font-semibold">{test.num_questions}</span>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <span>Scientific Validity:</span>
            <span className="font-semibold">{test.scientific_validity_score}%</span>
          </div>
          <Progress value={test.scientific_validity_score} className="h-2" />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <span>Reliability Score:</span>
            <span className="font-semibold">{test.reliability_score}%</span>
          </div>
          <Progress value={test.reliability_score} className="h-2" />
        </div>
      </CardContent>
    </Card>
  )
}

