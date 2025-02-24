'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Timer, 
  Users, 
  Zap,
  Target,
  Award,
  BookOpen,
  History,
  BarChart,
  FileSpreadsheet,
  ArrowRight
} from 'lucide-react';

const MBTI_TEST = {
  name: 'Myers-Briggs Type Indicator',
  short_code: 'MBTI',
  description:
    'Understand your personality type and discover how you think, make decisions, and interact with the world around you.',
  features: [
    { icon: Timer, label: '12 mins', color: 'bg-blue-100 text-blue-700' },
    { icon: Users, label: '2M+ people tested', color: 'bg-purple-100 text-purple-700' },
    { icon: Zap, label: '96% accuracy', color: 'bg-amber-100 text-amber-700' },
  ],
  category: 'personality',
  citations: [
    "https://pubmed.ncbi.nlm.nih.gov/12345678/",
    "Myers, I. B., & McCaulley, M. H. (1985). Manual: A guide to the development and use of the Myers-Briggs Type Indicator. Consulting Psychologists Press.",
  ],
  difficulty_level: 'intermediate',
  num_questions: 60,
  time_estimate_minutes: 12,
  validity_period_days: 365,
  min_age: 16,
  result_type: "type",
  reliability_score: 85,
  scientific_validity_score: 78,
  past_results: [
    {
      type: 'INTJ',
      date: '2024-03-15',
      scores: {
        introversion: 76,
        intuition: 82,
        thinking: 65,
        judging: 58
      },
      label: 'The Architect',
      description: 'Imaginative and strategic thinkers with a plan for everything'
    }
  ],
  complementary_tests: [
    {
      name: 'Big Five Personality',
      description: 'Measure five core personality dimensions',
      shortCode: 'big5-neo',
      icon: Target,
    },
    {
      name: 'DISC Assessment',
      description: 'Understand your behavioral style',
      shortCode: 'disc',
      icon: Award,
    },
    {
      name: 'HEXACO',
      description: 'Explore six personality dimensions',
      shortCode: 'hexaco',
      icon: BookOpen,
    }
  ],
  personality_dimensions: [
    {
      title: 'Mind',
      description: 'How you interact with the world and direct your energy',
      types: ['Extrovert (E)', 'Introvert (I)'],
    },
    {
      title: 'Information',
      description: 'How you process and gather information',
      types: ['Sensing (S)', 'Intuition (N)'],
    },
    {
      title: 'Decisions',
      description: 'How you make decisions and cope with emotions',
      types: ['Thinking (T)', 'Feeling (F)'],
    },
    {
      title: 'Structure',
      description: 'How you approach work, planning and decision-making',
      types: ['Judging (J)', 'Perceiving (P)'],
    },
  ],
  test_benefits: [
    {
      icon: Brain,
      title: 'Career Success',
      description: 'Find your ideal career path and work environment',
    },
    {
      icon: Users,
      title: 'Better Relationships',
      description: 'Transform how you connect with others',
    },
    {
      icon: Target,
      title: 'Personal Growth',
      description: 'Unlock your true potential and strengths',
    },
  ],
};

const DifficultyBadge = ({ level }: { level: string }) => {
  const colors = {
    beginner: 'bg-green-100 text-green-800',
    intermediate: 'bg-yellow-100 text-yellow-800',
    advanced: 'bg-red-100 text-red-800',
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-sm font-medium ${
        colors[level as keyof typeof colors]
      }`}
    >
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
};

const FeatureBadge = ({ Icon, label, color }: { Icon: any; label: string; color: string }) => (
  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${color}`}>
    <Icon className="h-4 w-4" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const ResultTypeBadge = ({ type }: { type: string }) => {
  const colors = {
    type: "bg-purple-100 text-purple-800",
    numerical: "bg-blue-100 text-blue-800",
    category: "bg-green-100 text-green-800",
    "multi-dimensional": "bg-orange-100 text-orange-800",
  }
  return (
    <span className={`px-2 py-1 rounded-full text-sm font-medium ${colors[type as keyof typeof colors]}`}>
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  )
}
export default function TestInformation() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-primary">
            {MBTI_TEST.name} <span className="text-2xl">({MBTI_TEST.short_code})</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {MBTI_TEST.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {MBTI_TEST.features.map((feature, index) => (
              <FeatureBadge
                key={index}
                Icon={feature.icon}
                label={feature.label}
                color={feature.color}
              />
            ))}
          </div>
          <div className="pt-4">
            <Button size="lg" className="text-lg px-8 py-6">
              Begin Test →
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Test Overview Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Test Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="capitalize">Personality</Badge>
                <DifficultyBadge level={MBTI_TEST.difficulty_level} />
                <ResultTypeBadge type={MBTI_TEST.result_type} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Questions</span>
                  <span className="font-medium">{MBTI_TEST.num_questions}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">{MBTI_TEST.time_estimate_minutes} minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Age Range</span>
                  <span className="font-medium">{MBTI_TEST.min_age}+ years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Validity Period</span>
                  <span className="font-medium">{MBTI_TEST.validity_period_days} days</span>
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <h4 className="font-medium">Key Benefits:</h4>
                <div className="grid gap-2">
                  {MBTI_TEST.test_benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 bg-primary/5 p-2 rounded-lg">
                      <benefit.icon className="h-5 w-5 text-primary shrink-0" />
                      <div className="font-medium">{benefit.title}</div>
                      <div className="text-sm text-muted-foreground ml-auto">{benefit.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personality Dimensions Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                Explore Your Personality
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {MBTI_TEST.personality_dimensions.map((dimension, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-medium">{dimension.title}</h3>
                  <p className="text-sm text-muted-foreground">{dimension.description}</p>
                  <div className="flex gap-2">
                    {dimension.types.map((type, i) => (
                      <Badge key={i} variant="secondary">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Past Results Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5" />
                Your Past Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {MBTI_TEST.past_results.map((result, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold">{result.type}</div>
                      <div className="text-sm text-muted-foreground">
                        {new Date(result.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-lg px-3 py-1">
                      {result.label}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{result.description}</p>
                  <div className="space-y-2">
                    {Object.entries(result.scores).map(([trait, score]) => (
                      <div key={trait} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span className="capitalize">{trait}</span>
                          <span>{score}%</span>
                        </div>
                        <Progress value={score} className="h-1.5" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Validation Section */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Reliability Metrics Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Reliability Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Test Consistency</span>
                <span className="text-sm text-muted-foreground">{MBTI_TEST.reliability_score}%</span>
              </div>
              <Progress value={MBTI_TEST.reliability_score} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Scientific Basis</span>
                <span className="text-sm text-muted-foreground">{MBTI_TEST.scientific_validity_score}%</span>
              </div>
              <Progress value={MBTI_TEST.scientific_validity_score} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Citations Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Citations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              {MBTI_TEST.citations.map((citation, index) => (
                <li key={index}>
                  {citation.startsWith("http") ? (
                    <a
                      href={citation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {new URL(citation).hostname}
                    </a>
                  ) : (
                    <span>{citation}</span>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

          {/* Related Tests Section */}
          <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recommended Tests</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MBTI_TEST.complementary_tests.map((test, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/5 text-primary">
                      <test.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold">{test.name}</h3>
                      <p className="text-sm text-muted-foreground">{test.description}</p>
                      <Button variant="link" className="p-0 h-auto font-normal text-primary">
                        Take Test
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}