import React, { useState } from 'react';
import { CAREER_DATABASE } from '../data/careers';
import { PersonalityArchetype } from '../types';
import { Briefcase, Search, Sparkles, TrendingUp, CheckCircle2, ChevronRight, Award } from 'lucide-react';

interface Props {
  userArchetype?: PersonalityArchetype;
}

export const CareerSuggestionsView: React.FC<Props> = ({ userArchetype = 'Leader' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'STEM & AI', 'Medical & Research', 'Leadership & Civil Services', 'Arts & Media', 'Business & Legal'];

  const filteredCareers = CAREER_DATABASE.filter((career) => {
    const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          career.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          career.keySkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || career.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 rounded-3xl p-8 text-white shadow-xl border border-indigo-500/20">
        <div className="flex items-center gap-3 mb-2">
          <Briefcase className="w-8 h-8 text-amber-400" />
          <h1 className="text-2xl sm:text-4xl font-extrabold">AI Career Suggestions</h1>
        </div>
        <p className="text-slate-300 text-sm max-w-2xl">
          Discover career paths mapped to your personality type (<span className="text-amber-300 font-bold">{userArchetype}</span>), complete with matching explanations, required skills, and growth outlooks.
        </p>

        {/* Search & Category Filter */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search careers (e.g. AI Engineer, IAS, Doctor, Lawyer)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/10 text-white placeholder-slate-400 border border-white/20 focus:outline-hidden focus:ring-2 focus:ring-amber-400 text-sm"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Careers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCareers.map((career) => {
          const isArchetypeMatch = userArchetype ? (career.matchingArchetypes as string[]).includes(userArchetype) : false;

          return (
            <div
              key={career.id}
              className={`p-6 rounded-3xl bg-white dark:bg-slate-900 border transition-all ${
                isArchetypeMatch
                  ? 'border-indigo-500/80 shadow-md shadow-indigo-500/10 ring-1 ring-indigo-500/30'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {career.category}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                    {career.title}
                  </h3>
                </div>

                {isArchetypeMatch && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    <span>Archetype Match</span>
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {career.description}
              </p>

              {/* Why Match Explanation */}
              <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/50 mb-4 space-y-1">
                <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Why this matches your personality:</span>
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {career.whyMatch}
                </p>
              </div>

              {/* Required Key Skills */}
              <div className="mb-4">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Key Skills & Competencies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {career.keySkills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Growth Outlook */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="text-slate-500 flex items-center gap-1 font-medium">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span>Growth Outlook:</span>
                </span>
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {career.growthOutlook}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCareers.length === 0 && (
        <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
          <p className="text-slate-500">No careers found matching "{searchTerm}". Try another search term.</p>
        </div>
      )}

    </div>
  );
};
