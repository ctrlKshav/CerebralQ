import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative py-24 px-6">
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <div className="text-5xl mb-6 flex justify-center">
              <div className="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center">
                🧠
              </div>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to Discover Your True Self?
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards greater self-awareness and personal
            growth. Start your personality assessment today.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6"
          >
            <Button size="lg" className="rounded-full text-lg px-8 py-6">
              Explore Tests Now
            </Button>
          </motion.div>
        </motion.div>
    </section>
  );
}
