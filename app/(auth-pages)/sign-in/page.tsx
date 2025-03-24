"use client"
import { SigninForm } from "@/components/auth/SigninForm";
import { useSearchParams } from "next/navigation";

export default function Login() {
  const searchParams = useSearchParams();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SigninForm searchParams={searchParams} />
      </div>
    </div>
  );
}
