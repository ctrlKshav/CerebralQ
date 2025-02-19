import { z } from "zod";

export const mbtiResponseSchema = z.object({
  id: z.number(),
  answers: z.record(z.string(), z.union([z.number(), z.string()])),
  result: z.string().optional(),
  createdAt: z.string(),
});

export type MBTIResponse = z.infer<typeof mbtiResponseSchema>;