import React, { useState } from 'react';
import {
  CalendarCheck,
  BookOpen,
  Video,
  HeartPulse,
  Brain,
  MessageSquare,
  Users,
  CheckCircle2,
  Circle,
  Clock,
  Target
} from 'lucide-react';
import { HabitItem, ResourceItem } from '../types';

interface Props {
  completedHabits: string[];
  onToggleHabit: (habitId: string) => void;
}

export const ImprovementPlanView: React.FC<Props> = ({ completedHabits, onToggleHabit }) => {
  const [activeTab, setActiveTab] = useState<'habits' | 'books-videos' | 'exercises' | 'activities'>('habits');

  const habitsList: HabitItem[] = [
    { id: 'h1', title: '15 Minutes of Morning Focused Reading or Vocabulary', category: 'Daily', completed: completedHabits.includes('h1') },
    { id: 'h2', title: '10 Minutes Diaphragmatic Mindfulness Breathing or Meditation', category: 'Daily', completed: completedHabits.includes('h2') },
    { id: 'h3', title: '2 Minutes Mirror Speaking Positive Affirmations', category: 'Daily', completed: completedHabits.includes('h3') },
    { id: 'h4', title: 'Time Boxing Study Schedule with 25-min Pomodoro Breaks', category: 'Daily', completed: completedHabits.includes('h4') },
    { id: 'h5', title: 'Active Physical Exercise (30 mins walk, gym, or sport)', category: 'Daily', completed: completedHabits.includes('h5') },
    { id: 'h6', title: 'Deliver 1 Short Public Presentation or Class Pitch', category: 'Weekly', completed: completedHabits.includes('h6') },
    { id: 'h7', title: 'Lead or Coordinate a Group Project Task', category: 'Weekly', completed: completedHabits.includes('h7') },
    { id: 'h8', title: 'Review Weekly Accomplishments & Gratitude Journal', category: 'Weekly', completed: completedHabits.includes('h8') },
    { id: 'h9', title: 'Read 1 Personal Development / Leadership Book Chapter', category: 'Monthly', completed: completedHabits.includes('h9') },
    { id: 'h10', title: 'Complete 1 Public Speaking or Debate Competition Challenge', category: 'Monthly', completed: completedHabits.includes('h10') },
  ];

  const bookVideoResources: ResourceItem[] = [
    {
      type: 'book',
      title: 'Atomic Habits',
      linkOrAuthor: 'James Clear',
      description: 'An easy & proven way to build good habits & break bad ones, essential for student discipline and time management.'
    },
    {
      type: 'book',
      title: 'How to Win Friends and Influence People',
      linkOrAuthor: 'Dale Carnegie',
      description: 'Timeless advice on mastering interpersonal communication, active listening, and social confidence.'
    },
    {
      type: 'book',
      title: 'Mindset: The New Psychology of Success',
      linkOrAuthor: 'Carol S. Dweck',
      description: 'Learn how a growth mindset transforms failure into stepping stones for academic and career excellence.'
    },
    {
      type: 'video',
      title: 'Your Body Language May Shape Who You Are',
      linkOrAuthor: 'TED Talk by Amy Cuddy',
      description: 'Discover how power posing for 2 minutes before speeches boosts confidence and reduces stress hormones.'
    },
    {
      type: 'video',
      title: 'Grit: The Power of Passion and Perseverance',
      linkOrAuthor: 'TED Talk by Angela Lee Duckworth',
      description: 'Why stamina and grit predict student success more than raw IQ alone.'
    }
  ];

  const exercisesAndMeditation = [
    {
      title: '4-7-8 Stress Relieving Breathing',
      time: '5 Mins',
      desc: 'Inhale quietly through your nose for 4s, hold breath for 7s, exhale completely through mouth for 8s. Instantly lowers exam anxiety.'
    },
    {
      title: 'Mirror Speaking & Posture Calibration',
      time: '3 Mins',
      desc: 'Stand tall before a mirror. Maintain firm eye contact, relaxed shoulders, and deliver a 1-minute self-introduction confidently.'
    },
    {
      title: 'Box Breathing for Laser Focus',
      time: '4 Mins',
      desc: 'Used by Navy SEALs before missions: 4s inhale, 4s hold, 4s exhale, 4s hold. Resets mental clarity before studying.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <CalendarCheck className="w-8 h-8 text-amber-300" />
          <h1 className="text-2xl sm:text-4xl font-extrabold">Personalized Improvement Plan</h1>
        </div>
        <p className="text-emerald-100 text-sm max-w-2xl">
          Actionable daily habits, weekly milestones, recommended books, video guides, and confidence exercises tailored for student success.
        </p>

        {/* Plan Tabs */}
        <div className="flex flex-wrap gap-2 pt-6">
          <button
            onClick={() => setActiveTab('habits')}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
              activeTab === 'habits' ? 'bg-white text-emerald-900 shadow-md' : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            Habits & Goals Checklist
          </button>
          <button
            onClick={() => setActiveTab('books-videos')}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
              activeTab === 'books-videos' ? 'bg-white text-emerald-900 shadow-md' : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            Books & Video Guides
          </button>
          <button
            onClick={() => setActiveTab('exercises')}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition-all ${
              activeTab === 'exercises' ? 'bg-white text-emerald-900 shadow-md' : 'bg-white/10 hover:bg-white/20 text-white'
            }`}
          >
            Exercises & Meditation
          </button>
        </div>
      </div>

      {/* Tab Content: Habits */}
      {activeTab === 'habits' && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-emerald-500" />
              <span>Daily, Weekly & Monthly Habits</span>
            </h2>
            <span className="text-xs text-slate-500">Click to complete</span>
          </div>

          <div className="space-y-3">
            {habitsList.map((habit) => {
              const isDone = completedHabits.includes(habit.id);
              return (
                <button
                  key={habit.id}
                  onClick={() => onToggleHabit(habit.id)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all ${
                    isDone
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800 text-slate-800 dark:text-slate-200'
                      : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-emerald-500/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isDone ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-400 shrink-0" />
                    )}
                    <span className={`text-sm font-semibold ${isDone ? 'line-through text-slate-500' : ''}`}>
                      {habit.title}
                    </span>
                  </div>

                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                    habit.category === 'Daily'
                      ? 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300'
                      : habit.category === 'Weekly'
                      ? 'bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300'
                      : 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300'
                  }`}>
                    {habit.category}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Tab Content: Books & Videos */}
      {activeTab === 'books-videos' && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            <span>Curated Success Books & Motivational Videos</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bookVideoResources.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2"
              >
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider">
                  {item.type === 'book' ? <BookOpen className="w-4 h-4" /> : <Video className="w-4 h-4" />}
                  <span>{item.type === 'book' ? 'Recommended Book' : 'Featured Video'}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">By {item.linkOrAuthor}</p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tab Content: Exercises & Meditation */}
      {activeTab === 'exercises' && (
        <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <HeartPulse className="w-5 h-5 text-rose-500" />
            <span>Mindfulness, Calm & Public Speaking Exercises</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exercisesAndMeditation.map((ex, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="p-2 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-600 font-bold text-xs">
                    <Clock className="w-4 h-4 inline mr-1" /> {ex.time}
                  </span>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">{ex.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{ex.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
