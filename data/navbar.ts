﻿import React from "react";
import { UserCircle, Brain, BarChart2, Leaf, Network, Newspaper } from "lucide-react";

export const assessmentItems = [
  {
    id: "personality-tests",
    title: "Personality Tests",
    description:
      "Discover your personality type with MBTI and Big Five assessments",
    icon: (className = "h-6 w-6 text-primary") => React.createElement(UserCircle, { className }),
    href: "/tests/test-info/personality",
  },
  {
    id: "cognitive-tests",
    title: "Cognitive Tests",
    description: "Measure your cognitive abilities with IQ and aptitude tests",
    icon: (className = "h-6 w-6 text-primary") => React.createElement(Brain, { className }),
    href: "/tests/test-info/cognitive",
  },
  {
    id: "career-tests",
    title: "Career Tests",
    description: "Explore your career options with career aptitude tests",
    icon: (className = "h-6 w-6 text-primary") => React.createElement(BarChart2, { className
    }),
    href: "/tests/test-info/career",
    },
  
];

export const communityItems = [
  {
    id: "leaderboard",
    title: "Leaderboard",
    description: "View the top performers in the Cerebral Quotient community",
    icon: (className = "h-6 w-6 text-primary") =>
      React.createElement(Leaf, { className }),
    href: "/community/leaderboard",
  },
  {
    id: "connections",
    title: "Connections",
    description:
      "Connect with other members of the Cerebral Quotient community",
    icon: (className = "h-6 w-6 text-primary") =>
      React.createElement(Network, { className }),
    href: "/community/connections",
  },
];

export const protectedCommunityItems = [
  {
    id: "leaderboard",
    title: "Leaderboard",
    description: "View the top performers in the Cerebral Quotient community",
    icon: (className = "h-6 w-6 text-primary") =>
      React.createElement(Leaf, { className }),
    href: "/community/leaderboard",
  },
  {
    id: "connections",
    title: "Connections",
    description:
      "Connect with other members of the Cerebral Quotient community",
    icon: (className = "h-6 w-6 text-primary") =>
      React.createElement(Network, { className }),
    href: "/community/connections",
  },
  {
    id: "blog",
    title: "Blog",
    description:
      "Dive into articles on personality tests, IQ assessments, and psychological insights.",
    icon: (className = "h-6 w-6 text-primary") =>
      React.createElement(Newspaper, { className }),
    href: "/blog",
  },
];
