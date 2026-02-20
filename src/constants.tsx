
import { Interest, Project, SocialLink, SkillCategory, ExperienceItem, EducationItem } from './types';
import {
  CookingIcon, VolleyballIcon, GolfIcon, FootballIcon, MusicIcon, AIIcon,
  GitHubAnimatedIcon, LinkedInAnimatedIcon, SpotifyAnimatedIcon, MessageAnimatedIcon
} from './components/AnimatedSocialHobby';

export const USER_NAME = "Dylan Gamache";
export const USER_ROLE = "Data Analyst & AI Developer";
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
  },
  {
    id: '6',
    title: 'Grocery Deal Finder',
    description: 'An intelligent multi-agent AI system that analyzes grocery store weekly ads and matches them against your shopping list to find the best deals.',
    tags: ['React', 'Gemma 3', 'Multi-Agent', 'Vector Embeddings'],
    color: 'bg-emerald-600',
    link: 'https://dylangamachefl.github.io/grocery-deal-finder/',
    sourceUrl: 'https://github.com/dylangamachefl/grocery-deal-finder',
    imageUrl: `${import.meta.env.BASE_URL}grocery-deal-finder.png`
  },
  {
    id: '7',
    title: 'tinyvc - Market Strategy',
    description: 'Fully automated market strategy pipeline performing top-down regime analysis with real-time news integration and LLM synthesis.',
    tags: ['Python', 'Gemini API', 'Market Analysis', 'Tavily'],
    color: 'bg-indigo-600',
    link: '#',
    sourceUrl: 'https://github.com/dylangamachefl/tinyvc',
    imageUrl: `${import.meta.env.BASE_URL}tinyvc.png`
  },
  {
    id: '8',
    title: 'Sarasota Market Pulse',
    description: 'Serverless ETL pipeline ingesting real estate data to compute market intelligence like Price Pressure, Inventory Absorption, and Cash Flow Zones.',
    tags: ['Python', 'ETL', 'GitHub Actions', 'Real Estate'],
    color: 'bg-cyan-600',
    link: '#',
    sourceUrl: 'https://github.com/dylangamachefl/srq-pulse',
    imageUrl: `${import.meta.env.BASE_URL}srq-pulse.png`
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
  { id: '1', label: 'Cooking', icon: <CookingIcon /> },
  { id: '2', label: 'Beach Volleyball', icon: <VolleyballIcon /> },
  { id: '3', label: 'Golf', icon: <GolfIcon /> },
  { id: '4', label: 'Football', icon: <FootballIcon /> },
  { id: '5', label: 'Music', icon: <MusicIcon /> },
  { id: '6', label: 'Artificial Intelligence', icon: <AIIcon /> }
];

export const SOCIALS: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/dylangamachefl',
    username: '@dylangamache',
    customIcon: <GitHubAnimatedIcon />
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/datadrivendylan',
    username: 'Dylan Gamache',
    customIcon: <LinkedInAnimatedIcon />,
    color: '#0077b5'
  },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/user/1228368457?si=9977a87ca34549ba',
    username: 'Dylan Gamache',
    customIcon: <SpotifyAnimatedIcon />,
    color: '#1DB954'
  },
  {
    platform: 'Message',
    url: '#',
    username: 'Send me a message',
    customIcon: <MessageAnimatedIcon />
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
