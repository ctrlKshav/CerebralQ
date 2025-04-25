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
          num_questions: number[] | null
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
          num_questions?: number[] | null
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
          num_questions?: number[] | null
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
          first_name: string | null
          id: string
          iq: string | null
          is_insider: boolean
          last_name: string | null
          last_test_date: string | null
          mbti_personality_type: string | null
          ocean_traits: Json | null
          plan: Database["public"]["Enums"]["Plans"]
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
          first_name?: string | null
          id?: string
          iq?: string | null
          is_insider?: boolean
          last_name?: string | null
          last_test_date?: string | null
          mbti_personality_type?: string | null
          ocean_traits?: Json | null
          plan?: Database["public"]["Enums"]["Plans"]
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
          first_name?: string | null
          id?: string
          iq?: string | null
          is_insider?: boolean
          last_name?: string | null
          last_test_date?: string | null
          mbti_personality_type?: string | null
          ocean_traits?: Json | null
          plan?: Database["public"]["Enums"]["Plans"]
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
      "Ocean Questions": "44" | "120" | "300"
      Plans: "free" | "paid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      "Ocean Questions": ["44", "120", "300"],
      Plans: ["free", "paid"],
    },
  },
} as const
