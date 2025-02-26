import { TestData } from "@/types/tests/mbti"
export const testData: TestData[] = [
    {
      "id": 1,
      "test_name": "MBTI Personality Test",
      "sections": [
        {
          "id": 1,
          "title": "Energy Orientation",
          "description": "Choose the option that feels most natural to you",
          "dimension": "E-I",
          "icon": "Battery"
        },
        {
          "id": 2,
          "title": "Information Processing",
          "description": "Select the statement that resonates more",
          "dimension": "S-N",
          "icon": "Lightbulb"
        },
        {
          "id": 3,
          "title": "Decision Making",
          "description": "Which approach feels more natural?",
          "dimension": "T-F",
          "icon": "Brain"
        },
        {
          "id": 4,
          "title": "Lifestyle Approach",
          "description": "Choose your preferred style",
          "dimension": "J-P",
          "icon": "Compass"
        }
      ],
      "questions": [
        // Energy Orientation (E-I) - Section 1 (15 questions)
        {
          "id": "1",
          "text": "I feel refreshed after attending a lively social event.",
          "type": "likert",
          "icon": "Party",
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
          "text": "I recharge best by spending time alone with my thoughts.",
          "type": "likert",
          "icon": "Solitude",
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
          "text": "I enjoy meeting new people and starting conversations.",
          "type": "likert",
          "icon": "Handshake",
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
          "text": "I prefer a quiet evening at home over a night out.",
          "type": "likert",
          "icon": "Home",
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
          "text": "I thrive in group discussions and brainstorming sessions.",
          "type": "likert",
          "icon": "Group",
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
          "text": "I often need time alone to process my day.",
          "type": "likert",
          "icon": "Reflection",
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
          "text": "I love being part of a large, bustling crowd.",
          "type": "likert",
          "icon": "Crowd",
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
          "text": "I find small talk with strangers exhausting.",
          "type": "likert",
          "icon": "Chat",
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
          "text": "I enjoy sharing my thoughts openly in a group.",
          "type": "likert",
          "icon": "Megaphone",
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
          "text": "I prefer deep conversations with one person over group chats.",
          "type": "likert",
          "icon": "Talk",
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
          "text": "I feel comfortable speaking up in a meeting.",
          "type": "likert",
          "icon": "Mic",
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
          "text": "I avoid crowded places when I can.",
          "type": "likert",
          "icon": "NoCrowd",
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
          "text": "I get excited about networking events.",
          "type": "likert",
          "icon": "Network",
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
          "text": "I need quiet time to feel balanced.",
          "type": "likert",
          "icon": "Peace",
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
          "text": "I enjoy being around lots of energy and activity.",
          "type": "likert",
          "icon": "Vibe",
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
        // Information Processing (S-N) - Section 2 (15 questions)
        {
          "id": "16",
          "text": "I focus on details rather than the big picture.",
          "type": "likert",
          "icon": "MagnifyingGlass",
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
          "text": "I enjoy exploring possibilities more than sticking to facts.",
          "type": "likert",
          "icon": "Cloud",
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
          "text": "I rely on past experiences to guide my decisions.",
          "type": "likert",
          "icon": "History",
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
          "text": "I often think about what could be rather than what is.",
          "type": "likert",
          "icon": "Dream",
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
          "text": "I prefer step-by-step instructions over a general overview.",
          "type": "likert",
          "icon": "Steps",
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
          "text": "I enjoy brainstorming creative solutions.",
          "type": "likert",
          "icon": "Idea",
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
          "text": "I focus on what’s happening right now.",
          "type": "likert",
          "icon": "Now",
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
          "text": "I like thinking about patterns and connections.",
          "type": "likert",
          "icon": "Link",
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
          "text": "I trust evidence I can observe with my senses.",
          "type": "likert",
          "icon": "Eye",
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
          "text": "I often get lost in daydreams or hypotheticals.",
          "type": "likert",
          "icon": "Imagination",
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
          "text": "I prefer dealing with concrete information.",
          "type": "likert",
          "icon": "Brick",
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
          "text": "I enjoy exploring abstract concepts.",
          "type": "likert",
          "icon": "Abstract",
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
          "text": "I notice small details others might miss.",
          "type": "likert",
          "icon": "Zoom",
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
          "text": "I like thinking about the future more than the past.",
          "type": "likert",
          "icon": "Future",
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
          "text": "I prefer hands-on tasks over theoretical discussions.",
          "type": "likert",
          "icon": "Hands",
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
        // Decision Making (T-F) - Section 3 (15 questions)
        {
          "id": "31",
          "text": "I prioritize logic over emotions when solving problems.",
          "type": "likert",
          "icon": "Logic",
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
          "text": "I make choices based on how they affect others’ feelings.",
          "type": "likert",
          "icon": "Heart",
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
          "text": "I value fairness over maintaining harmony.",
          "type": "likert",
          "icon": "Scales",
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
          "text": "I feel bad if my decisions upset someone.",
          "type": "likert",
          "icon": "SadFace",
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
          "text": "I analyze situations objectively, even if it’s unpopular.",
          "type": "likert",
          "icon": "Analysis",
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
          "text": "I consider personal values as much as facts.",
          "type": "likert",
          "icon": "Values",
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
          "text": "I prefer debates over compromising for peace.",
          "type": "likert",
          "icon": "Debate",
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
          "text": "I try to keep everyone happy when deciding.",
          "type": "likert",
          "icon": "Smile",
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
          "text": "I stick to principles even if it causes conflict.",
          "type": "likert",
          "icon": "Pillar",
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
          "text": "I weigh how decisions impact relationships.",
          "type": "likert",
          "icon": "People",
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
          "text": "I enjoy analyzing problems critically.",
          "type": "likert",
          "icon": "Critique",
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
          "text": "I avoid hurting others’ feelings when possible.",
          "type": "likert",
          "icon": "Care",
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
          "text": "I seek truth over comfort in discussions.",
          "type": "likert",
          "icon": "Truth",
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
          "text": "I empathize easily with others’ perspectives.",
          "type": "likert",
          "icon": "Empathy",
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
          "text": "I prefer consistent rules over situational exceptions.",
          "type": "likert",
          "icon": "Rule",
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
        // Lifestyle Approach (J-P) - Section 4 (15 questions)
        {
          "id": "46",
          "text": "I like having a clear plan for my day.",
          "type": "likert",
          "icon": "Plan",
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
          "text": "I enjoy going with the flow rather than scheduling.",
          "type": "likert",
          "icon": "Flow",
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
          "text": "I complete tasks well in advance of deadlines.",
          "type": "likert",
          "icon": "Early",
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
          "text": "I work best under last-minute pressure.",
          "type": "likert",
          "icon": "Rush",
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
          "text": "I like my environment to be orderly and tidy.",
          "type": "likert",
          "icon": "Tidy",
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
          "text": "I enjoy spontaneity in my daily routine.",
          "type": "likert",
          "icon": "Spark",
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
          "text": "I prefer closure over open-ended situations.",
          "type": "likert",
          "icon": "Done",
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
          "text": "I like keeping my plans flexible.",
          "type": "likert",
          "icon": "Flex",
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
          "text": "I organize my tasks with clear priorities.",
          "type": "likert",
          "icon": "List",
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
          "text": "I adapt easily to unexpected changes.",
          "type": "likert",
          "icon": "Adapt",
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
          "text": "I feel stressed without a set schedule.",
          "type": "likert",
          "icon": "Stress",
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
          "text": "I enjoy starting new projects without finishing old ones.",
          "type": "likert",
          "icon": "New",
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
          "text": "I like having everything in its place.",
          "type": "likert",
          "icon": "Place",
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
          "text": "I prefer exploring options over making commitments.",
          "type": "likert",
          "icon": "Explore",
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
          "text": "I feel satisfied when tasks are fully completed.",
          "type": "likert",
          "icon": "Finish",
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