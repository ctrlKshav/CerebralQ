import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary to-primary-foreground/90 dark:from-primary/70 dark:via-primary/80 dark:to-primary-foreground/80">
        {/* Clean full ocean wave background pattern */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-10">
            <path fill="white" fillOpacity="0.8" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-10">
            <path fill="white" fillOpacity="0.5" d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,80C672,85,768,139,864,144C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" transform="translate(0, 20)"></path>
          </svg>
        </div>
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-white dark:text-foreground max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-foreground/20 dark:bg-primary-foreground/10 backdrop-blur-sm rounded-full text-white mb-6">
                OCEAN / Big Five Personality Test
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Discover Who You <span className="italic font-extrabold">Really</span> Are
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-2xl mb-8 text-white/90 dark:text-foreground/90"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              A scientifically-validated personality assessment based on the Big Five model—revealing your true traits in just 10 minutes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="space-y-3"
            >
              <Button 
                size="lg"
                variant="secondary"
                className="font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03]"
              >
                Take the Test Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-white/80 dark:text-foreground/80 text-sm ml-1">Free • 10 minutes • No registration required</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Certificate shadow and rotation effect */}
              <div className="absolute inset-0 bg-white/10 dark:bg-white/5 rounded-xl backdrop-blur-sm transform rotate-3"></div>
              
              {/* Ocean Test Certificate */}
              <div className="relative bg-white dark:bg-card rounded-lg p-6 shadow-xl transform transition-all hover:rotate-1 border border-muted overflow-hidden">
                {/* Certificate header */}
                <div className="text-center mb-4 pb-2 border-b border-muted">
                  <div className="flex justify-center mb-2">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-foreground flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-8a2 2 0 1 0 2 2 2 2 0 0 0-2-2z"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground">OCEAN Test Results</h3>
                  <p className="text-sm text-muted-foreground">Personality Assessment</p>
                </div>
                
                {/* Certificate content */}
                <div className="space-y-3">
                  {["Openness", "Conscientiousness", "Extraversion", "Agreeableness", "Neuroticism"].map((trait, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-primary/70 mr-3"></div>
                      <div className="text-card-foreground font-medium text-sm">{trait}</div>
                      <div className="ml-auto h-2 bg-muted rounded-full w-24 lg:w-32">
                        <motion.div 
                          className="h-full bg-primary rounded-full" 
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.random() * 100}%` }}
                          transition={{ duration: 1, delay: 0.7 + (i * 0.1) }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Certificate footer */}
                <div className="mt-6 pt-4 border-t border-muted text-center">
                  <div className="text-xs text-muted-foreground">Completed on April 8, 2025</div>
                  <div className="mt-2 flex justify-center">
                    <svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg" className="h-6 opacity-50">
                      <path d="M0,20 Q25,5 50,20 T100,20" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.07 }}
        transition={{ duration: 1.5 }}
      >
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <motion.path
            d="M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z"
            fill="white"
            animate={{
              d: [
                "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z",
                "M0,500 Q250,600 500,500 T1000,500 L1000,1000 L0,1000 Z", 
                "M0,500 Q250,400 500,500 T1000,500 L1000,1000 L0,1000 Z"
              ]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
