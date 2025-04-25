import {
  FreePersonalityDatabase,
  FullPersonalityDatabase,
} from "@/types/tests/mbti/results";

export const fetchPersonalityData = async (personalityType: string) => {
  const response = await fetch(`/report/api`, {
    method: "POST",
    body: personalityType,
  });
  const data: FreePersonalityDatabase | FullPersonalityDatabase =
    await response.json();
  return data;
};
