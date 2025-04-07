import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const TestRecommendationsSection = ({
  recommendations,
}: {
  recommendations: any[];
}) => (
  <div className="mt-24">
    <h2 className="text-3xl font-bold mb-8 text-center">Recommended Tests</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {recommendations.map((test, index) => (
        <Card key={index} className="group hover:shadow-lg transition-shadow">
          <CardContent className="pt-8 p-6">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-lg bg-primary/5 text-primary">
                <test.icon className="h-8 w-8" />
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold">{test.name}</h3>
                <p className="text-lg text-muted-foreground">
                  {test.description}
                </p>
                <Link href={"/coming-soon"} className="">
                  <Button variant="link" className="">
                    Take Test →
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
);
