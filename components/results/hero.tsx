"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, Download } from "lucide-react";
import { motion } from "framer-motion";
import { PersonalityDescription } from "@/types/tests/mbti";
import { handleShare } from "@/lib/shareUtils";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/lib/supabaseOperations";
import { useRouter } from "next/navigation";

interface HeroProps {
  personalityType: string;
  personalityAlias: string;
  personalityDescription: PersonalityDescription;
  completionDate: string;
  userId: string | null;
}

export function Hero({
  personalityType,
  personalityAlias,
  personalityDescription,
  completionDate,
  userId,
}: HeroProps) {
  const [username, setUsername] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);
  const isDemoUser = !userId;
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const user = await getCurrentUser();
        if (user?.username) {
          setUsername(user.username);
        }
      }
    };

    fetchUser();
  }, [userId]);

  const shareResults = async () => {
    try {
      setIsSharing(true);
      
      // Handle sharing without saving to database (now handled in Results component)
      const title = `My Personality Type: ${personalityType}`;
      const text = `I'm a ${personalityAlias}! Check out my personality profile on CerebralQ.`;
      
      // Determine share URL based on user status
      const url = isDemoUser ? 
        `tests/mbti/results` : 
        `profiles/${username}`;
      
      // Use the existing share function
      await handleShare(title, text, url, isDemoUser);
      
      // Redirect demo users to sign up
      if (isDemoUser) {
        router.push(
          "/sign-up?info=" +
            encodeURIComponent("You need an account to share your profile.")
        );
      }
    } catch (error) {
      console.error("Error sharing results:", error);
    } finally {
      setIsSharing(false);
    }
  };

  const downloadReport = () => {
    window.print();
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <Badge variant="outline" className="px-3 py-1 text-sm">
        Your Personality Type
      </Badge>
      <div className="space-y-2">
        <h1 className="text-6xl font-bold tracking-tighter">
          {personalityType}
        </h1>
        <h2 className="text-2xl font-medium text-primary">
          {personalityAlias}
        </h2>
      </div>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {personalityDescription.description}
      </p>
      <div className="text-sm text-muted-foreground">
        <p>Completed on {completionDate}</p>
      </div>
      <div className="flex justify-center gap-3 pt-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={shareResults}
          disabled={isSharing}
        >
          <Share2 className="w-4 h-4 mr-2" />
          {isSharing ? "Processing..." : isDemoUser ? "Save & Share" : "Share Results"}
        </Button>
        <Button variant="outline" size="sm" onClick={downloadReport}>
          <Download className="w-4 h-4 mr-2" />
          Download Report
        </Button>
      </div>
    </motion.section>
  );
}
