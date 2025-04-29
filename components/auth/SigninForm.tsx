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
import { AuthPagesFormMessage } from "@/components/FormMessage";
import { useState, useEffect } from "react";
import { signInAction } from "@/app/actions";
import { RETURN_URL_KEY } from "@/lib/constants";
import { toast } from "sonner";
import { parseAuthMessage } from "@/lib/utils";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

interface SigninFormProps extends React.ComponentProps<"div"> {
  searchParams: URLSearchParams;
}

export function SigninForm({
  className,
  searchParams,
  ...props
}: SigninFormProps) {
  const [authMessage, setAuthMessage] = useState<{
    type: string;
    message: string;
  } | null>(null);
  
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

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (data: SignInSchema) => {
    const signInData = {
      ...data,
      redirect: localStorage.getItem(RETURN_URL_KEY) || undefined,
    };
    await signInAction(signInData);
    window.location.href = `/${signInData.redirect ?? ""}`
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back!</h1>
                <p className="text-balance text-muted-foreground">
                  Login to your Cerebral Quotient account.
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
            <Image
              src="https://res.cloudinary.com/dhix3y82h/image/upload/v1745393436/signin1_illustration_uk5gwz.jpg"
              alt="Cerebral Quotient "
              layout="fill"
              objectFit="cover"
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
        <Button variant="outline" className="mx-auto" asChild>
          <Link href="/">← Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
