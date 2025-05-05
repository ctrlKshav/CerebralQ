
import { motion } from "framer-motion";
import { Play, Film } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoDemo() {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14 space-y-4">
          
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Personality Insights, Visualized
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Watch how Cerebral Quotient transforms complex personality data into intuitive, 
            actionable insights through our interactive platform.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video max-w-4xl mx-auto"
        >
          {/* Video placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/60 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.4, duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-20 w-20 rounded-full bg-primary text-white flex items-center justify-center shadow-lg relative z-10"
              >
                <Play className="h-8 w-8 ml-1" />
              </motion.button>
            </div>
            
            {/* Placeholder image or gradient */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-50"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-0 w-full flex justify-center">
            <div className="glass-card px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 text-sm">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
              <span>Demo Video • 2:45</span>
            </div>
          </div>
          
          {/* Side decorative elements */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -left-6 top-1/3 rotate-90 opacity-40"
          >
            <div className="font-mono text-xs text-white/60">
              00:00:00:00
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -right-6 top-1/3 -rotate-90 opacity-40"
          >
            <div className="font-mono text-xs text-white/60">
              00:02:45:00
            </div>
          </motion.div>
          
          {/* Video frame corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/20 rounded-tl-lg"></div>
          <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-white/20 rounded-tr-lg"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-white/20 rounded-bl-lg"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/20 rounded-br-lg"></div>
        </motion.div>
        
     
      </div>
    </section>
  );
}
