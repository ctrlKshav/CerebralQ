"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit2, User, X, Check, Upload, Image as ImageIcon } from "lucide-react";
import { UserBadges } from "../account/UserBadges";
import { updateUserProfile } from "@/lib/supabaseOperations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UserHeaderProps {
  username?: string | null;
  profileImage?: string | null;
  bio?: string | null;
  rank?: string | null;
  isInsider?: boolean | null;
  userId?: string;
}

export function UserHeader({ username, profileImage, bio, rank, isInsider, userId }: UserHeaderProps) {
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [isAvatarDialogOpen, setIsAvatarDialogOpen] = useState(false);
  const [editedBio, setEditedBio] = useState(bio || "");
  const [editedAvatarUrl, setEditedAvatarUrl] = useState(profileImage || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Predefined avatar options
  const avatarOptions = [
    "/avatars/avatar1.png",
    "/avatars/avatar2.png",
    "/avatars/avatar3.png",
    "/avatars/avatar4.png",
    "/avatars/avatar5.png",
    "/avatars/avatar6.png",
    "/avatars/avatar7.png",
    "/avatars/avatar8.png",
  ];

  const handleEditBio = () => {
    setEditedBio(bio || "");
    setIsEditingBio(true);
  };

  const handleCancelBioEdit = () => {
    setIsEditingBio(false);
  };

  const handleSaveBio = async () => {
    if (!userId) {
      toast.error("Unable to update profile. User ID not available.");
      return;
    }

    try {
      setIsSubmitting(true);
      await updateUserProfile(userId, { bio: editedBio });
      setIsEditingBio(false);
      toast.success("Your bio has been updated successfully.");
    } catch (error) {
      toast.error("Failed to update bio. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSaveAvatar = async () => {
    if (!userId) {
      toast.error("Unable to update profile. User ID not available.");
      return;
    }

    try {
      setIsSubmitting(true);
      await updateUserProfile(userId, { profile_image_url: editedAvatarUrl });
      setIsAvatarDialogOpen(false);
      toast.success("Your profile image has been updated successfully.");
    } catch (error) {
      toast.error("Failed to update profile image. Please try again.");
    } finally {
      setIsSubmitting(false);
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
    <div className="bg-card/80 dark:bg-card/30 group rounded-xl p-4 md:p-8 backdrop-blur-sm border border-border shadow-md transition-all hover:shadow-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
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
              >
                <Edit2 className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md ">
              <DialogHeader>
                <DialogTitle>Edit Profile Picture</DialogTitle>
              </DialogHeader>
              
              <div className="mt-4">
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="upload">Upload Image</TabsTrigger>
                    <TabsTrigger value="gallery">Choose Avatar</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upload" className="space-y-4">
                    <div 
                      className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${isDragging ? 'border-primary bg-primary/5' : 'border-border'}`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      {editedAvatarUrl && avatarFile ? (
                        <div className="flex flex-col items-center gap-4">
                          <Avatar className="h-24 w-24 ring-2 ring-primary/50 ring-offset-2 ring-offset-background">
                            <AvatarImage src={editedAvatarUrl} alt="Preview" />
                            <AvatarFallback>
                              <User className="h-12 w-12" />
                            </AvatarFallback>
                          </Avatar>
                          <p className="text-sm text-muted-foreground">{avatarFile.name}</p>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => {
                              setAvatarFile(null);
                              setEditedAvatarUrl(profileImage || "");
                            }}
                          >
                            Remove
                          </Button>
                        </div>
                      ) : (
                        <>
                          <div className="flex flex-col items-center gap-3">
                            <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                            <p className="font-medium">Drag and drop your image here</p>
                            <p className="text-sm text-muted-foreground mb-2">or</p>
                            <label htmlFor="avatar-upload" className="cursor-pointer">
                              <div className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-colors">
                                Select from computer
                              </div>
                              <input 
                                id="avatar-upload" 
                                type="file" 
                                accept="image/*"
                                className="hidden" 
                                onChange={handleFileChange}
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
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {avatarOptions.map((avatar, index) => (
                        <div 
                          key={index} 
                          className={`cursor-pointer rounded-lg p-2 transition-all hover:bg-accent ${editedAvatarUrl === avatar ? 'ring-2 ring-primary bg-accent' : ''}`}
                          onClick={() => selectAvatar(avatar)}
                        >
                          <Avatar className="h-16 w-16 mx-auto">
                            <AvatarImage src={avatar} alt={`Avatar option ${index + 1}`} />
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
                >
                  Cancel
                </Button>
                <Button 
                  onClick={handleSaveAvatar}
                  disabled={isSubmitting || (!avatarFile && editedAvatarUrl === profileImage)}
                >
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="flex-1 space-y-3 md:space-y-4 w-full text-center md:text-left">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
            <div className="flex flex-col justify-center w-full">
              <h1 className="text-xl md:text-3xl font-bold text-foreground mb-4 ">{username || "Username"}</h1>
              <UserBadges rank={rank} isInsider={isInsider} />
            </div>
          </div>
          
          <div className="relative mt-3 md:mt-4 bg-background/50 rounded-lg p-2 md:p-3 border border-border/50">
            {isEditingBio ? (
              <div className=" md:pr-8">
                <Textarea 
                  value={editedBio} 
                  onChange={(e) => setEditedBio(e.target.value)}
                  placeholder="Write something about yourself..."
                  className="min-h-[80px] text-sm md:text-base"
                />
                <div className="flex justify-end gap-1 mt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={handleCancelBioEdit}
                    disabled={isSubmitting}
                  >
                    <X className="h-3.5 w-3.5 mr-1" />
                    Cancel
                  </Button>
                  <Button 
                    variant="default"
                    size="sm" 
                    onClick={handleSaveBio}
                    disabled={isSubmitting}
                  >
                    <Check className="h-3.5 w-3.5 mr-1" />
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
                  className="absolute top-1 md:top-2 right-1 md:right-2 h-5 w-5 md:h-8 md:w-8 rounded-full opacity-70 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                  onClick={handleEditBio}
                >
                  <Edit2 className="h-3 w-3 md:h-3.5 md:w-3.5 text-primary" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}