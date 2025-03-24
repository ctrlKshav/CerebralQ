"use client";

import { forgotPasswordAction } from "@/app/actions";
import { AuthPagesFormMessage } from "@/components/FormMessage";
import { Button } from "@/components/ui/button";
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
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { parseAuthMessage } from "@/lib/utils";

export default function ForgotPassword() {
  const [authMessage, setAuthMessage] = useState<{type: string, message: string} | null>(null);
  const searchParams = useSearchParams();

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
    <>
      <form
        className="flex-1 flex flex-col w-full gap-2 text-foreground [&>input]:mb-6 min-w-64 max-w-64 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="text-2xl font-medium">Reset Password</h1>
          <p className="text-sm text-secondary-foreground">
            Already have an account?{" "}
            <Link className="text-primary underline" href="/sign-in">
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="you@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Reset Password"}
          </Button>
        </div>
      </form>

      {/* Display form message if exists */}
      {authMessage && (
        <div className="mt-4 max-w-64 mx-auto">
          <AuthPagesFormMessage 
            authActionResultType={authMessage.type} 
            authActionResultMessage={authMessage.message} 
          />
        </div>
      )}
    </>
  );
}
