import { Code2, Server, Cloud } from 'lucide-react';
import React from 'react'; // ✅ Import React

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
  icon: React.ElementType;  // ✅ Use React.ElementType directly
  progress: number;
  steps: RoadmapStep[];
}

export const roadmapData: RoadmapSection[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Master modern frontend development with React, TypeScript, and essential web technologies.',
    icon: Code2,  // ✅ Now correctly typed
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
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Build scalable server-side applications and APIs.',
    icon: Server,  // ✅ Fixed typing
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
        ],
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'Master deployment, CI/CD, and cloud services.',
    icon: Cloud,  // ✅ Fixed typing
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
        ],
      },
    ],
  },
];
