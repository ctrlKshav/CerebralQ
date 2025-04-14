import { z } from "zod";

export type OceanDimension = "openness" | "conscientiousness" | "extraversion" | "agreeableness" | "neuroticism";

export type Answer = {
  dimension: OceanDimension;
  selectedScore: string;
};

export type Answers = {
  [questionId: string]: Answer;
};

const answerSchema = z.object({
  dimension: z.enum(["openness", "conscientiousness", "extraversion", "agreeableness", "neuroticism"]),
  selectedScore: z.string(),
});

export const oceanResponseSchema = z.object({
  id: z.string(),
  answers: z.record(z.string(), answerSchema),
  createdAt: z.string(),
});

export type OceanResponse = z.infer<typeof oceanResponseSchema>; 