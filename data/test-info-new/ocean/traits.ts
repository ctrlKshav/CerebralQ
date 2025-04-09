export const traits = [
  {
    name: "Openness",
    tagline: "Imagination and curiosity drive you.",
    description: "High scorers tend to be creative, curious, and open to new experiences. They appreciate art, adventure, unusual ideas, and diverse perspectives.",
    tags: ["Creative", "Curious", "Adventurous"],
    gradient: "bg-gradient-to-r from-purple-600/70 to-blue-500/70",
    image: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=600&auto=format&fit=crop",
    alt: "Person exploring in beautiful mountains, representing openness to experience",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary-foreground opacity-90">
      <path d="M2 12h1m18 0h1M12 2v1m0 18v1M4.93 4.93l.7.7m12.74 12.74l.7.7M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path>
      <path d="M12 14.5c-.5-1.5.5-3 2-3s2.5 1 2.5 2m-9 0c0-1 .5-2 2.5-2s2.5 1.5 2 3"></path>
    </svg>`
  },
  {
    name: "Conscientiousness",
    tagline: "You're organized and goal-oriented.",
    description: "High scorers tend to be efficient, organized, and mindful of details. They think about how their behavior affects others and strive for achievement.",
    tags: ["Organized", "Reliable", "Disciplined"],
    gradient: "bg-gradient-to-r from-green-500/70 to-teal-500/70",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600&auto=format&fit=crop",
    alt: "Organized desk with planner and neat workspace, representing conscientiousness",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary-foreground opacity-90">
      <path d="M8 3H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2"></path>
      <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"></path>
      <path d="m9 14 2 2 4-4"></path>
    </svg>`
  },
  {
    name: "Extraversion",
    tagline: "Energy comes from people and action.",
    description: "High scorers tend to be socially engaged, talkative, and energetic. They gain energy from social interactions and prefer being around people.",
    tags: ["Outgoing", "Energetic", "Assertive"],
    gradient: "bg-gradient-to-r from-orange-500/70 to-red-500/70",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
    alt: "Group of friends laughing and enjoying social gathering, representing extraversion",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary-foreground opacity-90">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>`
  },
  {
    name: "Agreeableness",
    tagline: "Compassion and cooperation define you.",
    description: "High scorers tend to be trusting, cooperative, and empathetic. They value social harmony and getting along with others.",
    tags: ["Compassionate", "Trusting", "Cooperative"],
    gradient: "bg-gradient-to-r from-pink-500/70 to-purple-500/70",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600&auto=format&fit=crop",
    alt: "Hands joined together in teamwork, representing agreeableness and cooperation",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary-foreground opacity-90">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
    </svg>`
  },
  {
    name: "Neuroticism",
    tagline: "Emotional resilience—or intensity.",
    description: "High scorers tend to experience a range of emotions more intensely. They may be more sensitive to stressors and experience more frequent mood shifts.",
    tags: ["Emotional", "Reactive", "Sensitive"],
    gradient: "bg-gradient-to-r from-blue-500/70 to-slate-500/70",
    image: "https://images.unsplash.com/photo-1534330207526-8e81f10ec6fc?q=80&w=600&auto=format&fit=crop",
    alt: "Person looking at reflection in water, representing emotional depth and self-awareness",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-full h-full text-primary-foreground opacity-90">
      <path d="m8 14-4.5 4.5m12.5-4.5 4.5 4.5"></path>
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M16 16s-1.5-2-4-2-4 2-4 2"></path>
      <path d="M9 9h.01M15 9h.01"></path>
    </svg>`
  }
];
