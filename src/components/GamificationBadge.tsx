
import { Badge } from '@/components/ui/badge';

interface GamificationBadgeProps {
  progress: number;
}

export function GamificationBadge({ progress }: GamificationBadgeProps) {
  let badgeText = '';
  if (progress === 100) {
    badgeText = '🎓 Roadmap Master';
  } else if (progress >= 75) {
    badgeText = '🔥 Almost There!';
  } else if (progress >= 50) {
    badgeText = '🚀 Halfway There!';
  } else if (progress >= 25) {
    badgeText = '📚 Getting Started';
  } else {
    badgeText = '🌱 Just Beginning';
  }

  return (
    <Badge variant="secondary" className="ml-auto">
      {badgeText} ({progress}%)
    </Badge>
  );
}
