import React from 'react';
import { PersonalityReport } from '../types';
import {
  Sparkles,
  Award,
  CheckCircle2,
  TrendingUp,
  Heart,
  Zap,
  Printer,
  BookOpen,
  HelpCircle,
  Brain,
  ShieldCheck
} from 'lucide-react';

interface Props {
  report: PersonalityReport;
  onRetakeTest: () => void;
}

export const PersonalityReportView: React.FC<Props> = ({ report, onRetakeTest }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12 print:p-0">
      
      {/* Top Banner / Archetype Card */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white p-8 sm:p-10 shadow-2xl border border-indigo-500/30">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>YOUR PRIMARY ARCHETYPE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
              {report.archetype}
            </h1>

            <p className="text-base text-indigo-200 font-semibold italic">
              "{report.tagline}"
            </p>

            <p className="text-sm text-slate-300 leading-relaxed pt-2">
              {report.summary}
            </p>
          </div>

          {/* Action Print / Retake */}
          <div className="flex flex-col gap-3 shrink-0 print:hidden">
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Export / Print Report</span>
            </button>

            <button
              onClick={onRetakeTest}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-all shadow-md"
            >
              <Brain className="w-4 h-4" />
              <span>Retake Test</span>
            </button>
          </div>
        </div>
      </div>

      {/* 10 Trait Scores with Colorful Circular Progress Meters */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-6 h-6 text-indigo-500" />
              <span>Personality Score Breakdown</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              10 core psychological dimensions measured from your assessment
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 pt-2">
          {report.scores.map((scoreItem) => {
            const radius = 36;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (scoreItem.score / 100) * circumference;

            return (
              <div
                key={scoreItem.name}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 hover:shadow-md transition-shadow"
              >
                {/* SVG Circular Progress Gauge */}
                <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r={radius}
                      className="text-slate-200 dark:text-slate-700"
                      strokeWidth="7"
                      stroke="currentColor"
                      fill="transparent"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r={radius}
                      stroke={scoreItem.color}
                      strokeWidth="7"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <span className="absolute text-lg font-extrabold text-slate-900 dark:text-white">
                    {scoreItem.score}%
                  </span>
                </div>

                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  {scoreItem.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strengths Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Natural Talents */}
        <div className="p-6 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/50 space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-base">
            <Zap className="w-5 h-5 text-emerald-500" />
            <h3>Natural Talents</h3>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {report.strengths.naturalTalents.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Positive Habits */}
        <div className="p-6 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-800/50 space-y-3">
          <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-base">
            <ShieldCheck className="w-5 h-5 text-indigo-500" />
            <h3>Positive Habits</h3>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {report.strengths.positiveHabits.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hidden Abilities */}
        <div className="p-6 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-800/50 space-y-3">
          <div className="flex items-center gap-2 text-purple-700 dark:text-purple-400 font-bold text-base">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <h3>Hidden Abilities</h3>
          </div>
          <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
            {report.strengths.hiddenAbilities.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Growth Areas & Positive Transformation (Always Encouraging!) */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-amber-100 dark:bg-amber-950/50 text-amber-600 rounded-2xl">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Areas for Growth & Elevation
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Positive transformation roadmap designed to unlock your full potential
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400">
              Habits to Transform
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              {report.growthAreas.badHabitsToTransform.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Limiting Beliefs to Overcome
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              {report.growthAreas.limitingBeliefsToOvercome.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Skills Needing Refinement
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              {report.growthAreas.skillsNeedingImprovement.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};
