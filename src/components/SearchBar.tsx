import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl group">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
      <Input
        type="search"
        placeholder="Search roadmap topics..."
        className="pl-9 h-11 rounded-xl bg-muted/50 border-primary/10 transition-all duration-200 hover:bg-muted focus:bg-muted focus:ring-2 focus:ring-primary/20"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}