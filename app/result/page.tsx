import Result from "@/components/results/result";
import CQLogo from "@/components/CQLogo";
import Link from "next/link";

export default async function ResultsPage() {
  return (
    <div className="">
      <Link href="/" className="fixed z-50 top-0 left-4 sm:left-8  ">
        <CQLogo className="w-24 h-24 sm:w-28 sm:h-28" />
      </Link>
      <Result />
    </div>
  );
}
