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
      "Digitized and structured archival data from 2024–2025, transforming manual records into a comprehensive, searchable digital database, significantly improving accessibility and operational efficiency. Led a complete revamp of the company’s e-commerce interface, redesigning the front-end experience using Shopify to enhance user engagement, aesthetic appeal, and navigation fluidity."
  },
  {
    role: "Open Source Contributor",
    company: "Various GitHub Projects",
    period: "June 2025 - Present",
    description:
      "Contributed bug fixes, documentation, and new features to open-source repositories in the Next.js ecosystem."
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20 text-white">
            Experience
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800 shadow-xl rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white">{exp.role}</h3>
              <p className="text-blue-400 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400">{exp.period}</p>
              <p className="mt-4 text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}