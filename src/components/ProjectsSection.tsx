"use client";

import { useState } from "react";
import AnimatedContainer from "./AnimatedContainer";
import ProjectCard from "./ProjectCard";
import CarouselNavigation from "./CarouselNavigation";

export default function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      name: "SHERIFY",
      type: "Full Stack Blog Sharing Platform",
      description:
            "Blog sharing platform with advanced search, user profiles, and hashtag system. Built with Next.js 13+, MongoDB, and Tailwind CSS. Features Google OAuth authentication, full CRUD blog management, real-time filtering, clipboard copy functionality, and immersive 3D background using Spline.",
      tech: ["Next.js", "JavaScript", "Tailwind", "Next-Auth","Spline", "MongoDB", "Atlas Database", "Vercel"],
      live: "https://sherify.vercel.app/",
      code: "https://github.com/Zuhair-CS/Sherify"
    },
    {
      name: "WANDERLUST",
      type: "Property Listing Platform",
      description:
        "Travel platform with destination listings, reviews, and image uploads. Built with Node.js, Express.js, MongoDB, and EJS. Features secure user authentication with Passport.js, full CRUD listings, Mapbox API integration for location mapping, image storage via Cloudinary, responsive EJS templates with Bootstrap, and scalable MVC architecture.",
      tech: ["Express.js" ,"Node.js", "MongoDB", "Bootstrap", "Passport.js","Mapbox", "Render"],
      live: "https://wanderlust-j3s6.onrender.com/",
      code: "https://github.com/Zuhair-CS/Wanderlust"
    },
    {
      name: "AI CAMPAIGN ANALYZER",
      type: "Apify + Next.js integration",
      description:
        "Runs a custom Apify actor to scrape a page and summarize H1—H6 headings. Advanced web scraping and analysis tool with modern UI.",
      tech: ["Apify", "Next.js", "Next.js API routes"],
      live: "https://apify-implementation.vercel.app/",
      code: "https://github.com/Zuhair-CS/Apify_Implementation"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedContainer>
          <h2 className="text-5xl font-bold text-center mb-20 text-white">
            Projects
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </h2>
        </AnimatedContainer>

        <div className="mb-8">
          <ProjectCard
            project={projects[currentProject]}
            reverse={currentProject % 2 !== 0}
          />
        </div>

        {projects.length > 1 && (
          <CarouselNavigation
            currentProject={currentProject}
            totalProjects={projects.length}
            onPrev={prevProject}
            onNext={nextProject}
            onDotClick={goToProject}
          />
        )}
      </div>
    </section>
  );
}