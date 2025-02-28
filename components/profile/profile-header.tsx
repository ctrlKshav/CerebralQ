"use client"

import { Calendar, Star, Share2 } from "lucide-react"
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
}

export default function ProfileHeader({ userData }: ProfileHeaderProps) {
  
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
        className="flex flex-col md:flex-row items-center gap-8 p-6 rounded-3xl"
      >
        {/* Avatar with gradient border */}
        <div className="relative flex-shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-br from-primary to-primary/40 rounded-full blur-sm" />
          <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-background">
            <Image
              src={userData.profile_image_url || "/placeholder.svg?height=128&width=128"}
              alt={`${userData.username}'s profile`}
              width={128}
              height={128}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Profile info */}
        <div className="flex-1 space-y-4 text-center md:text-left">
          {/* Username and verified badge */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <h1 className="text-3xl font-bold">{userData.username}</h1>
          </div>

          {/* Bio with fade effect */}
          <p className="text-muted-foreground italic max-w-2xl relative overflow-hidden">
            {userData.bio}
            <span className="absolute bottom-0 right-0 bg-gradient-to-l from-background to-transparent w-12 h-full" />
          </p>

          {/* Stats ribbon */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium">{userData.tests_taken} Tests</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium">
                Last: {new Date(userData.last_test_date).toLocaleDateString()}
              </span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1.5" 
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Share Profile</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

