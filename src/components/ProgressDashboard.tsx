import React from 'react';
import { UserProgress, Badge } from '../types';
import {
  BarChart3,
  Award,
  Trophy,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Zap,
  Star,
  Shield,
  Clock,
  Flame
} from 'lucide-react';

interface Props {
  progress: UserProgress;
}

export const ProgressDashboard: React.FC<Props> = ({ progress }) => {
  const allBadges: Badge[] = [
    { id: 'b1', title: 'First Step', description: 'Take your first personality & aptitude test.', iconName: 'Star', unlocked: progress.testCompleted, color: 'from-amber-400 to-orange-500' },
    { id: 'b2', title: 'Confident Speaker', description: 'Complete 3 communication coaching exercises.', iconName: 'Zap', unlocked: progress.completedHabits.length >= 2, color: 'from-cyan-500 to-blue-600' },
    { id: 'b3', title: 'Leader', description: 'Complete a leadership decision game challenge.', iconName: 'Trophy', unlocked: progress.completedHabits.length >= 3, color: 'from-purple-500 to-indigo-600' },
    { id: 'b4', title: 'Creative Thinker', description: 'Explore career match options in creative & tech fields.', iconName: 'Sparkles', unlocked: progress.testCompleted, color: 'from-pink-500 to-rose-600' },
    { id: 'b5', title: 'Problem Solver', description: 'Complete 5 daily habit checkmarks.', iconName: 'Shield', unlocked: progress.completedHabits.length >= 5, color: 'from-emerald-500 to-teal-600' },
    { id: 'b6', title: 'Goal Achiever', description: 'Achieve 3 milestone targets in your success roadmap.', iconName: 'Award', unlocked: progress.completedMilestones.length >= 3, color: 'from-yellow-400 to-amber-600' },
    { id: 'b7', title: 'Excellent Communicator', description: 'Practice self-introductions and public speaking.', iconName: 'Star', unlocked: progress.completedHabits.length >= 4, color: 'from-blue-600 to-indigo-700' },
    { id: 'b8', title: '100-Day Champion', description: 'Maintain a continuous multi-day active learning streak.', iconName: 'Flame', unlocked: progress.streakDays >= 7, color: 'from-orange-500 to-red-600' }
  ];

  const unlockedCount = allBadges.filter((b) => b.unlocked).length;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <BarChart3 className="w-8 h-8 text-emerald-400" />
          <h1 className="text-2xl sm:text-4xl font-extrabold">Progress & Achievement Dashboard</h1>
        </div>
        <p className="text-emerald-100 text-sm max-w-2xl">
          Track your skill growth scores, completed habit milestones, streak history, and unlock official achievement badges.
        </p>

        {/* Core Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <span className="text-xs text-emerald-200 block">Streak Days</span>
            <span className="text-2xl font-extrabold text-amber-300 flex items-center gap-1 mt-1">
              <Flame className="w-6 h-6 fill-amber-300" /> {progress.streakDays}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <span className="text-xs text-emerald-200 block">Badges Unlocked</span>
            <span className="text-2xl font-extrabold text-white mt-1 block">
              {unlockedCount} / {allBadges.length}
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <span className="text-xs text-emerald-200 block">Confidence Score</span>
            <span className="text-2xl font-extrabold text-cyan-300 mt-1 block">
              {progress.confidenceScore}%
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
            <span className="text-xs text-emerald-200 block">Leadership Score</span>
            <span className="text-2xl font-extrabold text-purple-300 mt-1 block">
              {progress.leadershipScore}%
            </span>
          </div>
        </div>
      </div>

      {/* Gamification Badge Shelf */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>Achievement Badges & Trophies</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">
            {unlockedCount} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {allBadges.map((badge) => (
            <div
              key={badge.id}
              className={`p-5 rounded-2xl border text-center transition-all ${
                badge.unlocked
                  ? 'bg-slate-50 dark:bg-slate-800/80 border-amber-400/60 shadow-md'
                  : 'bg-slate-100/50 dark:bg-slate-800/20 border-slate-200 dark:border-slate-800 opacity-50 grayscale'
              }`}
            >
              <div
                className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr ${badge.color} text-white flex items-center justify-center shadow-md mb-3`}
              >
                <Award className="w-7 h-7" />
              </div>

              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                {badge.title}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                {badge.description}
              </p>

              <span className={`inline-block text-[10px] font-extrabold px-2.5 py-0.5 rounded-full mt-3 ${
                badge.unlocked
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
              }`}>
                {badge.unlocked ? 'Unlocked!' : 'Locked'}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* SVG Growth Charts */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-500" />
          <span>Weekly & Monthly Growth Metrics</span>
        </h2>

        {/* Clean SVG Bar Graph */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-4">
          <span className="text-xs font-bold text-slate-600 dark:text-slate-300 block">
            Weekly Study & Practice Hours
          </span>

          <div className="h-40 flex items-end justify-between gap-2 pt-8 px-4 border-b border-slate-200 dark:border-slate-700">
            {[
              { day: 'Mon', hours: 2.5, percent: 50 },
              { day: 'Tue', hours: 3.5, percent: 70 },
              { day: 'Wed', hours: 4.0, percent: 80 },
              { day: 'Thu', hours: 3.0, percent: 60 },
              { day: 'Fri', hours: 5.0, percent: 100 },
              { day: 'Sat', hours: 4.5, percent: 90 },
              { day: 'Sun', hours: 3.5, percent: 70 },
            ].map((d, i) => (
              <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-500 transition-colors">
                  {d.hours}h
                </span>
                <div
                  className="w-full max-w-[32px] bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-lg transition-all duration-500 group-hover:brightness-110"
                  style={{ height: `${d.percent}%` }}
                />
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                  {d.day}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
