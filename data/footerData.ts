import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const socialLinks = [
  { icon: Facebook, label: "Facebook", link: "/" },
  { icon: Twitter, label: "Twitter", link: "/" },
  { icon: Linkedin, label: "LinkedIn", link: "/" },
  { icon: Instagram, label: "Instagram", link: "/" },
] as const;

export const productLinks = [
  {
    name: "Zeon",
    href: "https://gozeon.com/",
  },
  {
    name: "Resume AI Pro",
    href: "https://resume-site-c4e.vercel.app/",
  },
  {
    name: "Curattor",
    href: "https://zeon-8qz.pages.dev"
  },
  {
    name: "All Products",
    href: "/products",
  },
] as const;

export const companyLinks = [
  {
    name: "About Us",
    href: "#about-us",
  },
  {
    name: "Blog",
    href: "https://c4e.in/",
  },
  {
    name: "Community",
    href: "/coming-soon",
  },
  {
    name: "Contact",
    href: "/contact",
  },
] as const;
