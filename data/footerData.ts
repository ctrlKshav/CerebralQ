import { Instagram, Mail } from "lucide-react";

export const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/cerebralquotient",
    label: "Instagram"
  },
] as const;

export const testLinks = [
  {
    name: "MBTI Assessment",
    href: "/tests/mbti"
  },
  
] as const;

export const companyLinks = [

  {
    name: "Blog",
    href: "https://wp.cerebralquotient.com/"
  },
  
  {
    name: "Contact",
    href: "/contact"
  },
  {
    name: "Newsletter",
    href: "/sign-up?source=newsletter"
  }

] as const;

