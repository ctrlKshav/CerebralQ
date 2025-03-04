"use client"
import { SignupForm } from "@/components/auth/signup-form";
import { useSearchParams } from "next/navigation";

export default function Signup(){
  const searchParams = useSearchParams();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <SignupForm searchParams={searchParams} />
      </div>
    </div>
  );
}
