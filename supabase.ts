export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      test_types: {
        Row: {
          avg_score: number | null
          category: string
          citations: string[] | null
          complementary_tests: string[] | null
          created_at: string | null
          description: string | null
          engagement_level: string | null
          id: string
          is_active: boolean | null
          is_premium: boolean | null
          max_score: number | null
          min_score: number | null
          name: string
          num_questions: number | null
          recommended_age_max: number | null
          recommended_age_min: number | null
          reliability_score: number | null
          result_schema: Json | null
          result_type: string
          scientific_validity_score: number | null
          scoring_method: string | null
          short_code: string
          time_estimate_minutes: number | null
          updated_at: string | null
          validity_period_days: number | null
        }
        Insert: {
          avg_score?: number | null
          category: string
          citations?: string[] | null
          complementary_tests?: string[] | null
          created_at?: string | null
          description?: string | null
          engagement_level?: string | null
          id?: string
          is_active?: boolean | null
          is_premium?: boolean | null
          max_score?: number | null
          min_score?: number | null
          name: string
          num_questions?: number | null
          recommended_age_max?: number | null
          recommended_age_min?: number | null
          reliability_score?: number | null
          result_schema?: Json | null
          result_type: string
          scientific_validity_score?: number | null
          scoring_method?: string | null
          short_code: string
          time_estimate_minutes?: number | null
          updated_at?: string | null
          validity_period_days?: number | null
        }
        Update: {
          avg_score?: number | null
          category?: string
          citations?: string[] | null
          complementary_tests?: string[] | null
          created_at?: string | null
          description?: string | null
          engagement_level?: string | null
          id?: string
          is_active?: boolean | null
          is_premium?: boolean | null
          max_score?: number | null
          min_score?: number | null
          name?: string
          num_questions?: number | null
          recommended_age_max?: number | null
          recommended_age_min?: number | null
          reliability_score?: number | null
          result_schema?: Json | null
          result_type?: string
          scientific_validity_score?: number | null
          scoring_method?: string | null
          short_code?: string
          time_estimate_minutes?: number | null
          updated_at?: string | null
          validity_period_days?: number | null
        }
        Relationships: []
      }
      user_test_history: {
        Row: {
          completion_time_minutes: number | null
          created_at: string | null
          id: string
          interpretation: Json | null
          is_public: boolean | null
          notes: string | null
          percentile: number | null
          raw_score: Json | null
          taken_at: string | null
          test_type_id: string
          user_id: string
          validity_status: string | null
        }
        Insert: {
          completion_time_minutes?: number | null
          created_at?: string | null
          id?: string
          interpretation?: Json | null
          is_public?: boolean | null
          notes?: string | null
          percentile?: number | null
          raw_score?: Json | null
          taken_at?: string | null
          test_type_id: string
          user_id: string
          validity_status?: string | null
        }
        Update: {
          completion_time_minutes?: number | null
          created_at?: string | null
          id?: string
          interpretation?: Json | null
          is_public?: boolean | null
          notes?: string | null
          percentile?: number | null
          raw_score?: Json | null
          taken_at?: string | null
          test_type_id?: string
          user_id?: string
          validity_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_test_history_test_type_id_fkey"
            columns: ["test_type_id"]
            isOneToOne: false
            referencedRelation: "test_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_test_history_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          bio: string | null
          created_at: string | null
          email: string
          id: string
          iq: string | null
          is_insider: boolean
          last_test_date: string | null
          mbti_personality_type: string | null
          ocean_traits: Json | null
          profile_image_url: string | null
          rank: string | null
          tests_taken: number | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          email: string
          id?: string
          iq?: string | null
          is_insider?: boolean
          last_test_date?: string | null
          mbti_personality_type?: string | null
          ocean_traits?: Json | null
          profile_image_url?: string | null
          rank?: string | null
          tests_taken?: number | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          email?: string
          id?: string
          iq?: string | null
          is_insider?: boolean
          last_test_date?: string | null
          mbti_personality_type?: string | null
          ocean_traits?: Json | null
          profile_image_url?: string | null
          rank?: string | null
          tests_taken?: number | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
