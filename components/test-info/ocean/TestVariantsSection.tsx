import { useRef } from "react";
import { 
  ClipboardList, 
  Clock, 
  BarChart2,
  BarChart,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const TestVariantsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="py-20 md:py-28 bg-background dark:bg-background"
      id="test-variants"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Test Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 relative inline-block">
              Choose Your{" "}
              <span className="relative z-10 text-primary">Ideal</span> Test
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -rotate-1 transform translate-y-2 z-0"></div>
            </h2>

            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              We offer three scientifically validated OCEAN personality assessments, 
              each providing unique benefits for different needs and goals.
            </p>
          </div>
        </div>

        {/* 3-column grid on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* BFI-44 Test Card */}
          <motion.div 
            className="group relative rounded-xl overflow-hidden shadow-lg border border-blue-200/50 dark:border-blue-900/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-blue-100 dark:bg-blue-900/20 rotate-12 transform origin-bottom-left"></div>
            
            <div className="relative p-6 flex flex-col flex-1">
              {/* Icon & Title section */}
              <div className="text-center mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 flex items-center justify-center text-white shadow-md mb-4 mx-auto">
                  <ClipboardList className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-1">BFI-44</h3>
                <p className="text-muted-foreground text-sm">Quick Assessment</p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                    <Clock className="w-3 h-3 mr-1" /> 5-10 min
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800">
                    <ClipboardList className="w-3 h-3 mr-1" /> 44 questions
                  </Badge>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-16 h-1 bg-blue-100 dark:bg-blue-900/30 rounded-full mx-auto mb-5"></div>
              
              {/* Description section */}
              <div className="relative z-10 text-center flex-1 flex flex-col">
                <h4 className="text-lg font-medium text-card-foreground mb-3">Perfect for First-Time Test Takers</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  The BFI-44 offers a quick yet insightful snapshot of your personality. This streamlined assessment gives you accurate 
                  results in just a few minutes, making it ideal when you're curious but short on time.
                </p>
                <p className="text-muted-foreground mb-6 text-sm">
                  You'll discover your core tendencies across all five traits without the deep complexity of longer assessments, 
                  revealing your authentic personality with remarkable efficiency.
                </p>
                
                <div className="mt-auto">
                  <Link href="/start-test/ocean/bfi-44" className="w-full block">
                    <Button variant="outline" className="w-full bg-transparent hover:bg-blue-500 text-blue-600 hover:text-white dark:text-blue-400 dark:hover:text-white border-blue-300 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-700 group">
                      Start BFI-44 Test <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* IPIP-120 Test Card */}
          <motion.div 
            className="group relative rounded-xl overflow-hidden shadow-lg border border-purple-200/50 dark:border-purple-900/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-purple-500/5 dark:bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-100 dark:bg-purple-900/20 rotate-12 transform origin-bottom-left"></div>
            
            <div className="relative p-6 flex flex-col flex-1">
              {/* Icon & Title section */}
              <div className="text-center mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 flex items-center justify-center text-white shadow-md mb-4 mx-auto">
                  <BarChart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-1">IPIP-120</h3>
                <p className="text-muted-foreground text-sm">Balanced Depth</p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  <Badge variant="outline" className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800">
                    <Clock className="w-3 h-3 mr-1" /> 15-20 min
                  </Badge>
                  <Badge variant="outline" className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800">
                    <ClipboardList className="w-3 h-3 mr-1" /> 120 questions
                  </Badge>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-16 h-1 bg-purple-100 dark:bg-purple-900/30 rounded-full mx-auto mb-5"></div>
              
              {/* Description section */}
              <div className="relative z-10 text-center flex-1 flex flex-col">
                <h4 className="text-lg font-medium text-card-foreground mb-3">The Sweet Spot of Detail and Convenience</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  Most popular among our users, the IPIP-120 strikes the perfect balance between depth and time commitment. 
                  This assessment reveals not just your core traits, but also examines 30 individual personality facets.
                </p>
                <p className="text-muted-foreground mb-6 text-sm">
                  Think of it as moving from a portrait to a detailed character study — you'll see patterns in your behavior you 
                  never noticed before, while still keeping the test accessible and manageable.
                </p>
                
                <div className="mt-auto">
                  <Link href="/start-test/ocean/ipip-120" className="w-full block">
                    <Button variant="outline" className="w-full bg-transparent hover:bg-purple-500 text-purple-600 hover:text-white dark:text-purple-400 dark:hover:text-white border-purple-300 dark:border-purple-800 hover:border-purple-500 dark:hover:border-purple-700 group">
                      Start IPIP-120 Test <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* IPIP-300 Test Card */}
          <motion.div 
            className="group relative rounded-xl overflow-hidden shadow-lg border border-green-200/50 dark:border-green-900/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-green-500/5 dark:bg-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-green-100 dark:bg-green-900/20 rotate-12 transform origin-bottom-left"></div>
            
            <div className="relative p-6 flex flex-col flex-1">
              {/* Icon & Title section */}
              <div className="text-center mb-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 flex items-center justify-center text-white shadow-md mb-4 mx-auto">
                  <BarChart2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-1">IPIP-300</h3>
                <p className="text-muted-foreground text-sm">Professional Depth</p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-3 justify-center">
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
                    <Clock className="w-3 h-3 mr-1" /> 30-40 min
                  </Badge>
                  <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800">
                    <ClipboardList className="w-3 h-3 mr-1" /> 300 questions
                  </Badge>
                </div>
              </div>
              
              {/* Divider */}
              <div className="w-16 h-1 bg-green-100 dark:bg-green-900/30 rounded-full mx-auto mb-5"></div>
              
              {/* Description section */}
              <div className="relative z-10 text-center flex-1 flex flex-col">
                <h4 className="text-lg font-medium text-card-foreground mb-3">Professional-Grade Insight</h4>
                <p className="text-muted-foreground mb-4 text-sm">
                  The IPIP-300 represents the gold standard in personality assessment, used by researchers and psychologists worldwide. 
                  This comprehensive evaluation offers the highest resolution analysis available.
                </p>
                <p className="text-muted-foreground mb-6 text-sm">
                  It's like having a master psychologist conduct a thorough analysis of your personality. You'll gain access to nuanced 
                  insights about your thinking, feeling, and behavior that shape your life choices and relationships.
                </p>
                
                <div className="mt-auto">
                  <Link href="/start-test/ocean/ipip-300" className="w-full block">
                    <Button variant="outline" className="w-full bg-transparent hover:bg-green-500 text-green-600 hover:text-white dark:text-green-400 dark:hover:text-white border-green-300 dark:border-green-800 hover:border-green-500 dark:hover:border-green-700 group">
                      Start IPIP-300 Test <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestVariantsSection; 