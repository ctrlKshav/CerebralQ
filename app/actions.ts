"use server";

import { encodedRedirect } from "@/utils/utils";
import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ForgotPasswordPayload, ResetPasswordPayload, SignInPayload, SignUpPayload } from "@/lib/authActionsPayload";
import { checkUsernameExists } from "@/lib/supabaseOperations";
import { RESERVED_ROUTES } from "@/lib/constants";

// Parse reserved paths from environment variable
const RESERVED_PATHS = process.env.NEXT_PUBLIC_RESERVED_PATHS?.split(",") || RESERVED_ROUTES

export const signUpAction = async (data: SignUpPayload) => {
  const { firstname, lastname, username, email, password, referralCode, redirect: redirectToPage } = data;
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email || !password) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Email and password are required",
    );
  }

  // Server-side check for reserved usernames
  if (username && RESERVED_PATHS.includes(username.toLowerCase())) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "This username is reserved. Please choose another."
    );
  }

  const usernameExists = await checkUsernameExists(username);
  if(usernameExists) {
    return encodedRedirect(
      "error",
      "/sign-up",
      "Username already exists. Please choose a different username.",
    );
  }

  const {data: fetchedData, error} = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback?redirect_to=/${redirectToPage || ""}`,
      data: {
        email,
        firstname,
        lastname,
        username,
        c4e_insider: referralCode === process.env.SECRET_INSIDER_CODE,
      },
    },
  });

  if (error) {
    return encodedRedirect("error", "/sign-up", error.message);
  }
  else if (fetchedData.user?.identities?.length === 0) {
    return encodedRedirect(
      "error", 
      "/sign-up", 
      "A user with this email address already exists. Please use a different email or try logging in."
    );
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

  // return redirect(`/${redirectToPage || ""}`);
};

export const forgotPasswordAction = async (data: ForgotPasswordPayload) => {
  const { email, callbackUrl } = data;
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  if (!email) {
    return encodedRedirect("error", "/forgot-password", "Email is required");
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/account/reset-password`,
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
      "/account/reset-password",
      "Password update failed",
    );
  }

  return encodedRedirect("success", "/account/reset-password", "Password updated");
};

export const signOutAction = async () => {
  const supabase = await createClient();
  await supabase.auth.signOut();
  // return redirect("/");
};
