import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SectionHeader } from "../../SectionHeader";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

interface TestInfoProps {
  urlID: string;
  icon: ReactNode;
  label: string;
  title: string;
  description: string;
  whatIsTitle: string;
  whatIsContent: ReactNode;
  benefitsTitle: string;
  benefitsContent: ReactNode;
  illustration: ReactNode;
  ctaText?: string;
}

export function TestInfo({
  urlID,
  icon,
  label,
  title,
  description,
  whatIsTitle,
  whatIsContent,
  benefitsTitle,
  benefitsContent,
  illustration,
  ctaText = "Take Assessment",
}: TestInfoProps) {
  return (
    <section
      className={`relative ${urlID === "mbti" ? "pt-0" : "pt-20"} pb-20 px-6 overflow-hidden sm:container`}
    >
      <SectionHeader
        icon={icon}
        label={label}
        title={title}
        description={description}
      />

      {/* Mobile layout (flex column) */}
      <div className="lg:hidden flex flex-col gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">{whatIsTitle}</h3>
                {whatIsContent}
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-3">{benefitsTitle}</h3>
                {benefitsContent}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex justify-center"
        >
          {illustration}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <Button size="lg" asChild>
            <Link href={`/tests/${urlID}`}>{ctaText}</Link>
          </Button>
        </motion.div>
      </div>

      {/* Desktop layout (grid) */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side: Text content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">{whatIsTitle}</h3>
                {whatIsContent}
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-3">{benefitsTitle}</h3>
                {benefitsContent}
              </div>

              <div className="pt-4 text-center lg:text-left ">
                <Button size="lg" asChild>
                  <Link href={`/tests/${urlID}`}>{ctaText}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right side: Illustration */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex justify-center"
        >
          {illustration}
        </motion.div>
      </div>
    </section>
  );
}
