"use client";

import type React from "react";
import { resetPasswordAction } from "@/app/actions";
import { AuthPagesFormMessage } from "@/components/FormMessage";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  resetPasswordSchema, 
  ResetPasswordSchema 
} from "@/schema/auth-pages";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { cn, parseAuthMessage } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ResetPasswordFormProps extends React.ComponentProps<"div"> {
  searchParams: URLSearchParams;
}

export function ResetPasswordForm({
  className,
  searchParams,
  ...props
}: ResetPasswordFormProps) {
  const [authMessage, setAuthMessage] = useState<{type: string, message: string} | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
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

  const onSubmit = async (data: ResetPasswordSchema) => {
    try {
      await resetPasswordAction(data);
    } catch (error) {
      toast.error("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Set New Password</h1>
                <p className="text-balance text-muted-foreground">
                  Please create a new secure password for your account.
                </p>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="password">New password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="New password"
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
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    {...register("confirmPassword")}
                  />
                  <button 
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-300 focus:outline-none transition-colors"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                    <span className="sr-only">
                      {showConfirmPassword ? "Hide password" : "Show password"}
                    </span>
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Updating..." : "Set New Password"}
              </Button>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <Image src="/images/authPages/resetpassword1_glasses.png" alt="Cerebral Quotient" layout="fill" objectFit="cover" />
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
