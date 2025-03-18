"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit2, X, Check } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { updateUserProfile } from "@/lib/supabaseOperations";
import { toast } from "sonner";

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

  return (
    <div className="relative mt-3 md:mt-4 bg-background/50 rounded-lg p-2 md:p-3 border border-border/50">
      {isEditing ? (
        <div className="md:pr-8">
          <Textarea 
            value={editedBio} 
            onChange={(e) => setEditedBio(e.target.value)}
            placeholder="Write something about yourself..."
            className="min-h-[80px] text-sm md:text-base"
            aria-label="Edit your bio"
          />
          <div className="flex justify-end gap-1 mt-2">
            <Button 
              variant="ghost" 
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
              disabled={isSubmitting}
              aria-label="Save bio changes"
            >
              <Check className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
              Save
            </Button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl pr-6 md:pr-8">
            {bio || "No bio provided. Add a short description about yourself."}
          </p>
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-1 md:top-2 right-1 md:right-2 h-5 w-5 md:h-8 md:w-8 rounded-full opacity-70 md:opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleEdit}
            aria-label="Edit your bio"
          >
            <Edit2 className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" aria-hidden="true" />
          </Button>
        </>
      )}
    </div>
  );
}
