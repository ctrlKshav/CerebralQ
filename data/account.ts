export const initialData = {
  username: "JohnDoe42",
  email: "john@example.com",
  bio: "Exploring the frontiers of cognitive enhancement and personal growth. Passionate about understanding different personality types and mental patterns.",
  profile_image_url:
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&q=80",
  tests_taken: 15,
  member_since: "2023-06-01",
  is_verified: true,
  is_insider: true,
  last_test_date: "2024-02-15",
  created_at: "2023-06-01",
  achievements: ["Pattern Master", "Memory Elite", "Social Insight Pro"],
  rank: "Cognitive Explorer",
  cognitive_stats: {
    iq_score: 128,
    personality_type: "INTJ",
    memory_percentile: 85,
    processing_speed: 92,
    emotional_eq: 78,
  },
  connected_friends: 34,
};

export type CongitiveStatsType = {
    iq_score: number;
    personality_type: string;
    memory_percentile: number;
    processing_speed: number;
    emotional_eq: number;
}