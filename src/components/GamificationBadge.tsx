// src/components/GamificationBadge.tsx

import { Badge } from '@/components/ui/badge';
import { useTranslation } from 'react-i18next';

interface GamificationBadgeProps {
  progress: number;
}

export function GamificationBadge({ progress }: GamificationBadgeProps) {
  const { t } = useTranslation();

  let badgeKey = '';
  if (progress === 100) {
    badgeKey = 'badgeMessages.master';
  } else if (progress >= 75) {
    badgeKey = 'badgeMessages.almostThere';
  } else if (progress >= 50) {
    badgeKey = 'badgeMessages.halfwayThere';
  } else if (progress >= 25) {
    badgeKey = 'badgeMessages.gettingStarted';
  } else {
    badgeKey = 'badgeMessages.justBeginning';
  }

  return (
    <Badge variant="secondary" className="ml-auto">
      {t(badgeKey)} ({progress}%)
    </Badge>
  );
}
