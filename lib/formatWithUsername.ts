/**
 * Formats a text string, including the username if it exists
 * @param text The text template with {username} placeholder
 * @param username The username to include, or undefined/null
 * @returns Formatted text with username inserted if available
 */
export const formatWithUsername = (text: string, firstname?: string | null): string => {
  if (!firstname) {
    // Replace ", {firstname}" or "{firstname}, " with empty string
    return text.replace(/, \{firstname\}/g, '').replace(/\{firstname\}, /g, '');
  }
  
  // Replace {firstname} with the actual firstname
  return text.replace(/\{firstname\}/g, firstname);
};
