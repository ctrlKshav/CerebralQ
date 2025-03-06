import ComingSoon from "@/components/coming-soon";
import CQLogo from "@/components/cq-logo";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div>
      <Link href="/" className="hidden lg:block fixed z-50  left-8  ">
        <CQLogo className="w-36 h-36" />
      </Link>
      <ComingSoon />
    </div>
  );
}
