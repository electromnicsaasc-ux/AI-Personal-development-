import React, { useState } from 'react';
import { DAILY_AFFIRMATIONS } from '../data/affirmations';
import { ShieldCheck, Heart, Sparkles, RefreshCw, Eye, UserCheck, Flame, Zap } from 'lucide-react';

export const ConfidenceAndEQView: React.FC = () => {
  const [affirmationIdx, setAffirmationIdx] = useState(0);

  const nextAffirmation = () => {
    setAffirmationIdx((prev) => (prev + 1) % DAILY_AFFIRMATIONS.length);
  };

  const confidenceTips = [
    {
      title: 'Mirror Speaking Challenge',
      desc: 'Stand facing a mirror for 2 minutes. Maintain steady eye contact with yourself, smile, and deliver 3 positive affirmations out loud in a firm, clear voice.'
    },
    {
      title: 'Body Language & Posture Calibration',
      desc: 'Adopt an open power pose: shoulders back, feet shoulder-width apart, chin slightly up. Research shows this lowers cortisol (stress) and boosts testosterone (confidence) in 120 seconds.'
    },
    {
      title: 'The 3-Second Rule Against Hesitation',
      desc: 'When you want to raise your hand in class or initiate a conversation, count down "3, 2, 1" and move immediately before overthinking halts your action.'
    }
  ];

  const eqPractices = [
    {
      title: 'Self-Awareness & Trigger Journaling',
      desc: 'Recognize what specific events trigger your stress or frustration. Name the emotion ("I feel anxious about tomorrow\'s test") to regain logical control.'
    },
    {
      title: 'Anger Control & 10-Second Pause',
      desc: 'When provoked, take a slow 10-second breath before responding. Never write an email or reply while emotionally charged.'
    },
    {
      title: 'Empathy & Active Listening',
      desc: 'When listening to a peer, focus entirely on understanding their perspective rather than preparing your rebuttal.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-rose-900 via-purple-900 to-indigo-900 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <ShieldCheck className="w-8 h-8 text-rose-400" />
          <h1 className="text-2xl sm:text-4xl font-extrabold">Confidence & Emotional Intelligence</h1>
        </div>
        <p className="text-rose-100 text-sm max-w-2xl">
          Build unshakeable self-belief, overcome public speaking fear, master anger control, and develop high emotional intelligence for lifelong success.
        </p>
      </div>

      {/* Positive Affirmations Card */}
      <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white rounded-3xl p-8 shadow-lg space-y-4 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>DAILY POSITIVE AFFIRMATION</span>
        </div>

        <blockquote className="text-xl sm:text-3xl font-extrabold tracking-tight max-w-3xl mx-auto leading-snug">
          "{DAILY_AFFIRMATIONS[affirmationIdx]}"
        </blockquote>

        <div>
          <button
            onClick={nextAffirmation}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white text-indigo-950 font-bold text-xs shadow-md hover:bg-slate-100 transition-all"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Generate Next Affirmation</span>
          </button>
        </div>
      </section>

      {/* Confidence & Fear Reduction Practices */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-500" />
          <span>Confidence Builder & Fear Reduction Exercises</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {confidenceTips.map((tip, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white">{tip.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emotional Intelligence & Control */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Heart className="w-5 h-5 text-rose-500" />
          <span>Emotional Intelligence, Empathy & Anger Control</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {eqPractices.map((eq, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-2"
            >
              <h3 className="font-bold text-base text-slate-900 dark:text-white">{eq.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{eq.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
