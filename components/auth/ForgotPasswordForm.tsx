"use client";

import type React from "react";
import { forgotPasswordAction } from "@/app/actions";
import { AuthPagesFormMessage } from "@/components/FormMessage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from "@/schema/auth-pages";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { cn, parseAuthMessage } from "@/lib/utils";
import Image from "next/image";

interface ForgotPasswordFormProps extends React.ComponentProps<"div"> {
  searchParams: URLSearchParams;
}

export function ForgotPasswordForm({
  className,
  searchParams,
  ...props
}: ForgotPasswordFormProps) {
  const [authMessage, setAuthMessage] = useState<{type: string, message: string} | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  // Parse and display message from URL search params
  useEffect(() => {
    const message = parseAuthMessage(searchParams);
    
    if (message) {
      setAuthMessage(message);
      // Show toast based on message type
      if (message.type === 'success') {
        toast.success(message.message);
      } else if (message.type === 'error') {
        toast.error(message.message);
      } else if (message.type === 'info') {
        toast.info(message.message);
      }
    }
  }, [searchParams]);

  const onSubmit = async (data: ForgotPasswordSchema) => {
    try {
      await forgotPasswordAction(data);
    } catch (error) {
      toast.error("Failed to process your request. Please try again.");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Reset Password</h1>
                <p className="text-balance text-muted-foreground">
                  Enter your email and we'll send you a reset link.
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "Send Reset Link"}
              </Button>
              <div className="text-center text-sm">
                Remember your password?{" "}
                <Link href="/sign-in" className="underline underline-offset-4">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image src="/images/forgotpassword_tablecoat.jpeg" alt="Cerebral Quotient" layout="fill" objectFit="cover" />
          </div>
        </CardContent>
      </Card>

      {/* Display form message if exists */}
      {authMessage && (
        <AuthPagesFormMessage 
          authActionResultType={authMessage.type} 
          authActionResultMessage={authMessage.message} 
        />
      )}

      <div className="space-y-4 text-center">
        <Button variant="outline" className="mx-auto" asChild>
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
