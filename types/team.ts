export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: SocialLinks;
}