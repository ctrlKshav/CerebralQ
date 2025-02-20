import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { TestData } from "@/lib/supabase"

export default function DiscoverySection({ test }: { test: TestData }) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>What You'll Discover</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video relative">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Result visualization"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <ul className="list-disc pl-5 space-y-2">
          {test.key_insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

