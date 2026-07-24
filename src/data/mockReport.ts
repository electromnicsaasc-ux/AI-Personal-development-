import { PersonalityReport, PersonalityArchetype, TraitScore } from '../types';

export const ARCHETYPE_DESCRIPTIONS: Record<PersonalityArchetype, { title: string; tagline: string; summary: string }> = {
  'Leader': {
    title: 'Visionary Leader',
    tagline: 'Driving team direction, accountability, and inspiring success.',
    summary: 'You possess natural charisma, strategic clarity, and an innate ability to rally people toward a shared goal. You thrive on responsibility and decision-making.'
  },
  'Analyst': {
    title: 'Strategic Analyst',
    tagline: 'Master of logic, detailed observation, and systematic problem solving.',
    summary: 'You approach challenges with precision, deep analytical rigor, and objective reasoning. You excel at unraveling complex data and structured planning.'
  },
  'Explorer': {
    title: 'Dynamic Explorer',
    tagline: 'Adaptable, curious, and energized by new challenges.',
    summary: 'You have an adventurous spirit and quick adaptability. You excel in changing environments, learning fast on your feet and embracing novelty.'
  },
  'Creative Thinker': {
    title: 'Innovative Creator',
    tagline: 'Transforming ideas into imaginative, impactful solutions.',
    summary: 'You view the world through a lens of possibilities. You connect ideas in unique ways, bringing original design, artistic expression, and out-of-the-box solutions.'
  },
  'Helper': {
    title: 'Compassionate Helper',
    tagline: 'Building empathy, harmony, and supporting everyone around you.',
    summary: 'Your high emotional intelligence and empathy make you a cornerstone of any team. You care deeply about group well-being and helping peers succeed.'
  },
  'Visionary': {
    title: 'Future Visionary',
    tagline: 'Inspiring long-term goals and seeing big-picture potential.',
    summary: 'You look ahead to what could be rather than what is. You motivate others with bold concepts and long-range strategic goals.'
  },
  'Motivator': {
    title: 'Energetic Motivator',
    tagline: 'Spreading positive energy, enthusiasm, and vocal confidence.',
    summary: 'Your enthusiasm is contagious! You uplift teams, communicate with warmth, and turn passive groups into action-oriented powerhouses.'
  },
  'Planner': {
    title: 'Disciplined Planner',
    tagline: 'Organized, dependable, and mastering methodical execution.',
    summary: 'You bring order to chaos. With stellar time management and high discipline, you ensure every goal is systematically tracked and accomplished.'
  },
  'Problem Solver': {
    title: 'Master Problem Solver',
    tagline: 'Tackling complex friction with calm, persistent logic.',
    summary: 'Where others see obstacles, you see fascinating puzzles. You break problems down into manageable components and resolve them efficiently.'
  }
};

export function calculateLocalReport(answers: Record<number, number>): PersonalityReport {
  // Compute basic scores from 1..5 Likert
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const avg = total / Math.max(Object.keys(answers).length, 1);
  const normalizedBase = Math.min(Math.max(Math.round((avg / 5) * 100), 40), 98);

  const scores: TraitScore[] = [
    { name: 'Leadership', score: Math.min(normalizedBase + 5, 96), color: '#3B82F6' },
    { name: 'Communication', score: Math.min(normalizedBase + 2, 94), color: '#10B981' },
    { name: 'Confidence', score: Math.min(normalizedBase - 3, 90), color: '#F59E0B' },
    { name: 'Creativity', score: Math.min(normalizedBase + 8, 98), color: '#8B5CF6' },
    { name: 'Emotional Intelligence', score: Math.min(normalizedBase + 4, 95), color: '#EC4899' },
    { name: 'Discipline', score: Math.min(normalizedBase - 1, 92), color: '#06B6D4' },
    { name: 'Patience', score: Math.min(normalizedBase - 4, 88), color: '#14B8A6' },
    { name: 'Decision Making', score: Math.min(normalizedBase + 3, 94), color: '#6366F1' },
    { name: 'Social Skills', score: Math.min(normalizedBase + 1, 91), color: '#F97316' },
    { name: 'Time Management', score: Math.min(normalizedBase - 2, 89), color: '#84CC16' }
  ];

  // Pick top archetype
  let archetype: PersonalityArchetype = 'Leader';
  if (normalizedBase > 85) archetype = 'Visionary';
  else if (answers[13] && answers[13] >= 4) archetype = 'Creative Thinker';
  else if (answers[5] && answers[5] >= 4) archetype = 'Helper';
  else if (answers[21] && answers[21] >= 4) archetype = 'Analyst';
  else if (answers[33] && answers[33] >= 4) archetype = 'Planner';
  else if (answers[44] && answers[44] >= 4) archetype = 'Problem Solver';

  const info = ARCHETYPE_DESCRIPTIONS[archetype];

  return {
    archetype,
    tagline: info.tagline,
    summary: info.summary,
    scores,
    strengths: {
      naturalTalents: [
        'Quick conceptual learning and strategic thinking',
        'Innate ability to inspire trust and collaboration in team settings',
        'Strong sense of personal responsibility and accountability'
      ],
      positiveHabits: [
        'Methodical approach to setting personal goals',
        'Active listening and respectful communication',
        'Resilience in overcoming temporary academic or task challenges'
      ],
      hiddenAbilities: [
        'Untapped public speaking potential with compelling storytelling',
        'A knack for simplifying complex problem statements into clear steps',
        'Intuitive empathy that helps resolve peer conflicts peacefully'
      ]
    },
    growthAreas: {
      badHabitsToTransform: [
        'Occasional hesitation when faced with unfamiliar public forums',
        'Over-analyzing decisions before taking the initial step'
      ],
      limitingBeliefsToOvercome: [
        'Believing that mistakes define capability rather than serving as learning stepping stones',
        'Underestimating how much value your unique perspective brings to discussions'
      ],
      skillsNeedingImprovement: [
        'Advanced time boxing for balanced study and relaxation routines',
        'Assertive communication in high-pressure group settings'
      ]
    }
  };
}
