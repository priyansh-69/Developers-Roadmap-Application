import {Suspense } from 'react';

import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import './i18n'; 
// This will initialize localization before your app renders
createRoot(document.getElementById('root')!).render(
  <Suspense fallback={<div>Loading...</div>}>
    <App />
  </Suspense>
);