import {z} from "zod";

const signupSchema = z.object({
  username: z.string().min(3, { message: "Username must be at least 3 characters long" }),
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