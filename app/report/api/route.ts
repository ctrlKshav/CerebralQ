import { getCurrentUser } from "@/lib/supabaseOperations";
import {
  getFullPersonalityData,
  getFreePersonalityData,
} from "@/data/mbti/mbtiResultData";
import {
  FreePersonalityDatabase,
  FullPersonalityDatabase,
} from "@/types/tests/mbti/results";

export async function POST(request: Request) {
  const user = await getCurrentUser();
  const personalityType = await request.text();
  let personalityData: FreePersonalityDatabase | FullPersonalityDatabase;
  if (!user || user.plan === "free") {
    personalityData = getFreePersonalityData(personalityType);
  } else {
    personalityData = getFullPersonalityData(personalityType);
  }
  return Response.json(personalityData);
}
