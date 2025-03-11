"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  Share2Icon,
  LucideIcon,
} from "lucide-react";
import { socialLinks } from "@/data/footerData";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { ContactInfo } from "./contact-info";

// Form schema using zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .min(3, { message: "Message must be at least 3 characters." }),
});

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
  // Initialize form with react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Form submission handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/contact/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast.error("Error sending message", {
        description: "Please try again later.",
      });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-card px-6 md:px-12 py-10">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <ContactInfo />

        {/* Right Column - Contact Form */}
        <div className="p-8 bg-card rounded-2xl shadow-lg border-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>Message *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
