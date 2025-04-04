import { Json } from '.';

export interface TestType {
  avg_score: number | null;
  category: string;
  citations: string[] | null;
  complementary_tests: string[] | null;
  created_at: string | null;
  description: string | null;
  engagement_level: string | null;
  id: string;
  is_active: boolean | null;
  is_premium: boolean | null;
  max_score: number | null;
  min_score: number | null;
  name: string;
  num_questions: number | null;
  recommended_age_max: number | null;
  recommended_age_min: number | null;
  reliability_score: number | null;
  result_schema: Json | null;
  result_type: string;
  scientific_validity_score: number | null;
  scoring_method: string | null;
  short_code: string;
  time_estimate_minutes: number | null;
  updated_at: string | null;
  validity_period_days: number | null;
}

export interface TestTypeInsert {
  avg_score?: number | null;
  category: string;
  citations?: string[] | null;
  complementary_tests?: string[] | null;
  created_at?: string | null;
  description?: string | null;
  engagement_level?: string | null;
  id?: string;
  is_active?: boolean | null;
  is_premium?: boolean | null;
  max_score?: number | null;
  min_score?: number | null;
  name: string;
  num_questions?: number | null;
  recommended_age_max?: number | null;
  recommended_age_min?: number | null;
  reliability_score?: number | null;
  result_schema?: Json | null;
  result_type: string;
  scientific_validity_score?: number | null;
  scoring_method?: string | null;
  short_code: string;
  time_estimate_minutes?: number | null;
  updated_at?: string | null;
  validity_period_days?: number | null;
}

export interface TestTypeUpdate {
  avg_score?: number | null;
  category?: string;
  citations?: string[] | null;
  complementary_tests?: string[] | null;
  created_at?: string | null;
  description?: string | null;
  engagement_level?: string | null;
  id?: string;
  is_active?: boolean | null;
  is_premium?: boolean | null;
  max_score?: number | null;
  min_score?: number | null;
  name?: string;
  num_questions?: number | null;
  recommended_age_max?: number | null;
  recommended_age_min?: number | null;
  reliability_score?: number | null;
  result_schema?: Json | null;
  result_type?: string;
  scientific_validity_score?: number | null;
  scoring_method?: string | null;
  short_code?: string;
  time_estimate_minutes?: number | null;
  updated_at?: string | null;
  validity_period_days?: number | null;
}
