import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { ExternalLink } from 'lucide-react';
import type { RoadmapSection } from '@/data/roadmapData';

interface RoadmapCardProps {
  section: RoadmapSection;
  onProgressUpdate: (sectionId: string, progress: number) => void;
}

export function RoadmapCard({ section, onProgressUpdate }: RoadmapCardProps) {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

  const handleStepToggle = (stepId: string) => {
    setCompletedSteps((prev) => {
      const newCompleted = prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId];
      
      const progress = Math.round((newCompleted.length / section.steps.length) * 100);
      onProgressUpdate(section.id, progress);
      
      return newCompleted;
    });
  };

  return (
    <div className="rounded-2xl border bg-card/50 text-card-foreground shadow-lg backdrop-blur-xl gradient-border transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="p-3 rounded-xl bg-primary/10">
            <section.icon className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-semibold">{section.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
          </div>
        </div>
        <Badge variant="secondary" className="ml-auto">
          {completedSteps.length}/{section.steps.length} completed
        </Badge>
      </div>
      
      <Progress 
        value={(completedSteps.length / section.steps.length) * 100} 
        className="h-2 rounded-none bg-primary/10"
      />
      
      <Accordion type="single" collapsible className="px-6 pb-6">
        {section.steps.map((step) => (
          <AccordionItem key={step.id} value={step.id} className="border-b border-primary/10">
            <div className="flex items-center gap-4 py-4">
              <div 
                className="flex-shrink-0 transition-transform duration-200 hover:scale-110" 
                onClick={(e) => e.stopPropagation()}
              >
                <Checkbox
                  checked={completedSteps.includes(step.id)}
                  onCheckedChange={() => handleStepToggle(step.id)}
                />
              </div>
              <AccordionTrigger className="flex-1 hover:no-underline transition-colors duration-200 hover:text-primary">
                <span className={completedSteps.includes(step.id) ? 'line-through opacity-70' : ''}>
                  {step.title}
                </span>
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <div className="pl-8 animate-fade-in">
                <p className="mb-4 text-sm text-muted-foreground">{step.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-primary">Resources:</h4>
                  {step.resources.map((resource) => (
                    <a
                      key={resource.url}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary group"
                    >
                      <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                      {resource.title}
                    </a>
                  ))}
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}