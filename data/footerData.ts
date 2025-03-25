import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/cerebralquotient",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/cerebral-quotient/",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://x.com/cqtests",
    label: "Twitter",
  },
] as const;

export const testLinks = [
  {
    name: "MBTI Assessment",
    href: "/",
  },
] as const;

export const companyLinks = [
  {
    name: "Blog",
    href: "/blog",
  },

  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Newsletter",
    href: "/sign-up?source=newsletter",
  },
  {
    name: "Team",
    href: "/#team"
  }
] as const;
