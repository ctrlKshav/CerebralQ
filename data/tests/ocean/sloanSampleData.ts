import { ResultData } from "@/types/tests/ocean/results";

export const sampleResultData: ResultData = {
    username: null,
    firstname: null,
    personalityType: "SLOAN",
    personalityDescription: {
        alias: "The Social Organizer",
        description: (firstname, thirdPerson): string => {
            if (firstname && thirdPerson) {
                return `${firstname} is a highly social and organized individual who thrives in structured environments. They make plans and stick to them, always striving to finish tasks ahead of schedule. Their emotional nature makes them empathetic and easy to connect with, but they may also be prone to worry and frustration. They value tradition and familiarity, preferring group activities and maintaining strong relationships.`;
            } else if (firstname && !thirdPerson) {
                return `You are a highly social and organized individual who thrives in structured environments. You make plans and stick to them, always striving to finish tasks ahead of schedule. Your emotional nature makes you empathetic and easy to connect with, but you may also be prone to worry and frustration. You value tradition and familiarity, preferring group activities and maintaining strong relationships, ${firstname}.`;
            } else {
                return `You are a highly social and organized individual who thrives in structured environments. You make plans and stick to them, always striving to finish tasks ahead of schedule. Your emotional nature makes you empathetic and easy to connect with, but you may also be prone to worry and frustration. You value tradition and familiarity, preferring group activities and maintaining strong relationships.`;
            }
        },
    },
    completionDate: new Date().toLocaleDateString(),
    traitScores: {
        openness: { score: 6, total: 30, percentage: 20 },
        conscientiousness: { score: 24, total: 30, percentage: 80 },
        extraversion: { score: 24, total: 30, percentage: 80 },
        agreeableness: { score: 24, total: 30, percentage: 80 },
        neuroticism: { score: 24, total: 30, percentage: 80 },
    },
    personalityData: {
        career: {
            summary:
                "You excel in careers that allow you to interact with others, maintain order, and provide support. Your natural ability to organize and your empathetic nature make you ideal for roles in education, healthcare, or event planning.",
            superpowers: [
                {
                    title: "Organizational Skills",
                    description: "You have a talent for planning and executing tasks efficiently.",
                },
                {
                    title: "Social Connectivity",
                    description: "You easily connect with others and build strong relationships.",
                },
            ],
            growthAreas: [
                {
                    title: "Managing Anxiety",
                    description: "You may need to work on managing your worries and stress.",
                },
                {
                    title: "Embracing Change",
                    description: "You might find it challenging to adapt to new and unfamiliar situations.",
                },
            ],
            suggestions: [
                {
                    title: "Event Planner",
                    matchPercentage: 90,
                    description: "Your organizational skills and social nature make you perfect for coordinating events.",
                    qualityMatches: [
                        {
                            title: "Event Coordination",
                            description: "Your ability to plan and execute events ensures successful outcomes.",
                        },
                        {
                            title: "Team Collaboration",
                            description: "Your social skills foster strong teamwork and client relations.",
                        },
                    ],
                },
                {
                    title: "Teacher",
                    matchPercentage: 85,
                    description: "You enjoy helping others learn and thrive in structured environments.",
                    qualityMatches: [
                        {
                            title: "Classroom Management",
                            description: "Your organizational skills create an effective learning environment.",
                        },
                        {
                            title: "Student Support",
                            description: "Your empathy helps you connect with and support students.",
                        },
                    ],
                },
                {
                    title: "Nurse",
                    matchPercentage: 80,
                    description: "Your caring and organized approach suits healthcare roles.",
                    qualityMatches: [
                        {
                            title: "Patient Care",
                            description: "Your empathy ensures compassionate care for patients.",
                        },
                        {
                            title: "Task Organization",
                            description: "Your orderly nature keeps healthcare tasks on track.",
                        },
                    ],
                },
            ],
            actionSteps: [
                {
                    number: 1,
                    description: "Practice mindfulness techniques to manage stress.",
                },
                {
                    number: 2,
                    description: "Try to engage in new experiences to broaden your horizons.",
                },
                {
                    number: 3,
                    description: "Seek leadership roles where you can utilize your organizational skills.",
                },
            ],
        },
        relationships: [
            {
                title: "Relationships",
                subtitle: "How you show up in Relationships",
                description:
                    "You are warm, supportive, and reliable in your relationships. You value stability and deep connections, often prioritizing group activities and emotional bonds. Your empathy makes you a great partner, but you might need to work on managing stress and being open to new experiences.",
                compatibleTypes: ["RCOAI", "SCOAI", "SLOAI"],
                superpowers: [
                    {
                        title: "Loyalty",
                        description: "You are committed and dependable, always there for your loved ones.",
                    },
                    {
                        title: "Empathy",
                        description: "You deeply understand and share the feelings of others.",
                    },
                ],
                growthAreas: [
                    {
                        title: "Open Communication",
                        description: "You may need to share your feelings more freely to avoid bottling up emotions.",
                    },
                    {
                        title: "Flexibility",
                        description: "Be open to trying new activities or perspectives with your partner.",
                    },
                ],
                actionSteps: [
                    {
                        number: 1,
                        description: 'Share a personal feeling with your partner, like "I’ve been feeling stressed lately."',
                    },
                    {
                        number: 2,
                        description: "Plan a spontaneous activity with your partner to step out of your routine.",
                    },
                    {
                        number: 3,
                        description: "Look for partners who value your warmth and organizational skills.",
                    },
                ],
            },
            {
                title: "Friendships",
                subtitle: "How you shine with Friends",
                description:
                    "You’re the friend who brings everyone together, organizing group outings and fostering a sense of community. Your warmth and reliability make you a trusted confidant, though you may need to work on embracing spontaneity.",
                compatibleTypes: ["RCOAN", "SCOAN", "SLOAN"],
                superpowers: [
                    {
                        title: "Group Coordination",
                        description: "You excel at planning group activities that everyone enjoys.",
                    },
                    {
                        title: "Supportiveness",
                        description: "You’re always there to listen and offer emotional support.",
                    },
                ],
                growthAreas: [
                    {
                        title: "Embracing Spontaneity",
                        description: "You might resist unplanned activities, missing out on fun moments.",
                    },
                    {
                        title: "Managing Stress",
                        description: "High emotional sensitivity can lead to worry in friendships.",
                    },
                ],
                actionSteps: [
                    {
                        number: 1,
                        description: 'Let a friend plan an outing and go along with it, saying, "I’m up for anything!"',
                    },
                    {
                        number: 2,
                        description: 'Practice stress-relief techniques before social events to stay relaxed.',
                    },
                ],
            },
        ],
        growth: {
            summary:
                "Your growth journey focuses on managing emotional sensitivity and embracing new experiences. Your strengths in organization and social connection are powerful, but building resilience and adaptability can take you further.",
            superpowers: [
                {
                    title: "Perseverance",
                    description: "You’re determined and hardworking, always pushing to achieve your goals.",
                },
                {
                    title: "Social Support",
                    description: "Your strong network of friends and family is a key asset.",
                },
            ],
            growthAreas: [
                {
                    title: "Emotional Regulation",
                    description: "Work on reducing anxiety through relaxation techniques.",
                },
                {
                    title: "Open-Mindedness",
                    description: "Try to be more receptive to new ideas and experiences.",
                },
            ],
            actionSteps: [
                {
                    number: 1,
                    description: "Practice daily meditation to calm your mind and reduce stress.",
                },
                {
                    number: 2,
                    description: "Explore a new hobby or topic to broaden your perspective.",
                },
                {
                    number: 3,
                    description: "Reflect on your strengths as a SLOAN when feeling overwhelmed.",
                },
            ],
        },
        dailyHabits: {
            summary:
                "Structured routines that include social interactions and organizational tasks keep you energized. Balancing productivity with relaxation helps manage your emotional sensitivity.",
            habits: {
                morning: {
                    title: "Morning Routine",
                    description: "Start your day with a to-do list and a quick chat with a friend or family member.",
                },
                afternoon: {
                    title: "Afternoon Break",
                    description: "Take a moment to connect with colleagues or organize your workspace.",
                },
                evening: {
                    title: "Evening Wind-Down",
                    description: "Reflect on your achievements and practice deep breathing to relax.",
                },
            },
            communication: {
                summary:
                    "Your warm and supportive communication style builds strong connections. Being more direct and open about your needs can enhance your interactions.",
                tips: [
                    "Use positive reinforcement when giving feedback to maintain harmony.",
                    "Ask open-ended questions to deepen conversations, like 'What’s been exciting for you lately?'",
                ],
            },
        },
        valuesAndMotivators: {
            summary:
                "You value community, stability, and helping others. You’re motivated by recognition for your efforts and creating harmonious environments.",
            coreValues: [
                {
                    title: "Community",
                    description: "You thrive in group settings and value strong relationships.",
                },
                {
                    title: "Order",
                    description: "You appreciate structure and predictability in your life.",
                },
            ],
            motivators: [
                {
                    title: "Recognition",
                    description: "Being appreciated for your hard work fuels your motivation.",
                },
                {
                    title: "Harmony",
                    description: "You strive to maintain peaceful and cooperative relationships.",
                },
            ],
            actionItems: [
                {
                    number: 1,
                    description: "Join a community group to connect with like-minded individuals.",
                },
                {
                    number: 2,
                    description: "Set a goal to organize a group event and seek feedback.",
                },
                {
                    number: 3,
                    description: 'Reflect on a recent success by journaling about it.',
                },
            ],
        },
        communityConnection: {
            summary:
                "You thrive in communities where you can connect and contribute. Joining groups that align with your values strengthens your sense of belonging.",
            suggestions: [
                "Join a local volunteer group to give back and meet new people.",
                "Participate in online forums for organizers or community builders.",
            ],
        },
        actionItems: [
            {
                task: "Practice mindfulness",
                completed: false,
                description: "Spend 10 minutes daily on meditation or deep breathing.",
            },
            {
                task: "Try something new",
                completed: false,
                description: "This week, do an activity you’ve never done before.",
            },
            {
                task: "Strengthen relationships",
                completed: false,
                description: "Reach out to a friend you haven’t spoken to in a while.",
            },
            {
                task: "Organize a group activity",
                completed: false,
                description: "Plan a small event for friends or colleagues.",
            },
            {
                task: "Join a community group",
                completed: false,
                description: "Sign up for a local or online group that interests you.",
            },
        ],
    },
};