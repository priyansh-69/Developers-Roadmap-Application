import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { SearchBar } from '@/components/SearchBar';
import { ThemeToggle } from '@/components/ThemeToggle';
import { RoadmapCard } from '@/components/Roadmap/RoadmapCard';
import { roadmapData } from '@/data/roadmapData';
import { Compass } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sections, setSections] = useState(roadmapData);

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

  const handleProgressUpdate = (sectionId: string, progress: number) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId ? { ...section, progress } : section
      )
    );
  };

  return (
    <ThemeProvider defaultTheme="dark" enableSystem>
      <div className="min-h-screen bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-background to-background">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-20 items-center">
            <div className="flex items-center gap-3 mr-6">
              <Compass className="h-8 w-8 text-primary animate-float" />
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                Developer Roadmap
              </h1>
            </div>
            <div className="flex flex-1 items-center justify-between space-x-4">
              <SearchBar onSearch={setSearchQuery} />
              <ThemeToggle />
            </div>
          </div>
        </header>

        <main className="container py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {filteredSections.map((section, index) => (
              <div
                key={section.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <RoadmapCard
                  section={section}
                  onProgressUpdate={handleProgressUpdate}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App