import React from 'react';
import { Sun, Moon, Sparkles, Flame, ShieldCheck, Award } from 'lucide-react';

interface Props {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  streakDays: number;
  onOpenDisclaimer: () => void;
  confidenceScore: number;
}

export const Navbar: React.FC<Props> = ({
  isDarkMode,
  onToggleTheme,
  streakDays,
  onOpenDisclaimer,
  confidenceScore
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#060714]/80 dark:bg-[#060714]/80 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-400 to-indigo-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-5 h-5 text-white animate-pulse" />
          </div>
          <div>
            <span className="font-extrabold text-xl bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent tracking-tight italic">
              PersonaAI
            </span>
            <span className="hidden sm:inline-block ml-2 text-[10px] px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 font-bold border border-cyan-500/30 uppercase tracking-widest">
              Growth & Success
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Streak Counter */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold shadow-xs">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400 animate-bounce" />
            <span>{streakDays} Day Streak</span>
          </div>

          {/* Confidence Badge */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Score: {confidenceScore}%</span>
          </div>

          {/* Disclaimer Button */}
          <button
            onClick={onOpenDisclaimer}
            title="Privacy & Educational Disclaimer"
            className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
          >
            <ShieldCheck className="w-5 h-5" />
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors border border-white/10"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-cyan-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
