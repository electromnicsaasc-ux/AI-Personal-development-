import React from 'react';
import { ShieldAlert, X, HeartHandshake } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const DisclaimerModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4 text-amber-600 dark:text-amber-400">
          <div className="p-3 bg-amber-100 dark:bg-amber-950/50 rounded-xl">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Guidance & Educational Disclaimer</h3>
            <p className="text-xs text-amber-700 dark:text-amber-300 font-medium">Self-Improvement & Success Tool</p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            <strong>PersonaAI</strong> is designed exclusively for educational guidance, personal motivation, career discovery, and self-improvement for students and individuals.
          </p>
          <p>
            The personality scores, AI mentor suggestions, and report insights are <strong>not clinical or psychological medical diagnoses</strong>.
          </p>
          <p className="flex items-start gap-2 bg-slate-100 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
            <HeartHandshake className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <span>If you are experiencing severe mental distress, anxiety, or depression, please reach out to a trusted counselor, parent, or professional mental health service.</span>
          </p>
        </div>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/20 transition-all"
          >
            I Understand & Agree
          </button>
        </div>
      </div>
    </div>
  );
};
