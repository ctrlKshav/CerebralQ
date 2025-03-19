"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit2, User, Upload, Loader2 } from "lucide-react";
import { updateUserProfile } from "@/lib/supabaseOperations";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AvatarEditorProps {
  profileImage?: string | null;
  username?: string | null;
  userId?: string;
}

export function AvatarEditor({
  profileImage,
  username,
  userId,
}: AvatarEditorProps) {
  const [isAvatarDialogOpen, setIsAvatarDialogOpen] = useState(false);
  const [editedAvatarUrl, setEditedAvatarUrl] = useState(profileImage || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Predefined avatar options
  const avatarOptions = [
    "/profile-avatars/avatar1.svg",
    "/profile-avatars/avatar2.svg",
    "/profile-avatars/avatar3.svg",
    "/profile-avatars/avatar4.svg",
  ];

  const handleSaveAvatar = async () => {
    if (!userId) {
      toast.error("Unable to update profile. User ID not available.");
      return;
    }

    try {
      setIsSubmitting(true);

      // Handle file upload
      if (avatarFile) {
        const formData = new FormData();
        formData.append("avatar", avatarFile);

        const response = await fetch("/protected/account/api", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to upload image");
        }

        const data = await response.json();
        setEditedAvatarUrl(data.url);
        setIsAvatarDialogOpen(false);
        toast.success("Your profile image has been updated successfully.");
      } else if (editedAvatarUrl !== profileImage) {
        // If using a pre-defined avatar URL
        await updateUserProfile(userId, { profile_image_url: editedAvatarUrl });
        setIsAvatarDialogOpen(false);
        toast.success("Your profile image has been updated successfully.");
      } else {
        setIsAvatarDialogOpen(false);
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to update profile image. Please try again."
      );
    } finally {
      setIsSubmitting(false);
      setUploadProgress(0);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      // For preview only - no actual upload
      setEditedAvatarUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setAvatarFile(file);
      // For preview only - no actual upload
      setEditedAvatarUrl(URL.createObjectURL(file));
    }
  };

  const selectAvatar = (avatarUrl: string) => {
    setEditedAvatarUrl(avatarUrl);
    setAvatarFile(null);
  };

  return (
    <div className="relative self-center md:self-auto">
      <Avatar className="h-24 w-24 md:h-32 md:w-32 ring-3 md:ring-4 ring-primary/50 ring-offset-2 md:ring-offset-4 ring-offset-background shadow-md">
        <AvatarImage src={profileImage || ""} alt={username || "Avatar"} />
        <AvatarFallback>
          <User className="h-12 w-12 md:h-16 md:w-16" />
        </AvatarFallback>
      </Avatar>

      <Dialog open={isAvatarDialogOpen} onOpenChange={setIsAvatarDialogOpen}>
        <DialogTrigger asChild>
          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-0 right-0 rounded-full bg-background border border-border shadow-sm opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity h-6 w-6 md:h-10 md:w-10"
            onClick={() => setIsAvatarDialogOpen(true)}
            aria-label="Edit profile picture"
          >
            <Edit2 className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profile Picture</DialogTitle>
            <DialogDescription>
              Customize your profile by uploading a new photo or selecting from
              our gallery of avatars. Your profile picture will be visible to
              other users on the platform.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <Tabs defaultValue="upload" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="upload" aria-label="Upload image tab">
                  Upload Image
                </TabsTrigger>
                <TabsTrigger value="gallery" aria-label="Choose avatar tab">
                  Choose Avatar
                </TabsTrigger>
              </TabsList>

              <TabsContent value="upload" className="space-y-4">
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${isDragging ? "border-primary bg-primary/5" : "border-border"}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  aria-label="Image upload area"
                  role="region"
                >
                  {editedAvatarUrl && avatarFile ? (
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="h-24 w-24 ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
                        <AvatarImage
                          src={URL.createObjectURL(avatarFile)}
                          alt="Preview of selected profile picture"
                        />
                        <AvatarFallback>
                          <User className="h-12 w-12" />
                        </AvatarFallback>
                      </Avatar>
                      <p className="text-sm text-muted-foreground">
                        {avatarFile.name}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setAvatarFile(null);
                          setEditedAvatarUrl(profileImage || "");
                        }}
                        aria-label="Remove selected image"
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col items-center gap-3">
                        <Upload
                          className="h-10 w-10 text-muted-foreground mb-2"
                          aria-hidden="true"
                        />
                        <p className="font-medium">
                          Drag and drop your image here
                        </p>
                        <p className="text-sm text-muted-foreground mb-2">or</p>
                        <label
                          htmlFor="avatar-upload"
                          className="cursor-pointer"
                        >
                          <div className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors">
                            Select from computer
                          </div>
                          <input
                            id="avatar-upload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileChange}
                            aria-label="Upload profile picture"
                          />
                        </label>
                        <p className="text-xs text-muted-foreground mt-2">
                          Supported formats: JPEG, PNG, GIF (max 5MB)
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="gallery">
                <p className="text-sm text-muted-foreground mb-3">
                  Select one of our predefined avatars for your profile picture:
                </p>
                <div
                  className="grid grid-cols-3 sm:grid-cols-4 gap-3"
                  role="listbox"
                  aria-label="Available avatar options"
                >
                  {avatarOptions.map((avatar, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-lg p-2 transition-all hover:bg-accent ${editedAvatarUrl === avatar ? "ring-2 ring-primary bg-accent" : ""}`}
                      onClick={() => selectAvatar(avatar)}
                      role="option"
                      aria-selected={editedAvatarUrl === avatar}
                      aria-label={`Avatar option ${index + 1}`}
                    >
                      <Avatar className="h-16 w-16 mx-auto">
                        <AvatarImage
                          src={avatar}
                          alt={`Avatar option ${index + 1}`}
                        />
                        <AvatarFallback>
                          <User className="h-8 w-8" />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              onClick={() => setIsAvatarDialogOpen(false)}
              disabled={isSubmitting}
              aria-label="Cancel avatar changes"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSaveAvatar}
              disabled={
                isSubmitting ||
                (!avatarFile && editedAvatarUrl === profileImage)
              }
              aria-label="Save profile picture changes"
            >
              {isSubmitting ? (
                <>
                  <Loader2
                    className="mr-2 h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                  <span aria-live="polite">Uploading...</span>
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
