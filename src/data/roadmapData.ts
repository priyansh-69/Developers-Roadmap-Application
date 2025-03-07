import { DivideIcon as LucideIcon, Code2, Server, Cog, Palette, Database, Cloud } from 'lucide-react';

export interface RoadmapStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  resources: Array<{
    title: string;
    url: string;
  }>;
}

export interface RoadmapSection {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
  steps: RoadmapStep[];
}

export const roadmapData: RoadmapSection[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Master modern frontend development with React, TypeScript, and essential web technologies.',
    icon: Code2,
    progress: 0,
    steps: [
      {
        id: 'html-css',
        title: 'HTML & CSS Fundamentals',
        description: 'Learn the building blocks of web development with semantic HTML and modern CSS techniques.',
        completed: false,
        resources: [
          {
            title: 'MDN Web Docs - HTML',
            url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          },
          {
            title: 'CSS Tricks',
            url: 'https://css-tricks.com',
          },
        ],
      },
      {
        id: 'javascript',
        title: 'JavaScript & TypeScript',
        description: 'Master JavaScript fundamentals and TypeScript for type-safe development.',
        completed: false,
        resources: [
          {
            title: 'JavaScript.info',
            url: 'https://javascript.info',
          },
          {
            title: 'TypeScript Handbook',
            url: 'https://www.typescriptlang.org/docs/',
          },
        ],
      },
      {
        id: 'react',
        title: 'React & Modern Frontend',
        description: 'Build interactive UIs with React and modern frontend tools.',
        completed: false,
        resources: [
          {
            title: 'React Documentation',
            url: 'https://react.dev',
          },
          {
            title: 'Redux Toolkit',
            url: 'https://redux-toolkit.js.org',
          },
        ],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Build scalable server-side applications and APIs.',
    icon: Server,
    progress: 0,
    steps: [
      {
        id: 'node-express',
        title: 'Node.js & Express',
        description: 'Create server-side applications with Node.js and Express framework.',
        completed: false,
        resources: [
          {
            title: 'Node.js Documentation',
            url: 'https://nodejs.org/docs/latest/',
          },
          {
            title: 'Express.js Guide',
            url: 'https://expressjs.com/guide/routing.html',
          },
        ],
      },
      {
        id: 'databases',
        title: 'Databases',
        description: 'Learn SQL and NoSQL databases for data persistence.',
        completed: false,
        resources: [
          {
            title: 'PostgreSQL Tutorial',
            url: 'https://www.postgresql.org/docs/current/tutorial.html',
          },
          {
            title: 'MongoDB University',
            url: 'https://university.mongodb.com',
          },
        ],
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'Master deployment, CI/CD, and cloud services.',
    icon: Cloud,
    progress: 0,
    steps: [
      {
        id: 'git-github',
        title: 'Git & GitHub',
        description: 'Master version control and collaborative development.',
        completed: false,
        resources: [
          {
            title: 'Git Documentation',
            url: 'https://git-scm.com/doc',
          },
          {
            title: 'GitHub Guides',
            url: 'https://guides.github.com',
          },
        ],
      },
      {
        id: 'docker-kubernetes',
        title: 'Docker & Kubernetes',
        description: 'Learn containerization and orchestration.',
        completed: false,
        resources: [
          {
            title: 'Docker Get Started',
            url: 'https://docs.docker.com/get-started/',
          },
          {
            title: 'Kubernetes Basics',
            url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
          },
        ],
      },
    ],
  },
];