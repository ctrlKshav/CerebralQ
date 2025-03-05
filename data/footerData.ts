import { Twitter, Mail } from "lucide-react";

export const socialLinks = [
  {
    icon: Twitter,
    href: "/",
    label: "Twitter"
  },
  {
    icon: Mail,
    href: "/",
    label: "Email"
  }
] as const;

export const testLinks = [
  {
    name: "MBTI Assessment",
    href: "/tests/mbti"
  },
  {
    name: "Big Five Personality",
    href: "/tests/ocean"
  },
  {
    name: "IQ Test",
    href: "/tests/iq"
  },
  {
    name: "Career Aptitude",
    href: "/tests/career-aptitude"
  }
] as const;

export const companyLinks = [
  {
    name: "About Us",
    href: "/about"
  },
  {
    name: "Blog",
    href: "/blog"
  },
  {
    name: "Careers",
    href: "/careers"
  },
  {
    name: "Contact",
    href: "/contact"
  }
] as const;

