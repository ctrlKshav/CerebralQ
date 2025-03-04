"use client";
import { createClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import { RETURN_URL_KEY } from "@/constants/constants";

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

  const link = `${window.location.origin}/${url}`;

  // For authenticated users, use Web Share API if available
  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url: link,
      });
      toast.success("Shared successfully!", {
        description: "Your profile has been shared.",
      });
    } catch (error) {
      // User cancelled or share failed
      console.error("Error sharing:", error);

      // Fallback to copying to clipboard
      copyToClipboard(link);
    }
  } else {
    // Fallback for browsers without Web Share API
    copyToClipboard(link);
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
