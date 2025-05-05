import { motion } from "framer-motion";
import { features } from "@/data/features";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartBar, Share2, Smartphone, TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Features() {
  const getIcon = (id: string) => {
    switch (id) {
      case "reports":
        return <ChartBar className="h-5 w-5" />;
      case "dashboard":
        return <Smartphone className="h-5 w-5" />;
      case "share":
        return <Share2 className="h-5 w-5" />;
      case "progress":
        return <TrendingUp className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 px-6 bg-secondary/50 dark:bg-secondary/20 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <SectionHeader
          icon={<ChartBar className="h-5 w-5 text-primary" />}
          label="Premium Features"
          title="What's included?"
          description="Explore the powerful tools and visualizations that make Cerebral Quotient the premier personality assessment platform."
        />

        <Tabs defaultValue="reports" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="h-auto p-1 bg-background/50 backdrop-blur-sm border border-border/50 rounded-full">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full py-3 px-5 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    {getIcon(feature.id)}
                    <span className="hidden md:inline">{feature.title}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="focus:outline-none"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-xl"
              >
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-6"
                    >
                      <span className="text-2xl">{getIcon(feature.id)}</span>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      className="text-2xl font-bold mb-4"
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="text-muted-foreground"
                    >
                      {feature.description}
                    </motion.p>

                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      className="mt-6 space-y-2"
                    >
                      {feature.id === "reports" && (
                        <>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              In-depth trait analysis
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              Personalized recommendations
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              PDF export functionality
                            </span>
                          </li>
                        </>
                      )}

                      {feature.id === "dashboard" && (
                        <>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              Interactive trait visualizations
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              Comparative analysis tools
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              Personalized insights feed
                            </span>
                          </li>
                        </>
                      )}

                      {feature.id === "share" && (
                        <>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              One-click social sharing
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              Custom share privacy settings
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              Embeddable personality cards
                            </span>
                          </li>
                        </>
                      )}

                      {feature.id === "progress" && (
                        <>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              Track changes over time
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              Goal-setting functionality
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                            <span className="text-sm">
                              Development recommendations
                            </span>
                          </li>
                        </>
                      )}
                    </motion.ul>
                  </div>

                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20 p-8 flex items-center justify-center overflow-hidden">
                    <FeatureVisual id={feature.id} />
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

function FeatureVisual({ id }: { id: string }) {
  switch (id) {
    case "reports":
      return (
        <motion.div
          className="relative w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute top-4 right-4 w-64 h-64 glass-card rounded-lg shadow-lg z-10 p-4 border border-white/10"
            initial={{ x: 100, rotate: 10, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="h-4 w-full bg-primary/20 rounded mb-4"></div>
            <div className="h-3 w-full bg-muted rounded mb-2"></div>
            <div className="h-3 w-5/6 bg-muted rounded mb-2"></div>
            <div className="h-3 w-4/6 bg-muted rounded mb-6"></div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="h-12 w-full bg-primary/10 rounded-lg"></div>
              <div className="h-12 w-full bg-primary/10 rounded-lg"></div>
            </div>

            <div className="h-20 w-full bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg"></div>
          </motion.div>

          <motion.div
            className="glass-card rounded-lg shadow-lg p-4 w-64 h-72 border border-white/10"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="h-5 w-32 bg-primary/30 rounded mb-6"></div>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-cerebral-soft-purple/50"></div>
                <div className="flex-1">
                  <div className="h-3 w-3/4 bg-muted rounded"></div>
                  <div className="h-2 w-1/2 bg-muted/70 rounded mt-1"></div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-cerebral-soft-blue/50"></div>
                <div className="flex-1">
                  <div className="h-3 w-3/4 bg-muted rounded"></div>
                  <div className="h-2 w-1/2 bg-muted/70 rounded mt-1"></div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-cerebral-soft-orange/50"></div>
                <div className="flex-1">
                  <div className="h-3 w-3/4 bg-muted rounded"></div>
                  <div className="h-2 w-1/2 bg-muted/70 rounded mt-1"></div>
                </div>
              </div>
            </div>

            <div className="h-10 w-full bg-primary rounded-lg mt-6"></div>
          </motion.div>
        </motion.div>
      );

    case "dashboard":
      return (
        <motion.div
          className="relative w-full max-w-md aspect-square"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="glass-card w-full h-full rounded-lg shadow-lg p-6 flex flex-col border border-white/10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex justify-between mb-6 items-center">
              <div className="h-6 w-24 bg-primary/30 rounded"></div>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-muted"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-muted"></div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="w-full h-full rounded-xl overflow-hidden bg-white/5 p-5 border border-white/10">
                <div className="w-full h-full relative">
                  {/* Radar Chart */}
                  <svg width="100%" height="100%" viewBox="0 0 200 200">
                    {/* Background pentagon */}
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.2 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      d="M100,10 L180,70 L150,170 L50,170 L20,70 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1, delay: 0.4 }}
                      d="M100,40 L152,80 L132,145 L68,145 L48,80 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />

                    {/* Data pentagon */}
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, delay: 0.8 }}
                      d="M100,60 L140,90 L125,140 L75,140 L60,90 Z"
                      fill="rgba(124, 58, 237, 0.15)"
                      stroke="rgba(124, 58, 237, 0.6)"
                      strokeWidth="2"
                    />

                    {/* Dots at vertices */}
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1 }}
                      cx="100"
                      cy="60"
                      r="4"
                      fill="rgba(124, 58, 237, 1)"
                    />
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.1 }}
                      cx="140"
                      cy="90"
                      r="4"
                      fill="rgba(124, 58, 237, 1)"
                    />
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 }}
                      cx="125"
                      cy="140"
                      r="4"
                      fill="rgba(124, 58, 237, 1)"
                    />
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.3 }}
                      cx="75"
                      cy="140"
                      r="4"
                      fill="rgba(124, 58, 237, 1)"
                    />
                    <motion.circle
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 1.4 }}
                      cx="60"
                      cy="90"
                      r="4"
                      fill="rgba(124, 58, 237, 1)"
                    />

                    {/* Labels */}
                    <text
                      x="100"
                      y="20"
                      textAnchor="middle"
                      fill="currentColor"
                      fontSize="8"
                    >
                      Openness
                    </text>
                    <text
                      x="190"
                      y="75"
                      textAnchor="end"
                      fill="currentColor"
                      fontSize="8"
                    >
                      Conscientiousness
                    </text>
                    <text
                      x="155"
                      y="185"
                      textAnchor="middle"
                      fill="currentColor"
                      fontSize="8"
                    >
                      Extraversion
                    </text>
                    <text
                      x="45"
                      y="185"
                      textAnchor="middle"
                      fill="currentColor"
                      fontSize="8"
                    >
                      Agreeableness
                    </text>
                    <text
                      x="10"
                      y="75"
                      textAnchor="start"
                      fill="currentColor"
                      fontSize="8"
                    >
                      Neuroticism
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            <motion.div
              className="h-12 mt-4 grid grid-cols-3 gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <div className="bg-primary/10 rounded-lg"></div>
              <div className="bg-primary/10 rounded-lg"></div>
              <div className="bg-primary/10 rounded-lg"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      );

    case "share":
      return (
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-8">
            <motion.div
              className="glass-card rounded-full h-24 w-24 flex items-center justify-center text-4xl border border-white/10 shadow-lg"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Share2 className="h-10 w-10 text-primary" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-xl overflow-hidden glass-card border border-white/10 shadow-lg mb-8"
          >
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="h-4 w-24 bg-muted rounded"></div>
              <div className="flex gap-2">
                <div className="h-6 w-6 rounded-full bg-muted/50"></div>
                <div className="h-6 w-6 rounded-full bg-muted/50"></div>
              </div>
            </div>

            <div className="p-6 flex gap-4">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🧠</span>
              </div>

              <div className="flex-1">
                <div className="h-4 w-3/4 bg-muted rounded mb-2"></div>
                <div className="h-3 w-1/2 bg-muted/70 rounded mb-4"></div>

                <div className="grid grid-cols-4 gap-2 mb-3">
                  <div className="h-6 bg-cerebral-soft-purple/50 rounded"></div>
                  <div className="h-6 bg-cerebral-soft-blue/50 rounded"></div>
                  <div className="h-6 bg-cerebral-soft-orange/50 rounded"></div>
                  <div className="h-6 bg-cerebral-soft-green/50 rounded"></div>
                </div>

                <div className="h-3 w-full bg-muted/50 rounded"></div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mb-6">
            {[
              { icon: "👥", label: "Friends" },
              { icon: "🔗", label: "Link" },
              { icon: "✉️", label: "Email" },
              { icon: "📱", label: "SMS" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl py-3 px-4 flex flex-col items-center border border-white/10 shadow-md"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 * (index + 1) }}
              >
                <div className="text-xl mb-1">{item.icon}</div>
                <div className="text-xs">{item.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-4 glass-card rounded-lg p-4 flex items-center justify-between border border-white/10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="h-4 w-48 bg-muted/50 rounded"></div>
            <div className="h-8 w-20 bg-primary rounded"></div>
          </motion.div>
        </motion.div>
      );

    case "progress":
      return (
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6 mb-8">
            {[85, 65, 40, 75].map((value, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="w-24 text-sm font-medium">
                  {["Openness", "Creativity", "Empathy", "Logic"][index]}
                </div>
                <div className="flex-1 h-6 glass-card rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary/70 to-primary"
                    style={{ width: "0%" }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  ></motion.div>
                </div>
                <div className="w-8 text-sm font-medium">{value}%</div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="text-sm font-medium text-muted-foreground mb-2">
              Progress Over Time
            </div>

            <motion.div
              className="glass-card rounded-xl p-4 border border-white/10 h-48"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 300 120"
                preserveAspectRatio="none"
              >
                {/* Grid lines */}
                <line
                  x1="0"
                  y1="0"
                  x2="300"
                  y2="0"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <line
                  x1="0"
                  y1="30"
                  x2="300"
                  y2="30"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <line
                  x1="0"
                  y1="60"
                  x2="300"
                  y2="60"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <line
                  x1="0"
                  y1="90"
                  x2="300"
                  y2="90"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <line
                  x1="0"
                  y1="120"
                  x2="300"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />

                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <line
                  x1="60"
                  y1="0"
                  x2="60"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <line
                  x1="120"
                  y1="0"
                  x2="120"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <line
                  x1="180"
                  y1="0"
                  x2="180"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <line
                  x1="240"
                  y1="0"
                  x2="240"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />
                <line
                  x1="300"
                  y1="0"
                  x2="300"
                  y2="120"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeOpacity="0.1"
                />

                {/* Line charts */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1 }}
                  d="M0,100 L60,90 L120,70 L180,40 L240,30 L300,20"
                  fill="none"
                  stroke="rgba(124, 58, 237, 0.8)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.2 }}
                  d="M0,80 L60,90 L120,85 L180,60 L240,50 L300,55"
                  fill="none"
                  stroke="rgba(124, 58, 237, 0.4)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Data points */}
                {[
                  { x: 0, y: 100 },
                  { x: 60, y: 90 },
                  { x: 120, y: 70 },
                  { x: 180, y: 40 },
                  { x: 240, y: 30 },
                  { x: 300, y: 20 },
                  { x: 0, y: 80 },
                  { x: 60, y: 90 },
                  { x: 120, y: 85 },
                  { x: 180, y: 60 },
                  { x: 240, y: 50 },
                  { x: 300, y: 55 },
                ].map((point, index) => (
                  <motion.circle
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.4 + index * 0.05 }}
                    cx={point.x}
                    cy={point.y}
                    r="3"
                    fill={
                      index < 6
                        ? "rgba(124, 58, 237, 0.8)"
                        : "rgba(124, 58, 237, 0.4)"
                    }
                  />
                ))}
              </svg>
            </motion.div>

            <motion.div
              className="flex justify-between text-xs text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <div>Jan</div>
              <div>Feb</div>
              <div>Mar</div>
              <div>Apr</div>
              <div>May</div>
              <div>Jun</div>
            </motion.div>
          </div>
        </motion.div>
      );

    default:
      return null;
  }
}
