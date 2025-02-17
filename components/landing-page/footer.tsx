import React from "react";
import { Brain, Twitter, Github, Mail, Copyright } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/cerebralquotient",
      label: "Twitter"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/cerebralquotient",
      label: "GitHub"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:contact@cerebralquotient.com",
      label: "Email"
    }
  ];

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Brain className="h-6 w-6 text-primary" />
              <span className="font-semibold text-lg">Cerebral Quotient</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Discover yourself through scientifically validated personality
              tests and assessments.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Tests Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Tests</h3>
            <ul className="space-y-3">
              {["MBTI Assessment", "Big Five Personality", "IQ Test", "Career Aptitude"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />
        
        <div className="text-sm text-muted-foreground text-center">
          <p>&copy; {new Date().getFullYear()} Cerebral Quotient. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}