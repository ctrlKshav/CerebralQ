"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ForgotPasswordPayload, ResetPasswordPayload, SignInPayload, SignUpPayload } from "@/lib/auth-actions-payload";

export const signUpAction = async (data: SignUpPayload) => {
  const {username, email, password, redirect: redirectToPage } = data;
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required",
    );
  }

  // Check if user already exists
  const { data: existingUser, error: checkError } = await supabase
    .from('profiles')
    .select('email')
    .eq('email', email)
    .maybeSingle();

  if (existingUser) {
    return encodedRedirect(
      "error", 
      "/sign-up", 
      "A user with this email address already exists. Please use a different email or try logging in."
    );
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback?redirect_to=/${redirectToPage || "protected"}`,
      data: {
        email,
        username,
      },
    },
  });

  if (error) {
    return encodedRedirect("error", "/sign-up", error.message);
  }
  
  return encodedRedirect(
    "success",
    "/sign-up",
    "Thanks for signing up! Please check your email for a verification link.",
  );
};

export const signInAction = async (data: SignInPayload) => {
  const { email, password, redirect: redirectToPage } = data;
  const supabase = await createClient();  

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return encodedRedirect("error", "/sign-in", error.message);
  }

  return redirect(`/protected/${redirectToPage || ""}`);
};

export const forgotPasswordAction = async (data: ForgotPasswordPayload) => {
  const { email, callbackUrl } = data;
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
  });

  if (error) {
    return encodedRedirect(
      "error",
      "/forgot-password",
      "Could not reset password",
    );
  }

  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return encodedRedirect(
    "success",
    "/forgot-password",
    "Check your email for a link to reset your password.",
  );
};

export const resetPasswordAction = async (data: ResetPasswordPayload) => {
  const supabase = await createClient();
  const { password } = data;

  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    return encodedRedirect(
      "error",
      "/protected/reset-password",
      "Password update failed",
    );
  }

  return encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/sign-in");
};
