// src/data/journey.ts

export interface JourneyMilestone {
  id: string;
  phase: string;
  description: string;
  highlights?: string[];
  isCurrent?: boolean;
}

export const journey: JourneyMilestone[] = [
  {
    id: 'foundations',
    phase: 'Programming Foundations',
    description: 'Started the journey with programming fundamentals — logic, control flow, functions and the basics of how software works.',
    highlights: ['Learning to code', 'Problem solving mindset', 'Algorithmic thinking'],
  },
  {
    id: 'cpp-dsa',
    phase: 'C++ & Data Structures',
    description: 'Dived deep into C++ and classical data structures and algorithms — building intuition for how programs work under the hood.',
    highlights: ['C++', 'DSA', 'Competitive thinking', 'Low-level understanding'],
  },
  {
    id: 'software-dev',
    phase: 'Software Development',
    description: 'Started building real applications — exploring Java, Python, OOP principles and software development practices.',
    highlights: ['Java', 'Python', 'OOP', 'Building projects'],
  },
  {
    id: 'backend',
    phase: 'Backend Engineering',
    description: 'Moved into backend development — APIs, databases, authentication, system architecture. Building the invisible layer that powers products.',
    highlights: ['Node.js', 'Express.js', 'FastAPI', 'PostgreSQL', 'Redis', 'REST APIs'],
  },
  {
    id: 'ai-ml',
    phase: 'Exploring AI & Machine Learning',
    description: 'Started exploring the intersection of software and intelligence — NLP, ML models, LLM applications, RAG systems and AI integrations.',
    highlights: ['Machine Learning', 'NLP', 'LLM', 'RAG', 'Embeddings'],
  },
  {
    id: 'system-design',
    phase: 'System Design & Depth',
    description: 'Exploring how large-scale systems are designed, built and maintained — distributed systems, database internals, scalability and architecture.',
    highlights: ['System Design', 'Distributed Systems', 'Scalability', 'Architecture'],
  },
  {
    id: 'current',
    phase: 'Where I Am Now',
    description: 'Building meaningful software, deepening backend and AI engineering knowledge, and working toward becoming a strong software engineer who creates real-world impact.',
    highlights: ['Building products', 'Continuous learning', 'AI + Backend convergence'],
    isCurrent: true,
  },
];

export const currentlyExploring = [
  'Advanced Backend Engineering',
  'System Design',
  'AI Engineering',
  'Machine Learning',
  'Scalable Software Architecture',
];

