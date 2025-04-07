import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TraitBadge = ({ text, type }: { text: string, type: string }) => {
  const colors: Record<string, string> = {
    'Low Openness': 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    'High Openness': 'bg-blue-200 text-blue-800 hover:bg-blue-300',
    'Low Conscientiousness': 'bg-green-100 text-green-700 hover:bg-green-200',
    'High Conscientiousness': 'bg-green-200 text-green-800 hover:bg-green-300',
    'Low Extraversion': 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
    'High Extraversion': 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300',
    'Low Agreeableness': 'bg-pink-100 text-pink-700 hover:bg-pink-200',
    'High Agreeableness': 'bg-pink-200 text-pink-800 hover:bg-pink-300',
    'Low Neuroticism': 'bg-purple-100 text-purple-700 hover:bg-purple-200',
    'High Neuroticism': 'bg-purple-200 text-purple-800 hover:bg-purple-300',
  };

  const className = colors[type] || 'bg-primary/10 hover:bg-primary/20 text-primary';

  return (
    <Badge variant="outline" className={`${className} py-1 px-3 transition-colors cursor-default`}>
      {text}
    </Badge>
  );
};

export const TestDimensionsCard = ({ dimensions }: { dimensions: any[] }) => (
  <Card className="h-full flex flex-col">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-2xl">
        <Layers className="h-6 w-6" />
        The Big Five Dimensions
      </CardTitle>
      <CardDescription>
        Explore the five fundamental personality traits that shape your behavior and preferences
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4 flex-1">
      <Accordion type="single" collapsible className="w-full">
        {dimensions.map((dimension, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
            <AccordionTrigger className="text-left hover:no-underline py-4 group">
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium">{dimension.title}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-90" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-4">
              <div className="space-y-3">
                <p className="text-md text-muted-foreground">
                  {dimension.description}
                </p>
                <div className="flex gap-3 flex-wrap pt-2">
                  {dimension.types.map((type: string, i: number) => (
                    <TraitBadge key={i} text={type.split(' ')[1]} type={type} />
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </CardContent>
  </Card>
);
