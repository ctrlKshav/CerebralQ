"use client";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";

// Key for storing the return URL after signup
const RETURN_URL_KEY = "cerebralq_return_url";

/**
 * Handles sharing functionality with authentication check
 * Redirects unauthenticated users to signup, authenticated users can share their profile
 */
export async function handleShare(
  title: string,
  text: string,
  url: string,
  isDemoUser: boolean
) {
  if (isDemoUser) {

    // Store the current results page URL to redirect back after signup
    localStorage.setItem(RETURN_URL_KEY, url);
    return ;
    
  }

  // For authenticated users, use Web Share API if available
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
      toast.success("Shared successfully!", {
        description: "Your profile has been shared.",
      });
    } catch (error) {
      // User cancelled or share failed
      console.error("Error sharing:", error);

      // Fallback to copying to clipboard
      copyToClipboard(url);
    }
  } else {
    // Fallback for browsers without Web Share API
    copyToClipboard(url);
  }
}

/**
 * Fallback function to copy URL to clipboard
 */
function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      toast.success("Link copied!", {
        description: "Profile link copied to clipboard.",
      });
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      toast.error("Couldn't copy link", {
        description: "Please try again or copy the URL manually.",
      });
    });
}

/**
 * Retrieve the return URL after signup completion
 */
export function getReturnUrl(): string | null {
  const returnUrl = localStorage.getItem(RETURN_URL_KEY);
  // Clear it after retrieving
  if (returnUrl) {
    localStorage.removeItem(RETURN_URL_KEY);
  }
  return returnUrl;
}
