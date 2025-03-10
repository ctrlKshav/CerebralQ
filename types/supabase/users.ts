export interface User {
  bio: string | null;
  created_at: string;
  email: string;
  id: string;
  last_test_date: string | null;
  profile_image_url: string | null;
  tests_taken: number | null;
  updated_at: string;
  username: string | null;
  rank: string | null;
  is_verified: boolean | null;
  is_insider: boolean | null;
  mbti_personality_type: string | null;
  iq: number | null;
  ocean_type: {
    openness: number | null;
    conscientiousness: number | null;
    extraversion: number | null;
    agreeableness: number | null;
    neuroticism: number | null;
  } | null;
}

export interface PartialUser extends Partial<User> {}

export interface UserInsert {
  bio?: string | null;
  created_at?: string | null;
  email: string;
  id?: string;
  last_test_date?: string | null;
  profile_image_url?: string | null;
  tests_taken?: number | null;
  updated_at?: string | null;
  username?: string | null;
}

export interface UserUpdate {
  bio?: string | null;
  created_at?: string | null;
  email?: string;
  id?: string;
  last_test_date?: string | null;
  profile_image_url?: string | null;
  tests_taken?: number | null;
  updated_at?: string | null;
  username?: string | null;
}
