"use client";

import { resetPasswordAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, ResetPasswordSchema } from "@/schema/auth-pages";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { AuthPagesFormMessage } from "@/components/form-message";
import { parseAuthMessage } from "@/lib/utils";

export default function ResetPassword() {
  const [authMessage, setAuthMessage] = useState<{type: string, message: string} | null>(null);
  const searchParams = useSearchParams();

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
    <>
      <form
        className="flex flex-col w-full max-w-md p-4 gap-2 [&>input]:mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-medium">Reset password</h1>
        <p className="text-sm text-foreground/60">
          Please enter your new password below.
        </p>
        <Label htmlFor="password">New password</Label>
        <Input
          id="password"
          type="password"
          placeholder="New password"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-sm text-red-500">{errors.password.message}</p>
        )}

        <Label htmlFor="confirmPassword">Confirm password</Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Resetting..." : "Reset password"}
        </Button>
      </form>

      {/* Display form message if exists */}
      {authMessage && (
        <div className="mt-4 max-w-md mx-auto">
          <AuthPagesFormMessage 
            authActionResultType={authMessage.type} 
            authActionResultMessage={authMessage.message} 
          />
        </div>
      )}
    </>
  );
}
