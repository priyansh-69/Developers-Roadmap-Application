import { useState, useEffect } from "react";

interface StreakTrackerProps {
  sectionId: string; // Accepting sectionId as a prop
}

const StreakTracker: React.FC<StreakTrackerProps> = ({ sectionId }) => {
  const [streak, setStreak] = useState<number>(0);
  const [lastActiveDate, setLastActiveDate] = useState<Date | null>(null);

  useEffect(() => {
    const savedStreak = localStorage.getItem(`learning_streak_${sectionId}`);
    const savedDate = localStorage.getItem(`last_active_date_${sectionId}`);

    if (savedStreak) setStreak(parseInt(savedStreak, 10));
    if (savedDate) setLastActiveDate(new Date(savedDate));

    checkStreak();
  }, []);

  const checkStreak = () => {
    const today = new Date();
    const lastDate = lastActiveDate ? new Date(lastActiveDate) : null;

    if (lastDate) {
      const diff = (today.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24);

      if (diff >= 2) {
        // Missed a day → Reset streak
        setStreak(0);
      } else if (diff >= 1) {
        // Continued streak
        setStreak((prev) => prev + 1);
      }
    }

    setLastActiveDate(today);
    localStorage.setItem(`learning_streak_${sectionId}`, (streak + 1).toString());
    localStorage.setItem(`last_active_date_${sectionId}`, today.toISOString());
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-white font-bold">🔥 Learning Streak</h3>
      <p className="text-lg font-bold text-yellow-400">{streak} Days</p>
    </div>
  );
};

export default StreakTracker;
