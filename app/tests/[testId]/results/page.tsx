import Results from "@/components/results";
import CQLogo from "@/components/cq-logo";
import Link from "next/link";

export default function ResultsPage() {
  return (
    <div className="">
      <Link href="/" className="fixed top-0 left-2 sm:top-0 sm:left-10 z-50  ">
        <CQLogo className="w-36 h-36" />
      </Link>
      <Results />
    </div>
  );
}
