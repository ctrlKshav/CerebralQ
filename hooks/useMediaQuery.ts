import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  // Default to false for SSR
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create the media query list
    const media = window.matchMedia(query);
    
    // Set the initial match state
    setMatches(media.matches);
    
    // Define a listener for changes
    const listener = () => {
      setMatches(media.matches);
    };
    
    // Add the listener
    media.addEventListener('change', listener);
    
    // Clean up
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}
