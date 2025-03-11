import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { MapPinIcon, PhoneIcon, MailIcon, Share2Icon } from "lucide-react";
import { socialLinks } from "@/data/footerData";
import { toast } from "sonner";

type ContactCardProps = {
  icon: LucideIcon;
  title: string;
  content: string;
};

export function ContactCard({ icon: Icon, title, content }: ContactCardProps) {
  return (
    <Card className="p-4 bg-card hover:bg-card/70 transition-colors">
      <CardContent className="flex items-center space-x-3 p-0">
        <Icon className="h-6 w-6 text-primary" />
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm">{content}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export function SocialLinks() {
  // Logic to handle sharing functionality
  const handleShare = async () => {
    // Check if Web Share API is available
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Cerebral Quotient",
          text: "Check out Cerebral Quotient!",
          url: window.location.origin,
        });
        toast.success("Shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
        copyToClipboard(window.location.origin);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      copyToClipboard(window.location.origin);
    }
  };

  // Helper function to copy URL to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        toast.success("Link copied to clipboard!");
      },
      (err) => {
        toast.error("Could not copy text.");
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="mt-4">
      <h3 className="text-foreground font-medium text-lg mb-3">
        Connect With Us
      </h3>
      <div className="flex flex-wrap gap-3">
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-opacity-80 transition"
          aria-label="Share"
          onClick={handleShare}
        >
          <Share2Icon size={20} />
        </button>
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-opacity-80 transition"
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {React.createElement(social.icon, { size: 20 })}
          </a>
        ))}
      </div>
    </div>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Contact Us</h2>
        <p className="text-muted-foreground">
          We'd love to hear from you. Reach out to us anytime.
        </p>
      </div>
      <div className="space-y-4">
        <ContactCard
          icon={MailIcon}
          title="Email"
          content="cerebralquotient@gmail.com"
        />
        
      </div>
      <SocialLinks />
    </div>
  );
}
