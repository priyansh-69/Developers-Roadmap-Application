// src/data/getRoadmapData.ts
import { TFunction } from 'i18next';
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

export function getRoadmapData(t: TFunction): RoadmapSection[] {
  return [
    {
      id: 'frontend',
      title: t('roadmap.frontend.title'),
      description: t('roadmap.frontend.description'),
      icon: Code2,
      progress: 0,
      steps: [
        {
          id: 'html-css',
          title: t('roadmap.frontend.steps.htmlCss.title'),
          description: t('roadmap.frontend.steps.htmlCss.description'),
          completed: false,
          resources: [
            { title: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { title: 'CSS Tricks', url: 'https://css-tricks.com' },
          ],
        },
        {
          id: 'js-ts',
          title: t('roadmap.frontend.steps.jsTs.title'),
          description: t('roadmap.frontend.steps.jsTs.description'),
          completed: false,
          resources: [
            { title: 'JavaScript.info', url: 'https://javascript.info' },
            { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
            { title: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net' },
          ],
        },
        {
          id: 'react',
          title: t('roadmap.frontend.steps.react.title'),
          description: t('roadmap.frontend.steps.react.description'),
          completed: false,
          resources: [
            { title: 'React Official Docs', url: 'https://react.dev' },
            { title: 'Redux Toolkit', url: 'https://redux-toolkit.js.org' },
            { title: 'Create React App', url: 'https://create-react-app.dev' },
          ],
        },
        {
          id: 'accessibility',
          title: t('roadmap.frontend.steps.accessibility.title'),
          description: t('roadmap.frontend.steps.accessibility.description'),
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
      title: t('roadmap.backend.title'),
      description: t('roadmap.backend.description'),
      icon: Server,
      progress: 0,
      steps: [
        {
          id: 'node-express',
          title: t('roadmap.backend.steps.nodeExpress.title'),
          description: t('roadmap.backend.steps.nodeExpress.description'),
          completed: false,
          resources: [
            { title: 'Node.js Documentation', url: 'https://nodejs.org/en/docs/' },
            { title: 'Express.js Guide', url: 'https://expressjs.com/en/starter/installing.html' },
          ],
        },
        {
          id: 'databases',
          title: t('roadmap.backend.steps.databases.title'),
          description: t('roadmap.backend.steps.databases.description'),
          completed: false,
          resources: [
            { title: 'PostgreSQL Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial.html' },
            { title: 'MongoDB University', url: 'https://university.mongodb.com' },
            { title: 'SQLZoo', url: 'https://sqlzoo.net' },
          ],
        },
        {
          id: 'api-development',
          title: t('roadmap.backend.steps.apiDev.title'),
          description: t('roadmap.backend.steps.apiDev.description'),
          completed: false,
          resources: [
            { title: 'RESTful API Tutorial', url: 'https://restfulapi.net' },
            { title: 'Postman API Learning Center', url: 'https://learning.postman.com' },
          ],
        },
        {
          id: 'auth-security',
          title: t('roadmap.backend.steps.authSecurity.title'),
          description: t('roadmap.backend.steps.authSecurity.description'),
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
      title: t('roadmap.devops.title'),
      description: t('roadmap.devops.description'),
      icon: Cloud,
      progress: 0,
      steps: [
        {
          id: 'git-github',
          title: t('roadmap.devops.steps.gitGithub.title'),
          description: t('roadmap.devops.steps.gitGithub.description'),
          completed: false,
          resources: [
            { title: 'Git Documentation', url: 'https://git-scm.com/doc' },
            { title: 'GitHub Guides', url: 'https://guides.github.com' },
          ],
        },
        {
          id: 'docker-kubernetes',
          title: t('roadmap.devops.steps.dockerKubernetes.title'),
          description: t('roadmap.devops.steps.dockerKubernetes.description'),
          completed: false,
          resources: [
            { title: 'Docker Documentation', url: 'https://docs.docker.com' },
            { title: 'Kubernetes Official Docs', url: 'https://kubernetes.io/docs/home/' },
          ],
        },
        {
          id: 'ci-cd',
          title: t('roadmap.devops.steps.ciCd.title'),
          description: t('roadmap.devops.steps.ciCd.description'),
          completed: false,
          resources: [
            { title: 'GitHub Actions', url: 'https://docs.github.com/en/actions' },
            { title: 'CircleCI', url: 'https://circleci.com/docs' },
            { title: 'Jenkins', url: 'https://www.jenkins.io/doc/' },
          ],
        },
        {
          id: 'cloud-providers',
          title: t('roadmap.devops.steps.cloudProviders.title'),
          description: t('roadmap.devops.steps.cloudProviders.description'),
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
}
