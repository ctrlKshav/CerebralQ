import { Json } from './supabase';

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
