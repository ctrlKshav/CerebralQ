import { PersonalityDescription } from '../tests/mbti';
import { Json } from '@/types/supabase';

export interface UserTestHistory {
  completion_time_minutes: number | null;
  created_at: string | null;
  id: string;
  interpretation: Json | null;
  is_public: boolean | null;
  notes: string | null;
  percentile: number | null;
  raw_score: Json | null;
  taken_at: string | null;
  test_type_id: string;
  user_id: string;
  validity_status: string | null;
}

export interface UserTestHistoryInsert {
  completion_time_minutes?: number | null;
  created_at?: string | null;
  id?: string;
  interpretation?: Json | null;
  is_public?: boolean | null;
  notes?: string | null;
  percentile?: number | null;
  raw_score?: Json | null;
  taken_at?: string | null;
  test_type_id: string;
  user_id: string;
  validity_status?: string | null;
}

export interface UserTestHistoryUpdate {
  completion_time_minutes?: number | null;
  created_at?: string | null;
  id?: string;
  interpretation?: Json | null;
  is_public?: boolean | null;
  notes?: string | null;
  percentile?: number | null;
  raw_score?: Json | null;
  taken_at?: string | null;
  test_type_id?: string;
  user_id?: string;
  validity_status?: string | null;
}

export interface UserTestHistoryRelationships {
  test_type: {
    foreignKeyName: "user_test_history_test_type_id_fkey";
    columns: ["test_type_id"];
    isOneToOne: false;
    referencedRelation: "test_types";
    referencedColumns: ["id"];
  };
  user: {
    foreignKeyName: "user_test_history_user_id_fkey";
    columns: ["user_id"];
    isOneToOne: false;
    referencedRelation: "users";
    referencedColumns: ["id"];
  };
}

export interface MBTITraitScore {
  left: number;
  right: number;
  leftPercentage: number;
  rightPercentage: number;
  dominant: "left" | "right";
}

export interface MBTIRawScore {
  personalityType: string;
  traitScores: {
    "E-I": MBTITraitScore;
    "S-N": MBTITraitScore;
    "T-F": MBTITraitScore;
    "J-P": MBTITraitScore;
  };
}

export interface TestHistoryWithTestType extends UserTestHistory {
  test_type: {
    name: string;
    short_code: string;
    description: string | null;
    category: string;
    result_schema?: Json;
  };
}

export interface FormattedTestResult {
  id: string;
  type: string;
  personalityType?: string;
  label?: string;
  description?: string;
  date: string;
  score?: number;
  traitScores?: {
    [key: string]: MBTITraitScore;
  };
  details?: any;
}

export interface MBTIPersonalityResult {
  type: string;
  label: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  compatibleTypes: string[];
  careers: string[];
}
