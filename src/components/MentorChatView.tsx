import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, UserProgress } from '../types';
import { Bot, Send, User, Sparkles, Loader2, HelpCircle } from 'lucide-react';
import { generateSmartMentorResponse } from '../utils/mentorHelper';

interface Props {
  progressState?: UserProgress;
}

export const MentorChatView: React.FC<Props> = ({ progressState }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'mentor',
      text: "Hello! I'm Mentor Alex, your AI Life Coach and Growth Partner. How are you feeling today? You can ask me anything about exam stress, study focus, building confidence, or choosing the right career path!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "I feel nervous before exams.",
    "I cannot focus on studying.",
    "I don't have confidence speaking in public.",
    "How can I become successful in life?",
    "What career is best for my personality?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/gemini/chat-mentor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg],
          userContext: progressState || {}
        }),
      });

      if (!res.ok) throw new Error('API request failed');
      const data = await res.json();

      const mentorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'mentor',
        text: data.reply || generateSmartMentorResponse(query, progressState),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, mentorMsg]);
    } catch (err) {
      console.warn('Fallback mentor chat response', err);
      const mentorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'mentor',
        text: generateSmartMentorResponse(query, progressState),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, mentorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12 flex flex-col h-[calc(100vh-8rem)]">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 rounded-2xl p-4 text-white shadow-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/30 flex items-center justify-center text-purple-300 ring-2 ring-purple-400/30">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">AI Mentor Alex</h1>
            <p className="text-xs text-purple-200">24/7 Encouraging Life Coach & Study Partner</p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Active</span>
        </div>
      </div>

      {/* Messages Window */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-3xl p-4 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm overflow-y-auto space-y-4 custom-scrollbar">
        {messages.map((m) => {
          const isMentor = m.sender === 'mentor';
          return (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${isMentor ? 'justify-start' : 'justify-end'}`}
            >
              {isMentor && (
                <div className="w-8 h-8 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  isMentor
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/60 dark:border-slate-700/60'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-tr-none shadow-md'
                }`}
              >
                <p className="whitespace-pre-wrap">{m.text}</p>
                <span className={`block text-[10px] mt-1.5 text-right ${
                  isMentor ? 'text-slate-400' : 'text-purple-200'
                }`}>
                  {m.timestamp}
                </span>
              </div>

              {!isMentor && (
                <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-1">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex items-center gap-3 text-slate-400 text-xs italic">
            <div className="w-8 h-8 rounded-xl bg-purple-600/30 text-purple-300 flex items-center justify-center">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
            <span>Mentor Alex is thinking...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Prompts */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
        {quickPrompts.map((p, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(p)}
            className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-300 text-xs font-medium whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask Mentor Alex anything (e.g., 'How can I stay calm before my speech?')..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-sm shadow-xs"
        />

        <button
          onClick={() => handleSend()}
          disabled={!inputText.trim() || isLoading}
          className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold disabled:opacity-50 shadow-md transition-all shrink-0"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>

    </div>
  );
};
