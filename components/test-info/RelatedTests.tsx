import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { TestData } from "@/lib/supabase"

export default function RelatedTests({ relatedTests }: { relatedTests: TestData["complementary_tests"] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Tests</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {relatedTests.map((test) => (
            <li key={test.id}>
              <Link href={`/tests/${test.id}`} className="block hover:bg-accent p-4 rounded-md transition-colors">
                <h3 className="font-semibold">{test.name}</h3>
                <p className="text-sm text-muted-foreground">{test.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

