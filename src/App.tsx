// src/App.tsx
import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { useTranslation } from 'react-i18next';

import { SearchBar } from '@/components/SearchBar';
import { LanguageSelector } from '@/components/LanguageSelector';
import { ThemeToggle } from '@/components/ThemeToggle';
import { RoadmapCard } from '@/components/Roadmap/RoadmapCard';
import { getRoadmapData } from '@/data/getRoadmapData';
import { Compass } from 'lucide-react';
import { ProgressAnalytics } from '@/components/ProgressAnalytics';

function App() {
  const { t, i18n } = useTranslation();

  // Build the roadmap data using the current language
  const [sections, setSections] = useState(() => getRoadmapData(t));

  // Rebuild data whenever the language changes
  useEffect(() => {
    setSections(getRoadmapData(t));
  }, [i18n.language, t]);

  const [searchQuery, setSearchQuery] = useState('');

  // Filter sections based on search
  const filteredSections = sections.filter((section) => {
    const lowerQuery = searchQuery.toLowerCase();
    return (
      section.title.toLowerCase().includes(lowerQuery) ||
      section.description.toLowerCase().includes(lowerQuery) ||
      section.steps.some(
        (step) =>
          step.title.toLowerCase().includes(lowerQuery) ||
          step.description.toLowerCase().includes(lowerQuery)
      )
    );
  });

  // This function updates a section's progress (0-100) based on steps completed
  const handleProgressUpdate = (sectionId: string, progress: number) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId ? { ...section, progress } : section
      )
    );
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <div className="min-h-screen bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
        
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-20 items-center">
            <div className="flex items-center gap-3 mr-6">
              <Compass className="h-8 w-8 text-primary animate-float" />
              {/* Always in English */}
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                {t('appName')}
              </h1>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-4">
              <SearchBar onSearch={setSearchQuery} />
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container py-12 px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredSections.map((section, index) => {
              // Build data array for just this one section
              const completed = section.progress || 0;
              const remaining = 100 - completed;
              const data = [
                {
                  section: section.title,
                  completed,
                  remaining,
                },
              ];

              return (
                <div
                  key={section.id}
                  className="animate-slide-up flex flex-col lg:flex-row gap-8 items-start"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Left: Roadmap Card */}
                  <div className="flex-1">
                    <RoadmapCard section={section} onProgressUpdate={handleProgressUpdate} />
                  </div>
                  
                  {/* Right: Chart for This Section */}
                  <div className="w-full lg:w-1/3">
                    <ProgressAnalytics data={data} />
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
