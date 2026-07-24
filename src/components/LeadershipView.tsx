import React, { useState } from 'react';
import { Users, Shield, CheckCircle2, Circle, Trophy, Lightbulb, AlertTriangle } from 'lucide-react';

export const LeadershipView: React.FC = () => {
  const [completedTaskIds, setCompletedTaskIds] = useState<string[]>([]);
  const [selectedScenarioChoice, setSelectedScenarioChoice] = useState<number | null>(null);

  const leadershipActivities = [
    { id: 'l1', title: 'Delegate Task Responsibilities Fairly in Group Project', desc: 'Identify individual team member strengths and assign suitable sub-tasks with clear deadlines.' },
    { id: 'l2', title: 'Conduct Active Listening & Conflict Resolution', desc: 'When two group members disagree, listen peacefully to both sides and craft a win-win solution.' },
    { id: 'l3', title: 'Take Full Ownership of a Group Setback', desc: 'Accept responsibility without blaming external factors, then lead the team toward corrective steps.' },
    { id: 'l4', title: 'Praise and Encourage 2 Teammates Publicly', desc: 'Acknowledge specific contributions to build high group morale and confidence.' }
  ];

  const scenario = {
    title: 'Scenario Challenge: Group Project Deadline Crisis',
    context: 'Your team is 24 hours away from submitting a major science project. One team member has fallen sick and left their section unfinished. The remaining members are panicked and blaming each other.',
    choices: [
      { id: 1, text: 'Take charge, call a calm 5-minute meeting, divide the remaining work fairly among available members, and lead by example.', score: 100, feedback: 'Excellent Leadership! Calm command, delegation, and personal accountability resolve crises fast.' },
      { id: 2, text: 'Do all the remaining work yourself without talking to anyone to guarantee it gets done.', score: 60, feedback: 'Good effort, but leads to burnout and misses the opportunity to empower your team.' },
      { id: 3, text: 'Blame the sick member and complain to the teacher asking for an extension.', score: 20, feedback: 'Avoid blaming. Leaders focus on actionable solutions first before asking for extensions.' }
    ]
  };

  const toggleActivity = (id: string) => {
    setCompletedTaskIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-slate-900 rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-2">
          <Users className="w-8 h-8 text-indigo-400" />
          <h1 className="text-2xl sm:text-4xl font-extrabold">Leadership & Decision Training</h1>
        </div>
        <p className="text-indigo-100 text-sm max-w-2xl">
          Build responsibility, decision-making stamina, teamwork, and crisis management skills through real-world scenarios and leadership activities.
        </p>
      </div>

      {/* Decision-Making Scenario Game */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            <span>Interactive Decision Game</span>
          </h2>
          <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
            Scenario Challenge
          </span>
        </div>

        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 space-y-3">
          <h3 className="font-bold text-base text-slate-900 dark:text-white">{scenario.title}</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{scenario.context}</p>

          <div className="space-y-3 pt-2">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              How do you respond as the team leader?
            </label>
            {scenario.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => setSelectedScenarioChoice(choice.id)}
                className={`w-full p-4 rounded-2xl border text-left text-xs font-semibold transition-all ${
                  selectedScenarioChoice === choice.id
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/40 border-indigo-500 text-indigo-900 dark:text-indigo-200 shadow-sm'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 text-slate-800 dark:text-slate-200'
                }`}
              >
                {choice.text}
              </button>
            ))}
          </div>

          {selectedScenarioChoice !== null && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-xs space-y-1 animate-in fade-in duration-300">
              <span className="font-bold block">
                Leader Score: {scenario.choices.find((c) => c.id === selectedScenarioChoice)?.score} / 100
              </span>
              <p>{scenario.choices.find((c) => c.id === selectedScenarioChoice)?.feedback}</p>
            </div>
          )}
        </div>
      </section>

      {/* Responsibility Tracker & Daily Activities */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-indigo-500" />
          <span>Daily Leadership Activities & Responsibility Tracker</span>
        </h2>

        <div className="space-y-3">
          {leadershipActivities.map((act) => {
            const isDone = completedTaskIds.includes(act.id);
            return (
              <div
                key={act.id}
                onClick={() => toggleActivity(act.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                  isDone
                    ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                    : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 hover:border-indigo-500/50'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                ) : (
                  <Circle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                )}

                <div>
                  <h3 className={`font-bold text-sm ${isDone ? 'line-through text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
