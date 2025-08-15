"use client";
import { FC } from "react";
import AnimatedContainer from "./AnimatedContainer";

interface AchievementCardProps {
  achievement: string;
  delay?: number;
}

const AchievementCard: FC<AchievementCardProps> = ({ achievement, delay = 0 }) => {
  return (
    <AnimatedContainer delay={delay}>
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 hover:shadow-xl hover:border-blue-500 transition-all duration-300 group cursor-pointer">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
          <span className="text-gray-200 font-semibold group-hover:text-blue-400 transition-colors">
            {achievement}
          </span>
        </div>
      </div>
    </AnimatedContainer>
  );
};

export default AchievementCard;