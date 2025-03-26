import {z} from "zod";
import { RESERVED_ROUTES } from "@/lib/constants";
// Parse reserved paths from environment variable
const RESERVED_PATHS = process.env.NEXT_PUBLIC_RESERVED_PATHS?.split(",") || RESERVED_ROUTES;

const signupSchema = z.object({
  firstname: z.string().min(3, { message: "First name is required" }),
  lastname: z.string().min(3, { message: "Last name is required" }),
  username: z.string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .refine(
      (username) => !RESERVED_PATHS.includes(username.toLowerCase()), 
      { message: "This username is reserved. Please choose another." }
    ),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  confirmPassword: z.string(),
  referralCode: z.string().optional(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
  
const signinSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string()
    .min(6, { message: "Password must be at least 8 characters long" })
  });

const resetPasswordSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  confirmPassword: z.string(),
  }).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
  });

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  });

interface SignUpSchema extends z.infer<typeof signupSchema> {}
interface SignInSchema extends z.infer<typeof signinSchema> {}
interface ResetPasswordSchema extends z.infer<typeof resetPasswordSchema> {}
interface ForgotPasswordSchema extends z.infer<typeof forgotPasswordSchema> {}

export { signupSchema, signinSchema, resetPasswordSchema, forgotPasswordSchema };
export type { SignUpSchema, SignInSchema, ResetPasswordSchema, ForgotPasswordSchema };