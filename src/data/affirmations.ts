export interface QuoteItem {
  id: string;
  quote: string;
  author: string;
  category: string;
}

export const MOTIVATIONAL_QUOTES: QuoteItem[] = [
  {
    id: 'q1',
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Vision & Dreams"
  },
  {
    id: 'q2',
    quote: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "Authenticity"
  },
  {
    id: 'q3',
    quote: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
    category: "Action & Courage"
  },
  {
    id: 'q4',
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Resilience"
  },
  {
    id: 'q5',
    quote: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela",
    category: "Learning & Impact"
  },
  {
    id: 'q6',
    quote: "Small daily improvements over time lead to stunning results.",
    author: "Robin Sharma",
    category: "Discipline & Growth"
  }
];

export const DAILY_AFFIRMATIONS = [
  "I am confident in my unique abilities and continuously growing every day.",
  "I express my thoughts clearly, calmly, and with convincing courage.",
  "Challenges are stepping stones that build my resilience and character.",
  "I hold the key to my focus, success, and positive mindset.",
  "I am a natural leader who inspires kindness, accountability, and excellence in others.",
  "My effort today lays the foundation for a brilliant future tomorrow."
];

export const INSPIRATIONAL_STORIES = [
  {
    title: "Dr. A.P.J. Abdul Kalam – The Missile Man's Humility",
    summary: "Born in a humble town of Rameswaram, Dr. Kalam sold newspapers as a young boy to support his education. Through relentless discipline, scientific curiosity, and unshakeable humility, he became India's premier defense scientist and beloved 11th President. His advice to students: 'Dream is not that which you see while sleeping, it is something that does not let you sleep.'",
    lesson: "Humble beginnings cannot restrict a mind committed to continuous learning and service."
  },
  {
    title: "J.K. Rowling – Overcoming Rejection",
    summary: "Facing extreme poverty, single motherhood, and 12 publisher rejections, Rowling continued writing Harry Potter with unwavering belief in her imagination. Today, her stories have inspired over 500 million readers worldwide.",
    lesson: "Rejection is just redirection toward your true creative mastery."
  },
  {
    title: "Elon Musk – First Principles Thinking",
    summary: "When traditional aerospace experts declared building private rockets too expensive, Musk broke down the raw materials cost and re-engineered reusable rockets from scratch, revolutionizing space exploration with SpaceX.",
    lesson: "Question assumptions and tackle complex problems by reducing them to fundamental truths."
  }
];
