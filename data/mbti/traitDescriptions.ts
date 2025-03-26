import { TraitDescriptions } from "@/types/tests/mbti";
export const personalityTraitDescriptions: Record<string, TraitDescriptions> = {
  ENTJ: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about taking action with people—they love leading the charge, maybe rallying their friends for a big project.`;
        } else if (username && !thirdPerson) {
          return `You’re all about taking action with people, ${username}—you love leading the charge, maybe rallying your friends for a big project.`;
        } else {
          return `You’re all about taking action with people—you love leading the charge, maybe rallying your friends for a big project.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is a big-picture thinker, always looking at the future—like planning where they’ll be in five years.`;
        } else if (username && !thirdPerson) {
          return `You’re a big-picture thinker, always looking at the future—like planning where you’ll be in five years, ${username}.`;
        } else {
          return `You’re a big-picture thinker, always looking at the future—like planning where you’ll be in five years.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes decisions with logic, aiming for what gets results—like choosing a strategy that guarantees success.`;
        } else if (username && !thirdPerson) {
          return `You make decisions with logic, aiming for what gets results—like choosing a strategy that guarantees success, ${username}.`;
        } else {
          return `You make decisions with logic, aiming for what gets results—like choosing a strategy that guarantees success.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} thrives on structure, feeling best when they’ve got a clear plan—like mapping out their goals for the month.`;
        } else if (username && !thirdPerson) {
          return `You thrive on structure, ${username}, feeling best when you’ve got a clear plan—like mapping out your goals for the month.`;
        } else {
          return `You thrive on structure, feeling best when you’ve got a clear plan—like mapping out your goals for the month.`;
        }
      },
    },
  },
  ENFJ: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about connecting with people—they love being around others, maybe leading a group discussion with their infectious energy.`;
        } else if (username && !thirdPerson) {
          return `You’re all about connecting with people, ${username}—you love being around others, maybe leading a group discussion with your infectious energy.`;
        } else {
          return `You’re all about connecting with people—you love being around others, maybe leading a group discussion with your infectious energy.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is a big-picture thinker, always imagining how to make the world better—like dreaming up ways to support their community.`;
        } else if (username && !thirdPerson) {
          return `You’re a big-picture thinker, always imagining how to make the world better—like dreaming up ways to support your community, ${username}.`;
        } else {
          return `You’re a big-picture thinker, always imagining how to make the world better—like dreaming up ways to support your community.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes choices with their emotions, focusing on what feels right—like supporting a friend even if it’s not the “logical” choice.`;
        } else if (username && !thirdPerson) {
          return `You make choices with your emotions, focusing on what feels right—like supporting a friend even if it’s not the “logical” choice, ${username}.`;
        } else {
          return `You make choices with your emotions, focusing on what feels right—like supporting a friend even if it’s not the “logical” choice.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} feels best with a plan, like organizing a group event to make sure everyone has a great time.`;
        } else if (username && !thirdPerson) {
          return `You feel best with a plan, ${username}, like organizing a group event to make sure everyone has a great time.`;
        } else {
          return `You feel best with a plan, like organizing a group event to make sure everyone has a great time.`;
        }
      },
    },
  },
  ESFJ: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about being with people—they love chatting with friends, maybe planning a big group hangout.`;
        } else if (username && !thirdPerson) {
          return `You’re all about being with people, ${username}—you love chatting with friends, maybe planning a big group hangout.`;
        } else {
          return `You’re all about being with people—you love chatting with friends, maybe planning a big group hangout.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} focuses on the little things, like making sure everyone’s comfortable at a party they’re hosting.`;
        } else if (username && !thirdPerson) {
          return `You focus on the little things, like making sure everyone’s comfortable at a party you’re hosting, ${username}.`;
        } else {
          return `You focus on the little things, like making sure everyone’s comfortable at a party you’re hosting.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes choices with their emotions, focusing on what feels right—like helping a friend through a tough time.`;
        } else if (username && !thirdPerson) {
          return `You make choices with your emotions, focusing on what feels right—like helping a friend through a tough time, ${username}.`;
        } else {
          return `You make choices with your emotions, focusing on what feels right—like helping a friend through a tough time.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} feels best with a plan, like organizing their week to make sure everyone’s taken care of.`;
        } else if (username && !thirdPerson) {
          return `You feel best with a plan, ${username}, like organizing your week to make sure everyone’s taken care of.`;
        } else {
          return `You feel best with a plan, like organizing your week to make sure everyone’s taken care of.`;
        }
      },
    },
  },
  ESTJ: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about being with people—they love leading the charge, maybe rallying their friends for a big event.`;
        } else if (username && !thirdPerson) {
          return `You’re all about being with people, ${username}—you love leading the charge, maybe rallying your friends for a big event.`;
        } else {
          return `You’re all about being with people—you love leading the charge, maybe rallying your friends for a big event.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} focuses on what’s practical, like making sure every step of a plan is covered—like double-checking their to-do list.`;
        } else if (username && !thirdPerson) {
          return `You focus on what’s practical, like making sure every step of a plan is covered—like double-checking your to-do list, ${username}.`;
        } else {
          return `You focus on what’s practical, like making sure every step of a plan is covered—like double-checking your to-do list.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes decisions with logic, going for what works best—like choosing the most efficient way to finish a task.`;
        } else if (username && !thirdPerson) {
          return `You make decisions with logic, going for what works best—like choosing the most efficient way to finish a task, ${username}.`;
        } else {
          return `You make decisions with logic, going for what works best—like choosing the most efficient way to finish a task.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} thrives on structure, feeling best when they’ve got a solid plan—like scheduling their week on Sunday night.`;
        } else if (username && !thirdPerson) {
          return `You thrive on structure, ${username}, feeling best when you’ve got a solid plan—like scheduling your week on Sunday night.`;
        } else {
          return `You thrive on structure, feeling best when you’ve got a solid plan—like scheduling your week on Sunday night.`;
        }
      },
    },
  },
  ENTP: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about connecting with people—they love chatting with friends, maybe throwing around big ideas at a party.`;
        } else if (username && !thirdPerson) {
          return `You’re all about connecting with people, ${username}—you love chatting with friends, maybe throwing around big ideas at a party.`;
        } else {
          return `You’re all about connecting with people—you love chatting with friends, maybe throwing around big ideas at a party.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is a big-picture thinker, always dreaming up new possibilities—like imagining how to start their own app.`;
        } else if (username && !thirdPerson) {
          return `You’re a big-picture thinker, always dreaming up new possibilities—like imagining how to start your own app, ${username}.`;
        } else {
          return `You’re a big-picture thinker, always dreaming up new possibilities—like imagining how to start your own app.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes decisions with logic, going for what makes sense—like picking a solution that solves a problem fastest.`;
        } else if (username && !thirdPerson) {
          return `You make decisions with logic, going for what makes sense—like picking a solution that solves a problem fastest, ${username}.`;
        } else {
          return `You make decisions with logic, going for what makes sense—like picking a solution that solves a problem fastest.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is super flexible, jumping into things as they come—like starting a new project on a whim.`;
        } else if (username && !thirdPerson) {
          return `You’re super flexible, ${username}, jumping into things as they come—like starting a new project on a whim.`;
        } else {
          return `You’re super flexible, jumping into things as they come—like starting a new project on a whim.`;
        }
      },
    },
  },
  ESFP: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about being with people—they love chatting with friends, maybe hyping everyone up at a concert.`;
        } else if (username && !thirdPerson) {
          return `You’re all about being with people, ${username}—you love chatting with friends, maybe hyping everyone up at a concert.`;
        } else {
          return `You’re all about being with people—you love chatting with friends, maybe hyping everyone up at a concert.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} focuses on the moment, soaking in every detail—like noticing the vibe of a room as soon as they walk in.`;
        } else if (username && !thirdPerson) {
          return `You focus on the moment, soaking in every detail—like noticing the vibe of a room as soon as you walk in, ${username}.`;
        } else {
          return `You focus on the moment, soaking in every detail—like noticing the vibe of a room as soon as you walk in.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes choices with their emotions, going for what feels good—like picking a fun activity over a practical one.`;
        } else if (username && !thirdPerson) {
          return `You make choices with your emotions, going for what feels good—like picking a fun activity over a practical one, ${username}.`;
        } else {
          return `You make choices with your emotions, going for what feels good—like picking a fun activity over a practical one.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is super flexible, jumping into things as they come—like deciding to go to a festival last minute.`;
        } else if (username && !thirdPerson) {
          return `You’re super flexible, ${username}, jumping into things as they come—like deciding to go to a festival last minute.`;
        } else {
          return `You’re super flexible, jumping into things as they come—like deciding to go to a festival last minute.`;
        }
      },
    },
  },
  ESTP: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about being around people—they love hanging out with friends, maybe cracking jokes at a party.`;
        } else if (username && !thirdPerson) {
          return `You’re all about being around people, ${username}—you love hanging out with friends, maybe cracking jokes at a party.`;
        } else {
          return `You’re all about being around people—you love hanging out with friends, maybe cracking jokes at a party.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} focuses on what’s happening right now, like noticing every detail of a game they’re playing.`;
        } else if (username && !thirdPerson) {
          return `You focus on what’s happening right now, like noticing every detail of a game you’re playing, ${username}.`;
        } else {
          return `You focus on what’s happening right now, like noticing every detail of a game you’re playing.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes decisions with logic, going for what works best—like picking the quickest way to finish a task.`;
        } else if (username && !thirdPerson) {
          return `You make decisions with logic, going for what works best—like picking the quickest way to finish a task, ${username}.`;
        } else {
          return `You make decisions with logic, going for what works best—like picking the quickest way to finish a task.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is super flexible, jumping into things as they come—like deciding to go on a last-minute road trip.`;
        } else if (username && !thirdPerson) {
          return `You’re super flexible, ${username}, jumping into things as they come—like deciding to go on a last-minute road trip.`;
        } else {
          return `You’re super flexible, jumping into things as they come—like deciding to go on a last-minute road trip.`;
        }
      },
    },
  },
  ENFP: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is a mix of outgoing and reflective—they love chatting with people but also need quiet time to dream up their next big idea.`;
        } else if (username && !thirdPerson) {
          return `You’re a mix of outgoing and reflective, ${username}—you love chatting with people but also need quiet time to dream up your next big idea.`;
        } else {
          return `You’re a mix of outgoing and reflective—you love chatting with people but also need quiet time to dream up your next big idea.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about the big picture, imagining new possibilities and creative solutions.`;
        } else if (username && !thirdPerson) {
          return `You’re all about the big picture, imagining new possibilities and creative solutions, ${username}.`;
        } else {
          return `You’re all about the big picture, imagining new possibilities and creative solutions.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes choices with their emotions, caring deeply about what feels right.`;
        } else if (username && !thirdPerson) {
          return `You make choices with your emotions, caring deeply about what feels right, ${username}.`;
        } else {
          return `You make choices with your emotions, caring deeply about what feels right.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} thrives on being flexible, jumping into new adventures as they come.`;
        } else if (username && !thirdPerson) {
          return `You thrive on being flexible, ${username}, jumping into new adventures as they come.`;
        } else {
          return `You thrive on being flexible, jumping into new adventures as they come.`;
        }
      },
    },
  },
  INTP: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is more into their own thoughts than big crowds—they love diving into a good book or getting lost in a deep podcast.`;
        } else if (username && !thirdPerson) {
          return `You’re more into your own thoughts than big crowds, ${username}—you love diving into a good book or getting lost in a deep podcast.`;
        } else {
          return `You’re more into your own thoughts than big crowds—you love diving into a good book or getting lost in a deep podcast.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is a big-picture thinker, always exploring new concepts—like wondering how technology might change the future.`;
        } else if (username && !thirdPerson) {
          return `You’re a big-picture thinker, always exploring new concepts—like wondering how technology might change the future, ${username}.`;
        } else {
          return `You’re a big-picture thinker, always exploring new concepts—like wondering how technology might change the future.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes decisions with logic, aiming for what makes sense—like choosing a study method based on what’s most efficient.`;
        } else if (username && !thirdPerson) {
          return `You make decisions with logic, aiming for what makes sense—like choosing a study method based on what’s most efficient, ${username}.`;
        } else {
          return `You make decisions with logic, aiming for what makes sense—like choosing a study method based on what’s most efficient.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is pretty flexible, often going where their curiosity takes them—like starting a new project on a whim.`;
        } else if (username && !thirdPerson) {
          return `You’re pretty flexible, ${username}, often going where your curiosity takes you—like starting a new project on a whim.`;
        } else {
          return `You’re pretty flexible, often going where your curiosity takes you—like starting a new project on a whim.`;
        }
      },
    },
  },
  INFP: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is more into their own world than big crowds—they love quiet moments, like daydreaming while listening to their favorite song.`;
        } else if (username && !thirdPerson) {
          return `You’re more into your own world than big crowds, ${username}—you love quiet moments, like daydreaming while listening to your favorite song.`;
        } else {
          return `You’re more into your own world than big crowds—you love quiet moments, like daydreaming while listening to your favorite song.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is a big-picture thinker, always imagining what could be—like dreaming up a story that inspires others.`;
        } else if (username && !thirdPerson) {
          return `You’re a big-picture thinker, always imagining what could be—like dreaming up a story that inspires others, ${username}.`;
        } else {
          return `You’re a big-picture thinker, always imagining what could be—like dreaming up a story that inspires others.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes choices with their emotions, focusing on what feels right—like choosing a cause that speaks to their soul.`;
        } else if (username && !thirdPerson) {
          return `You make choices with your emotions, focusing on what feels right—like choosing a cause that speaks to your soul, ${username}.`;
        } else {
          return `You make choices with your emotions, focusing on what feels right—like choosing a cause that speaks to your soul.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is pretty flexible, often going where their heart leads—like deciding to write a new story idea on a whim.`;
        } else if (username && !thirdPerson) {
          return `You’re pretty flexible, ${username}, often going where your heart leads—like deciding to write a new story idea on a whim.`;
        } else {
          return `You’re pretty flexible, often going where your heart leads—like deciding to write a new story idea on a whim.`;
        }
      },
    },
  },
  ISFP: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is more into their own world than big crowds—they love quiet moments, like listening to music while they create something new.`;
        } else if (username && !thirdPerson) {
          return `You’re more into your own world than big crowds, ${username}—you love quiet moments, like listening to music while you create something new.`;
        } else {
          return `You’re more into your own world than big crowds—you love quiet moments, like listening to music while you create something new.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} focuses on the moment, soaking in the little things—like noticing the colors of the leaves on their walk.`;
        } else if (username && !thirdPerson) {
          return `You focus on the moment, soaking in the little things—like noticing the colors of the leaves on your walk, ${username}.`;
        } else {
          return `You focus on the moment, soaking in the little things—like noticing the colors of the leaves on your walk.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes choices with their emotions, going for what feels right—like picking a gift that matches their friend’s vibe.`;
        } else if (username && !thirdPerson) {
          return `You make choices with your emotions, going for what feels right—like picking a gift that matches your friend’s vibe, ${username}.`;
        } else {
          return `You make choices with your emotions, going for what feels right—like picking a gift that matches your friend’s vibe.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about being flexible, jumping into things as they come—like deciding to paint a mural on a whim.`;
        } else if (username && !thirdPerson) {
          return `You’re all about being flexible, ${username}, jumping into things as they come—like deciding to paint a mural on a whim.`;
        } else {
          return `You’re all about being flexible, jumping into things as they come—like deciding to paint a mural on a whim.`;
        }
      },
    },
  },
  ISTP: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is more into their own space than big crowds—they love chilling on their own, maybe working on a project or scrolling through a new tutorial.`;
        } else if (username && !thirdPerson) {
          return `You’re more into your own space than big crowds, ${username}—you love chilling on your own, maybe working on a project or scrolling through a new tutorial.`;
        } else {
          return `You’re more into your own space than big crowds—you love chilling on your own, maybe working on a project or scrolling through a new tutorial.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} focuses on what’s right in front of them, like figuring out how to fix a bike tire without overthinking the “what ifs.”`;
        } else if (username && !thirdPerson) {
          return `You focus on what’s right in front of you, like figuring out how to fix a bike tire without overthinking the “what ifs,” ${username}.`;
        } else {
          return `You focus on what’s right in front of you, like figuring out how to fix a bike tire without overthinking the “what ifs.”`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes decisions with logic, going for what works best—like picking the fastest route to class.`;
        } else if (username && !thirdPerson) {
          return `You make decisions with logic, going for what works best—like picking the fastest route to class, ${username}.`;
        } else {
          return `You make decisions with logic, going for what works best—like picking the fastest route to class.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about being flexible, jumping into things as they come—like deciding to go on a hike last minute.`;
        } else if (username && !thirdPerson) {
          return `You’re all about being flexible, ${username}, jumping into things as they come—like deciding to go on a hike last minute.`;
        } else {
          return `You’re all about being flexible, jumping into things as they come—like deciding to go on a hike last minute.`;
        }
      },
    },
  },
  INTJ: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is more into their own space than big crowds—they love diving deep into their thoughts, maybe while sipping coffee and brainstorming their next big idea.`;
        } else if (username && !thirdPerson) {
          return `You’re more into your own space than big crowds, ${username}—you love diving deep into your thoughts, maybe while sipping coffee and brainstorming your next big idea.`;
        } else {
          return `You’re more into your own space than big crowds—you love diving deep into your thoughts, maybe while sipping coffee and brainstorming your next big idea.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is a big-picture thinker, always looking at the future—like imagining where they’ll be in five years.`;
        } else if (username && !thirdPerson) {
          return `You’re a big-picture thinker, always looking at the future—like imagining where you’ll be in five years, ${username}.`;
        } else {
          return `You’re a big-picture thinker, always looking at the future—like imagining where you’ll be in five years.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes decisions with logic, aiming for what makes the most sense—like choosing a study method that gets them the best results.`;
        } else if (username && !thirdPerson) {
          return `You make decisions with logic, aiming for what makes the most sense—like choosing a study method that gets you the best results, ${username}.`;
        } else {
          return `You make decisions with logic, aiming for what makes the most sense—like choosing a study method that gets you the best results.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} thrives on having a plan, so they can stay in control—like creating a detailed schedule for their week.`;
        } else if (username && !thirdPerson) {
          return `You thrive on having a plan, ${username}, so you can stay in control—like creating a detailed schedule for your week.`;
        } else {
          return `You thrive on having a plan, so you can stay in control—like creating a detailed schedule for your week.`;
        }
      },
    },
  },
  INFJ: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is more into their own world than big crowds—they love quiet moments, like journaling their thoughts on a rainy day.`;
        } else if (username && !thirdPerson) {
          return `You’re more into your own world than big crowds, ${username}—you love quiet moments, like journaling your thoughts on a rainy day.`;
        } else {
          return `You’re more into your own world than big crowds—you love quiet moments, like journaling your thoughts on a rainy day.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is a big-picture thinker, always imagining what could be—like dreaming up ways to solve a problem they care about.`;
        } else if (username && !thirdPerson) {
          return `You’re a big-picture thinker, always imagining what could be—like dreaming up ways to solve a problem you care about, ${username}.`;
        } else {
          return `You’re a big-picture thinker, always imagining what could be—like dreaming up ways to solve a problem you care about.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes choices with their heart, focusing on what feels right—like choosing a cause that means a lot to them.`;
        } else if (username && !thirdPerson) {
          return `You make choices with your heart, focusing on what feels right—like choosing a cause that means a lot to you, ${username}.`;
        } else {
          return `You make choices with your heart, focusing on what feels right—like choosing a cause that means a lot to you.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} likes having a plan, so they can make sure everything aligns with their vision—like mapping out their goals for the year.`;
        } else if (username && !thirdPerson) {
          return `You like having a plan, ${username}, so you can make sure everything aligns with your vision—like mapping out your goals for the year.`;
        } else {
          return `You like having a plan, so you can make sure everything aligns with your vision—like mapping out your goals for the year.`;
        }
      },
    },
  },
  ISFJ: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is more into quiet moments than big parties—they love cozy nights in, maybe curled up with a good book or their favorite show.`;
        } else if (username && !thirdPerson) {
          return `You’re more into quiet moments than big parties, ${username}—you love cozy nights in, maybe curled up with a good book or your favorite show.`;
        } else {
          return `You’re more into quiet moments than big parties—you love cozy nights in, maybe curled up with a good book or your favorite show.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} notices the little things, like making sure their notes are perfectly organized before a big exam.`;
        } else if (username && !thirdPerson) {
          return `You notice the little things, like making sure your notes are perfectly organized before a big exam, ${username}.`;
        } else {
          return `You notice the little things, like making sure your notes are perfectly organized before a big exam.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} makes choices with their heart, always thinking about how others feel—like picking a gift that’s just right for a friend.`;
        } else if (username && !thirdPerson) {
          return `You make choices with your heart, always thinking about how others feel—like picking a gift that’s just right for a friend, ${username}.`;
        } else {
          return `You make choices with your heart, always thinking about how others feel—like picking a gift that’s just right for a friend.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} feels best when things are planned out—like knowing exactly what they’re cooking for dinner tonight.`;
        } else if (username && !thirdPerson) {
          return `You feel best when things are planned out, ${username}—like knowing exactly what you’re cooking for dinner tonight.`;
        } else {
          return `You feel best when things are planned out—like knowing exactly what you’re cooking for dinner tonight.`;
        }
      },
    },
  },
  ISTJ: {
    "E-I": {
      title: "Energy Style",
      leftLabel: "Extraversion",
      rightLabel: "Introversion",
      lightColor: "#4F46E5",
      darkColor: "#818CF8",
      left: { letter: "E", name: "Extraversion" },
      right: { letter: "I", name: "Introversion" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is more into their own space than big crowds—they love having time to think things over, maybe while sipping their morning coffee.`;
        } else if (username && !thirdPerson) {
          return `You’re more into your own space than big crowds, ${username}—you love having time to think things over, maybe while sipping your morning coffee.`;
        } else {
          return `You’re more into your own space than big crowds—you love having time to think things over, maybe while sipping your morning coffee.`;
        }
      },
    },
    "S-N": {
      title: "Information Processing",
      leftLabel: "Sensing",
      rightLabel: "Intuition",
      lightColor: "#10B981",
      darkColor: "#34D399",
      left: { letter: "S", name: "Sensing" },
      right: { letter: "N", name: "Intuition" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is a detail champ, making sure everything’s spot-on, like when they double-check their work before hitting send.`;
        } else if (username && !thirdPerson) {
          return `You’re a detail champ, making sure everything’s spot-on, like when you double-check your work before hitting send, ${username}.`;
        } else {
          return `You’re a detail champ, making sure everything’s spot-on, like when you double-check your work before hitting send.`;
        }
      },
    },
    "T-F": {
      title: "Decision Making",
      leftLabel: "Thinking",
      rightLabel: "Feeling",
      lightColor: "#F59E0B",
      darkColor: "#FBBF24",
      left: { letter: "T", name: "Thinking" },
      right: { letter: "F", name: "Feeling" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} thinks things through logically, choosing what makes the most sense—like picking the best study spot for finals.`;
        } else if (username && !thirdPerson) {
          return `You think things through logically, choosing what makes the most sense—like picking the best study spot for finals, ${username}.`;
        } else {
          return `You think things through logically, choosing what makes the most sense—like picking the best study spot for finals.`;
        }
      },
    },
    "J-P": {
      title: "External Orientation",
      leftLabel: "Judging",
      rightLabel: "Perceiving",
      lightColor: "#EC4899",
      darkColor: "#F472B6",
      left: { letter: "J", name: "Judging" },
      right: { letter: "P", name: "Perceiving" },
      getDominantTraitDescription: (
        username?: string,
        thirdPerson: boolean = false
      ): string => {
        if (username && thirdPerson) {
          return `${username} is all about having a plan—they feel best when they know what’s coming, like mapping out their week on Sunday night.`;
        } else if (username && !thirdPerson) {
          return `You’re all about having a plan, ${username}—you feel best when you know what’s coming, like mapping out your week on Sunday night.`;
        } else {
          return `You’re all about having a plan—you feel best when you know what’s coming, like mapping out your week on “

Sunday night.`;
        }
      },
    },
  },
};
// Default trait descriptions using ENTJ as fallback
const DEFAULT_TRAIT_DESCRIPTIONS: TraitDescriptions =
  personalityTraitDescriptions.ENTJ;

export function getPersonalityTraitDescriptions(
  personalityType: string
): TraitDescriptions {
  return (
    personalityTraitDescriptions[personalityType] || DEFAULT_TRAIT_DESCRIPTIONS
  );
}
