
import { Interest, Project, SocialLink, SkillCategory, ExperienceItem, EducationItem } from './types';

export const USER_NAME = "Dylan Gamache";
export const USER_ROLE = "Data Analyst & AI Engineer";
export const USER_BIO = "Data Analyst with a proven track record of increasing operational efficiency by 100% through automated ETL/ELT pipelines. I specialize in transforming complex datasets into actionable business intelligence using SQL, Python, and multi-agent AI systems.";

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Data-to-Analysis',
    description: 'A multi-agent AI analyst powered by Gemini API that simulates a team of expert analysts to profile data, extract KPIs, and generate strategic insights.',
    tags: ['Python', 'Gemini API', 'Streamlit', 'Multi-Agent'],
    color: 'bg-blue-500',
    link: 'https://data-to-analysis-app.streamlit.app/',
    sourceUrl: '#',
    imageUrl: '/data-to-analysis.png'
  },
  {
    id: '2',
    title: 'DocuQuery',
    description: 'A 100% local, privacy-first RAG assistant using Ollama and Qwen-3 to chat with documents (PDF, DOCX) without data leakage.',
    tags: ['Ollama', 'FastAPI', 'FAISS', 'LangChain'],
    color: 'bg-purple-500',
    link: '#',
    sourceUrl: '#',
    imageUrl: '/docuquery.png'
  },
  {
    id: '3',
    title: 'Podcast Transcription & RAG',
    description: 'Production-ready system for automated transcription with speaker diarization and semantic search using WhisperX and Qdrant.',
    tags: ['WhisperX', 'Qdrant', 'Redis', 'React'],
    color: 'bg-red-500',
    link: '#',
    sourceUrl: '#',
    imageUrl: '/distill.png'
  },
  {
    id: '4',
    title: 'Fantasy Football Chatbot V2',
    description: 'A client-side conversational AI agent for advanced SQL analysis on fantasy football data using WebLLM and WASM.',
    tags: ['WebLLM', 'SQLite WASM', 'TypeScript', 'DSPy'],
    color: 'bg-emerald-500',
    link: '#',
    sourceUrl: '#',
    imageUrl: '/fantasy-football-chatbot.png'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Analytics",
    items: ["SQL (T-SQL)", "Python", "DAX", "VBA", "Power Query M", "Powershell"],
    icon: "code"
  },
  {
    category: "AI & Machine Learning",
    items: ["XGBoost", "Scikit-Learn", "RAG", "LLM Orchestration", "K-Means Clustering"],
    icon: "psychology"
  },
  {
    category: "Data Engineering & BI",
    items: ["SSIS", "ETL/ELT Pipelines", "Power BI", "Tableau", "SQL Server (SSMS)", "Qdrant"],
    icon: "storage"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Data Analyst',
    company: 'Cayuse Holdings at Cisco',
    period: 'Feb 2022 - Present',
    description: [
      'Engineered and deployed ETL/ELT data pipelines using VBA and SSIS, reducing manual intervention by 100%.',
      'Architected complex ETL processes in Power Query and SQL, maintaining 99%+ accuracy across enterprise datasets.',
      'Automated a manual reporting pipeline in collaboration with Cisco IT, saving 5 hours per week.'
    ]
  },
  {
    id: '2',
    role: 'Assistant Manager',
    company: "Zaxby's",
    period: 'Oct 2018 - 2022',
    description: [
      'Maintained high standards of customer service excellence in a fast-paced environment.',
      'Supervised daily operations and provided support in escalated situations.'
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    degree: 'B.S. Business Administration, Integrated Business',
    institution: 'University of Central Florida',
    period: 'Dec 2021'
  }
];

export const INTERESTS: Interest[] = [
  { id: '1', label: 'Fantasy Football', icon: '🏈' },
  { id: '2', label: 'Open Source AI', icon: '🤖' },
  { id: '3', label: 'Data Visualization', icon: '📊' },
  { id: '4', label: 'Automation', icon: '⚡' }
];

export const SOCIALS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/dylangamache',
    username: '@dylangamache',
    iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/dylan-gamache',
    username: 'Dylan Gamache',
    iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    color: '#0077b5'
  },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/',
    username: 'Dylan Gamache',
    iconPath: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.508 17.33c-.254.415-.79.55-1.205.295-3.3-2.016-7.455-2.47-12.35-1.353-.467.106-.934-.187-1.04-.654-.107-.467.186-.933.653-1.04 5.37-1.224 9.997-.707 13.647 1.547.415.255.55.79.295 1.205zm1.61-2.868c-.318.518-.992.684-1.508.366-3.775-2.321-9.528-2.993-13.987-1.639-.588.179-1.21-.157-1.388-.745-.179-.588.156-1.21.744-1.388 5.093-1.547 11.458-.779 15.774 1.898.517.319.683.991.365 1.508zm.139-3.037c-4.526-2.688-11.992-2.935-16.315-1.623-.672.204-1.385-.173-1.589-.844-.204-.672.173-1.385.844-1.589 4.965-1.506 13.153-1.2 18.28 1.845.626.372.833 1.18.461 1.805-.371.626-1.179.833-1.805.461z',
    color: '#1DB954'
  },
  {
    platform: 'Gmail',
    url: 'mailto:dylangamachefl@gmail.com',
    username: 'dylangamachefl@gmail.com',
    iconPath: 'M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z',
    color: '#EA4335'
  }
];
