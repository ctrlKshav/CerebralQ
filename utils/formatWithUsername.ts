/**
 * Formats a text string, including the username if it exists
 * @param text The text template with {username} placeholder
 * @param username The username to include, or undefined/null
 * @returns Formatted text with username inserted if available
 */
export const formatWithUsername = (text: string, username?: string | null): string => {
  if (!username) {
    // Replace ", {username}" or "{username}, " with empty string
    return text.replace(/, \{username\}/g, '').replace(/\{username\}, /g, '');
  }
  
  // Replace {username} with the actual username
  return text.replace(/\{username\}/g, username);
};
