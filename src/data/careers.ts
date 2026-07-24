import { CareerPath } from '../types';

export const CAREER_DATABASE: CareerPath[] = [
  {
    id: 'ai-engineer',
    title: 'AI Engineer',
    category: 'STEM & AI',
    description: 'Design, build, and deploy intelligent algorithms and neural models that solve real-world problems.',
    whyMatch: 'Your strong analytical thinking, problem-solving mindset, and curiosity align perfectly with building cutting-edge artificial intelligence systems.',
    keySkills: ['Python / PyTorch', 'Machine Learning', 'Logic & Math', 'Algorithm Design'],
    growthOutlook: 'Exponential Growth (Highest Global Demand)',
    matchingArchetypes: ['Analyst', 'Problem Solver', 'Creative Thinker', 'Visionary']
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'STEM & AI',
    description: 'Extract actionable insights and predictive patterns from large datasets to guide decisions.',
    whyMatch: 'Your high attention to detail and affinity for structured reasoning enable you to spot patterns others miss.',
    keySkills: ['Data Analytics', 'Statistics', 'SQL & Python', 'Data Visualization'],
    growthOutlook: 'Very High Growth',
    matchingArchetypes: ['Analyst', 'Problem Solver', 'Planner']
  },
  {
    id: 'software-developer',
    title: 'Software Developer',
    category: 'STEM & AI',
    description: 'Architect scalable web, mobile, and cloud software applications used by millions.',
    whyMatch: 'Combines systematic logic with creative product engineering. Perfect for those who love building useful tools.',
    keySkills: ['TypeScript/Java/C++', 'System Design', 'Git & CI/CD', 'Problem Solving'],
    growthOutlook: 'Very High Demand',
    matchingArchetypes: ['Problem Solver', 'Analyst', 'Creative Thinker', 'Planner']
  },
  {
    id: 'doctor',
    title: 'Medical Doctor / Surgeon',
    category: 'Medical & Research',
    description: 'Diagnose illnesses, perform life-saving treatments, and advance healthcare quality.',
    whyMatch: 'Requires a deep blend of empathy, composure under stress, high discipline, and decisive clinical judgment.',
    keySkills: ['Clinical Knowledge', 'High Empathy', 'Stress Management', 'Precision'],
    growthOutlook: 'Steady, High Prestige & Impact',
    matchingArchetypes: ['Helper', 'Leader', 'Analyst', 'Problem Solver']
  },
  {
    id: 'scientist-researcher',
    title: 'Research Scientist',
    category: 'Medical & Research',
    description: 'Conduct scientific discoveries in biotechnology, physics, genetics, or environmental science.',
    whyMatch: 'Thrives on deep curiosity, hypothesis testing, patient experimentation, and expanding human knowledge.',
    keySkills: ['Scientific Method', 'Lab Techniques', 'Critical Thinking', 'Academic Writing'],
    growthOutlook: 'High Research Funding & Demand',
    matchingArchetypes: ['Analyst', 'Problem Solver', 'Visionary', 'Explorer']
  },
  {
    id: 'civil-services-ias-ips',
    title: 'Civil Services (IAS / IPS Officer)',
    category: 'Leadership & Civil Services',
    description: 'Lead public administration, policy implementation, law enforcement, and nation-building initiatives.',
    whyMatch: 'Your strong sense of duty, leadership qualities, decision-making stamina, and public service ethos match governance roles.',
    keySkills: ['Public Policy', 'Crisis Leadership', 'Strategic Governance', 'Public Relations'],
    growthOutlook: 'Maximum Public Impact & High Prestige',
    matchingArchetypes: ['Leader', 'Visionary', 'Motivator', 'Planner']
  },
  {
    id: 'defense-army-officer',
    title: 'Armed Forces Officer (Army / Navy / Air Force)',
    category: 'Leadership & Civil Services',
    description: 'Command units, safeguard national security, and demonstrate peak physical & mental discipline.',
    whyMatch: 'High marks in courage, physical/mental discipline, team loyalty, and rapid tactical decision-making.',
    keySkills: ['Tactical Leadership', 'Unshakeable Discipline', 'Teamwork', 'Crisis Command'],
    growthOutlook: 'Honored National Service',
    matchingArchetypes: ['Leader', 'Motivator', 'Planner']
  },
  {
    id: 'entrepreneur',
    title: 'Entrepreneur / Startup Founder',
    category: 'Business & Legal',
    description: 'Build innovative companies, lead teams, launch products, and disrupt traditional industries.',
    whyMatch: 'Matches individuals with high risk appetite, visionary outlook, adaptability, and persuasive communication.',
    keySkills: ['Business Strategy', 'Financial Management', 'Pitching', 'Team Building'],
    growthOutlook: 'Unlimited Potential',
    matchingArchetypes: ['Visionary', 'Leader', 'Explorer', 'Motivator']
  },
  {
    id: 'lawyer',
    title: 'Corporate / Human Rights Lawyer',
    category: 'Business & Legal',
    description: 'Advocate for clients, construct bulletproof legal arguments, and navigate complex regulations.',
    whyMatch: 'Ideal for persuasive communicators with sharp logical reasoning, debate prowess, and high ethics.',
    keySkills: ['Legal Research', 'Persuasive Speech', 'Contract Negotiation', 'Critical Analysis'],
    growthOutlook: 'High Demand in Tech & Global Commerce',
    matchingArchetypes: ['Analyst', 'Leader', 'Problem Solver']
  },
  {
    id: 'teacher-educator',
    title: 'Educator / Academic Leader',
    category: 'Leadership & Civil Services',
    description: 'Inspire and mentor the next generation, developing modern curriculums and learning environments.',
    whyMatch: 'High emotional intelligence, patience, clear communication, and passion for helping others flourish.',
    keySkills: ['Pedagogy', 'Public Presentation', 'Empathy', 'Curriculum Design'],
    growthOutlook: 'Constant Global Need',
    matchingArchetypes: ['Helper', 'Motivator', 'Leader']
  },
  {
    id: 'ui-ux-designer',
    title: 'Product UI/UX & Brand Designer',
    category: 'Arts & Media',
    description: 'Craft intuitive, beautiful user interfaces and human-centered product experiences.',
    whyMatch: 'Unites visual creativity, empathy for user needs, and structured design thinking.',
    keySkills: ['Figma / UI Systems', 'User Research', 'Visual Aesthetics', 'Prototyping'],
    growthOutlook: 'Very High in Tech Ecosystem',
    matchingArchetypes: ['Creative Thinker', 'Helper', 'Explorer']
  },
  {
    id: 'digital-marketer',
    title: 'Digital Marketing Strategist',
    category: 'Arts & Media',
    description: 'Drive growth, brand stories, and audience engagement across modern digital platforms.',
    whyMatch: 'Combines creative storytelling, social intelligence, and analytics-driven campaign management.',
    keySkills: ['Growth Analytics', 'Content Strategy', 'Copywriting', 'SEO & Ad Operations'],
    growthOutlook: 'Rapidly Expanding',
    matchingArchetypes: ['Motivator', 'Creative Thinker', 'Explorer']
  },
  {
    id: 'electronics-engineer',
    title: 'Electronics & Embedded Systems Engineer',
    category: 'STEM & AI',
    description: 'Design semiconductors, IoT microcontrollers, robotics hardware, and smart devices.',
    whyMatch: 'Blends hands-on hardware engineering with deep systematic testing and physics fundamentals.',
    keySkills: ['Circuit Design', 'Embedded C/C++', 'Robotics', 'Hardware Testing'],
    growthOutlook: 'High (Semiconductor Expansion)',
    matchingArchetypes: ['Problem Solver', 'Analyst', 'Planner']
  },
  {
    id: 'mechanical-engineer',
    title: 'Mechanical & Aerospace Engineer',
    category: 'STEM & AI',
    description: 'Engineer rockets, electric vehicles, renewable energy systems, and robotics.',
    whyMatch: 'Perfect for problem solvers fascinated by how physical machines operate and innovate.',
    keySkills: ['CAD Design', 'Thermodynamics', 'Prototyping', 'Structural Mechanics'],
    growthOutlook: 'Strong Growth in EV & Clean Tech',
    matchingArchetypes: ['Problem Solver', 'Analyst', 'Creative Thinker']
  },
  {
    id: 'writer-content-creator',
    title: 'Author / Investigative Journalist / Content Creator',
    category: 'Arts & Media',
    description: 'Publish books, articles, podcasts, and video stories that inform, educate, and captivate.',
    whyMatch: 'Suited for deep articulate thinkers with rich vocabulary and strong narrative skill.',
    keySkills: ['Narrative Crafting', 'Research', 'Media Production', 'Public Communication'],
    growthOutlook: 'High in Creator Economy',
    matchingArchetypes: ['Creative Thinker', 'Explorer', 'Visionary']
  }
];
