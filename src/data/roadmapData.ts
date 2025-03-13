import { Code2, Server, Cloud } from 'lucide-react';
import React from 'react';

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
  icon: React.ElementType;
  progress: number;
  steps: RoadmapStep[];
}

export const roadmapData: RoadmapSection[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description:
      'Master modern frontend development with React, TypeScript, and essential web technologies.',
    icon: Code2,
    progress: 0,
    steps: [
      {
        id: 'html-css',
        title: 'HTML & CSS Fundamentals',
        description:
          'Learn the building blocks of web development with semantic HTML and modern CSS techniques.',
        completed: false,
        resources: [
          { title: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
          { title: 'CSS Tricks', url: 'https://css-tricks.com' },
        ],
      },
      {
        id: 'js-ts',
        title: 'JavaScript & TypeScript',
        description:
          'Understand the core of programming with JavaScript and leverage TypeScript for type safety.',
        completed: false,
        resources: [
          { title: 'JavaScript.info', url: 'https://javascript.info' },
          { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
          { title: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net' },
        ],
      },
      {
        id: 'react',
        title: 'React & Modern Frontend Frameworks',
        description:
          'Build dynamic UIs with React and learn state management, hooks, and component design.',
        completed: false,
        resources: [
          { title: 'React Official Docs', url: 'https://react.dev' },
          { title: 'Redux Toolkit', url: 'https://redux-toolkit.js.org' },
          { title: 'Create React App', url: 'https://create-react-app.dev' },
        ],
      },
      {
        id: 'accessibility',
        title: 'Web Accessibility & Performance',
        description:
          'Ensure your applications are accessible and performant across devices using best practices.',
        completed: false,
        resources: [
          { title: 'MDN Accessibility', url: 'https://developer.mozilla.org/en-US/docs/Web/Accessibility' },
          { title: 'Google Web Fundamentals', url: 'https://developers.google.com/web/fundamentals' },
        ],
      },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description:
      'Build scalable server-side applications and APIs using modern frameworks and databases.',
    icon: Server,
    progress: 0,
    steps: [
      {
        id: 'node-express',
        title: 'Node.js & Express',
        description:
          'Create server-side applications with Node.js and the Express framework.',
        completed: false,
        resources: [
          { title: 'Node.js Documentation', url: 'https://nodejs.org/en/docs/' },
          { title: 'Express.js Guide', url: 'https://expressjs.com/en/starter/installing.html' },
        ],
      },
      {
        id: 'databases',
        title: 'Databases',
        description:
          'Learn both SQL and NoSQL databases for effective data storage and retrieval.',
        completed: false,
        resources: [
          { title: 'PostgreSQL Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial.html' },
          { title: 'MongoDB University', url: 'https://university.mongodb.com' },
          { title: 'SQLZoo', url: 'https://sqlzoo.net' },
        ],
      },
      {
        id: 'api-development',
        title: 'API Development & REST',
        description:
          'Design and build robust RESTful APIs to enable communication between services.',
        completed: false,
        resources: [
          { title: 'RESTful API Tutorial', url: 'https://restfulapi.net' },
          { title: 'Postman API Learning Center', url: 'https://learning.postman.com' },
        ],
      },
      {
        id: 'auth-security',
        title: 'Authentication & Security',
        description:
          'Implement secure authentication and authorization, and learn to protect against common vulnerabilities.',
        completed: false,
        resources: [
          { title: 'Passport.js', url: 'http://www.passportjs.org' },
          { title: 'Auth0 - JWT Introduction', url: 'https://auth0.com/learn/json-web-tokens/' },
        ],
      },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description:
      'Learn how to deploy, manage, and scale applications using modern DevOps practices and cloud services.',
    icon: Cloud,
    progress: 0,
    steps: [
      {
        id: 'git-github',
        title: 'Git & GitHub',
        description:
          'Master version control and collaborative development using Git and GitHub.',
        completed: false,
        resources: [
          { title: 'Git Documentation', url: 'https://git-scm.com/doc' },
          { title: 'GitHub Guides', url: 'https://guides.github.com' },
        ],
      },
      {
        id: 'docker-kubernetes',
        title: 'Docker & Kubernetes',
        description:
          'Containerize your applications with Docker and manage clusters using Kubernetes.',
        completed: false,
        resources: [
          { title: 'Docker Documentation', url: 'https://docs.docker.com' },
          { title: 'Kubernetes Official Docs', url: 'https://kubernetes.io/docs/home/' },
        ],
      },
      {
        id: 'ci-cd',
        title: 'CI/CD & Automation',
        description:
          'Automate your deployment pipelines with continuous integration and delivery tools.',
        completed: false,
        resources: [
          { title: 'GitHub Actions', url: 'https://docs.github.com/en/actions' },
          { title: 'CircleCI', url: 'https://circleci.com/docs' },
          { title: 'Jenkins', url: 'https://www.jenkins.io/doc/' },
        ],
      },
      {
        id: 'cloud-providers',
        title: 'Cloud Providers',
        description:
          'Explore cloud platforms and learn to deploy and manage scalable applications in the cloud.',
        completed: false,
        resources: [
          { title: 'AWS Free Tier', url: 'https://aws.amazon.com/free' },
          { title: 'Google Cloud Platform', url: 'https://cloud.google.com' },
          { title: 'Microsoft Azure', url: 'https://azure.microsoft.com' },
        ],
      },
    ],
  },
];
