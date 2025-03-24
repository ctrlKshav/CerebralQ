import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PersonalityTraitsFallbackProps {
  personalityType: string
}

export default function PersonalityTraitsFallback({ personalityType }: PersonalityTraitsFallbackProps) {
  // This is a fallback component that mimics the PersonalityTraits component
  // but doesn't rely on any external dependencies

  const traits = {
    INFP: [
      { name: "Idealistic", score: 85 },
      { name: "Creative", score: 92 },
      { name: "Empathetic", score: 88 },
      { name: "Introspective", score: 90 },
      { name: "Authentic", score: 87 },
    ],
    INTJ: [
      { name: "Strategic", score: 94 },
      { name: "Independent", score: 90 },
      { name: "Analytical", score: 95 },
      { name: "Determined", score: 88 },
      { name: "Curious", score: 86 },
    ],
  }

  const personalityTraits = traits[personalityType as keyof typeof traits] || [
    { name: "Trait 1", score: 80 },
    { name: "Trait 2", score: 75 },
    { name: "Trait 3", score: 85 },
    { name: "Trait 4", score: 70 },
    { name: "Trait 5", score: 90 },
  ]

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Personality Traits</span>
          <Badge variant="outline">{personalityType}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {personalityTraits.map((trait) => (
            <div key={trait.name} className="space-y-1">
              <div className="flex justify-between items-center">
                <span>{trait.name}</span>
                <span className="text-sm font-medium">{trait.score}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-primary/70 to-primary rounded-full"
                  style={{ width: `${trait.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

