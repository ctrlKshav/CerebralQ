import { 
  Brain, 
  Heart, 
  Users, 
  Lightbulb, 
  Compass, 
  Battery, 
  BookOpen,
  Coffee,
  Calendar,
  Smile
} from "lucide-react";
import { createElement, ReactElement } from "react";

export interface Question {
  id: string;
  text: string;
  description?: string;
  type: 'likert' | 'binary';
  icon: ReactElement;
  options?: Array<{
    value: string;
    label: string;
    description?: string;
  }>;
  dimension: 'E-I' | 'S-N' | 'T-F' | 'J-P';
  section: number;
}

export interface Section {
  id: number;
  title: string;
  description: string;
  dimension: 'E-I' | 'S-N' | 'T-F' | 'J-P';
}

export const sections: Section[] = [
  {
    id: 1,
    title: "Energy Orientation",
    description: "Choose the option that feels most natural to you",
    dimension: 'E-I'
  },
  {
    id: 2,
    title: "Information Processing",
    description: "Select the statement that resonates more",
    dimension: 'S-N'
  },
  {
    id: 3,
    title: "Decision Making",
    description: "Which approach feels more natural?",
    dimension: 'T-F'
  },
  {
    id: 4,
    title: "Lifestyle Approach",
    description: "Choose your preferred style",
    dimension: 'J-P'
  },
  {
    id: 5,
    title: "Energy Restoration",
    description: "How do you recharge?",
    dimension: 'E-I'
  },
]

export const questions: Question[] = [
  // Section 1: Energy Orientation
  {
    id: 'e-i-1',
    text: "After social gatherings, I typically feel...",
    type: 'binary',
    icon: createElement(Battery, { size: 24, className: "text-blue-500" }),
    options: [
      {
        value: 'E',
        label: 'Energized',
        description: 'Social gatherings boost my energy'
      },
      {
        value: 'I',
        label: 'Need to Recharge',
        description: 'I need quiet time to recover'
      }
    ],
    dimension: 'E-I',
    section: 1
  },
  {
    id: 'e-i-2',
    text: "I prefer weekends filled with activities",
    type: 'likert',
    icon: createElement(Calendar, { size: 24, className: "text-purple-500" }),
    dimension: 'E-I',
    section: 1
  },

  // Section 2: Information Processing
  {
    id: 's-n-1',
    text: "When solving problems, I tend to...",
    type: 'binary',
    icon: createElement(Lightbulb, { size: 24, className: "text-yellow-500" }),
    options: [
      {
        value: 'S',
        label: 'Focus on Facts',
        description: 'I trust concrete information and experience'
      },
      {
        value: 'N',
        label: 'Follow Intuition',
        description: 'I look for patterns and possibilities'
      }
    ],
    dimension: 'S-N',
    section: 2
  },
  {
    id: 's-n-2',
    text: "I trust practical experience over theoretical ideas",
    type: 'likert',
    icon: createElement(BookOpen, { size: 24, className: "text-green-500" }),
    dimension: 'S-N',
    section: 2
  },

  // Section 3: Decision Making
  {
    id: 't-f-1',
    text: "When making decisions, I prioritize...",
    type: 'binary',
    icon: createElement(Brain, { size: 24, className: "text-purple-500" }),
    options: [
      {
        value: 'T',
        label: 'Logic',
        description: 'Objective analysis and facts'
      },
      {
        value: 'F',
        label: 'Values',
        description: 'Personal and others\' feelings'
      }
    ],
    dimension: 'T-F',
    section: 3
  },
  {
    id: 't-f-2',
    text: "I consider emotional impact when making important decisions",
    type: 'likert',
    icon: createElement(Heart, { size: 24, className: "text-red-500" }),
    dimension: 'T-F',
    section: 3
  },
  {
    id: 't-f-3',
    text: "I prefer working in teams over working alone",
    type: 'likert',
    icon: createElement(Users, { size: 24, className: "text-blue-500" }),
    dimension: 'T-F',
    section: 3
  },
  {
    id: 't-f-4',
    text: "I prefer to plan my day in advance",
    type: 'likert',
    icon: createElement(Smile, { size: 24, className: "text-yellow-500" }),
    dimension: 'T-F',
    section: 3
  },

  // Section 4: Lifestyle Approach
  {
    id: 'j-p-1',
    text: "I prefer my work environment to be...",
    type: 'binary',
    icon: createElement(Compass, { size: 24, className: "text-green-500" }),
    options: [
      {
        value: 'J',
        label: 'Structured',
        description: 'Clear deadlines and organized systems'
      },
      {
        value: 'P',
        label: 'Flexible',
        description: 'Adaptable schedules and creative flow'
      }
    ],
    dimension: 'J-P',
    section: 4
  },

  // Section 5: Energy Restoration
  {
    id: 'e-i-3',
    text: "After a stressful day, I prefer to...",
    type: 'binary',
    icon: createElement(Coffee, { size: 24, className: "text-orange-500" }),
    options: [
      {
        value: 'E',
        label: 'Talk with Others',
        description: 'Share and process with friends'
      },
      {
        value: 'I',
        label: 'Reflect Alone',
        description: 'Spend time in quiet reflection'
      }
    ],
    dimension: 'E-I',
    section: 5
  }
];