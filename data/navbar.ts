import React from "react";
import { UserCircle, Brain, BarChart2, Leaf, Network } from "lucide-react";

export const assessmentItems = [
  {
    title: "Personality Tests",
    description:
      "Discover your personality type with MBTI and Big Five assessments",
    icon: (className = "h-6 w-6 text-primary") => React.createElement(UserCircle, { className }),
    href: "/assessments/personality",
  },
  {
    title: "Cognitive Tests",
    description: "Measure your cognitive abilities with IQ and aptitude tests",
    icon: (className = "h-6 w-6 text-primary") => React.createElement(Brain, { className }),
    href: "/assessments/cognitive",
  },
  {
    title: "Analytics",
    description: "View your comprehensive test results and insights",
    icon: (className = "h-6 w-6 text-primary") => React.createElement(BarChart2, { className }),
    href: "/profile/analytics",
  },
];

export const communityItems = [
  {
    title: "Leaderboard",
    description: "View the top performers in the Cerebral Quotient community",
    icon: (className = "h-6 w-6 text-primary") =>
      React.createElement(Leaf, { className }),
    href: "/community/leaderboard",
  },
  {
    title: "Connections",
    description:
      "Connect with other members of the Cerebral Quotient community",
    icon: (className = "h-6 w-6 text-primary") =>
      React.createElement(Network, { className }),
    href: "/community/connections",
  },
];
