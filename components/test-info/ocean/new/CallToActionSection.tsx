import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="py-12 px-8 md:py-16 md:px-12 lg:py-20 lg:px-16 text-white text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to Discover Your Personality?
            </motion.h2>
            <motion.p 
              className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Take the Ocean Test now and gain valuable insights into who you are, how you think, and what drives you forward.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg"
                className="bg-white text-blue-700 font-medium hover:bg-opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Start Your Test Now
              </Button>
              <p className="mt-4 text-sm opacity-80">Quick, insightful, and completely free.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
