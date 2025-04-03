"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CQLogo from "@/components/CQLogo";
import { socialLinks, testLinks, companyLinks } from "@/data/footerData";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="mx-auto px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <CQLogo className="w-24 h-24" />
              </Link>
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
                    <Link
                      key={index}
                      href={link.href}
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white hover:bg-opacity-80 transition"
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
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
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    scroll={true}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Supported by C4E Section  */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Supported by</h3>
            <div className="flex items-center">
              <Link
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
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              C4E is a collective of dreamers and doers.
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
