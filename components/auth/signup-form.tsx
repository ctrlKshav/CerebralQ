"use client";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signupSchema, SignUpSchema } from "@/schema/auth-pages";
import { RETURN_URL_KEY } from "@/lib/constants";
import { signUpAction } from "@/app/actions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { AuthPagesFormMessage } from "@/components/form-message";
import { parseAuthMessage } from "@/lib/utils";

interface SignupFormProps extends React.ComponentProps<"div"> {
  searchParams: URLSearchParams;
}

export function SignupForm({
  className,
  searchParams,
  ...props
}: SignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signupSchema),
  });
  const [authMessage, setAuthMessage] = useState<{type: string, message: string} | null>(null);
  
  // Check if user came from newsletter link
  const source = searchParams.get('source');
  const isNewsletterSignup = source === 'newsletter';

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

  const onSubmit = async (data: SignUpSchema) => {
    const signUpData = {
      ...data,
      redirect: localStorage.getItem(RETURN_URL_KEY) || undefined,
    };
    await signUpAction(signUpData);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">
                  {isNewsletterSignup ? "Join Our Newsletter" : "Create an account"}
                </h1>
                <p className="text-balance text-muted-foreground">
                  {isNewsletterSignup 
                    ? "Sign up to receive updates and insights"
                    : "Sign up for your Cerebral Quotient account"
                  }
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="johndoe"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-sm text-red-500">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Signing Up..." : isNewsletterSignup ? "Subscribe" : "Sign Up"}
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/sign-in" className="underline underline-offset-4">
                  Log in
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src={isNewsletterSignup ? "/newsletter-image.svg" : "/placeholder.svg"}
              alt={isNewsletterSignup ? "Newsletter Signup" : "Account Creation"}
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
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
        <div className="text-balance text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
          By signing up, you agree to our <Link href="/privacy">Terms of Service</Link> and{" "}

          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <Button variant="outline" className="mx-auto" asChild>
          <a href="/">← Back to Home</a>
        </Button>
      </div>
    </div>
  );
}
