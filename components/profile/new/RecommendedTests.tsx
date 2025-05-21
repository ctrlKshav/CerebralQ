import { Card } from "@/components/ui/card";
import { Brain, Heart, Lightbulb, ArrowRight } from "lucide-react";
import { RecommendedTest } from "@/types/profileTypes";
import { Button } from "@/components/ui/button";

interface RecommendedTestsProps {
  tests: RecommendedTest[];
}

export default function RecommendedTests({ tests }: RecommendedTestsProps) {
  const getIconForTest = (iconName: string) => {
    switch (iconName) {
      case 'psychology':
        return <Brain className="h-5 w-5" />;
      case 'heart-pulse':
        return <Heart className="h-5 w-5" />;
      case 'creative':
        return <Lightbulb className="h-5 w-5" />;
      default:
        return <Lightbulb className="h-5 w-5" />;
    }
  };

  return (
    <Card className="card-spacious pb-6">
      <div className="flex items-center mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
        <div className="flex-shrink-0 w-1 h-8 bg-gray-400 rounded-full mr-3"></div>
        <div>
          <h2 className="text-xl font-medium">Discover More Tests</h2>
        </div>
      </div>
      
      <div className="space-y-3 mb-4">
        {tests.slice(0, 2).map((test) => (
          <div 
            key={test.id}
            className={`flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-all duration-200 cursor-pointer`}
          >
            <div className={`flex-shrink-0 h-10 w-10 rounded-lg ${test.accentColor.split(' ')[0]} text-white flex items-center justify-center mr-4`}>
              {getIconForTest(test.icon)}
            </div>
            
            <div className="flex-1 mr-3">
              <h3 className="font-medium">{test.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">{test.description}</p>
            </div>
            
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 flex items-center justify-center">
              <ArrowRight className={`h-4 w-4 ${test.accentColor.split(' ')[1]}`} />
            </div>
          </div>
        ))}
      </div>
      
      <div className="px-4">
        <Button 
          variant="outline" 
          className="w-full rounded-lg py-2 h-auto text-sm font-normal text-gray-700 dark:text-gray-300"
        >
          View All Tests
        </Button>
      </div>
    </Card>
  );
}
