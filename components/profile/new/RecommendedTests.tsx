import { Brain, Heart, Lightbulb, ArrowRight } from "lucide-react";
import { RecommendedTest } from "@/types/profileTypes";
import SectionHeader from "./shared/SectionHeader";
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
    <section className="bg-background rounded-xl shadow-md p-8">
      <SectionHeader
        title="Recommended Tests"
        description="Discover more tests to enhance your understanding of yourself and others"
        calendar={false}
      />
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
      
      
    </section>
  );
}
