"use client"
import { SignupForm } from "@/components/auth/SignupForm";
import { useSearchParams } from "next/navigation";

export default function Signup(){
  const searchParams = useSearchParams();
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-md md:max-w-5xl">
        <SignupForm searchParams={searchParams} />
      </div>
    </div>
  );
}
