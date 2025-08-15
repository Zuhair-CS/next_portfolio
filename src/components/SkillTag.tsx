"use client";
import { FC } from "react";
import AnimatedContainer from "./AnimatedContainer";

interface SkillTagProps {
  skill: string;
  delay?: number;
}

const SkillTag: FC<SkillTagProps> = ({ skill, delay = 0 }) => {
  return (
    <AnimatedContainer
      delay={delay}
      className="transform hover:scale-105 transition-all duration-300"
    >
      <div className="group bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl hover:border-blue-500 transition-all duration-300 cursor-pointer">
        <span className="text-gray-300 font-medium text-sm group-hover:text-blue-400 transition-colors">
          {skill}
        </span>
        <div className="w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 mt-1"></div>
      </div>
    </AnimatedContainer>
  );
};

export default SkillTag;