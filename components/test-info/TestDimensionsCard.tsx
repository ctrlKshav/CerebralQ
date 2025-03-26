import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileSpreadsheet } from "lucide-react";

export const TestDimensionsCard = ({ dimensions }: { dimensions: any[] }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-2xl">
        <FileSpreadsheet className="h-6 w-6" />
        What Makes You, You?
      </CardTitle>
      <CardDescription>
        The MBTI looks at four parts of your personality to uncover your unique
        type. Let's break it down:
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      {dimensions.map((dimension, index) => (
        <div key={index} className="space-y-3">
          <h3 className="font-medium text-xl">{dimension.title}</h3>
          <p className="text-md text-muted-foreground">
            {dimension.description}
          </p>
          <div className="flex gap-2">
            {dimension.types.map((type: string, i: number) => (
              <Badge key={i} variant={"default"}>
                {type}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </CardContent>
  </Card>
);
