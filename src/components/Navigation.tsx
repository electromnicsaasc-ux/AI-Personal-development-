import React from 'react';
import {
  Home,
  ClipboardList,
  Sparkles,
  CalendarCheck,
  Compass,
  Briefcase,
  MessageSquare,
  Users,
  ShieldCheck,
  Zap,
  Bot,
  BarChart3,
  GraduationCap
} from 'lucide-react';

export type NavTab =
  | 'home'
  | 'test'
  | 'report'
  | 'growth'
  | 'roadmap'
  | 'careers'
  | 'communication'
  | 'leadership'
  | 'confidence'
  | 'motivation'
  | 'mentor'
  | 'dashboard'
  | 'parent-teacher';

interface Props {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const NAV_ITEMS: { id: NavTab; label: string; icon: React.FC<{ className?: string }> }[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'test', label: 'Personality Test', icon: ClipboardList },
  { id: 'report', label: 'AI Report', icon: Sparkles },
  { id: 'growth', label: 'Growth Plan', icon: CalendarCheck },
  { id: 'roadmap', label: 'Success Roadmap', icon: Compass },
  { id: 'careers', label: 'Career Match', icon: Briefcase },
  { id: 'communication', label: 'Comm Skills', icon: MessageSquare },
  { id: 'leadership', label: 'Leadership', icon: Users },
  { id: 'confidence', label: 'Confidence & EQ', icon: ShieldCheck },
  { id: 'motivation', label: 'Daily Motivation', icon: Zap },
  { id: 'mentor', label: 'AI Mentor Chat', icon: Bot },
  { id: 'dashboard', label: 'Progress & Badges', icon: BarChart3 },
  { id: 'parent-teacher', label: 'Parent / Teacher', icon: GraduationCap },
];

export const Navigation: React.FC<Props> = ({ activeTab, onTabChange }) => {
  return (
    <>
      {/* Desktop Navigation Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-black/20 dark:bg-black/30 backdrop-blur-xl border-r border-white/10 p-4 shrink-0 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto custom-scrollbar">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-3 px-3">
          Growth Navigation
        </div>
        <nav className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-medium text-xs transition-all text-left ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-indigo-600/30 border border-cyan-500/40 text-cyan-300 font-bold shadow-lg shadow-cyan-500/10 backdrop-blur-md'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-gray-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Bottom Navigation Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#060714]/90 backdrop-blur-xl border-t border-white/10 px-2 py-2 shadow-2xl">
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center justify-center min-w-[4.2rem] px-2 py-1.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold'
                    : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4 mb-0.5" />
                <span className="text-[10px] whitespace-nowrap leading-tight">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
