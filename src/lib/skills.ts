// Grouped skills — no percentages, no bars. Clean recruiter-scannable
// tag groups aligned to the AI Systems / Platform / Full Stack positioning.

export interface SkillGroup {
  category: string;
  color: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Programming',
    color: '#6366F1',
    skills: ['Go', 'Python', 'TypeScript', 'C#', 'JavaScript', 'Dart', 'SQL', 'C++', 'R'],
  },
  {
    category: 'Platform Engineering',
    color: '#0891B2',
    skills: ['Kubernetes', 'Kubebuilder', 'controller-runtime', 'CRDs', 'Webhooks', 'Helm', 'gRPC', 'Docker', 'GitHub Actions', 'Caddy', 'Trivy', 'CI/CD', 'Linux', 'Oracle Cloud'],
  },
  {
    category: 'AI & LLM',
    color: '#7C3AED',
    skills: ['MCP', 'AI Agents', 'Agentic Workflows', 'RAG', 'Explainable RAG', 'pgvector', 'ChromaDB', 'Embeddings', 'LangChain', 'Ollama', 'Whisper', 'Human-in-the-loop AI'],
  },
  {
    category: 'Backend',
    color: '#0D9488',
    skills: ['FastAPI', 'SQLAlchemy', 'Node.js', 'Express', 'REST', 'WebSockets', 'Redis Queues', 'Event-driven (Outbox)', 'PostgreSQL', 'SQLite', 'Supabase', 'Firebase'],
  },
  {
    category: 'Frontend',
    color: '#0284C7',
    skills: ['Next.js', 'React', 'Flutter', 'Tailwind CSS', 'TypeScript', 'Three.js', 'pytest', 'Playwright'],
  },
  {
    category: 'Desktop',
    color: '#D97706',
    skills: ['WinUI 3', '.NET', 'PyQt6', 'Windows Release Pipeline', 'Local AI'],
  },
  {
    category: 'Robotics & IoT',
    color: '#059669',
    skills: ['Raspberry Pi', 'ESP32', 'Arduino', 'LiDAR', 'SLAM', 'Flutter'],
  },
];

// Quick Snapshot — recruiter 5-second scan groups.
export const SNAPSHOT = [
  { label: 'Platform Engineering', detail: 'Go, Kubernetes, Operators, Helm, gRPC', color: '#0891B2' },
  { label: 'AI Systems', detail: 'MCP, RAG, AI Agents, Ollama, Vector Memory', color: '#7C3AED' },
  { label: 'Full Stack', detail: 'Next.js, FastAPI, Redis, Flutter, PostgreSQL', color: '#0284C7' },
  { label: 'Live Deployments', detail: 'anythingdownload.in (Oracle Cloud), ecellscsvmv.in', color: '#D97706' },
  { label: 'Open Source', detail: '2,000+ contributions · 20+ shipped projects', color: '#6366F1' },
];

// Flat technology cloud, grouped-ready ordering for the Skills section footer.
export const TECH_STACK = [
  'Go', 'Python', 'TypeScript', 'C#', 'C++', 'Dart', 'SQL', 'R',
  'Kubernetes', 'Kubebuilder', 'Helm', 'gRPC', 'Docker', 'GitHub Actions',
  'MCP', 'RAG', 'Ollama', 'LangChain', 'Embeddings', 'Whisper',
  'FastAPI', 'Node.js', 'Redis', 'PostgreSQL', 'Supabase', 'Firebase', 'Caddy', 'Oracle Cloud',
  'Next.js', 'React', 'Tailwind CSS', 'Three.js',
  'WinUI 3', '.NET', 'PyQt6',
  'Raspberry Pi', 'ESP32', 'LiDAR', 'SLAM', 'Flutter',
];
