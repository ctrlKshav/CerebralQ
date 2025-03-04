"use client"

import { Calendar, Share2 } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"

interface ProfileHeaderProps {
  userData: {
    username: string
    profile_image_url: string
    bio: string
    tests_taken: number
    last_test_date: string
  }
  isAuthenticated?: boolean
}

export default function ProfileHeader({ userData, isAuthenticated }: ProfileHeaderProps) {
  
  const handleShare = () => {
    // Copy profile URL to clipboard
    navigator.clipboard.writeText(`https://cq.com/${userData.username}`)
    toast.success("Profile link copied to clipboard")
  }

  return (
    <section className="relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background rounded-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-center gap-10 p-8 rounded-3xl"
      >
        {/* Avatar with gradient border */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary/40 rounded-full blur-sm" />
          <div className="relative h-40 w-40 md:h-48 md:w-48 rounded-full overflow-hidden border-4 border-background">
            <Image
              src={userData.profile_image_url || "/placeholder.svg?height=192&width=192"}
              alt={`${userData.username}'s profile`}
              width={192}
              height={192}
              priority
            />
          </div>
        </div>

        {/* Profile info */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          {/* Username and verified badge */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h1 className="text-4xl md:text-5xl font-bold">{userData.username}</h1>
          </div>

          {/* Bio with fade effect */}
          <p className="text-lg text-muted-foreground italic max-w-3xl relative overflow-hidden">
            {userData.bio}
            <span className="absolute bottom-0 right-0 bg-gradient-to-l from-background to-transparent w-12 h-full" />
          </p>

          {/* Stats ribbon */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-500" />
              <span className="text-base font-medium">
                Last test: {new Date(userData.last_test_date).toLocaleDateString()}
              </span>
            </div>
            {isAuthenticated && (
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2" 
                onClick={handleShare}
              >
                <Share2 className="h-5 w-5 text-green-500" />
                <span className="font-medium">Share Profile</span>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

