export interface User {
  bio: string | null;
  created_at: string | null;
  email: string;
  id: string;
  last_test_date: string | null;
  profile_image_url: string | null;
  tests_taken: number | null;
  updated_at: string | null;
  username: string | null;
}

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
