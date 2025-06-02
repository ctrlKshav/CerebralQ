import { z } from "zod";

export const hexacoResponseSchema = z.object({
  id: z.string(),
  answers: z.record(
    z.string(),
    z.object({
      selectedScore: z.number().min(1).max(5),
    })
  ),
  takenAt: z.string(),
});

export type HEXACOResponse = z.infer<typeof hexacoResponseSchema>; 