"use client";
import { FC } from "react";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";

interface SkillTagProps {
  skill: string;
  delay?: number;
}

const AnimatedContainer: FC<{ delay?: number; className?: string; children: React.ReactNode }> = ({
  delay = 0,
  className = "",
  children,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay / 1000, duration: 0.6 }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

const SkillTag: FC<SkillTagProps> = ({ skill, delay = 0 }) => (
  <AnimatedContainer delay={delay} className="transform hover:scale-105 transition-all duration-300">
    <div className="group bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 hover:shadow-xl hover:border-blue-500 transition-all duration-300 cursor-pointer">
      <span className="text-gray-300 font-medium text-sm group-hover:text-blue-400 transition-colors">
        {skill}
      </span>
      <div className="w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 mt-1"></div>
    </div>
  </AnimatedContainer>
);

const AchievementCard: FC<{ achievement: string; delay?: number }> = ({ achievement, delay = 0 }) => (
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

const SkillsSection: FC = () => {
  const skills = [
    { name: "JavaScript/TypeScript", percentage: 90 },
    { name: "React/Next.js", percentage: 85 },
    { name: "Node.js/Express.js", percentage: 80 },
    { name: "MongoDB/Database", percentage: 75 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "Git/GitHub", percentage: 85 },
  ];

  const additionalSkills = [
    "NextAuth.js",
    "HTML5/CSS3",
    "RESTful APIs",
    "EJS",
    "Bootstrap",
    "Mongoose ODM",
    "Joi",
    "Responsive UI/UX Design",
  ];

  const achievements = [
    "7th Place, National-Level Hackathon by CSI (2023)",
    "2nd Runner-Up, Intra-College Basketball Tournament (2024)",
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedContainer>
          <h2 className="text-5xl font-bold text-center mb-20 text-white">
            Skills & Achievements
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </h2>
        </AnimatedContainer>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <AnimatedContainer>
              <h3 className="text-2xl font-bold mb-10 text-gray-200">Core Technologies</h3>
            </AnimatedContainer>
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                skill={skill.name}
                percentage={skill.percentage}
                delay={index * 150}
              />
            ))}
          </div>

          <div>
            <AnimatedContainer>
              <h3 className="text-2xl font-bold mb-10 text-gray-200">Additional Skills</h3>
            </AnimatedContainer>
            <div className="grid grid-cols-2 gap-4 mb-12 mt-18">
              {additionalSkills.map((skill, index) => (
                <SkillTag key={skill} skill={skill} delay={index * 50} />
              ))}
            </div>

            <AnimatedContainer>
              <h3 className="text-2xl font-bold mb-8 text-gray-200">Achievements</h3>
            </AnimatedContainer>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <AchievementCard key={achievement} achievement={achievement} delay={index * 200} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;