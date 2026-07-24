import React from 'react';
import {
  Sparkles,
  Play,
  Brain,
  CalendarCheck,
  Briefcase,
  MessageSquare,
  ShieldCheck,
  Users,
  Mic,
  Zap,
  BarChart3,
  Bot,
  ArrowRight,
  Flame,
  Award,
  CheckCircle2
} from 'lucide-react';
import { NavTab } from './Navigation';
import { MOTIVATIONAL_QUOTES } from '../data/affirmations';

interface Props {
  onNavigate: (tab: NavTab) => void;
  streakDays: number;
  testCompleted: boolean;
  confidenceScore: number;
}

export const HomeScreen: React.FC<Props> = ({
  onNavigate,
  streakDays,
  testCompleted,
  confidenceScore
}) => {
  const quote = MOTIVATIONAL_QUOTES[0];

  const quickButtons = [
    {
      id: 'test' as NavTab,
      title: 'Start Personality Test',
      subtitle: '40–50 deep trait questions',
      icon: Play,
      color: 'from-cyan-400 to-indigo-600',
      badge: testCompleted ? 'Completed' : 'Recommended'
    },
    {
      id: 'report' as NavTab,
      title: 'AI Personality Analysis',
      subtitle: 'Circular gauges & archetype report',
      icon: Brain,
      color: 'from-indigo-500 to-purple-600',
      badge: 'AI Powered'
    },
    {
      id: 'growth' as NavTab,
      title: 'Daily Growth Plan',
      subtitle: 'Habits, goals & challenges',
      icon: CalendarCheck,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Daily'
    },
    {
      id: 'careers' as NavTab,
      title: 'Career Suggestions',
      subtitle: 'AI recommendations & reasons',
      icon: Briefcase,
      color: 'from-amber-400 to-orange-500',
      badge: '20+ Paths'
    },
    {
      id: 'communication' as NavTab,
      title: 'Communication Skills',
      subtitle: 'Self-intro & interview coach',
      icon: MessageSquare,
      color: 'from-cyan-500 to-blue-600',
      badge: 'Interactive'
    },
    {
      id: 'confidence' as NavTab,
      title: 'Emotional Intelligence',
      subtitle: 'Self-awareness & stress control',
      icon: ShieldCheck,
      color: 'from-rose-500 to-pink-600',
      badge: 'EQ Skills'
    },
    {
      id: 'leadership' as NavTab,
      title: 'Leadership Skills',
      subtitle: 'Decision games & team exercises',
      icon: Users,
      color: 'from-indigo-600 to-violet-600',
      badge: 'Actionable'
    },
    {
      id: 'confidence' as NavTab,
      title: 'Public Speaking & Confidence',
      subtitle: 'Mirror speaking & body language',
      icon: Mic,
      color: 'from-pink-500 to-purple-600',
      badge: 'Practice'
    },
    {
      id: 'motivation' as NavTab,
      title: 'Success Stories & Motivation',
      subtitle: 'Daily quotes, stories & mission',
      icon: Zap,
      color: 'from-amber-500 to-yellow-500',
      badge: 'Daily'
    },
    {
      id: 'dashboard' as NavTab,
      title: 'Progress Tracker',
      subtitle: 'Badges, scores & weekly growth',
      icon: BarChart3,
      color: 'from-emerald-400 to-teal-500',
      badge: 'Analytics'
    },
    {
      id: 'mentor' as NavTab,
      title: 'AI Mentor Chat',
      subtitle: 'Encouraging 24/7 AI life coach',
      icon: Bot,
      color: 'from-purple-600 to-fuchsia-600',
      badge: '24/7 Coach'
    }
  ];

  return (
    <div className="space-y-8 pb-12">
      
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-[32px] bg-white/5 border border-white/10 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
        
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl translate-y-12 -translate-x-12 pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>AI-POWERED PERSONALITY & LIFE COACH</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Discover Yourself. <br />
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Improve Yourself.
            </span>{' '}
            Become Successful.
          </h1>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Understand your unique strengths and weaknesses, unlock your leadership potential, master communication skills, and build a personalized roadmap to achieve your dream career.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('test')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xs uppercase tracking-[0.15em] shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{testCompleted ? 'Retake Personality Test' : 'Start Personality Test'}</span>
            </button>

            <button
              onClick={() => onNavigate('mentor')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs border border-white/10 backdrop-blur-md transition-all uppercase tracking-wider"
            >
              <Bot className="w-4 h-4 text-cyan-400" />
              <span>Talk to AI Mentor</span>
            </button>
          </div>
        </div>

        {/* Quick Highlights Counter */}
        <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-white/5 rounded-[20px] border border-white/5 backdrop-blur-md">
            <div className="flex items-center justify-center gap-1.5 text-amber-300 font-extrabold text-xl">
              <Flame className="w-5 h-5 fill-amber-300" /> {streakDays} Days
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">Active Streak</div>
          </div>

          <div className="p-4 bg-white/5 rounded-[20px] border border-white/5 backdrop-blur-md">
            <div className="flex items-center justify-center gap-1.5 text-cyan-400 font-extrabold text-xl">
              <Award className="w-5 h-5" /> {confidenceScore}%
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">Confidence Score</div>
          </div>

          <div className="p-4 bg-white/5 rounded-[20px] border border-white/5 backdrop-blur-md">
            <div className="flex items-center justify-center gap-1.5 text-indigo-300 font-extrabold text-xl">
              <CheckCircle2 className="w-5 h-5" /> {testCompleted ? 'Analyzed' : 'Ready'}
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">AI Personality Assessment</div>
          </div>

          <div className="p-4 bg-white/5 rounded-[20px] border border-white/5 backdrop-blur-md">
            <div className="flex items-center justify-center gap-1.5 text-purple-300 font-extrabold text-xl">
              20+
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">Career Paths Mapped</div>
          </div>
        </div>
      </section>

      {/* Quote of the Day Card */}
      <section className="bg-white/5 border border-white/10 p-6 rounded-[24px] backdrop-blur-xl shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shrink-0">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold block mb-1">
              Quote of the Day
            </span>
            <blockquote className="text-lg leading-relaxed font-serif italic text-gray-200">
              "{quote.quote}"
            </blockquote>
            <p className="text-xs text-gray-400 mt-2">
              — {quote.author} ({quote.category})
            </p>
          </div>
        </div>
      </section>

      {/* Quick Access Feature Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span>Growth Modules & Features</span>
          </h2>
          <span className="text-xs text-gray-400 font-medium">Select any module to start</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickButtons.map((btn, idx) => {
            const Icon = btn.icon;
            return (
              <button
                key={idx}
                onClick={() => onNavigate(btn.id)}
                className="group relative text-left p-5 rounded-[24px] bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-tr ${btn.color} text-white shadow-lg`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/10 text-cyan-300 border border-white/10">
                    {btn.badge}
                  </span>
                </div>

                <h3 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{btn.title}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  {btn.subtitle}
                </p>
              </button>
            );
          })}
        </div>
      </section>

    </div>
  );
};
