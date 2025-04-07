import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";
import Link from "next/link";

export const TestCitationsCard = ({ citations }: { citations: any[] }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-2xl">
        <BookOpen className="h-6 w-6" />
        Scientific Foundation
      </CardTitle>
      <CardDescription>
        Academic research and studies supporting the validity of the Ocean (Big Five) personality model
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="bg-primary/5 p-4 rounded-lg">
        <h3 className="font-medium text-lg mb-3">Key Citations</h3>
        <ul className="space-y-4">
          {citations.map((citation, index) => (
            <li key={index} className="text-sm">
              <div className="flex gap-3">
                <span className="text-primary font-bold">{index + 1}.</span>
                <div>
                  <p className="mb-1">{citation.name}</p>
                  <Link
                    href={citation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1 text-xs"
                  >
                    View Publication <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <p className="text-xs text-muted-foreground">
        The Ocean (Big Five) model is one of the most scientifically validated and reliable 
        personality frameworks in psychology. It has been extensively researched across cultures 
        and has strong predictive validity for various life outcomes.
      </p>
    </CardContent>
  </Card>
);
