import Results from "@/components/results";
import Navbar from "@/components/navbar";
import { getCurrentUser } from "@/lib/supabaseOperations";

export default async function ResultsPage() {
  const data = await getCurrentUser();

  return (
    <div className="">
      {data ? <Navbar user={data} /> : <Navbar />}
      <div className="mt-24">
        <Results />
      </div>
    </div>
  );
}
