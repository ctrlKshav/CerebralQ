import { Badge } from "@/components/ui/badge"
import { Clock, BarChart2 } from "lucide-react"

export default function TestHeader({ test }) {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">{test.name}</h1>
      <div className="flex flex-wrap gap-4 items-center">
        <Badge variant="secondary">{test.category}</Badge>
        <div className="flex items-center gap-2">
          <BarChart2 className="w-4 h-4" />
          <span>Difficulty: {test.difficulty_level}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span>{test.time_estimate_minutes} minutes</span>
        </div>
      </div>
    </div>
  )
}

