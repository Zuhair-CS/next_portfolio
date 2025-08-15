"use client";
import { FC } from "react";
import { motion } from "framer-motion";

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar: FC<SkillBarProps> = ({ skill, percentage, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="text-gray-200 font-medium">{skill}</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </motion.div>
  );
};

export default SkillBar;