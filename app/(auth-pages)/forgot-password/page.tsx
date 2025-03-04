"use client";

import { forgotPasswordAction } from "@/app/actions";
import { FormMessage } from "@/components/form-message";
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
import { useState } from "react";

export default function ForgotPassword() {
  const [message, setMessage] = useState<{ type: string; text: string } | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordSchema) => {
    const response = await forgotPasswordAction(data);
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
          {message && (
            <div
              className={`text-sm ${message.type === "error" ? "text-red-500" : "text-green-500"}`}
            >
              {message.text}
            </div>
          )}
        </div>
      </form>
    </>
  );
}
