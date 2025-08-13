"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
  image: string;
}

const Portfolio: FC = () => {
  const projects: Project[] = [
    {
      title: "Sherify",
      tagline: "Next.js full-stack app",
      description:
        "Authentication, dashboards, and clean API design. Built with Next.js, TypeScript, and Tailwind.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
      link: "#",
      repo: "#",
      image: "/projects/sherify.png",
    },
    {
      title: "WanderLust",
      tagline: "Express.js + MongoDB",
      description:
        "Travel listings with CRUD, file uploads, and secure sessions.",
      tech: ["Express", "MongoDB", "Mongoose", "JWT"],
      link: "#",
      repo: "#",
      image: "/projects/wanderlust.png",
    },
    {
      title: "AI Campaign Analyzer",
      tagline: "Apify + Next.js integration",
      description:
        "Runs a custom Apify actor to scrape a page and summarize H1–H6 headings.",
      tech: ["Apify", "Axios", "Cheerio", "Next.js API routes"],
      link: "#",
      repo: "#",
      image: "/projects/ai-campaign.png",
    },
  ];

  const skills: string[] = [
    "Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB",
    "PostgreSQL", "REST APIs", "Tailwind CSS", "Git/GitHub", "Jest", "Playwright"
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white">
      <div className="mx-auto max-w-5xl px-6">
        {/* Navbar */}
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="flex items-center justify-between py-4">
            <a href="#top" className="font-semibold tracking-tight">Portfolio</a>
            <nav className="hidden gap-6 text-sm md:flex">
              <a href="#projects" className="hover:opacity-60 transition-opacity">Projects</a>
              <a href="#skills" className="hover:opacity-60 transition-opacity">Skills</a>
              <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
            </nav>
            <a
              href="#"
              className="rounded-xl border border-zinc-200 px-3 py-1 text-sm hover:bg-zinc-50 transition-colors"
            >Resume</a>
          </div>
        </header>

        {/* Hero */}
        <motion.section
          id="top"
          className="py-16 md:py-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Hi, I'm a MERN Stack Developer
          </h1>
          <p className="mt-4 max-w-xl text-zinc-600">
            I build clean, efficient, and impactful web applications with modern technologies.
          </p>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-8">Projects</h2>
          <div className="flex flex-col gap-12">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} reverse={i % 2 !== 0} />
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          id="skills"
          className="py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-8">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <span key={i} className="rounded-full bg-zinc-100 px-3 py-1 text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Portfolio;
