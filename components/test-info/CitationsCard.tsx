import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const TestCitationsCard = ({ citations }: { citations: any[] }) => (
  <Card className="w-full">
    <CardContent className="pt-6">
      <ul className="list-disc pl-6 space-y-4 text-lg">
        {citations.map((citation, index) => (
          <li key={index} className="flex flex-col gap-1">
            <Link
              href={citation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {new URL(citation.link).hostname}
            </Link>
            <span className="text-muted-foreground">{citation.name}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);
