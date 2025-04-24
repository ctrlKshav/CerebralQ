import React from "react";
import { TermsConditions } from "@/components/privacy-policy/TermsConditions";
import CQLogo from "@/components/CQLogo";
import Link from "next/link";

export default function Page() {
  return (
    <div className="">
      <Link href="/" className="fixed top-0 left-8 ">
        <CQLogo className="w-24 h-24 sm:w-28 sm:h-28" />
      </Link>
      <div className="container py-10">
        <TermsConditions />
      </div>
    </div>
  );
}
