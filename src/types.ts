export type PersonalityCategory =
  | 'Introversion vs Extroversion'
  | 'Emotional Intelligence'
  | 'Leadership'
  | 'Creativity'
  | 'Confidence'
  | 'Decision Making'
  | 'Teamwork'
  | 'Responsibility'
  | 'Communication'
  | 'Discipline'
  | 'Adaptability'
  | 'Stress Management'
  | 'Goal Orientation'
  | 'Learning Style'
  | 'Problem Solving';

export type LikertValue = 1 | 2 | 3 | 4 | 5; // 1: Strongly Disagree, 5: Strongly Agree

export interface Question {
  id: number;
  text: string;
  category: PersonalityCategory;
}

export type PersonalityArchetype =
  | 'Leader'
  | 'Analyst'
  | 'Explorer'
  | 'Creative Thinker'
  | 'Helper'
  | 'Visionary'
  | 'Motivator'
  | 'Planner'
  | 'Problem Solver';

export interface TraitScore {
  name: string;
  score: number; // 0 to 100
  color: string;
}

export interface PersonalityReport {
  archetype: PersonalityArchetype;
  tagline: string;
  summary: string;
  scores: TraitScore[];
  strengths: {
    naturalTalents: string[];
    positiveHabits: string[];
    hiddenAbilities: string[];
  };
  growthAreas: {
    badHabitsToTransform: string[];
    limitingBeliefsToOvercome: string[];
    skillsNeedingImprovement: string[];
  };
}

export interface HabitItem {
  id: string;
  title: string;
  category: 'Daily' | 'Weekly' | 'Monthly';
  completed: boolean;
}

export interface ResourceItem {
  type: 'book' | 'video' | 'exercise' | 'meditation';
  title: string;
  description: string;
  linkOrAuthor?: string;
}

export interface RoadmapMilestone {
  id: string;
  phase: '30-Day' | '60-Day' | '90-Day' | '1-Year';
  title: string;
  description: string;
  completed: boolean;
  category: string;
}

export interface CareerPath {
  id: string;
  title: string;
  category: 'STEM & AI' | 'Medical & Research' | 'Leadership & Civil Services' | 'Arts & Media' | 'Business & Legal';
  description: string;
  whyMatch: string;
  keySkills: string[];
  growthOutlook: string;
  matchingArchetypes: PersonalityArchetype[];
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  iconName: string;
  unlocked: boolean;
  unlockedAt?: string;
  color: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'mentor';
  text: string;
  timestamp: string;
}

export interface DailyMission {
  id: string;
  quote: string;
  author: string;
  challenge: string;
  storyTitle: string;
  storyContent: string;
  successHabit: string;
  missionText: string;
  completed: boolean;
}

export interface UserProgress {
  testCompleted: boolean;
  testDate?: string;
  report?: PersonalityReport;
  completedHabits: string[];
  completedMilestones: string[];
  unlockedBadges: string[];
  streakDays: number;
  lastActiveDate: string;
  dailyMissionCompleted: boolean;
  confidenceScore: number;
  leadershipScore: number;
  communicationScore: number;
}
