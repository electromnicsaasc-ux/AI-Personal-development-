import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Navigation, NavTab } from './components/Navigation';
import { HomeScreen } from './components/HomeScreen';
import { PersonalityTest } from './components/PersonalityTest';
import { PersonalityReportView } from './components/PersonalityReportView';
import { ImprovementPlanView } from './components/ImprovementPlanView';
import { SuccessRoadmapView } from './components/SuccessRoadmapView';
import { CareerSuggestionsView } from './components/CareerSuggestionsView';
import { CommunicationCoachView } from './components/CommunicationCoachView';
import { LeadershipView } from './components/LeadershipView';
import { ConfidenceAndEQView } from './components/ConfidenceAndEQView';
import { DailyMotivationView } from './components/DailyMotivationView';
import { MentorChatView } from './components/MentorChatView';
import { ProgressDashboard } from './components/ProgressDashboard';
import { ParentTeacherDashboard } from './components/ParentTeacherDashboard';
import { DisclaimerModal } from './components/DisclaimerModal';
import { UserProgress, PersonalityReport } from './types';
import { calculateLocalReport } from './data/mockReport';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('personaai_theme');
    return saved ? saved === 'dark' : true; // Default to dark mode for Immersive UI theme
  });

  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState<boolean>(false);

  // Initial user progress loaded from localStorage
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('personaai_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return {
      testCompleted: false,
      completedHabits: ['h1', 'h2'],
      completedMilestones: ['m1'],
      unlockedBadges: ['b1'],
      streakDays: 3,
      lastActiveDate: new Date().toISOString().split('T')[0],
      dailyMissionCompleted: false,
      confidenceScore: 82,
      leadershipScore: 85,
      communicationScore: 80,
      report: calculateLocalReport({})
    };
  });

  const [savedAnswers, setSavedAnswers] = useState<Record<number, number>>({});

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('personaai_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('personaai_theme', 'light');
    }
  }, [isDarkMode]);

  // Persist progress
  useEffect(() => {
    localStorage.setItem('personaai_progress', JSON.stringify(progress));
  }, [progress]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleTestComplete = (report: PersonalityReport, answers: Record<number, number>) => {
    setSavedAnswers(answers);
    setProgress((prev) => ({
      ...prev,
      testCompleted: true,
      report,
      confidenceScore: Math.min(prev.confidenceScore + 5, 98),
      leadershipScore: Math.min(prev.leadershipScore + 4, 96),
      communicationScore: Math.min(prev.communicationScore + 6, 95)
    }));
    setActiveTab('report');
  };

  const handleToggleHabit = (habitId: string) => {
    setProgress((prev) => {
      const exists = prev.completedHabits.includes(habitId);
      const updated = exists
        ? prev.completedHabits.filter((id) => id !== habitId)
        : [...prev.completedHabits, habitId];
      return { ...prev, completedHabits: updated };
    });
  };

  const handleToggleMilestone = (milestoneId: string) => {
    setProgress((prev) => {
      const exists = prev.completedMilestones.includes(milestoneId);
      const updated = exists
        ? prev.completedMilestones.filter((id) => id !== milestoneId)
        : [...prev.completedMilestones, milestoneId];
      return { ...prev, completedMilestones: updated };
    });
  };

  const handleToggleMission = () => {
    setProgress((prev) => ({
      ...prev,
      dailyMissionCompleted: !prev.dailyMissionCompleted,
      streakDays: !prev.dailyMissionCompleted ? prev.streakDays + 1 : prev.streakDays
    }));
  };

  return (
    <div className="relative min-h-screen bg-[#060714] dark:bg-[#060714] text-slate-100 font-sans transition-colors overflow-x-hidden flex flex-col">
      {/* Background Atmospheric Glows for Immersive UI */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-200px] left-[-100px] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header Bar */}
        <Navbar
          isDarkMode={isDarkMode}
          onToggleTheme={handleToggleTheme}
          streakDays={progress.streakDays}
          confidenceScore={progress.confidenceScore}
          onOpenDisclaimer={() => setIsDisclaimerOpen(true)}
        />

        <div className="flex flex-1">
          {/* Navigation Sidebar (Desktop) / Bottom Nav (Mobile) */}
          <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Main Content View Container */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto overflow-y-auto">
            {activeTab === 'home' && (
              <HomeScreen
                onNavigate={setActiveTab}
                streakDays={progress.streakDays}
                testCompleted={progress.testCompleted}
                confidenceScore={progress.confidenceScore}
              />
            )}

            {activeTab === 'test' && (
              <PersonalityTest
                onComplete={handleTestComplete}
                savedAnswers={savedAnswers}
              />
            )}

            {activeTab === 'report' && (
              <PersonalityReportView
                report={progress.report || calculateLocalReport({})}
                onRetakeTest={() => setActiveTab('test')}
              />
            )}

            {activeTab === 'growth' && (
              <ImprovementPlanView
                completedHabits={progress.completedHabits}
                onToggleHabit={handleToggleHabit}
              />
            )}

            {activeTab === 'roadmap' && (
              <SuccessRoadmapView
                completedMilestones={progress.completedMilestones}
                onToggleMilestone={handleToggleMilestone}
              />
            )}

            {activeTab === 'careers' && (
              <CareerSuggestionsView
                userArchetype={progress.report?.archetype || 'Leader'}
              />
            )}

            {activeTab === 'communication' && <CommunicationCoachView />}

            {activeTab === 'leadership' && <LeadershipView />}

            {activeTab === 'confidence' && <ConfidenceAndEQView />}

            {activeTab === 'motivation' && (
              <DailyMotivationView
                isMissionCompleted={progress.dailyMissionCompleted}
                onToggleMission={handleToggleMission}
              />
            )}

            {activeTab === 'mentor' && (
              <MentorChatView progressState={progress} />
            )}

            {activeTab === 'dashboard' && (
              <ProgressDashboard progress={progress} />
            )}

            {activeTab === 'parent-teacher' && (
              <ParentTeacherDashboard progressState={progress} />
            )}
          </main>
        </div>

        {/* Footer */}
        <footer className="relative z-10 px-6 sm:px-8 py-3 bg-black/40 border-t border-white/5 backdrop-blur-sm flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-gray-400">
          <p className="uppercase tracking-widest font-mono">
            PersonaAI v2.4 • Analysis Engine Powered by Gemini
          </p>
          <p className="italic text-gray-500">
            Results are for self-improvement and guidance purposes only.
          </p>
        </footer>
      </div>

      {/* Psychological Disclaimer Modal */}
      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
      />
    </div>
  );
}
