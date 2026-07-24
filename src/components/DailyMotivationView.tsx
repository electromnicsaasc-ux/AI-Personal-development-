import React, { useState } from 'react';
import { Zap, Sparkles, CheckCircle2, RefreshCw, BookOpen, Target, Loader2 } from 'lucide-react';
import { INSPIRATIONAL_STORIES, MOTIVATIONAL_QUOTES } from '../data/affirmations';

interface Props {
  isMissionCompleted: boolean;
  onToggleMission: () => void;
}

export const DailyMotivationView: React.FC<Props> = ({
  isMissionCompleted,
  onToggleMission
}) => {
  const [packet, setPacket] = useState({
    quote: MOTIVATIONAL_QUOTES[0].quote,
    author: MOTIVATIONAL_QUOTES[0].author,
    challenge: 'Deliver 1 enthusiastic compliment to a friend or classmate today and notice how it uplifts both of you.',
    storyTitle: INSPIRATIONAL_STORIES[0].title,
    storyContent: INSPIRATIONAL_STORIES[0].summary,
    successHabit: 'Time-boxing your 2 highest-priority study tasks before turning on social media.',
    missionText: 'Dedicate 45 minutes of laser-focused study with zero digital distractions.'
  });

  const [isLoadingAI, setIsLoadingAI] = useState(false);

  const handleGenerateFreshMotivation = async () => {
    setIsLoadingAI(true);
    try {
      const res = await fetch('/api/gemini/daily-motivation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ goal: 'Student Leadership & Academic Growth' }),
      });

      if (!res.ok) throw new Error('API failed');
      const data = await res.json();
      if (data.quote) {
        setPacket(data);
      }
    } catch (err) {
      console.warn('Fallback daily motivation', err);
      // cycle local story
      const nextStory = INSPIRATIONAL_STORIES[1];
      setPacket({
        quote: "Small daily improvements over time lead to stunning results.",
        author: "Robin Sharma",
        challenge: "Practice 5 minutes of deep box breathing before starting homework.",
        storyTitle: nextStory.title,
        storyContent: nextStory.summary,
        successHabit: "Reviewing your top 3 goals every morning before checking your phone.",
        missionText: "Complete 1 difficult assignment that you have been putting off."
      });
    } finally {
      setIsLoadingAI(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 rounded-3xl p-8 text-white shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-8 h-8 text-yellow-300 fill-yellow-300" />
            <h1 className="text-2xl sm:text-4xl font-extrabold">Daily Motivation & Success Missions</h1>
          </div>
          <p className="text-amber-100 text-sm max-w-xl">
            Start every morning with inspirational quotes, real-world success stories, high-performer habits, and actionable missions.
          </p>
        </div>

        <button
          onClick={handleGenerateFreshMotivation}
          disabled={isLoadingAI}
          className="px-5 py-3 rounded-2xl bg-white text-slate-950 font-bold text-xs shadow-md hover:bg-amber-100 transition-all shrink-0 flex items-center gap-2"
        >
          {isLoadingAI ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
          <span>Generate Fresh AI Packet</span>
        </button>
      </div>

      {/* Quote of the Day */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
          Inspirational Quote
        </span>
        <blockquote className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white italic max-w-3xl mx-auto leading-snug">
          "{packet.quote}"
        </blockquote>
        <p className="text-xs font-semibold text-slate-500">— {packet.author}</p>
      </section>

      {/* Today's Mission & Challenge Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Today's Mission */}
        <div className="p-6 rounded-3xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5 uppercase tracking-wider">
              <Target className="w-4 h-4 text-indigo-500" />
              <span>Today's Core Mission</span>
            </span>
            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
              isMissionCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
            }`}>
              {isMissionCompleted ? 'Completed' : 'Pending'}
            </span>
          </div>

          <p className="text-base font-bold text-slate-900 dark:text-white leading-snug">
            {packet.missionText}
          </p>

          <button
            onClick={onToggleMission}
            className={`w-full py-3 rounded-2xl font-bold text-xs shadow-sm flex items-center justify-center gap-2 transition-all ${
              isMissionCompleted
                ? 'bg-emerald-600 text-white'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isMissionCompleted ? 'Mission Complete! Great Job!' : 'Mark Mission Completed'}</span>
          </button>
        </div>

        {/* Daily Challenge */}
        <div className="p-6 rounded-3xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 space-y-4">
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400 flex items-center gap-1.5 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Daily Growth Challenge</span>
          </span>

          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
            {packet.challenge}
          </p>

          <div className="pt-2 border-t border-amber-200/60 dark:border-amber-800/60 text-xs text-slate-600 dark:text-slate-400">
            <strong className="text-amber-700 dark:text-amber-300">Success Habit:</strong> {packet.successHabit}
          </div>
        </div>
      </section>

      {/* Real Success Story */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-indigo-500" />
          <span>Real-World Success Story</span>
        </span>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {packet.storyTitle}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {packet.storyContent}
        </p>
      </section>

    </div>
  );
};
