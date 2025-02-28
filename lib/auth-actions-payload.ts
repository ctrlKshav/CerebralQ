import { ForgotPasswordSchema, SignInSchema, SignUpSchema } from "@/schema/auth-pages";

export interface SignUpPayload extends SignUpSchema {
  redirect?: string;
}

export interface SignInPayload extends SignInSchema {
  redirect?: string;
}
  
export interface ForgotPasswordPayload extends ForgotPasswordSchema {
  callbackUrl?: string;
}
  
export interface ResetPasswordPayload  {
  password: string;
}
