"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit2, X, Check } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { updateUserProfile } from "@/lib/supabase-operations";
import { toast } from "sonner";
import { MAX_CHARACTER_LIMIT_BIO } from "@/lib/constants";

interface BioEditorProps {
  bio?: string | null;
  userId?: string;
}

export function BioEditor({ bio, userId }: BioEditorProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedBio, setEditedBio] = useState(bio || "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEdit = () => {
    setEditedBio(bio || "");
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = async () => {
    if (!userId) {
      toast.error("Unable to update profile. User ID not available.");
      return;
    }

    // Prevent saving if over character limit
    if (editedBio.length > MAX_CHARACTER_LIMIT_BIO) {
      toast.error(`Bio cannot exceed ${MAX_CHARACTER_LIMIT_BIO} characters.`);
      return;
    }

    try {
      setIsSubmitting(true);
      await updateUserProfile(userId, { bio: editedBio });
      setIsEditing(false);
      toast.success("Your bio has been updated successfully.");
    } catch (error) {
      toast.error("Failed to update bio. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate remaining characters
  const remainingChars = MAX_CHARACTER_LIMIT_BIO - editedBio.length;
  const isNearLimit = remainingChars <= 50;
  const isOverLimit = remainingChars < 0;

  return (
    <div className="relative mt-3 md:mt-4">
      {isEditing ? (
        <div className="bg-background/50 rounded-lg p-3 md:p-4 border border-border shadow-sm">
          <Textarea 
            value={editedBio} 
            onChange={(e) => setEditedBio(e.target.value)}
            placeholder="Write something about yourself..."
            className={`min-h-[100px] text-sm md:text-base w-full resize-none ${
              isOverLimit ? 'border-red-500 focus-visible:ring-red-500' : ''
            }`}
            aria-label="Edit your bio"
            maxLength={MAX_CHARACTER_LIMIT_BIO + 10}
          />
          
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-3">
            <div className={`text-xs self-start ${
              isOverLimit 
                ? 'text-red-500 font-medium' 
                : isNearLimit 
                  ? 'text-amber-500' 
                  : 'text-muted-foreground'
            }`}>
              {remainingChars === MAX_CHARACTER_LIMIT_BIO ? (
                <span>Maximum {MAX_CHARACTER_LIMIT_BIO} characters</span>
              ) : (
                <span>{Math.abs(remainingChars)} {remainingChars >= 0 ? 'characters remaining' : 'characters over limit'}</span>
              )}
            </div>
            <div className="flex gap-2 self-end sm:self-auto">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCancel}
                disabled={isSubmitting}
                aria-label="Cancel bio edit"
              >
                <X className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
                Cancel
              </Button>
              <Button 
                variant="default"
                size="sm" 
                onClick={handleSave}
                disabled={isSubmitting || isOverLimit}
                aria-label="Save bio changes"
              >
                <Check className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
                Save
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-background/50 rounded-lg p-3 md:p-4 border border-border/50 group relative">
          <p className="text-muted-foreground text-sm md:text-base pr-8">
            {bio || "No bio provided. Add a short description about yourself."}
          </p>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleEdit}
            aria-label="Edit your bio"
          >
            <Edit2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          </Button>
        </div>
      )}
    </div>
  );
}
