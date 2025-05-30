﻿"use client";
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
import { AuthPagesFormMessage } from "@/components/FormMessage";
import { parseAuthMessage } from "@/lib/utils";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

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
  const [authMessage, setAuthMessage] = useState<{
    type: string;
    message: string;
  } | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // making sure we are always on the top of the scroll when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Check if user came from newsletter link
  const source = searchParams.get("source");
  const isNewsletterSignup = source === "newsletter";

  // Parse and display message from URL search params
  useEffect(() => {
    const message = parseAuthMessage(searchParams);

    if (message) {
      setAuthMessage(message);
      // Show toast based on message type
      if (message.type === "success") {
        toast.success(message.message);
      } else if (message.type === "error") {
        toast.error(message.message);
      } else if (message.type === "info") {
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
                  {isNewsletterSignup
                    ? "Join Our Newsletter."
                    : "Create an account."}
                </h1>
                <p className="text-balance text-muted-foreground">
                  {isNewsletterSignup
                    ? "Sign up to get Beta links and Insider Access."
                    : "Sign up for your Cerebral Quotient account."}
                </p>
              </div>

              {/* First name and last name in one row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="firstname">First Name</Label>
                  <Input
                    id="firstname"
                    type="text"
                    placeholder="John"
                    {...register("firstname")}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="lastname">Last Name</Label>
                  <Input
                    id="lastname"
                    type="text"
                    placeholder="Doe"
                    {...register("lastname")}
                  />
                </div>
                {/* Combined error message for name row */}
                {(errors.firstname || errors.lastname) && (
                  <div className="col-span-2 text-center">
                    <p className="text-sm text-red-500">
                      {errors.firstname?.message || errors.lastname?.message}
                    </p>
                  </div>
                )}
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

              {/* Password and confirm password in one row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password")}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-300 focus:outline-none transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirmPassword")}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                      <span className="sr-only">
                        {showConfirmPassword
                          ? "Hide password"
                          : "Show password"}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Combined error message for password row */}
                {(errors.password || errors.confirmPassword) && (
                  <div className="col-span-2 text-center">
                    <p className="text-sm text-red-500">
                      {errors.password?.message ||
                        errors.confirmPassword?.message}
                    </p>
                  </div>
                )}
              </div>

              {/* Referral code field */}
              <div className="grid gap-2">
                <Label htmlFor="referralCode">Referral Code</Label>
                <Input
                  id="referralCode"
                  type="text"
                  placeholder="Enter referral code (optional)"
                  {...register("referralCode")}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting
                  ? "Signing Up..."
                  : isNewsletterSignup
                    ? "Subscribe"
                    : "Sign Up"}
              </Button>

              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/sign-in" className="underline underline-offset-4">
                  Log in
                </Link>
              </div>
            </div>
          </form>

          {/* Image section */}
          <div className="relative hidden bg-muted md:block">
            <Image
              src={
                isNewsletterSignup
                  ? "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393435/signup2_nl_creative_ht3plc.png"
                  : "https://res.cloudinary.com/dhix3y82h/image/upload/v1745393435/signup1_illustration_b3amci.jpg"
              }
              alt={
                isNewsletterSignup
                  ? "Cerebral Quotient Newsletter"
                  : "Cerebral Quotient"
              }
              layout="fill"
              objectFit="cover"
              priority={true}
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

      <div className="text-center text-balance text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By signing up, you agree to our{" "}
        <Link href="/t&c">Terms of Service</Link> and{" "}
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <Button variant="outline" className="mx-auto" asChild>
        <Link href="/">← Back to Home</Link>
      </Button>
    </div>
  );
}
