
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
    sourceUrl: 'https://github.com/dylangamachefl/data-to-analysis',
    imageUrl: `${import.meta.env.BASE_URL}data-to-analysis.png`
  },
  {
    id: '2',
    title: 'DocuQuery',
    description: 'A 100% local, privacy-first RAG assistant using Ollama and Qwen-3 to chat with documents (PDF, DOCX) without data leakage.',
    tags: ['Ollama', 'FastAPI', 'FAISS', 'LangChain'],
    color: 'bg-purple-500',
    link: '#',
    sourceUrl: 'https://github.com/dylangamachefl/docu-query',
    imageUrl: `${import.meta.env.BASE_URL}docuquery.png`
  },
  {
    id: '3',
    title: 'PodScribe',
    description: 'Production-ready system for automated transcription with speaker diarization and semantic search using WhisperX and Qdrant.',
    tags: ['WhisperX', 'Qdrant', 'Redis', 'React'],
    color: 'bg-red-500',
    link: '#',
    sourceUrl: 'https://github.com/dylangamachefl/pod-scribe',
    imageUrl: `${import.meta.env.BASE_URL}distill.png`
  },
  {
    id: '4',
    title: 'Fantasy Football Chatbot V2',
    description: 'A client-side conversational AI agent for advanced SQL analysis on fantasy football data using WebLLM and WASM.',
    tags: ['WebLLM', 'SQLite WASM', 'TypeScript', 'DSPy'],
    color: 'bg-emerald-500',
    link: '#',
    sourceUrl: 'https://github.com/dylangamachefl/fantasy-football-chatbot-v2',
    imageUrl: `${import.meta.env.BASE_URL}fantasy-football-chatbot.png`
  },
  {
    id: '5',
    title: 'WTStats - Fantasy Hub',
    description: 'A comprehensive interactive archive of fantasy football league history and statistics. Features automated deployment of static data architectures to visualize decades of competitive legacy.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts', 'MDX'],
    color: 'bg-blue-600',
    link: 'https://dylangamachefl.github.io/WTStats/',
    sourceUrl: 'https://github.com/dylangamachefl/WTStats',
    imageUrl: `${import.meta.env.BASE_URL}WTStats.png`
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
    items: ["RAG", "LLM Orchestration", "Multi-Agent Systems", "XGBoost", "LightGBM", "Scikit-Learn", "DSPy"],
    icon: "psychology"
  },
  {
    category: "Data Engineering & BI",
    items: ["SSIS", "ETL/ELT Pipeline Design", "SQL Server (SSMS)", "Power BI", "Tableau", "Qdrant", "FAISS"],
    icon: "storage"
  },
  {
    category: "Full Stack & DevOps",
    items: ["FastAPI", "Streamlit", "React", "TypeScript", "Docker", "Redis", "Git"],
    icon: "build"
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: '1',
    role: 'Data Analyst',
    company: 'Cayuse Holdings at Cisco',
    period: 'Feb 2022 - Present',
    description: [
      'Engineered and deployed automated ETL/ELT pipelines using VBA, SSIS, and SQL, achieving a 100% reduction in manual intervention.',
      'Architected robust data validation frameworks and complex ETL processes, maintaining 99%+ accuracy across high-stakes enterprise datasets.',
      'Acted as a technical liaison between stakeholders and IT teams to resolve production issues and adapt systems to evolving business intelligence requirements.',
      'Automated critical reporting workflows in collaboration with the Cisco IT team, saving an estimated 5 hours of manual work per week.',
      'Developed advanced SQL queries and ad-hoc data extractions to enable data-driven decision-making for key stakeholders.'
    ]
  },
  {
    id: '2',
    role: 'Assistant Manager',
    company: "Zaxby's",
    period: 'Oct 2018 - 2022',
    description: [
      'Supervised daily operations and provided critical support in escalated situations within a fast-paced environment.',
      'Maintained high standards of service excellence while fostering a positive work environment and managing team performance.'
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

export const CERTIFICATIONS = [
  {
    title: 'Machine Learning Specialization',
    provider: 'DeepLearning.ai',
    date: '2024'
  },
  {
    title: 'Microsoft Azure Data Fundamentals',
    provider: 'Microsoft',
    date: '2023'
  },
  {
    title: 'Google Data Analytics Professional',
    provider: 'Google',
    date: '2022'
  }
];

export const INTERESTS: Interest[] = [
  { id: '1', label: 'Cooking', icon: '👨‍🍳' },
  { id: '2', label: 'Beach Volleyball', icon: '🏐' },
  { id: '3', label: 'Golf', icon: '⛳' },
  { id: '4', label: 'Football', icon: '🏈' },
  { id: '5', label: 'Music', icon: '🎵' },
  { id: '6', label: 'Artificial Intelligence', icon: '✨' }
];

export const SOCIALS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/dylangamachefl',
    username: '@dylangamache',
    iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/datadrivendylan',
    username: 'Dylan Gamache',
    iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    color: '#0077b5'
  },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/user/1228368457?si=9977a87ca34549ba',
    username: 'Dylan Gamache',
    iconPath: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.508 17.33c-.254.415-.79.55-1.205.295-3.3-2.016-7.455-2.47-12.35-1.353-.467.106-.934-.187-1.04-.654-.107-.467.186-.933.653-1.04 5.37-1.224 9.997-.707 13.647 1.547.415.255.55.79.295 1.205zm1.61-2.868c-.318.518-.992.684-1.508.366-3.775-2.321-9.528-2.993-13.987-1.639-.588.179-1.21-.157-1.388-.745-.179-.588.156-1.21.744-1.388 5.093-1.547 11.458-.779 15.774 1.898.517.319.683.991.365 1.508zm.139-3.037c-4.526-2.688-11.992-2.935-16.315-1.623-.672.204-1.385-.173-1.589-.844-.204-.672.173-1.385.844-1.589 4.965-1.506 13.153-1.2 18.28 1.845.626.372.833 1.18.461 1.805-.371.626-1.179.833-1.805.461z',
    color: '#1DB954'
  },
  {
    platform: 'Message',
    url: '#',
    username: 'Send me a message',
    iconPath: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'
  }
];

// Google Forms Contact Configuration
export const GOOGLE_FORM_CONFIG = {
  // Replace with your form's action URL (ends with /formResponse)
  formActionUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScXe2pfHxWTvjg82UWrP-bPUJNZFrFNLeVniNRys0MxaGK1fg/formResponse',

  entryIds: {
    name: 'entry.930533237',
    email: 'entry.1666102088',
    message: 'entry.1069664208'
  }
};
