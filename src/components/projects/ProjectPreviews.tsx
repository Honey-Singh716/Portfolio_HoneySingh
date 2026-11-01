// src/components/projects/ProjectPreviews.tsx
import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, CheckCircle2, GitBranch, Layers, BookOpen, Film } from 'lucide-react';

export function ProjectVisual({ projectId }: { projectId: string }) {
  switch (projectId) {
    case 'ai-resume-matching':
      return <AiResumePreview />;
    case 'resolvex':
      return <ResolveXPreview />;
    case 'mindmate-ai':
      return <MindMatePreview />;
    case 'mini-redis':
      return <MiniRedisPreview />;
    case 'file-compressor':
      return <FileCompressorPreview />;
    case 'movie-recommender':
      return <MovieRecommenderPreview />;
    case 'task-manager':
      return <TaskManagerPreview />;
    default:
      return <DefaultPreview />;
  }
}

function AiResumePreview() {
  return (
    <div className="w-full h-full bg-[#0c0d18] p-6 flex flex-col justify-between font-mono select-none overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <Cpu size={14} className="text-accent-blue" />
          <span className="text-xs text-text-primary font-medium">Embedding Semantic Pipeline</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
          Match Score: 94.8%
        </span>
      </div>

      {/* Center Graph Simulation */}
      <div className="space-y-3 my-auto py-2">
        <div className="p-2.5 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-between text-[11px]">
          <span className="text-text-muted">Resume Vector:</span>
          <span className="text-accent-blue font-mono">[0.842, 0.119, 0.952, ...]</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-[10px] text-text-muted">
          <span>Cosine Distance Metric</span>
          <span className="text-accent-violet">cos(θ) = 0.948</span>
        </div>
        <div className="p-2.5 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-between text-[11px]">
          <span className="text-text-muted">Job Spec Vector:</span>
          <span className="text-accent-violet font-mono">[0.835, 0.124, 0.941, ...]</span>
        </div>
      </div>

      {/* Footer Tags */}
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-[10px] text-text-muted">
        <span>RAG Pipeline</span>
        <span className="text-text-secondary">FastAPI · pgvector · Redis</span>
      </div>
    </div>
  );
}

function ResolveXPreview() {
  return (
    <div className="w-full h-full bg-[#0d0d1a] p-6 flex flex-col justify-between font-mono select-none overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-accent-violet/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <Layers size={14} className="text-accent-violet" />
          <span className="text-xs text-text-primary font-medium">ResolveX · Multi-Tenant</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-accent-violet/15 text-accent-violet border border-accent-violet/30">
          Tenant: org_prod_716
        </span>
      </div>

      {/* Tickets Mock */}
      <div className="space-y-2 my-auto py-2">
        <div className="p-2.5 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span className="text-text-primary">#RX-104 High Latency API Gateway</span>
          </div>
          <span className="text-[10px] text-text-muted">In Review</span>
        </div>
        <div className="p-2.5 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-text-primary">#RX-105 RBAC Middleware Token Expiry</span>
          </div>
          <span className="text-[10px] text-text-muted">Active</span>
        </div>
        <div className="p-2.5 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-text-primary">#RX-106 PostgreSQL Partitioning</span>
          </div>
          <span className="text-[10px] text-green-400">Resolved</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-[10px] text-text-muted">
        <span>Workspace Isolation</span>
        <span className="text-text-secondary">FastAPI · PostgreSQL · Docker · React</span>
      </div>
    </div>
  );
}

function MiniRedisPreview() {
  return (
    <div className="w-full h-full bg-[#0a0c14] p-6 flex flex-col justify-between font-mono select-none overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-amber-400" />
          <span className="text-xs text-text-primary font-medium">miniredis-server :6379</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
          RESP2 Parser
        </span>
      </div>

      {/* Terminal Log */}
      <div className="space-y-1.5 my-auto py-2 text-[11px]">
        <div className="text-text-muted">&gt; redis-cli -p 6379</div>
        <div className="text-text-secondary">&gt; SET user:session &quot;auth_token_99&quot; EX 3600</div>
        <div className="text-green-400">+OK (latency 0.08ms)</div>
        <div className="text-text-secondary">&gt; GET user:session</div>
        <div className="text-amber-300">&quot;auth_token_99&quot;</div>
        <div className="text-text-muted">&gt; TTL user:session</div>
        <div className="text-accent-blue">(integer) 3598</div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-[10px] text-text-muted">
        <span>C++ Sockets &amp; Event Loop</span>
        <span className="text-text-secondary">Zero-Dependency Custom Engine</span>
      </div>
    </div>
  );
}

function FileCompressorPreview() {
  return (
    <div className="w-full h-full bg-[#0b0f16] p-6 flex flex-col justify-between font-mono select-none overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <GitBranch size={14} className="text-accent-blue" />
          <span className="text-xs text-text-primary font-medium">Huffman Coding Tree</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-accent-blue/15 text-accent-blue border border-accent-blue/30">
          Ratio: -46.4%
        </span>
      </div>

      <div className="space-y-2 my-auto py-2 text-[11px]">
        <div className="flex justify-between items-center text-text-muted">
          <span>Input Size (Raw Text):</span>
          <span className="text-text-secondary">1,024,800 bytes</span>
        </div>
        <div className="flex justify-between items-center text-text-muted">
          <span>Compressed Binary:</span>
          <span className="text-green-400">549,292 bytes</span>
        </div>
        <div className="p-2 rounded bg-bg-card border border-border-subtle text-[10px] text-text-muted leading-relaxed">
          <span className="text-accent-blue">Prefix codes: </span>
          &apos;e&apos;: 101, &apos;t&apos;: 011, &apos;a&apos;: 001, &apos;o&apos;: 1110
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-[10px] text-text-muted">
        <span>Lossless Bitwise Compression</span>
        <span className="text-text-secondary">C++ · Binary I/O</span>
      </div>
    </div>
  );
}

function TaskManagerPreview() {
  return (
    <div className="w-full h-full bg-[#0c0f18] p-6 flex flex-col justify-between font-mono select-none overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={14} className="text-accent-blue" />
          <span className="text-xs text-text-primary font-medium">Task Engine</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-accent-blue/15 text-accent-blue border border-accent-blue/30">
          Priority Queue
        </span>
      </div>

      <div className="space-y-2 my-auto py-2 text-[11px]">
        <div className="p-2 rounded bg-bg-card border border-border-subtle flex justify-between items-center">
          <span className="text-text-primary">Database Migration</span>
          <span className="text-[10px] text-amber-400">High P1</span>
        </div>
        <div className="p-2 rounded bg-bg-card border border-border-subtle flex justify-between items-center">
          <span className="text-text-primary">JWT Token Refresh</span>
          <span className="text-[10px] text-blue-400">Med P2</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-[10px] text-text-muted">
        <span>CRUD &amp; Deadline Scheduling</span>
        <span className="text-text-secondary">Node · Express · PostgreSQL</span>
      </div>
    </div>
  );
}

function MovieRecommenderPreview() {
  return (
    <div className="w-full h-full bg-[#0e0c1a] p-6 flex flex-col justify-between font-mono select-none overflow-hidden relative">
      <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <Film size={14} className="text-pink-400" />
          <span className="text-xs text-text-primary font-medium">Movie AI Recommender</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">
          Mood: Adventure
        </span>
      </div>

      {/* Recommendations */}
      <div className="space-y-2 my-auto py-2 text-[11px]">
        <div className="p-2.5 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-between">
          <span className="text-text-primary">Interstellar</span>
          <span className="text-pink-400 font-mono">98.2%</span>
        </div>
        <div className="p-2.5 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-between">
          <span className="text-text-primary">Inception</span>
          <span className="text-pink-400 font-mono">95.7%</span>
        </div>
        <div className="p-2.5 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-between">
          <span className="text-text-primary">The Martian</span>
          <span className="text-pink-400 font-mono">91.3%</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-[10px] text-text-muted">
        <span>Sentiment · Filmography Analysis</span>
        <span className="text-text-secondary">Python · Streamlit · ML</span>
      </div>
    </div>
  );
}

function MindMatePreview() {
  return (
    <div className="w-full h-full bg-[#0d0f1a] p-6 flex flex-col justify-between font-mono select-none overflow-hidden relative">
      <div className="absolute top-0 left-0 w-48 h-48 bg-green-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-border-subtle pb-3">
        <div className="flex items-center gap-2">
          <BookOpen size={14} className="text-green-400" />
          <span className="text-xs text-text-primary font-medium">MindMate AI · RAG Studio</span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
          Context: active
        </span>
      </div>

      {/* Content */}
      <div className="space-y-2 my-auto py-2 text-[11px]">
        <div className="p-2.5 rounded-lg bg-bg-card border border-border-subtle text-text-secondary">
          <span className="text-green-400">› User: </span>
          Explain transformer attention in simple terms.
        </div>
        <div className="p-2.5 rounded-lg bg-bg-card/60 border border-border-subtle text-text-muted text-[10px] leading-relaxed">
          <span className="text-green-400">MindMate: </span>
          Attention lets each token "look at" all others and decide what's relevant — weighted context at every layer.
        </div>
        <div className="flex gap-2 text-[10px] text-text-muted">
          <span className="px-2 py-0.5 rounded bg-bg-card border border-border-subtle">RAG</span>
          <span className="px-2 py-0.5 rounded bg-bg-card border border-border-subtle">Study Plan</span>
          <span className="px-2 py-0.5 rounded bg-bg-card border border-border-subtle">Doc Chat</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-border-subtle text-[10px] text-text-muted">
        <span>Embeddings · Vector Search</span>
        <span className="text-text-secondary">Node.js · pgvector · Groq API · React</span>
      </div>
    </div>
  );
}

function DefaultPreview() {
  return (
    <div className="w-full h-full bg-[#12121e] flex items-center justify-center p-6 text-center">
      <div className="font-mono text-xs text-text-muted">Software Project Preview</div>
    </div>
  );
}

