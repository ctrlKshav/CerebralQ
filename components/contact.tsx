import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card } from "@/components/ui/card"
import { PhoneIcon, MailIcon, MapPinIcon, Share2Icon, Facebook, Twitter, LinkedinIcon } from "lucide-react"
import { socialLinks } from "@/data/footerData"


function ContactCard({ icon: Icon, title, content }: { icon: any; title: string; content: string }) {
  return (
    <Card className="p-4 bg-background hover:bg-card/50 transition-colors">
      <div className="flex items-center space-x-3">
        <Icon className="h-5 w-5 text-primary" />
        <div>
          <h3 className="font-medium text-foreground">{title}</h3>
          <p className="text-muted-foreground">{content}</p>
        </div>
      </div>
    </Card>
  )
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-two-corners-right animate-gradient-slow px-6 md:px-8 py-28">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-3">Contact Information</h2>
              <p className="text-muted-foreground">Get in touch with us for any inquiries or support.</p>
            </div>

            <div className="space-y-4">
              <ContactCard icon={PhoneIcon} title="Phone Number" content="+91 9999999999" />
              <ContactCard icon={MailIcon} title="Email Address" content="team@c4elabs.com" />
              <ContactCard
                icon={MapPinIcon}
                title="Local Address"
                content="Makarba, Ahmedabad"
              />
            </div>

            <div className="pt-4 flex flex-col">
              <h3 className="flex items-center gap-2 text-foreground mb-4">
                <Share2Icon className="text-primary h-5 w-5" />
                <span className="font-medium text-lg">Share</span>
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className="text-primary hover:text-muted-foreground"
                    aria-label={social.label}
                  >
                    {React.createElement(social.icon, { size: 24 })}
                  </a>
                ))}
              </div>
              
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-primary backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-background">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <Input id="name" placeholder="Your name" className="bg-background" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-background">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <Input id="email" type="email" placeholder="Your email" className="bg-background" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="website" className="text-sm font-medium text-background">
                  Website
                </label>
                <Input id="website" placeholder="Your website" className="bg-background" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-background">
                  Comment <span className="text-red-600">*</span>
                </label>
                <Textarea id="message" placeholder="Your message" className="bg-background min-h-[150px]" required />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="bg-background border border-white" />
                <label htmlFor="terms" className="text-sm text-background">
                  By clicking this I have read and agree to the Terms & Conditions.
                </label>
              </div>

              <Button type="submit" variant={"secondary"} className="w-32">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

