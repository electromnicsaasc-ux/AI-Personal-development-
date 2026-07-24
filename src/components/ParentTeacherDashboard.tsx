import React from 'react';
import { UserProgress } from '../types';
import { GraduationCap, ShieldCheck, Heart, Sparkles, BookOpen, CheckCircle2, User } from 'lucide-react';

interface Props {
  progressState: UserProgress;
}

export const ParentTeacherDashboard: React.FC<Props> = ({ progressState }) => {
  const report = progressState.report;

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 rounded-3xl p-8 text-white shadow-xl border border-indigo-500/20">
        <div className="flex items-center gap-3 mb-2">
          <GraduationCap className="w-8 h-8 text-indigo-400" />
          <h1 className="text-2xl sm:text-4xl font-extrabold">Parent & Educator Overview</h1>
        </div>
        <p className="text-slate-300 text-sm max-w-2xl">
          A privacy-focused dashboard providing parents and teachers with key developmental insights, strength highlights, and actionable guidance without exposing private student logs.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Student Privacy Protection Active (Sensitive logs remain confidential)</span>
        </div>
      </div>

      {/* Student Archetype & Strengths */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
              Personality Archetype
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
              {report ? report.archetype : 'Visionary Leader'}
            </h2>
          </div>

          <span className="px-3 py-1.5 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            Assessment Status: {progressState.testCompleted ? 'Analyzed' : 'In Progress'}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {report ? report.summary : 'The student displays strong analytical and leadership traits with high potential in team coordination and goal execution.'}
        </p>

        {/* Top Strengths List */}
        <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/50 space-y-2">
          <h3 className="font-bold text-xs uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
            Primary Natural Strengths:
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
            {(report?.strengths.naturalTalents || [
              'Quick conceptual learning and strategic thinking',
              'Innate ability to inspire trust and collaboration in team settings',
              'Strong sense of personal responsibility'
            ]).map((s, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Suggested Classroom & Home Activities */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500" />
            <span>Classroom Guidance (For Teachers)</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
              <span>Encourage student to moderate group discussions or present project topics.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
              <span>Provide constructive verbal praise for effort rather than static grades.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500" />
            <span>Home Support (For Parents)</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
              <span>Maintain a structured quiet study zone free from digital distractions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
              <span>Celebrate small daily habit checkmarks to reinforce resilience and confidence.</span>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
};
