import { MBTI_TEST_ID } from "@/lib/constants";
import { TestQuestionsData } from "@/types/tests/testQuestions";

export const mbtiTestQuestionsData: TestQuestionsData = {
  id: MBTI_TEST_ID,
  test_name: "MBTI Personality Test",
  totalQuestions: 18,
  sections:{"Energy":
    {
      id: 1,
      title: "Energy Orientation",
      description: "Choose the option that feels most natural to you",
      dimension: "E-I",
      icon: "Battery",
      totalQuestions: 4,
    },
    "Information":{
      id: 2,
      title: "Information Processing",
      description: "Select the statement that resonates more",
      dimension: "S-N",
      icon: "Lightbulb",
      totalQuestions: 6,
    },
    "Decision":{
      id: 3,
      title: "Decision Making",
      description: "Which approach feels more natural?",
      dimension: "T-F",
      icon: "Brain",
      totalQuestions: 4,
    },
    "Lifestyle":{
      id: 4,
      title: "Lifestyle Approach",
      description: "Choose your preferred style",
      dimension: "J-P",
      icon: "Compass",
      totalQuestions: 4,
    },
  },
  questions: [
    {
      id: "1",
      text: "I prefer spending time alone rather than interacting with many people at parties.",
       
      icon: "Users",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "2",
      text: "I tend to be more speculative than realistic.",
       
      icon: "Clipboard",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "3",
      text: "I prefer exploring possibilities and concepts rather than focusing on established facts.",
       
      icon: "AlertTriangle",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "4",
      text: "I am more impressed by emotions than principles.",
       
      icon: "Award",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "5",
      text: "I am more drawn toward the touching than the convincing.",
       
      icon: "Heart",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "6",
      text: "I prefer to work flexibly rather than to strict deadlines.",
       
      icon: "Clock",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "7",
      text: "I tend to make decisions somewhat impulsively rather than after careful consideration.",
       
      icon: "Crosshair",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "8",
      text: "After socializing, I need quiet time alone to recharge.",
       
      icon: "Battery",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "9",
      text: "I am more attracted to imaginative people than sensible people.",
       
      icon: "Anchor",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "10",
      text: "I am more interested in what is possible than what is actual.",
       
      icon: "Map",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "11",
      text: "I need quiet time to myself after social events.",
       
      icon: "Zap",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "12",
      text: "I rely on abstract ideas more than facts and details.",
       
      icon: "FileText",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "13",
      text: "I make decisions based on emotions rather than logic.",
       
      icon: "GitBranch",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "14",
      text: "I prefer being spontaneous rather than planning things in advance.",
       
      icon: "Calendar",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "15",
      text: "I find it difficult to initiate conversations with new people.",
       
      icon: "Coffee",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "16",
      text: "I prefer metaphorical and conceptual explanations over concrete and literal ones.",
       
      icon: "Book",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "17",
      text: "I prioritize personal values and harmony over objective criteria when making decisions.",
       
      icon: "Filter",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "18",
      text: "I prefer flexible and adaptable environments over organized and structured ones.",
       
      icon: "Home",
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: "Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
  ],
};
