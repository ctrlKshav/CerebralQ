import React from "react";
import Link from "next/link";

export default function CQLogo({className, logoClassName = "w-12 h-12"}: {className?: string, logoClassName?: string}) {
  return (
    <Link href={"/"} className={`${className}`}>
      <img src="/CQ_Logo.png" alt="CerebralQ" className={`${logoClassName}`} />
    </Link>
  );
}
