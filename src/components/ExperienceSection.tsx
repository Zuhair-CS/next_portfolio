"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Frontend Developer Intern",
    company: "MOON HERBAL LABORATORIES PVT. LTD.",
    period: "June 2025 - July 2025",
    description:
      "Digitized and structured archival data from 2024—2025, transforming manual records into a comprehensive, searchable digital database, significantly improving accessibility and operational efficiency. Led a complete revamp of the company's e-commerce interface, redesigning the front-end experience using Shopify to enhance user engagement, aesthetic appeal, and navigation fluidity.",
  },
  {
    role: "Open Source Contributor",
    company: "Various GitHub Projects",
    period: "June 2025 - Present",
    description:
      "Contributed bug fixes, documentation, and new features to open-source repositories in the Next.js ecosystem.",
  },
];

export default function ExperienceSection() {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .experience-card {
          animation-fill-mode: forwards;
        }
      `}</style>
      
      <section id="experience" className="py-20 max-w-5xl mx-auto px-6">
      <div className="flex items-center mb-20">
        <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
        <h2 className="text-5xl font-bold text-white ml-4">Experience.</h2>
      </div>

      <div className="space-y-12 pb-18">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="max-w-5xl rounded-xl opacity-100"
          >
            <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
            <p className="text-blue-400 mt-4 text-xl font-bold">{exp.role}</p>
            <p className="text-sm text-gray-400">{exp.period}</p>
            <p className="mt-2 text-gray-100">{exp.description}</p>
            <div className="flex-1 mt-4 h-[1px] bg-gradient-to-r max-w-5xl from-blue-500 to-purple-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
    </>
  );
}