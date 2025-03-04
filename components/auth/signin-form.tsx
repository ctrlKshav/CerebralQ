"use client";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signinSchema, SignInSchema } from "@/schema/auth-pages";
import { AuthPagesFormMessage } from "@/components/form-message";
import { useState, useEffect } from "react";
import { signInAction } from "@/app/actions";
import { RETURN_URL_KEY } from "@/constants/constants";
import { toast } from "sonner";
import { parseAuthMessage } from "@/lib/utils";

interface SigninFormProps extends React.ComponentProps<"div"> {
  searchParams: URLSearchParams
}

export function SigninForm({
  className,
  searchParams ,
  ...props
}: SigninFormProps) {
  const [authMessage, setAuthMessage] = useState<{type: string, message: string} | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signinSchema),
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

  const onSubmit = async (data: SignInSchema) => {
    const signUpData = {
      ...data,
      redirect: localStorage.getItem(RETURN_URL_KEY) || undefined,
    };
    await signInAction(signUpData);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Cerebral Quotient account
                </p>
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
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
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

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
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
          By signing up, you agree to our <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </div>
        <Button variant="outline" className="mx-auto" asChild>
          <a href="/">← Back to Home</a>
        </Button>
      </div>
    </div>
  );
}
