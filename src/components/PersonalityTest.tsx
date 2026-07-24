import React, { useState } from 'react';
import { PERSONALITY_QUESTIONS } from '../data/questions';
import { LikertValue, PersonalityReport } from '../types';
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  RotateCcw,
  AlertCircle,
  HelpCircle,
  Loader2
} from 'lucide-react';
import { calculateLocalReport } from '../data/mockReport';

interface Props {
  onComplete: (report: PersonalityReport, answers: Record<number, number>) => void;
  savedAnswers?: Record<number, number>;
}

export const PersonalityTest: React.FC<Props> = ({ onComplete, savedAnswers = {} }) => {
  const [answers, setAnswers] = useState<Record<number, number>>(savedAnswers);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isLoadingAI, setIsLoadingAI] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const questionsPerPage = 5;
  const totalQuestions = PERSONALITY_QUESTIONS.length;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);

  const currentQuestions = PERSONALITY_QUESTIONS.slice(
    currentStep * questionsPerPage,
    (currentStep + 1) * questionsPerPage
  );

  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  const handleSelect = (questionId: number, value: LikertValue) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalPages - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async () => {
    setIsLoadingAI(true);
    setErrorMessage(null);

    // Prepare category totals
    const categoryTotals: Record<string, { sum: number; count: number }> = {};
    PERSONALITY_QUESTIONS.forEach((q) => {
      const val = answers[q.id] || 3;
      if (!categoryTotals[q.category]) {
        categoryTotals[q.category] = { sum: 0, count: 0 };
      }
      categoryTotals[q.category].sum += val;
      categoryTotals[q.category].count += 1;
    });

    const categoryScores: Record<string, number> = {};
    Object.keys(categoryTotals).forEach((cat) => {
      const avg = categoryTotals[cat].sum / categoryTotals[cat].count;
      categoryScores[cat] = Math.round((avg / 5) * 100);
    });

    try {
      const res = await fetch('/api/gemini/analyze-personality', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ categoryScores, userAnswers: answers }),
      });

      if (!res.ok) {
        throw new Error('Server returned an error status.');
      }

      const aiReport: PersonalityReport = await res.json();
      onComplete(aiReport, answers);
    } catch (err: any) {
      console.warn('AI analysis failed or offline. Falling back to local scoring rules.', err);
      const localReport = calculateLocalReport(answers);
      onComplete(localReport, answers);
    } finally {
      setIsLoadingAI(false);
    }
  };

  const options: { label: string; value: LikertValue; color: string }[] = [
    { label: 'Strongly Agree', value: 5, color: 'bg-emerald-600 hover:bg-emerald-700 text-white' },
    { label: 'Agree', value: 4, color: 'bg-teal-600 hover:bg-teal-700 text-white' },
    { label: 'Neutral', value: 3, color: 'bg-slate-500 hover:bg-slate-600 text-white' },
    { label: 'Disagree', value: 2, color: 'bg-amber-600 hover:bg-amber-700 text-white' },
    { label: 'Strongly Disagree', value: 1, color: 'bg-rose-600 hover:bg-rose-700 text-white' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      
      {/* Header & Progress Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-indigo-500" />
              <span>Personality & Aptitude Assessment</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Answer honestly. There are no right or wrong answers.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-indigo-50 dark:bg-indigo-950/40 px-4 py-2 rounded-xl border border-indigo-100 dark:border-indigo-900/60">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
              {answeredCount} / {totalQuestions} Answered
            </span>
            <span className="text-xs font-extrabold text-indigo-700 dark:text-indigo-300">
              ({progressPercent}%)
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full transition-all duration-300 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>Page {currentStep + 1} of {totalPages}</span>
          <button
            onClick={() => {
              if (confirm("Reset all test answers?")) setAnswers({});
            }}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Test</span>
          </button>
        </div>
      </div>

      {/* Question Cards */}
      <div className="space-y-4">
        {currentQuestions.map((q, idx) => {
          const globalIdx = currentStep * questionsPerPage + idx + 1;
          const selectedValue = answers[q.id];

          return (
            <div
              key={q.id}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border transition-all ${
                selectedValue
                  ? 'border-indigo-500/50 dark:border-indigo-500/40 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs">
                  Q{globalIdx}. {q.category}
                </span>
                {selectedValue && (
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                )}
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-4">
                {q.text}
              </h3>

              {/* 5 Likert Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                {options.map((opt) => {
                  const isSelected = selectedValue === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => handleSelect(q.id, opt.value)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                        isSelected
                          ? `${opt.color} shadow-md scale-102 ring-2 ring-offset-2 ring-indigo-500 dark:ring-offset-slate-900`
                          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
        <button
          onClick={handlePrev}
          disabled={currentStep === 0 || isLoadingAI}
          className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {currentStep < totalPages - 1 ? (
          <button
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm flex items-center gap-2 shadow-md transition-all"
          >
            <span>Next Questions</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isLoadingAI || answeredCount < 10}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-600 hover:to-indigo-700 text-white font-extrabold text-sm shadow-xl shadow-teal-500/20 flex items-center gap-2 disabled:opacity-50 transition-all"
          >
            {isLoadingAI ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Generating AI Analysis...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Submit & Generate AI Report</span>
              </>
            )}
          </button>
        )}
      </div>

      {answeredCount < 10 && currentStep === totalPages - 1 && (
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-500" />
          <span>Please answer at least 10 questions to generate a meaningful personality analysis.</span>
        </div>
      )}
    </div>
  );
};
