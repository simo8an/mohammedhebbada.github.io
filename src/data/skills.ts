export type TechSticker = {
  id: string
  name: string
  note: string
  /** URL CDN logo, ou undefined pour icône Lucide */
  logo?: string
  icon?: 'brain' | 'bot' | 'message' | 'sparkles' | 'workflow' | 'database' | 'waves' | 'chart' | 'cpu' | 'layers'
  rotate: number
  color: string
}

export type TechCategory = {
  title: string
  rotation: number
  stickers: TechSticker[]
}

const d = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}`

export const techCategories: TechCategory[] = [
  {
    title: 'Data & Analyse',
    rotation: -1.2,
    stickers: [
      {
        id: 'python',
        name: 'Python',
        note: 'Mon langage principal pour la Data & l’IA',
        logo: d('python/python-original.svg'),
        rotate: -6,
        color: 'bg-yellow/70',
      },
      {
        id: 'sql',
        name: 'SQL',
        note: 'Gestion et interrogation des données',
        logo: d('mysql/mysql-original.svg'),
        rotate: 4,
        color: 'bg-white',
      },
      {
        id: 'powerbi',
        name: 'Power BI',
        note: 'Visualisation & Business Intelligence',
        logo: 'https://cdn.simpleicons.org/powerbi/F2C811',
        rotate: -3,
        color: 'bg-yellow/40',
      },
      {
        id: 'excel',
        name: 'Excel',
        note: 'Analyse rapide et tableaux de bord',
        logo: 'https://cdn.simpleicons.org/microsoftexcel/217346',
        rotate: 7,
        color: 'bg-paper',
      },
      {
        id: 'pandas',
        name: 'Pandas',
        note: 'Manipulation et nettoyage des données',
        logo: d('pandas/pandas-original.svg'),
        rotate: -5,
        color: 'bg-white',
      },
      {
        id: 'numpy',
        name: 'NumPy',
        note: 'Calcul scientifique et matrices',
        logo: d('numpy/numpy-original.svg'),
        rotate: 3,
        color: 'bg-coral/15',
      },
    ],
  },
  {
    title: 'Intelligence Artificielle',
    rotation: 1,
    stickers: [
      {
        id: 'ai',
        name: 'Intelligence Artificielle',
        note: 'Concevoir des solutions intelligentes',
        icon: 'bot',
        rotate: -4,
        color: 'bg-navy text-cream',
      },
      {
        id: 'dl',
        name: 'Deep Learning',
        note: 'Réseaux de neurones & modèles avancés',
        icon: 'brain',
        rotate: 5,
        color: 'bg-coral/20',
      },
      {
        id: 'nlp',
        name: 'NLP',
        note: 'Comprendre et traiter le langage',
        icon: 'message',
        rotate: -2,
        color: 'bg-white',
      },
      {
        id: 'ds',
        name: 'Data Science',
        note: 'Extraire de la valeur des données',
        icon: 'sparkles',
        rotate: 6,
        color: 'bg-yellow/50',
      },
    ],
  },
  {
    title: 'Machine Learning',
    rotation: -0.8,
    stickers: [
      {
        id: 'sklearn',
        name: 'Scikit-learn',
        note: 'Modèles ML classiques et robustes',
        logo: d('scikitlearn/scikitlearn-original.svg'),
        rotate: -5,
        color: 'bg-orange/15',
      },
      {
        id: 'ml',
        name: 'Machine Learning',
        note: 'Apprendre des patterns à partir des données',
        icon: 'cpu',
        rotate: 4,
        color: 'bg-paper',
      },
      {
        id: 'pred',
        name: 'Prédiction',
        note: 'Anticiper pour mieux décider',
        icon: 'chart',
        rotate: -3,
        color: 'bg-white',
      },
      {
        id: 'model',
        name: 'Modélisation',
        note: 'Construire et évaluer des modèles',
        icon: 'layers',
        rotate: 7,
        color: 'bg-coral/15',
      },
    ],
  },
  {
    title: 'Data Engineering',
    rotation: 0.9,
    stickers: [
      {
        id: 'etl',
        name: 'ETL',
        note: 'Extraire, transformer, charger',
        icon: 'workflow',
        rotate: -6,
        color: 'bg-yellow/40',
      },
      {
        id: 'pipeline',
        name: 'Pipelines de données',
        note: 'Faire circuler la data de bout en bout',
        icon: 'workflow',
        rotate: 3,
        color: 'bg-white',
      },
      {
        id: 'dwh',
        name: 'Data Warehouse',
        note: 'Centraliser les données pour l’analyse',
        icon: 'database',
        rotate: -2,
        color: 'bg-paper',
      },
      {
        id: 'dlake',
        name: 'Data Lake',
        note: 'Stockage flexible des données brutes',
        icon: 'waves',
        rotate: 5,
        color: 'bg-coral/15',
      },
      {
        id: 'sqlite',
        name: 'SQLite',
        note: 'Bases légères pour prototyper vite',
        logo: d('sqlite/sqlite-original.svg'),
        rotate: -4,
        color: 'bg-white',
      },
      {
        id: 'mysql',
        name: 'MySQL',
        note: 'Bases relationnelles en production',
        logo: d('mysql/mysql-original.svg'),
        rotate: 2,
        color: 'bg-yellow/30',
      },
    ],
  },
  {
    title: 'Développement',
    rotation: -1,
    stickers: [
      {
        id: 'django',
        name: 'Django',
        note: 'Backend Python robuste et rapide',
        logo: d('django/django-plain.svg'),
        rotate: -5,
        color: 'bg-white',
      },
      {
        id: 'drf',
        name: 'Django REST',
        note: 'API REST propres et sécurisées',
        logo: d('django/django-plain.svg'),
        rotate: 4,
        color: 'bg-paper',
      },
      {
        id: 'fastapi',
        name: 'FastAPI',
        note: 'API modernes, rapides et typées',
        logo: d('fastapi/fastapi-original.svg'),
        rotate: -3,
        color: 'bg-coral/15',
      },
      {
        id: 'react',
        name: 'React',
        note: 'Interfaces dynamiques et composées',
        logo: d('react/react-original.svg'),
        rotate: 6,
        color: 'bg-white',
      },
      {
        id: 'js',
        name: 'JavaScript',
        note: 'Interactivité côté client',
        logo: d('javascript/javascript-original.svg'),
        rotate: -4,
        color: 'bg-yellow/50',
      },
      {
        id: 'csharp',
        name: 'C#',
        note: 'Applications .NET solides',
        logo: d('csharp/csharp-original.svg'),
        rotate: 3,
        color: 'bg-paper',
      },
      {
        id: 'dotnet',
        name: '.NET',
        note: 'Écosystème Microsoft full-stack',
        logo: d('dotnetcore/dotnetcore-original.svg'),
        rotate: -6,
        color: 'bg-white',
      },
    ],
  },
  {
    title: 'Outils',
    rotation: 1.1,
    stickers: [
      {
        id: 'git',
        name: 'Git',
        note: 'Versionner et collaborer',
        logo: d('git/git-original.svg'),
        rotate: -3,
        color: 'bg-coral/15',
      },
      {
        id: 'github',
        name: 'GitHub',
        note: 'Partager et documenter le code',
        logo: d('github/github-original.svg'),
        rotate: 5,
        color: 'bg-white',
      },
      {
        id: 'docker',
        name: 'Docker',
        note: 'Conteneuriser et déployer',
        logo: d('docker/docker-original.svg'),
        rotate: -4,
        color: 'bg-paper',
      },
      {
        id: 'streamlit',
        name: 'Streamlit',
        note: 'Démos Data & IA en quelques minutes',
        logo: 'https://cdn.simpleicons.org/streamlit/FF4B4B',
        rotate: 4,
        color: 'bg-yellow/40',
      },
      {
        id: 'vscode',
        name: 'VS Code',
        note: 'Mon atelier de développement',
        logo: d('vscode/vscode-original.svg'),
        rotate: -2,
        color: 'bg-white',
      },
    ],
  },
]
