import { z } from "zod";

export const DISCResponseSchema = z.object({
  answers: z.record(
    z.string(),
    z.object({
      groupId: z.number(),
      rankings: z.record(z.string(), z.number().min(1).max(4).optional())
    })
  )
});

export type DISCResponse = z.infer<typeof DISCResponseSchema>;
