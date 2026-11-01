// src/data/projects.ts

export type ProjectCategory =
  | 'All'
  | 'Software'
  | 'Backend'
  | 'AI / ML'
  | 'Data Science'
  | 'Systems';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  longDescription?: string;
  category: ProjectCategory[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  liveNote?: string;
  caseStudyUrl?: string;
  image?: string;
  featured: boolean;
  year?: string;
  status?: 'completed' | 'in-progress' | 'concept';
}

export const projects: Project[] = [
  {
    id: 'ai-resume-matching',
    title: 'RecruitAI — AI-Powered Resume Matching & Job Aggregation',
    shortDescription:
      'AI job-matching platform. Users upload a resume and get job recommendations, skills analysis and career insights. Includes an AI career assistant chat for resume tips and interview questions.',
    category: ['AI / ML', 'Backend', 'Software'],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'LLM', 'RAG', 'Embeddings'],
    githubUrl: 'https://github.com/Honey-Singh716/AI-Powered-Resume-Matching-Job-Aggregation-Platform',
    liveUrl: 'https://ai-resume-matching-job-aggregation.onrender.com/',
    featured: true,
    status: 'completed',
  },
  {
    id: 'resolvex',
    title: 'ResolveX — Multi-Tenant Issue Management Platform',
    shortDescription:
      'Multi-tenant issue management platform where organizations manage support tickets, team members, roles, and workflows with FastAPI, PostgreSQL, JWT auth, RBAC, and data isolation.',
    category: ['Backend', 'Software'],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'TypeScript', 'Docker'],
    githubUrl: 'https://github.com/Honey-Singh716/ResolveX',
    liveUrl: 'https://resolve-x-phi.vercel.app/',
    featured: true,
    status: 'completed',
  },
  {
    id: 'mindmate-ai',
    title: 'MindMate AI — Full-Stack RAG-Based Learning Assistant',
    shortDescription:
      'Full-stack AI learning assistant supporting conversational AI, PDF-based question answering with RAG (pgvector cosine search, MiniLM embeddings), and personalized study plans.',
    category: ['AI / ML', 'Software'],
    tech: ['Node.js', 'React', 'PostgreSQL', 'pgvector', 'Groq API', 'Transformers.js'],
    githubUrl: 'https://github.com/Honey-Singh716/MindMate-AI',
    liveUrl: 'https://mind-mate-ai-theta.vercel.app',
    featured: true,
    status: 'completed',
  },
  {
    id: 'mini-redis',
    title: 'MiniRedis — In-Memory Key-Value Store',
    shortDescription:
      'In-memory key-value store implementing Redis-inspired SET, GET, DEL, EXISTS operations with a custom hash table, versioned min-heap TTL expiration, and LRU cache.',
    category: ['Systems', 'Backend', 'Software'],
    tech: ['C++', 'Hash Tables', 'Min-Heap', 'LRU Cache', 'File I/O'],
    githubUrl: 'https://github.com/Honey-Singh716/MiniRedis',
    featured: true,
    status: 'completed',
  },
  {
    id: 'movie-recommender',
    title: 'Movie AI Recommender System',
    shortDescription:
      'Mood-based movie recommendation system with actor/actress filmography analysis, sentiment analysis of reviews, and an interactive Streamlit UI powered by machine learning.',
    category: ['AI / ML', 'Data Science', 'Software'],
    tech: ['Python', 'Streamlit', 'scikit-learn', 'Pandas', 'TMDB API', 'NLP', 'Sentiment Analysis'],
    githubUrl: 'https://github.com/Honey-Singh716/Movie_recommender_ai/',
    liveUrl: 'https://movierecommenderai-wrfh7tewswqrappwusrpy7k.streamlit.app/',
    featured: true,
    status: 'completed',
  },
  {
    id: 'task-manager',
    title: 'TaskManager',
    shortDescription:
      'A full-featured task management application with authentication, priority queues, deadline tracking and a clean, responsive interface.',
    category: ['Software', 'Backend'],
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'React', 'TypeScript'],
    githubUrl: 'https://github.com/Honey-Singh716/TaskManager',
    featured: false,
    status: 'completed',
  },
  {
    id: 'file-compressor',
    title: 'FileCompressor',
    shortDescription:
      'A command-line file compression utility implementing Huffman Coding for lossless data compression with a custom binary encoding scheme.',
    category: ['Systems', 'Software'],
    tech: ['C++', 'Huffman Coding', 'Data Structures', 'Algorithms', 'File I/O'],
    githubUrl: 'https://github.com/Honey-Singh716/FileCompressor',
    featured: false,
    status: 'completed',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
