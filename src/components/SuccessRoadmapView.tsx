import React, { useState } from 'react';
import { Compass, CheckCircle2, Circle, Trophy, ArrowRight, Flag, Star } from 'lucide-react';
import { RoadmapMilestone } from '../types';

interface Props {
  completedMilestones: string[];
  onToggleMilestone: (id: string) => void;
}

export const SuccessRoadmapView: React.FC<Props> = ({
  completedMilestones,
  onToggleMilestone
}) => {
  const [activePhase, setActivePhase] = useState<'30-Day' | '60-Day' | '90-Day' | '1-Year'>('30-Day');

  const roadmapData: RoadmapMilestone[] = [
    // 30-Day
    { id: 'm1', phase: '30-Day', title: 'Complete Personality Assessment & Baseline', description: 'Take the 50-question test to identify strengths and growth dimensions.', completed: completedMilestones.includes('m1'), category: 'Self Discovery' },
    { id: 'm2', phase: '30-Day', title: 'Master 2-Minute Elevator Speech', description: 'Practice introducing yourself confidently without hesitation or filler words.', completed: completedMilestones.includes('m2'), category: 'Communication' },
    { id: 'm3', phase: '30-Day', title: 'Establish Daily 15-Min Study Discipline Routine', description: 'Set up a quiet study station with zero phone distractions.', completed: completedMilestones.includes('m3'), category: 'Discipline' },

    // 60-Day
    { id: 'm4', phase: '60-Day', title: 'Deliver 1 Public Presentation or Group Lead', description: 'Volunteer to present a project topic or moderate a group study session.', completed: completedMilestones.includes('m4'), category: 'Leadership' },
    { id: 'm5', phase: '60-Day', title: 'Read 1 High-Impact Personal Development Book', description: 'Finish reading "Atomic Habits" or "Mindset" and take notes.', completed: completedMilestones.includes('m5'), category: 'Knowledge' },
    { id: 'm6', phase: '60-Day', title: 'Shadow or Research Top 3 Career Matches', description: 'Interview a professional or watch in-depth career walkthroughs in your target field.', completed: completedMilestones.includes('m6'), category: 'Career' },

    // 90-Day
    { id: 'm7', phase: '90-Day', title: 'Build Personal Skill Portfolio / Resume', description: 'Document your achievements, certifications, leadership activities, and projects.', completed: completedMilestones.includes('m7'), category: 'Career Preparation' },
    { id: 'm8', phase: '90-Day', title: 'Participate in a Competition or Community Initiative', description: 'Join a debate, hackathon, science exhibition, or volunteer drive.', completed: completedMilestones.includes('m8'), category: 'Confidence' },
    { id: 'm9', phase: '90-Day', title: 'Master Stress Management & Examination Focus', description: 'Consistently practice box breathing and time-boxing during exam weeks.', completed: completedMilestones.includes('m9'), category: 'Emotional Intelligence' },

    // 1-Year
    { id: 'm10', phase: '1-Year', title: 'Achieve Target Academic & Skill Milestones', description: 'Maintain top academic performance and earn a recognized certification.', completed: completedMilestones.includes('m10'), category: 'Academic Excellence' },
    { id: 'm11', phase: '1-Year', title: 'Secure Leadership Role in Student Club or Team', description: 'Become a team captain, club president, or student leader.', completed: completedMilestones.includes('m11'), category: 'Leadership' },
    { id: 'm12', phase: '1-Year', title: 'Finalize Career Pathway & Mentorship Connection', description: 'Connect with a mentor or enroll in advanced career prep courses.', completed: completedMilestones.includes('m12'), category: 'Life Mastery' },
  ];

  const currentMilestones = roadmapData.filter((m) => m.phase === activePhase);
  const totalPhaseCount = currentMilestones.length;
  const donePhaseCount = currentMilestones.filter((m) => completedMilestones.includes(m.id)).length;
  const phaseProgress = Math.round((donePhaseCount / totalPhaseCount) * 100);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <Compass className="w-8 h-8 text-amber-400" />
          <h1 className="text-2xl sm:text-4xl font-extrabold">Student Success Roadmap</h1>
        </div>
        <p className="text-slate-300 text-sm max-w-2xl">
          A structured 4-stage timeline (30-Day, 60-Day, 90-Day, and 1-Year) guiding your journey to personal growth, academic achievement, and career mastery.
        </p>

        {/* Timeline Phase Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
          {(['30-Day', '60-Day', '90-Day', '1-Year'] as const).map((phase) => {
            const isActive = activePhase === phase;
            return (
              <button
                key={phase}
                onClick={() => setActivePhase(phase)}
                className={`py-3 px-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                <Flag className="w-4 h-4" />
                <span>{phase} Plan</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Progress & Milestones */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>{activePhase} Goal Milestones</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {donePhaseCount} of {totalPhaseCount} goals achieved in this stage
            </p>
          </div>

          <div className="w-full sm:w-48 space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-600 dark:text-slate-300">
              <span>Phase Progress</span>
              <span>{phaseProgress}%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${phaseProgress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {currentMilestones.map((m, idx) => {
            const isCompleted = completedMilestones.includes(m.id);
            return (
              <div
                key={m.id}
                onClick={() => onToggleMilestone(m.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all ${
                  isCompleted
                    ? 'bg-emerald-50/70 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-indigo-500/50'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    ) : (
                      <Circle className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                          {m.category}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">Step {idx + 1}</span>
                      </div>
                      <h3 className={`font-bold text-base ${isCompleted ? 'text-emerald-900 dark:text-emerald-300 line-through' : 'text-slate-900 dark:text-white'}`}>
                        {m.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xs font-bold px-3 py-1 rounded-xl shrink-0 ${
                    isCompleted ? 'bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                  }`}>
                    {isCompleted ? 'Achieved' : 'Pending'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
