"use client";

import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { useSearchParams } from "next/navigation";

export default function ResetPassword() {
  const searchParams = useSearchParams();

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <ResetPasswordForm searchParams={searchParams} />
      </div>
    </div>
  );
}
