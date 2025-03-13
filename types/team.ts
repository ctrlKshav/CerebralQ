export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socialLinks?: SocialLinks;
}