  import { PersonalityTypeInsights } from "@/types/tests/mbti";
  import { PersonalityDescription } from "@/types/tests/mbti";

  export const personalityDescriptions: Record<string, PersonalityDescription> = {
    INFP: {
      alias: "The Mediator",
      description:
        "INFPs are imaginative idealists, guided by their own core values and beliefs. They value authenticity and want to be of service to humanity. Creative and empathetic, they seek harmony and depth in their relationships and work.",
    },
    INFJ: {
      alias: "The Advocate",
      description:
        "INFJs are insightful and principled visionaries with an innate ability to understand complex patterns in human behavior. They are dedicated to their values and to helping others, often working to make the world a better place through quiet but determined influence.",
    },
    INTJ: {
      alias: "The Architect",
      description:
        "INTJs are analytical problem-solvers with a gift for strategic thinking and innovation. They approach life with a systematic mindset, valuing knowledge, competence, and structure while constantly seeking to improve systems around them.",
    },
    INTP: {
      alias: "The Logician",
      description:
        "INTPs are innovative thinkers with a thirst for knowledge and a love of complex theoretical challenges. They excel at finding logical solutions to problems, often challenging conventional wisdom with their unique perspectives and analytical minds.",
    },
    ISFP: {
      alias: "The Adventurer",
      description:
        "ISFPs are artistic, sensitive souls who live in the moment and enjoy exploring the world through their senses. They value personal freedom and expression, avoiding rigid structures in favor of following their own path through life with authenticity.",
    },
    ISFJ: {
      alias: "The Defender",
      description:
        "ISFJs are warm, dedicated protectors who quietly support those around them with practical help and unwavering loyalty. They value tradition, security, and maintaining harmony in their personal and professional lives through reliable service to others.",
    },
    ISTJ: {
      alias: "The Logistician",
      description:
        "ISTJs are responsible, detail-oriented individuals who value tradition, order and integrity. They are the dependable pillars of organizations, methodically completing tasks with precision while upholding established systems and procedures.",
    },
    ISTP: {
      alias: "The Virtuoso",
      description:
        "ISTPs are skilled troubleshooters with an innate understanding of mechanical systems and an adventurous spirit. They prefer action over conversation, tackling problems with logical analysis and hands-on solutions while maintaining their independence.",
    },
    ENFP: {
      alias: "The Campaigner",
      description:
        "ENFPs are enthusiastic, creative spirits with an infectiously positive attitude and genuine interest in those around them. They see possibilities everywhere and use their charisma and idealism to inspire others while pursuing their many passions.",
    },
    ENFJ: {
      alias: "The Protagonist",
      description:
        "ENFJs are charismatic leaders who inspire and motivate others with their genuine warmth and conviction. They are focused on helping others develop and fulfill their potential, orchestrating people and resources toward positive social change.",
    },
    ENTJ: {
      alias: "The Commander",
      description:
        "ENTJs are strategic leaders with a gift for organizing systems and people to achieve long-term goals. They possess natural confidence and decisiveness, thriving when implementing structured plans while expecting competence and logical thinking from others.",
    },
    ENTP: {
      alias: "The Debater",
      description:
        "ENTPs are quick-thinking innovators who love intellectual challenges and lively debates. With their enthusiasm for new ideas and creative problem-solving abilities, they excel at seeing connections others miss while challenging established ways of thinking.",
    },
    ESFP: {
      alias: "The Entertainer",
      description:
        "ESFPs are vivacious performers who bring contagious enthusiasm to everything they do. They live in the moment, seeking joy and excitement through experiences they can share with others, making any environment more lively with their spontaneous approach to life.",
    },
    ESFJ: {
      alias: "The Consul",
      description:
        "ESFJs are supportive, social individuals who value harmony and cooperation in every aspect of their lives. They are attentive to others' needs, often serving as the glue that holds communities together through their practical help and commitment to traditions.",
    },
    ESTJ: {
      alias: "The Executive",
      description:
        "ESTJs are organized administrators who value clear systems, traditional values, and straightforward communication. They excel at implementing practical solutions and maintaining order, approaching responsibilities with dedication and a focus on tangible results.",
    },
    ESTP: {
      alias: "The Entrepreneur",
      description:
        "ESTPs are energetic thrill-seekers who excel at analyzing immediate situations and taking decisive action. They are pragmatic problem-solvers who prefer hands-on experience to theoretical discussions, approaching life with spontaneity and adaptability.",
    },
  };

  // Example detailed insights for each personality type
  export const personalityInsights: Record<string, PersonalityTypeInsights> = {
      INTJ: {
        strengths: {
          title: "Core Strengths",
          icon: "lightbulb",
          points: [
            "Strategic thinking and long-term planning",
            "Independent problem-solving with original solutions",
            "Ability to see the big picture and anticipate outcomes",
            "Strong analytical skills and logical reasoning",
            "Disciplined work ethic and determination"
          ]
        },
        challenges: {
          title: "Potential Challenges",
          icon: "alert-circle",
          points: [
            "May come across as overly critical or judgmental",
            "Tendency to overlook emotional factors in decision-making",
            "Difficulty expressing feelings and connecting emotionally",
            "Can be perfectionistic to the point of burnout",
            "Sometimes reluctant to change established systems"
          ]
        },
        workStyle: {
          title: "Work Style",
          icon: "briefcase",
          points: [
            "Thrives in autonomous roles with intellectual challenges",
            "Prefers structured environments with clear objectives",
            "Values efficiency and competence over social dynamics",
            "Excels at creating innovative systems and strategic plans",
            "May need quiet time to process complex information"
          ]
        },
        relationships: {
          title: "Relationship Dynamics",
          icon: "users",
          points: [
            "Seeks deep, meaningful connections with a select few",
            "Values intellectual compatibility and shared goals",
            "Shows loyalty through consistent actions rather than words",
            "Appreciates partners who respect independence and boundaries",
            "May need encouragement to share thoughts and feelings"
          ]
        },
        growthAreas: {
          title: "Growth Opportunities",
          icon: "trending-up",
          points: [
            "Developing emotional intelligence and empathy",
            "Practicing active listening without immediate problem-solving",
            "Embracing flexibility and adaptability in plans",
            "Being open to input from different perspectives",
            "Finding healthy balance between work and personal life"
          ]
        }
      },
      INFP: {
        strengths: {
          title: "Core Strengths",
          icon: "heart",
          points: [
            "Deep empathy and understanding of others",
            "Strong moral compass and authentic self-expression",
            "Rich creative imagination and artistic abilities",
            "Ability to see unique potential in people and situations",
            "Passionate dedication to meaningful causes"
          ]
        },
        challenges: {
          title: "Potential Challenges",
          icon: "alert-circle",
          points: [
            "May struggle with practical day-to-day tasks",
            "Tendency toward perfectionism that inhibits completion",
            "Can take criticism personally and deeply",
            "Sometimes avoids conflict to preserve harmony",
            "May have difficulty with structure and deadlines"
          ]
        },
        workStyle: {
          title: "Work Style",
          icon: "briefcase",
          points: [
            "Thrives in environments that align with personal values",
            "Works best when given creative freedom and autonomy",
            "Prefers meaningful work over status or financial gain",
            "Benefits from quiet spaces to think and create",
            "Motivated by authentic recognition of contributions"
          ]
        },
        relationships: {
          title: "Relationship Dynamics",
          icon: "users",
          points: [
            "Seeks deep, authentic connections with genuine people",
            "Shows love through thoughtful gestures and deep listening",
            "Values partners who appreciate their unique perspective",
            "Needs occasional space to process emotions independently",
            "Devoted and loyal when they find the right connection"
          ]
        },
        growthAreas: {
          title: "Growth Opportunities",
          icon: "trending-up",
          points: [
            "Developing practical skills for everyday challenges",
            "Setting realistic expectations and deadlines",
            "Learning to accept constructive criticism",
            "Building resilience and adaptability to change",
            "Finding balance between idealism and practicality"
          ]
        }
      },
      // Add more personality types as needed...
    };
    
    // Default insights for types not yet fully defined
    export const defaultInsights: PersonalityTypeInsights = {
      strengths: {
        title: "Core Strengths",
        icon: "star",
        points: [
          "Unique combination of traits that provide special perspectives",
          "Natural abilities aligned with your personality preferences",
          "Characteristic approaches that distinguish your interactions",
          "Inherent talents that come naturally to your type",
          "Special capabilities that serve you in various situations"
        ]
      },
      challenges: {
        title: "Potential Challenges",
        icon: "alert-circle",
        points: [
          "Areas where your natural tendencies may create friction",
          "Aspects of life that might require more conscious effort",
          "Potential blind spots in your perception or approach",
          "Situations that may cause stress or discomfort",
          "Tendencies that could benefit from mindful attention"
        ]
      },
      workStyle: {
        title: "Work Style",
        icon: "briefcase",
        points: [
          "Environmental factors that help you perform at your best",
          "Communication approaches that align with your preferences",
          "Project types and roles where you naturally excel",
          "Leadership or teamwork dynamics that suit your style",
          "Productivity patterns characteristic of your type"
        ]
      },
      relationships: {
        title: "Relationship Dynamics",
        icon: "users",
        points: [
          "How you tend to connect with and relate to others",
          "Communication patterns in close relationships",
          "Needs and expectations in personal interactions",
          "Ways you express care and affection",
          "Relationship qualities that help you thrive"
        ]
      },
      growthAreas: {
        title: "Growth Opportunities",
        icon: "trending-up",
        points: [
          "Skills that may complement your natural tendencies",
          "Areas where conscious development yields benefits",
          "Habits that could enhance your effectiveness",
          "Perspectives that broaden your natural worldview",
          "Practices that promote balanced personal growth"
        ]
      }
    };
    
    export function getPersonalityInsights(personalityType: string): PersonalityTypeInsights {
      return personalityInsights[personalityType] || defaultInsights;
    }