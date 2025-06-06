import React from "react";
import { motion } from "framer-motion";

interface WaveAnimationProps {
  isMobile?: boolean;
  className?: string;
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({ 
  isMobile = false,
  className = "text-purple-600 dark:text-purple-400" 
}) => {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      {isMobile ? (
        // Mobile-specific wave animations
        <>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%" 
            height="100%" 
            viewBox="0 0 400 100"
            preserveAspectRatio="none" 
            className="absolute bottom-0 left-0 right-0 w-full opacity-10"
            style={{ height: "40%" }}
          >
            <motion.path 
              fill="currentColor" 
              fillOpacity="0.8" 
              d="M0,40 C33,53 66,26 100,40 C133,53 166,26 200,40 C233,53 266,26 300,40 C333,53 366,26 400,40 L400,100 L0,100 Z"
              animate={{
                d: [
                  "M0,40 C33,53 66,26 100,40 C133,53 166,26 200,40 C233,53 266,26 300,40 C333,53 366,26 400,40 L400,100 L0,100 Z",
                  "M0,50 C33,40 66,60 100,50 C133,40 166,60 200,50 C233,40 266,60 300,50 C333,40 366,60 400,50 L400,100 L0,100 Z",
                  "M0,40 C33,53 66,26 100,40 C133,53 166,26 200,40 C233,53 266,26 300,40 C333,53 366,26 400,40 L400,100 L0,100 Z"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.svg>
          
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%" 
            height="100%" 
            viewBox="0 0 400 100"
            preserveAspectRatio="none" 
            className="absolute bottom-0 left-0 right-0 w-full opacity-10"
            style={{ height: "35%" }}
          >
            <motion.path 
              fill="currentColor" 
              fillOpacity="0.5" 
              d="M0,30 C50,15 100,45 150,30 C200,15 250,45 300,30 C350,15 400,45 450,30 L450,100 L0,100 Z"
              animate={{
                d: [
                  "M0,30 C50,15 100,45 150,30 C200,15 250,45 300,30 C350,15 400,45 450,30 L450,100 L0,100 Z",
                  "M0,20 C50,35 100,20 150,35 C200,20 250,35 300,20 C350,35 400,20 450,35 L450,100 L0,100 Z",
                  "M0,30 C50,15 100,45 150,30 C200,15 250,45 300,30 C350,15 400,45 450,30 L450,100 L0,100 Z"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </motion.svg>
        </>
      ) : (
        // Desktop wave animations
        <>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%" 
            height="100%" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none" 
            className="absolute inset-0 w-full h-full opacity-10"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, -10, 0, 10, 0],
              scaleY: [1, 1.05, 1, 0.95, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.path 
              fill="currentColor" 
              fillOpacity="0.8" 
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,200L48,190C96,180,192,160,288,170C384,180,480,220,576,210C672,200,768,150,864,160C960,170,1056,240,1152,240C1248,240,1344,170,1392,150L1440,130L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.svg>

          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%" 
            height="100%" 
            viewBox="0 0 1440 320"
            preserveAspectRatio="none" 
            className="absolute inset-0 w-full h-full opacity-10"
            initial={{ y: 0 }}
            animate={{ 
              y: [0, 15, 0, -15, 0],
              scaleY: [1, 0.97, 1, 1.03, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <motion.path 
              fill="currentColor" 
              fillOpacity="0.5" 
              d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,80C672,85,768,139,864,144C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              animate={{
                d: [
                  "M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,80C672,85,768,139,864,144C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,80L48,90C96,100,192,120,288,110C384,100,480,60,576,70C672,80,768,140,864,150C960,160,1056,120,1152,112C1248,104,1344,128,1392,140L1440,152L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  "M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,80C672,85,768,139,864,144C960,149,1056,107,1152,106.7C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </motion.svg>
        </>
      )}
    </div>
  );
};

export default WaveAnimation; 