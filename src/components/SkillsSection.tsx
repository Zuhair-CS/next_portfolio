"use client";
import { FC } from "react";
import SkillBar from "./SkillBar";
import { motion } from "framer-motion";
import { GlowCard } from "./ui/spotlight-cards";

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
  <AnimatedContainer delay={delay}>
    <div className="group rounded-xl cursor-pointer p-4">
      <span className="text-gray-300 font-medium text-md transition-colors">
        {skill}
      </span>
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
    "Responsive Design",
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedContainer>
        <div className="flex items-center mb-20">
          <h2 className="text-5xl font-bold text-white mr-4">Skills &amp; Achievements.</h2>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
        </div>
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
            <div className="grid grid-cols-2 gap-4 mt-18">
              {additionalSkills.map((skill, index) => (
                <GlowCard key={skill} glowColor="purple">
                  <SkillTag key={skill} skill={skill} delay={index * 50}/>
                </GlowCard>
              ))}
            </div>

            {/* <AnimatedContainer>
              <h3 className="text-2xl font-bold mb-8 text-gray-200">Achievements</h3>
            </AnimatedContainer>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <AchievementCard key={achievement} achievement={achievement} delay={index * 200} />
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;