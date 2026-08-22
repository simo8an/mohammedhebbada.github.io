export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface Project {
  id: string
  title: string
  shortTitle: string
  description: string
  highlight: string
  technologies: string[]
  type: string
  github?: string
  demo?: string
  accent: 'orange' | 'coral' | 'navy' | 'yellow'
  visual: 'cinematch' | 'inventory' | 'techstore' | 'fastbite' | 'more'
  images?: ProjectImage[]
  stageCompany?: string
}

export interface ExperienceImage {
  src: string
  alt: string
  caption?: string
  note?: string
  rotate?: number
  size?: 'lg' | 'md' | 'sm'
}

export interface SkillCategory {
  title: string
  skills: string[]
  rotation: number
}

export interface Experience {
  id: string
  role: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
  current?: boolean
  images?: ExperienceImage[]
  featured?: boolean
  projectRef?: string
}

export interface EducationItem {
  year: string
  title: string
  institution?: string
  details?: string[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: 'analysis' | 'engineering' | 'ai' | 'viz'
}

export const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#projets', label: 'Mes projets' },
  { href: '#experiences', label: 'Mes expériences' },
  { href: '#competences', label: 'Mes compétences' },
  { href: '#parcours', label: 'Mon parcours' },
  { href: '#world', label: 'Mon univers' },
  { href: '#contact', label: 'Contact' },
] as const

export const contact = {
  email: 'simohe2003@gmail.com',
  phone: '+212 620 994 808',
  phoneHref: 'tel:+212620994808',
  linkedin: 'https://www.linkedin.com/in/mohammed-hebbada-1b584b321/',
  github: 'https://github.com/simo8an',
  cv: '/cv-mohammed-hebbada.pdf',
}

export const projects: Project[] = [
  {
    id: 'cinematch',
    title: 'CineMatch — AI Movie Recommender',
    shortTitle: 'CineMatch',
    description:
      "Système de recommandation de films basé sur l'Intelligence Artificielle permettant de proposer des films similaires à partir des préférences de l'utilisateur.",
    highlight: 'Recommendation System',
    technologies: [
      'Python',
      'Scikit-learn',
      'FastAPI',
      'React',
      'Streamlit',
      'SQLite',
      'TMDB API',
      'JWT',
      'bcrypt',
    ],
    type: 'AI / Recommendation',
    github: 'https://github.com/simo8an/CineMatch-Recommandation-de-films-par-IA',
    accent: 'coral',
    visual: 'cinematch',
  },
  {
    id: 'inventory',
    title: 'Gestion intelligente des stocks par IA',
    shortTitle: 'Smart Inventory',
    description:
      "Plateforme intelligente de gestion des stocks intégrant l'analyse de données et des prédictions basées sur le Machine Learning afin d'aider à anticiper les besoins et optimiser la gestion des produits.",
    highlight: 'IA + Data + Business',
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Django',
      'Django REST Framework',
      'React',
      'Material UI',
      'Chart.js',
      'SQLite',
      'JWT',
    ],
    type: 'Plateforme Data / IA',
    github: '#github-placeholder',
    accent: 'orange',
    visual: 'inventory',
    stageCompany: 'LIYA YO',
  },
  {
    id: 'techstore',
    title: 'TechStore — Plateforme e-commerce',
    shortTitle: 'TechStore',
    description:
      'Application e-commerce permettant de gérer et présenter des produits informatiques avec une architecture web complète.',
    highlight: 'Développement full-stack',
    technologies: [
      'ASP.NET Core MVC',
      '.NET 8',
      'C#',
      'Entity Framework Core',
      'SQLite',
    ],
    type: 'Full-Stack',
    github: '#github-placeholder',
    accent: 'navy',
    visual: 'techstore',
    images: [
      {
        src: 'images/projects/techstore/admin-categories.png',
        alt: 'TechStore — interface admin de gestion des catégories',
        caption: 'Admin · catégories',
      },
    ],
  },
  {
    id: 'fastbite',
    title: 'FastBite — Restaurant Web App',
    shortTitle: 'FastBite',
    description:
      'Application web orientée restauration pour présenter un menu, gérer les commandes et offrir une expérience utilisateur fluide et moderne.',
    highlight: 'Web Application',
    technologies: ['React', 'Web Development', 'Database'],
    type: 'Front-End / Web',
    github: 'https://github.com/simo8an/fastbite',
    accent: 'yellow',
    visual: 'fastbite',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Data & Analyse',
    skills: ['Python', 'SQL', 'Power BI', 'Excel', 'Pandas', 'NumPy'],
    rotation: -1.5,
  },
  {
    title: 'Intelligence Artificielle',
    skills: ['Intelligence Artificielle', 'Deep Learning', 'NLP', 'Data Science'],
    rotation: 1.2,
  },
  {
    title: 'Machine Learning',
    skills: ['Scikit-learn', 'Machine Learning', 'Prédiction', 'Modélisation'],
    rotation: -0.6,
  },
  {
    title: 'Data Engineering',
    skills: [
      'ETL',
      'Pipelines de données',
      'Data Warehouse',
      'Data Lake',
      'SQLite',
      'MySQL',
    ],
    rotation: -0.8,
  },
  {
    title: 'Développement',
    skills: [
      'Django',
      'Django REST Framework',
      'FastAPI',
      'React',
      'JavaScript',
      'C#',
      '.NET',
    ],
    rotation: 1.5,
  },
  {
    title: 'Outils',
    skills: ['Git', 'GitHub', 'Docker', 'Streamlit', 'VS Code'],
    rotation: -1,
  },
]

export const experiences: Experience[] = [
  {
    id: 'liya-yo',
    role: 'Stagiaire AI & Data Engineering',
    company: 'LIYA YO',
    location: 'Maroc',
    period: 'Juillet 2026 — Août 2026',
    description:
      'Participation au développement d\'une solution intelligente de gestion des stocks combinant développement web, traitement des données, Machine Learning et visualisation.',
    technologies: [
      'Python',
      'Django',
      'React',
      'SQLite',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Chart.js',
    ],
    current: false,
    featured: true,
    projectRef: 'inventory',
    images: [
      {
        src: 'images/experience/liya-yo/reunion.png',
        alt: 'Réunion et présentation pendant le stage LIYA YO',
        caption: 'Moment d\'échange',
        note: 'En pleine présentation',
        rotate: 3,
        size: 'md',
      },
    ],
  },
  {
    id: 'start-consulting',
    role: 'Stagiaire Développeur — Plateforme E-commerce High-Tech',
    company: 'Start Consulting',
    location: 'Maroc',
    period: 'Juillet 2025',
    description:
      "Développement d'une plateforme e-commerce high-tech (TechStore) : catalogue produits, back-office et architecture web complète, dans le cadre d'un stage encadré EMSI.",
    technologies: [
      'ASP.NET Core MVC',
      '.NET 8',
      'C#',
      'Entity Framework Core',
      'SQLite',
    ],
    images: [
      {
        src: 'images/experience/rapport-start-consulting.png',
        alt: 'Rapport de stage Start Consulting — TechStore',
        caption: 'Rapport de stage',
        rotate: -2,
        size: 'md',
      },
      {
        src: 'images/experience/workspace-catalogue.png',
        alt: 'Poste de travail pendant le stage — gestion du catalogue',
        caption: 'Sur le terrain',
        rotate: 3,
        size: 'sm',
      },
    ],
  },
]

export const educationPhotos = [
  {
    src: 'images/education/rnn-lecture.png',
    alt: 'Cours EMSI — RNNs et deep learning',
    caption: 'RNNs & Deep Learning à l\'EMSI',
    rotate: -3,
  },
  {
    src: 'images/education/lab-data-linux.png',
    alt: 'Lab EMSI — Linux et visualisation de données',
    caption: 'Labs Data & Linux',
    rotate: 2.5,
  },
  {
    src: 'images/education/expo-lecture.png',
    alt: 'Cours EMSI — Création de projet avec Expo',
    caption: 'Dev mobile · Expo',
    rotate: -1.5,
  },
  {
    src: 'images/education/arduino-lab.png',
    alt: 'TP EMSI — Arduino et systèmes embarqués',
    caption: 'TP1 · Lab Arduino',
    rotate: 3,
  },
  {
    src: 'images/education/networking-study.png',
    alt: 'Session d’étude — réseaux et fragmentation Ethernet',
    caption: 'Révisions réseaux',
    rotate: -2,
  },
] as const

export type WorldMoment = {
  src: string
  alt: string
  caption?: string
  note?: string
  size: 'hero' | 'md' | 'sm'
  rotate: number
}

export const worldMoments: WorldMoment[] = [
  {
    src: 'images/world/tesla-optimus.png',
    alt: 'Robot Tesla Optimus — salon tech / IA',
    caption: 'L’avenir est là',
    note: 'Exploration',
    size: 'hero',
    rotate: -2.5,
  },
  {
    src: 'images/world/exhibition-event.png',
    alt: 'Salon professionnel et exposition',
    caption: 'Sur le terrain',
    note: 'Une belle expérience',
    size: 'md',
    rotate: 3,
  },
  {
    src: 'images/world/tinkercad-servo.png',
    alt: 'Prototype Tinkercad — Arduino et servo',
    caption: 'Prototypage',
    note: 'En création',
    size: 'sm',
    rotate: -4,
  },
]

export const education: EducationItem[] = [
  {
    year: '2024 - Aujourd\'hui',
    title: 'Cycle d\'ingénieur en Informatique & Réseaux',
    institution: 'EMSI — École Marocaine des Sciences de l\'Ingénieur',
    details: [
      'Informatique',
      'Réseaux',
      'Intelligence artificielle',
      'Génie logiciel',
    ],
  },
  {
    year: '2022 - 2024',
    title: 'Classes préparatoires intégrées',
    institution: 'EMSI — École Marocaine des Sciences de l\'Ingénieur',
    details: [
      'Mathématiques',
      'Électronique embarquée',
      'Fondamentaux de l\'informatique',
      'IADATA',
    ],
  },
  {
    year: '2022',
    title: 'Baccalauréat Sciences Physiques — PC',
    institution: 'École El Jil Jdid',
  },
]

export const services: Service[] = [
  {
    id: 'analysis',
    title: 'ANALYSE DE DONNÉES',
    description: 'Analyser, nettoyer et interpréter les données.',
    icon: 'analysis',
  },
  {
    id: 'engineering',
    title: 'INGÉNIERIE DES DONNÉES',
    description:
      'Construire des pipelines et architectures permettant de traiter les données efficacement.',
    icon: 'engineering',
  },
  {
    id: 'ai',
    title: 'INTELLIGENCE ARTIFICIELLE',
    description:
      'Développer des modèles de Machine Learning et des solutions intelligentes.',
    icon: 'ai',
  },
  {
    id: 'viz',
    title: 'VISUALISATION DE DONNÉES',
    description:
      'Transformer les données en tableaux de bord et visualisations compréhensibles.',
    icon: 'viz',
  },
]

export const stats = [
  { value: '5ème', label: 'année', sub: 'Cycle ingénieur' },
  { value: 'IA & DATA', label: '', sub: 'Spécialisation' },
  { value: '10+', label: '', sub: 'Technologies utilisées' },
  { value: 'Plusieurs', label: '', sub: 'Projets Data & IA' },
]

export const aboutTimeline = [
  { year: 'Début', label: 'Passion Data & Code' },
  { year: 'EMSI', label: 'Cycle ingénieur' },
  { year: 'Focus', label: 'IA & Data Engineering' },
  { year: '2026', label: '5ème année + stage' },
]
