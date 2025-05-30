import { z } from "zod";

export type MBTIDimension = "E-I" | "S-N" | "T-F" | "J-P";

export type Answer = {
  dimension: MBTIDimension;
  selectedScore: string;
};

export type Answers = {
  [questionId: string]: Answer;
};

const answerSchema = z.object({
  dimension: z.enum(["E-I", "S-N", "T-F", "J-P"]),
  selectedScore: z.string(),
});

export const mbtiResponseSchema = z.object({
  id: z.string(),
  answers: z.record(z.string(), answerSchema),
  takenAt: z.string(),
});

export type MBTIResponse = z.infer<typeof mbtiResponseSchema>;