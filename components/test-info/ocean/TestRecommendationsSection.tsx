import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

export const TestRecommendationsSection = ({
  recommendations,
}: {
  recommendations: any[];
}) => (
  <div className="mt-24">
    <h2 className="text-3xl font-bold mb-4 text-center">Recommended Tests</h2>
    <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
      Continue your self-discovery journey with these complementary assessments that build on your OCEAN results
    </p>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {recommendations.map((test, index) => (
        <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-primary/10">
          <CardContent className="pt-8 p-6">
            <div className="flex items-start gap-6">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <test.icon className="h-6 w-6" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold">{test.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {test.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-primary">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  <span>Pairs well with OCEAN</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="px-6 pb-6 pt-0">
            <Link href={`/test/${test.shortCode}`} className="w-full">
              <Button variant="outline" className="w-full">
                Take Test
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);
