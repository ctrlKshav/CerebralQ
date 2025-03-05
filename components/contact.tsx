import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  Share2Icon,
  LucideIcon,
} from "lucide-react";
import { socialLinks } from "@/data/footerData";

type ContactCardProps = {
  icon: LucideIcon;
  title: string;
  content: string;
};

function ContactCard({ icon: Icon, title, content }: ContactCardProps) {
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

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card px-6 md:px-12 py-10">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Contact Us</h2>
            <p className="text-muted-foreground">
              We'd love to hear from you. Reach out to us anytime.
            </p>
          </div>
          <div className="space-y-4">
            <ContactCard
              icon={PhoneIcon}
              title="Phone"
              content="+91 9999999999"
            />
            <ContactCard
              icon={MailIcon}
              title="Email"
              content="team@c4elabs.com"
            />
            <ContactCard
              icon={MapPinIcon}
              title="Address"
              content="Makarba, Ahmedabad"
            />
          </div>
          <div className="mt-4">
            <h3 className="text-foreground font-medium text-lg mb-3">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-opacity-80 transition"
                aria-label="Share"
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
        </div>

        {/* Right Column - Contact Form */}
        <div className="p-8 bg-card rounded-2xl shadow-lg border-2">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-foreground"
                >
                  Name *
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-foreground"
                >
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message *
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[150px]"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
