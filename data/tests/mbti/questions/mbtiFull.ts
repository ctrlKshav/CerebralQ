import { MBTI_TEST_ID } from "@/lib/constants";
import { MBTITestQuestionsData } from "@/types/tests/testQuestions";

export const mbtiTestQuestionsData: MBTITestQuestionsData = {
  id: MBTI_TEST_ID,
  test_name: "MBTI Personality Test",
  totalQuestions: 60,
  sections: {
    "Energy":{
      id: 1,
      title: "Energy Orientation",
      description: "Choose the option that feels most natural to you",
      dimension: "E-I",
      totalQuestions: 15,
    },
    "Information":{
      id: 2,
      title: "Information Processing",
      description: "Select the statement that resonates more",
      dimension: "S-N",
      totalQuestions: 15,
    },
    "Decision":{
      id: 3,
      title: "Decision Making",
      description: "Which approach feels more natural?",
      dimension: "T-F",
      totalQuestions: 15,
    },
    "Lifestyle":{
      id: 4,
      title: "Lifestyle Approach",
      description: "Choose your preferred style",
      dimension: "J-P",
      totalQuestions: 15,
    },
  },
  questions: [
    // Energy Orientation (E-I) - Section 1 (15 questions, Agree = I, Disagree = E)
    {
      id: "1",
      text: "I feel most energized when I’m alone with my thoughts.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "2",
      text: "I prefer a quiet evening at home over a social gathering.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "3",
      text: "I enjoy working by myself more than in a group.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "4",
      text: "I find crowded places draining rather than exciting.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "5",
      text: "I recharge best in a peaceful, solitary environment.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "6",
      text: "I prefer one-on-one conversations over group discussions.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "7",
      text: "I avoid being the center of attention whenever possible.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "8",
      text: "I feel overwhelmed by too much social interaction.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "9",
      text: "I keep my thoughts to myself rather than sharing them openly.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "10",
      text: "I find small talk with strangers tiring.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "11",
      text: "I prefer observing rather than participating in lively events.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "12",
      text: "I need time alone to feel balanced after socializing.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "13",
      text: "I enjoy deep, private reflection over public discussions.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "14",
      text: "I feel more comfortable in small, familiar groups than large ones.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    {
      id: "15",
      text: "I avoid networking events when I can.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "E-I",
      section: 1,
    },
    // Information Processing (S-N) - Section 2 (15 questions, Agree = N, Disagree = S)
    {
      id: "16",
      text: "I enjoy imagining future possibilities more than focusing on the present.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "17",
      text: "I prefer exploring abstract ideas over practical details.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "18",
      text: "I often think about patterns and connections rather than specifics.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "19",
      text: "I trust my gut instincts more than tangible evidence.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "20",
      text: "I enjoy brainstorming creative solutions over following routines.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "21",
      text: "I focus more on what could be than what currently exists.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "22",
      text: "I prefer a big-picture overview to detailed instructions.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "23",
      text: "I find theoretical discussions more engaging than hands-on tasks.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "24",
      text: "I often get lost in daydreams rather than focusing on reality.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "25",
      text: "I enjoy exploring new ideas more than sticking to proven methods.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "26",
      text: "I rely more on inspiration than observation.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "27",
      text: "I prefer envisioning outcomes over analyzing details.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "28",
      text: "I find meaning in symbols and metaphors more than facts.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "29",
      text: "I enjoy speculating about what might happen next.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    {
      id: "30",
      text: "I prefer innovative approaches over tried-and-true ones.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "S-N",
      section: 2,
    },
    // Decision Making (T-F) - Section 3 (15 questions, Agree = F, Disagree = T)
    {
      id: "31",
      text: "I prioritize people’s feelings over logical analysis in decisions.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "32",
      text: "I value harmony more than sticking to strict principles.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "33",
      text: "I avoid decisions that might hurt someone’s feelings.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "34",
      text: "I base my choices on personal values rather than objective facts.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "35",
      text: "I empathize easily with others’ emotions when deciding.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "36",
      text: "I prefer compromising over debating to prove a point.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "37",
      text: "I consider how decisions affect relationships more than fairness.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "38",
      text: "I choose options that feel right over those that make logical sense.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "39",
      text: "I prioritize compassion over justice in tough situations.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "40",
      text: "I avoid conflict even if it means bending the truth.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "41",
      text: "I weigh emotional impact more than rational outcomes.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "42",
      text: "I make decisions with my heart rather than my head.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "43",
      text: "I prefer supporting others over critiquing their ideas.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "44",
      text: "I value personal connections over consistent rules.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    {
      id: "45",
      text: "I focus on understanding others’ perspectives over proving a point.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "T-F",
      section: 3,
    },
    // Lifestyle Approach (J-P) - Section 4 (15 questions, Agree = P, Disagree = J)
    {
      id: "46",
      text: "I prefer keeping my options open rather than making firm plans.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "47",
      text: "I enjoy going with the flow over following a schedule.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "48",
      text: "I work best when I can procrastinate until the last minute.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "49",
      text: "I feel comfortable leaving tasks unfinished for a while.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "50",
      text: "I enjoy spontaneity more than predictability in my day.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "51",
      text: "I adapt to changes rather than planning for every scenario.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "52",
      text: "I prefer exploring new possibilities over settling things quickly.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "53",
      text: "I feel constrained by strict routines and deadlines.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "54",
      text: "I enjoy starting new projects without finishing old ones.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "55",
      text: "I prefer a flexible approach over a structured one.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "56",
      text: "I thrive in unpredictable situations over planned ones.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "57",
      text: "I feel at ease with a messy, unstructured environment.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "58",
      text: "I enjoy the freedom of not having everything decided.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "59",
      text: "I prefer improvising over preparing in advance.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
    {
      id: "60",
      text: "I enjoy the process more than completing tasks fully.",
       
      options: [
        { value: "1", label: "Strongly Disagree" },
        { value: "2", label: "Disagree" },
        { value: "3", label: "Neutral" },
        { value: "4", label: " Agree" },
        { value: "5", label: "Strongly Agree" },
      ],
      dimension: "J-P",
      section: 4,
    },
  ],
};
