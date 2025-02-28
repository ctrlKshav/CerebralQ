"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "sonner"

interface SocialEngagementBarProps {
  userData: {
    username: string
  }
}

export default function SocialEngagementBar({ userData }: SocialEngagementBarProps) {

  const handleShare = () => {
    // Copy profile URL to clipboard
    navigator.clipboard.writeText(`https://cq.com/${userData.username}`)
    toast.success("Profile link copied to clipboard")
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t z-10"
    >
      <div className="container max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">{userData.username}</span>'s profile
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1.5" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>

        </div>
      </div>
    </motion.div>
  )
}

