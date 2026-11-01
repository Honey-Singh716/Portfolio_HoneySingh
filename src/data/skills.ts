// src/data/skills.ts

export interface SkillDomain {
  id: string;
  label: string;
  tagline: string;
  accent: string;
  skills: string[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: 'software',
    label: 'Software Engineering',
    tagline: 'Strong foundations in CS fundamentals, systems, and clean code.',
    accent: '#4f8ef7',
    skills: [
      'C++',
      'Java',
      'JavaScript',
      'Python',
      'OOP',
      'Software development',
      'Data structures and algorithms',
      'Problem solving',
    ],
  },
  {
    id: 'backend',
    label: 'Backend Engineering',
    tagline: 'Building robust, scalable APIs, services and resilient data layers.',
    accent: '#7c5cbf',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'REST APIs',
      'Authentication and authorization',
      'Database design',
      'Backend architecture',
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    tagline: 'Applying intelligent models and NLP to real-world software.',
    accent: '#22c55e',
    skills: [
      'Python',
      'Machine Learning',
      'NLP',
      'LLM applications',
      'RAG',
      'Embeddings',
      'AI integrations',
      'Intelligent recommendation systems',
    ],
  },
  {
    id: 'data-science',
    label: 'Data Science',
    tagline: 'Extracting patterns and meaning from data through analysis and exploration.',
    accent: '#f59e0b',
    skills: [
      'Python',
      'NumPy',
      'Pandas',
      'Data analysis',
      'Data visualization',
      'Statistical exploration',
      'Machine learning experiments',
    ],
  },
];

export const exploringTopics = [
  'System Design',
  'Distributed Systems',
  'Database Internals',
  'Networking',
  'Scalability',
  'Cloud Infrastructure',
  'Security',
  'AI Engineering',
];

