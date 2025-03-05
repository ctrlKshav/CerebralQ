"use client"
import React from "react";
import { Brain } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CQLogo from "@/components/cq-logo";
import { socialLinks, testLinks, companyLinks } from "@/data/footerData";
import { usePathname } from "next/navigation";


const restrictedPaths = ["start-test",
  "/sign-in",
  "/sign-up",
  "/forgot-password",
  "/reset-password",
];

export default function Footer() {
  const pathName = usePathname();
  if(restrictedPaths.includes(pathName))
    return null
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <CQLogo className="h-16 w-16" />
            </div>
            <p className="text-muted-foreground text-sm">
              Discover yourself through scientifically validated personality
              tests and assessments.
            </p>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      target={"_blank"}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tests Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Tests</h3>
            <ul className="space-y-3">
              {testLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Supported by C4E Section  */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Supported by</h3>
            <div className="flex items-center">
              <a
                href="https://c4e.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="C4E Website"
              >
                <Image
                  src="/C4E-logo.png"
                  alt="C4E Logo"
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              The C4E Collective crafts smart marketing and communication
              strategies for individuals, startups, and businesses.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-sm text-muted-foreground text-center">
          <p>
            &copy; {new Date().getFullYear()} Cerebral Quotient. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
