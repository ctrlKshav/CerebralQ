import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function smoothScrollToTop(delay: number = 400) {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, delay);
}

/**
 * Parse search params to extract auth message type and content
 * Handles format like ?error=message or ?success=message
 */
export function parseAuthMessage(searchParams: URLSearchParams) {
  // Check for error message
  const errorMessage = searchParams.get('error');
  if (errorMessage) {
    return {
      type: 'error',
      message: decodeURIComponent(errorMessage)
    };
  }
  
  // Check for success message
  const successMessage = searchParams.get('success');
  if (successMessage) {
    return {
      type: 'success',
      message: decodeURIComponent(successMessage)
    };
  }
  
  // Check for info message
  const infoMessage = searchParams.get('info');
  if (infoMessage) {
    return {
      type: 'info',
      message: decodeURIComponent(infoMessage)
    };
  }
  
  return null;
}
