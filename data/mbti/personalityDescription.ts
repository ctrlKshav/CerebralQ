import { PersonalityDescription } from "@/types/tests/mbti/results";

export const personalityDescriptions: Record<string, PersonalityDescription> = {
  ENTJ: {
    alias: "The Commander",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a bold leader with a vision for success, always ready to take charge and make big things happen. They’ve got a driven, inspiring vibe that makes them a total powerhouse, whether leading a team project or setting ambitious goals for themselves.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a bold leader with a vision for success, always ready to take charge and make big things happen. You’ve got a driven, inspiring vibe that makes you a total powerhouse, whether leading a team project or setting ambitious goals for yourself, ${firstname}.`;
      } else {
        return `You’re a bold leader with a vision for success, always ready to take charge and make big things happen. You’ve got a driven, inspiring vibe that makes you a total powerhouse, whether leading a team project or setting ambitious goals for yourself.`;
      }
    },
  },
  ENFP: {
    alias: "The Campaigner",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a burst of energy and creativity, always chasing new ideas and inspiring everyone around them. They love connecting with people, dreaming big, and making the world a brighter place with their passion and charm.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a burst of energy and creativity, always chasing new ideas and inspiring everyone around you. You love connecting with people, dreaming big, and making the world a brighter place with your passion and charm, ${firstname}.`;
      } else {
        return `You’re a burst of energy and creativity, always chasing new ideas and inspiring everyone around you. You love connecting with people, dreaming big, and making the world a brighter place with your passion and charm.`;
      }
    },
  },
  ENFJ: {
    alias: "The Protagonist",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a natural leader with a heart full of passion, always inspiring others to be their best selves. They’ve got a warm, uplifting vibe that makes them a true changemaker, whether rallying friends for a cause or helping a loved one.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a natural leader with a heart full of passion, always inspiring others to be their best selves. You’ve got a warm, uplifting vibe that makes you a true changemaker, whether rallying friends for a cause or helping a loved one, ${firstname}.`;
      } else {
        return `You’re a natural leader with a heart full of passion, always inspiring others to be their best selves. You’ve got a warm, uplifting vibe that makes you a true changemaker, whether rallying friends for a cause or helping a loved one.`;
      }
    },
  },
  ESFJ: {
    alias: "The Consul",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a natural people-person who loves bringing everyone together, always making sure the people around them feel cared for and supported. They’ve got a big, warm heart that shines whether hosting a game night or checking in on family.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a natural people-person who loves bringing everyone together, always making sure the people around you feel cared for and supported. You’ve got a big, warm heart that shines whether hosting a game night or checking in on family, ${firstname}.`;
      } else {
        return `You’re a natural people-person who loves bringing everyone together, always making sure the people around you feel cared for and supported. You’ve got a big, warm heart that shines whether hosting a game night or checking in on family.`;
      }
    },
  },
  ESTJ: {
    alias: "The Executive",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a natural leader who loves getting things done, always ready to take charge and make sure everything runs smoothly. They’ve got a strong, dependable vibe that makes them a go-to person, whether organizing a project or planning an event.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a natural leader who loves getting things done, always ready to take charge and make sure everything runs smoothly. You’ve got a strong, dependable vibe that makes you a go-to person, whether organizing a project or planning an event, ${firstname}.`;
      } else {
        return `You’re a natural leader who loves getting things done, always ready to take charge and make sure everything runs smoothly. You’ve got a strong, dependable vibe that makes you a go-to person, whether organizing a project or planning an event.`;
      }
    },
  },
  ENTP: {
    alias: "The Debater",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a quick-thinker with a spark of curiosity, always ready to dive into a new idea or challenge the status quo. They’ve got a clever, energetic vibe that makes them a total innovator, whether sparking debates or brainstorming wild projects.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a quick-thinker with a spark of curiosity, always ready to dive into a new idea or challenge the status quo. You’ve got a clever, energetic vibe that makes you a total innovator, whether sparking debates or brainstorming wild projects, ${firstname}.`;
      } else {
        return `You’re a quick-thinker with a spark of curiosity, always ready to dive into a new idea or challenge the status quo. You’ve got a clever, energetic vibe that makes you a total innovator, whether sparking debates or brainstorming wild projects.`;
      }
    },
  },
  ESTP: {
    alias: "The Entrepreneur",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a go-getter who loves living in the moment, always ready to jump into action and make things happen. They’ve got a bold, fun vibe that lights up any room, whether leading a project or trying a new adventure.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a go-getter who loves living in the moment, always ready to jump into action and make things happen. You’ve got a bold, fun vibe that lights up any room, whether leading a project or trying a new adventure, ${firstname}.`;
      } else {
        return `You’re a go-getter who loves living in the moment, always ready to jump into action and make things happen. You’ve got a bold, fun vibe that lights up any room, whether leading a project or trying a new adventure.`;
      }
    },
  },
  ESFP: {
    alias: "The Entertainer",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is the life of the party, always bringing joy and energy wherever they go. They’ve got a vibrant, fun-loving spirit that makes everyone smile, whether cracking jokes at a hangout or planning a spontaneous dance party.`;
      } else if (firstname && !thirdPerson) {
        return `You’re the life of the party, always bringing joy and energy wherever you go. You’ve got a vibrant, fun-loving spirit that makes everyone smile, whether cracking jokes at a hangout or planning a spontaneous dance party, ${firstname}.`;
      } else {
        return `You’re the life of the party, always bringing joy and energy wherever you go. You’ve got a vibrant, fun-loving spirit that makes everyone smile, whether cracking jokes at a hangout or planning a spontaneous dance party.`;
      }
    },
  },
  ISTJ: {
    alias: "The Logistician",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is the kind of person everyone turns to when they need to get stuff done—super organized, totally reliable, and always ready with a solid plan. They’ve got a quiet strength that makes them a rockstar in their own way, whether acing a group project or keeping their space in perfect order.`;
      } else if (firstname && !thirdPerson) {
        return `You’re the kind of person everyone turns to when they need to get stuff done—super organized, totally reliable, and always ready with a solid plan. You’ve got a quiet strength that makes you a rockstar in your own way, whether acing a group project or keeping your space in perfect order, ${firstname}.`;
      } else {
        return `You’re the kind of person everyone turns to when they need to get stuff done—super organized, totally reliable, and always ready with a solid plan. You’ve got a quiet strength that makes you a rockstar in your own way, whether acing a group project or keeping your space in perfect order.`;
      }
    },
  },
  ISFJ: {
    alias: "The Defender",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is the kind of person who makes everyone feel cared for—thoughtful, loyal, and always ready to lend a helping hand. They’ve got a big heart that makes them so special, whether remembering a friend’s favorite snack or making sure their family feels supported.`;
      } else if (firstname && !thirdPerson) {
        return `You’re the kind of person who makes everyone feel cared for—thoughtful, loyal, and always ready to lend a helping hand. You’ve got a big heart that makes you so special, whether remembering a friend’s favorite snack or making sure your family feels supported, ${firstname}.`;
      } else {
        return `You’re the kind of person who makes everyone feel cared for—thoughtful, loyal, and always ready to lend a helping hand. You’ve got a big heart that makes you so special, whether remembering a friend’s favorite snack or making sure your family feels supported.`;
      }
    },
  },
  INFJ: {
    alias: "The Advocate",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a dreamer with a big heart, always thinking about how to make the world a better place. They’ve got a quiet passion that lights up everything they do, whether having deep conversations with their best friend or coming up with ideas to help others.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a dreamer with a big heart, always thinking about how to make the world a better place. You’ve got a quiet passion that lights up everything you do, whether having deep conversations with your best friend or coming up with ideas to help others, ${firstname}.`;
      } else {
        return `You’re a dreamer with a big heart, always thinking about how to make the world a better place. You’ve got a quiet passion that lights up everything you do, whether having deep conversations with your best friend or coming up with ideas to help others.`;
      }
    },
  },
  INTJ: {
    alias: "The Architect",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a big-picture thinker with a knack for turning their ideas into reality—always planning, strategizing, and chasing their goals with laser focus. They’ve got a sharp mind that makes them a total visionary, whether mapping out their dream career or solving a tricky problem.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a big-picture thinker with a knack for turning your ideas into reality—always planning, strategizing, and chasing your goals with laser focus. You’ve got a sharp mind that makes you a total visionary, whether mapping out your dream career or solving a tricky problem, ${firstname}.`;
      } else {
        return `You’re a big-picture thinker with a knack for turning your ideas into reality—always planning, strategizing, and chasing your goals with laser focus. You’ve got a sharp mind that makes you a total visionary, whether mapping out your dream career or solving a tricky problem.`;
      }
    },
  },
  ISTP: {
    alias: "The Virtuoso",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is the kind of person who loves figuring things out with their hands and jumping into action—always tinkering, exploring, and solving problems on the fly. They’ve got a cool, practical vibe that makes them a total pro at living in the moment, whether fixing something that’s broken or trying a new skate trick.`;
      } else if (firstname && !thirdPerson) {
        return `You’re the kind of person who loves figuring things out with your hands and jumping into action—always tinkering, exploring, and solving problems on the fly. You’ve got a cool, practical vibe that makes you a total pro at living in the moment, whether fixing something that’s broken or trying a new skate trick, ${firstname}.`;
      } else {
        return `You’re the kind of person who loves figuring things out with your hands and jumping into action—always tinkering, exploring, and solving problems on the fly. You’ve got a cool, practical vibe that makes you a total pro at living in the moment, whether fixing something that’s broken or trying a new skate trick.`;
      }
    },
  },
  ISFP: {
    alias: "The Adventurer",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a free spirit with a big heart, always chasing beauty and creativity in everything they do. They’ve got a unique, artsy vibe that makes them so special, whether snapping a photo of a sunset or doodling in their sketchbook.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a free spirit with a big heart, always chasing beauty and creativity in everything you do. You’ve got a unique, artsy vibe that makes you so special, whether snapping a photo of a sunset or doodling in your sketchbook, ${firstname}.`;
      } else {
        return `You’re a free spirit with a big heart, always chasing beauty and creativity in everything you do. You’ve got a unique, artsy vibe that makes you so special, whether snapping a photo of a sunset or doodling in your sketchbook.`;
      }
    },
  },
  INFP: {
    alias: "The Mediator",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a dreamer with a heart full of kindness, always imagining a better world and looking for ways to make it happen. They’ve got a gentle, creative spirit that makes them so special, whether writing a heartfelt poem or standing up for what they believe in.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a dreamer with a heart full of kindness, always imagining a better world and looking for ways to make it happen. You’ve got a gentle, creative spirit that makes you so special, whether writing a heartfelt poem or standing up for what you believe in, ${firstname}.`;
      } else {
        return `You’re a dreamer with a heart full of kindness, always imagining a better world and looking for ways to make it happen. You’ve got a gentle, creative spirit that makes you so special, whether writing a heartfelt poem or standing up for what you believe in.`;
      }
    },
  },
  INTP: {
    alias: "The Logician",
    description: (firstname, thirdPerson): string => {
      if (firstname && thirdPerson) {
        return `${firstname} is a curious thinker with a mind that’s always buzzing with ideas, always digging into the “why” behind everything. They’ve got a sharp, inquisitive vibe that makes them so unique, whether researching a new topic or debating a big idea with a friend.`;
      } else if (firstname && !thirdPerson) {
        return `You’re a curious thinker with a mind that’s always buzzing with ideas, always digging into the “why” behind everything. You’ve got a sharp, inquisitive vibe that makes you so unique, whether researching a new topic or debating a big idea with a friend, ${firstname}.`;
      } else {
        return `You’re a curious thinker with a mind that’s always buzzing with ideas, always digging into the “why” behind everything. You’ve got a sharp, inquisitive vibe that makes you so unique, whether researching a new topic or debating a big idea with a friend.`;
      }
    },
  },
};

export function getPersonalityDescription(
  personalityType: string
): PersonalityDescription {
  return personalityDescriptions[personalityType];
}
