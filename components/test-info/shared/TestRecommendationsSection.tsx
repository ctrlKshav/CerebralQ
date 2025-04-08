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
  <div className="">
    <div className="grid gap-8 md:grid-cols-2">
      {recommendations.map((test, index) => (
        <Card key={index} className="group hover:shadow-lg transition-shadow">
          <CardContent className="pt-8 p-6">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-lg  text-primary">
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
