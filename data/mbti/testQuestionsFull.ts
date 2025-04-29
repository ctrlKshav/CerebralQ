import { MBTI_TEST_ID } from "@/lib/constants"
import { TestData } from "@/types/tests/mbti/testQuestions"

export const getTestName = () => {
  return testData[0].id;
}

export const testData: TestData[] = [
  {
    "id": MBTI_TEST_ID,
    "test_name": "MBTI Personality Test",
    "sections": [
      {
        "id": 1,
        "title": "Energy Orientation",
        "description": "Choose the option that feels most natural to you",
        "dimension": "E-I",
      },
      {
        "id": 2,
        "title": "Information Processing",
        "description": "Select the statement that resonates more",
        "dimension": "S-N",
      },
      {
        "id": 3,
        "title": "Decision Making",
        "description": "Which approach feels more natural?",
        "dimension": "T-F",
      },
      {
        "id": 4,
        "title": "Lifestyle Approach",
        "description": "Choose your preferred style",
        "dimension": "J-P",
      }
    ],
    "questions": [
      // Energy Orientation (E-I) - Section 1 (15 questions, left = E, right = I)
      {
        "id": "1",
        "text": "I thrive in lively group settings and enjoy meeting new people.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": "Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "2",
        "text": "I feel most energized when I’m alone with my thoughts.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "3",
        "text": "I enjoy collaborating with others more than working solo.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "4",
        "text": "I find crowded places draining rather than exciting.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "5",
        "text": "I feel energized by attending large social events.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "6",
        "text": "I prefer one-on-one conversations over group discussions.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "7",
        "text": "I enjoy being the center of attention at gatherings.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "8",
        "text": "I feel overwhelmed by too much social interaction.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "9",
        "text": "I love sharing my ideas openly in group settings.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "10",
        "text": "I find small talk with strangers tiring.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "11",
        "text": "I actively participate in energetic social events.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "12",
        "text": "I need time alone to feel balanced after socializing.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "13",
        "text": "I enjoy engaging in public discussions with others.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "14",
        "text": "I feel more comfortable in small, familiar groups than large ones.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      {
        "id": "15",
        "text": "I look forward to networking events and meeting new contacts.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "E-I",
        "section": 1
      },
      // Information Processing (S-N) - Section 2 (15 questions, left = S, right = N)
      {
        "id": "16",
        "text": "I focus on the present moment rather than imagining future scenarios.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "17",
        "text": "I prefer exploring abstract ideas over practical details.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "18",
        "text": "I rely on concrete facts more than abstract patterns.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "19",
        "text": "I trust my gut instincts more than tangible evidence.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "20",
        "text": "I prefer following established routines over brainstorming new ideas.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "21",
        "text": "I focus more on what could be than what currently exists.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "22",
        "text": "I prefer detailed instructions over a big-picture overview.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "23",
        "text": "I find theoretical discussions more engaging than hands-on tasks.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "24",
        "text": "I focus on practical realities rather than daydreams.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "25",
        "text": "I enjoy exploring new ideas more than sticking to proven methods.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "26",
        "text": "I rely on careful observation rather than sudden inspiration.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "27",
        "text": "I prefer envisioning outcomes over analyzing details.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "28",
        "text": "I value facts and evidence over symbols and metaphors.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "29",
        "text": "I enjoy speculating about what might happen next.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      {
        "id": "30",
        "text": "I stick to proven methods rather than experimenting with new approaches.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "S-N",
        "section": 2
      },
      // Decision Making (T-F) - Section 3 (15 questions, left = T, right = F)
      {
        "id": "31",
        "text": "I base my decisions on logical analysis rather than emotions.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "32",
        "text": "I value harmony more than sticking to strict principles.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "33",
        "text": "I prioritize fairness over avoiding hurt feelings in decisions.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "34",
        "text": "I base my choices on personal values rather than objective facts.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "35",
        "text": "I rely on objective reasoning over empathy when making choices.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "36",
        "text": "I prefer compromising over debating to prove a point.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "37",
        "text": "I value consistent principles over maintaining relationships.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "38",
        "text": "I choose options that feel right over those that make logical sense.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "39",
        "text": "I prioritize justice over compassion in tough situations.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "40",
        "text": "I avoid conflict even if it means bending the truth.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "41",
        "text": "I focus on rational outcomes over emotional impact.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "42",
        "text": "I make decisions with my heart rather than my head.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "43",
        "text": "I prefer critiquing ideas over supporting others emotionally.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "44",
        "text": "I value personal connections over consistent rules.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      {
        "id": "45",
        "text": "I aim to prove my point rather than understand others’ perspectives.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "T-F",
        "section": 3
      },
      // Lifestyle Approach (J-P) - Section 4 (15 questions, left = J, right = P)
      {
        "id": "46",
        "text": "I prefer keeping my options open rather than making firm plans.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "47",
        "text": "I feel most productive when following a clear schedule.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "48",
        "text": "I work best when I can procrastinate until the last minute.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "49",
        "text": "I prefer completing tasks promptly rather than leaving them unfinished.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "50",
        "text": "I enjoy spontaneity more than predictability in my day.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "51",
        "text": "I prefer planning for every scenario rather than adapting on the fly.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "52",
        "text": "I prefer exploring new possibilities over settling things quickly.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "53",
        "text": "I thrive in structured environments with clear deadlines.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "54",
        "text": "I enjoy starting new projects without finishing old ones.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "55",
        "text": "I prefer a structured approach over a flexible one.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "56",
        "text": "I thrive in unpredictable situations over planned ones.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "57",
        "text": "I prefer an organized environment over a messy one.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "58",
        "text": "I enjoy the freedom of not having everything decided.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "59",
        "text": "I prefer preparing in advance over improvising.",
        "type": "likert",
        "dominantSide": "left",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      },
      {
        "id": "60",
        "text": "I enjoy the process more than completing tasks fully.",
        "type": "likert",
        "dominantSide": "right",
        "options": [
          { "value": "1", "label": "Strongly Disagree" },
          { "value": "2", "label": "Disagree" },
          { "value": "3", "label": "Neutral" },
          { "value": "4", "label": " Agree" },
          { "value": "5", "label": "Strongly Agree" }
        ],
        "dimension": "J-P",
        "section": 4
      }
    ]
  }
]