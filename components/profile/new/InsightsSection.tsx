import { Star, AlertTriangle, Briefcase, Users, Frown, Check, Heart, LightbulbIcon } from "lucide-react";

interface InsightsSectionProps {
  insights: {
    strengths: {
      title: string;
      items: string[];
    };
    weaknesses: {
      title: string;
      items: string[];
    };
    careerCompatibility: {
      requirements: string[];
    };
    relationshipInsights: {
      compatibleTypes: string[];
      challengingTypes: string[];
      approach: string[];
    };
  };
}

export default function InsightsSection({ insights }: InsightsSectionProps) {
  return (
    <section className="bg-background rounded-xl p-8">
      <div className="flex items-center pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
        <div className="flex-shrink-0 w-1.5 h-10 bg-indigo-500 rounded-full mr-4"></div>
        <div>
          <h2 className="text-2xl font-bold">Personality Insights</h2>
          <p className="text-muted-foreground mt-1">Strengths, Growth Areas & Compatibility</p>
        </div>
      </div>
      
      <div className="space-y-8">
        {/* Strengths & Weaknesses - Side by side on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Strengths */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-green-500 flex items-center justify-center mr-3">
                <Star className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{insights.strengths.title}</h3>
            </div>
            
            <ul className="space-y-3">
              {insights.strengths.items.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-green-600 dark:text-green-500 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Weaknesses */}
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
            <div className="flex items-center mb-5">
              <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-amber-500 flex items-center justify-center mr-3">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{insights.weaknesses.title}</h3>
            </div>
            
            <ul className="space-y-3">
              {insights.weaknesses.items.map((weakness, index) => (
                <li key={index} className="flex items-start">
                  <AlertTriangle className="text-amber-600 dark:text-amber-500 mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Career Compatibility */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-5">
            <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-blue-500 flex items-center justify-center mr-3">
              <Briefcase className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold">Career Compatibility</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="space-y-6 mb-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Analytical Careers</span>
                    <span className="text-sm font-medium text-blue-600">92%</span>
                  </div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-blue-500" style={{width: '92%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Technical Roles</span>
                    <span className="text-sm font-medium text-blue-600">79%</span>
                  </div>
                  <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-blue-500" style={{width: '79%'}}></div>
                  </div>
                </div>
              </div>
            </div>
                  
            <div>
              <p className="text-gray-700 dark:text-gray-300 mb-3">Your personality profile shows strong alignment with careers requiring:</p>
              <ul className="space-y-2">
                {insights.careerCompatibility.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-blue-500/10 flex items-center justify-center mr-2 flex-shrink-0">
                      <Check className="text-blue-600 dark:text-blue-400 h-4 w-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Relationship Dynamics */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center mb-5">
            <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-pink-500 flex items-center justify-center mr-3">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold">Relationship Dynamics</h3>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <Users className="h-5 w-5 text-blue-500 mr-2" />
                  <h4 className="font-medium">Compatible Types</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {insights.relationshipInsights.compatibleTypes.map((type, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-3">
                  <Frown className="h-5 w-5 text-red-500 mr-2" />
                  <h4 className="font-medium">Challenging Dynamics</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {insights.relationshipInsights.challengingTypes.map((type, index) => (
                    <span key={index} className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 border border-gray-200 dark:border-gray-700">
              <h4 className="font-medium mb-3">Your Relationship Approach</h4>
              <ul className="space-y-3">
                {insights.relationshipInsights.approach.map((approach, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <Check className="text-pink-500 dark:text-pink-400 h-4 w-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{approach}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
