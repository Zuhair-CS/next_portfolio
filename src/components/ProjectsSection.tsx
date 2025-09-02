"use client";

import AnimatedContainer from "./AnimatedContainer";
import {ExpandableCardDemo} from "./ui/grid-card";

export default function ProjectsSection() {
  const projects = [
    {
      name: "SHERIFY",
      type: "Full Stack Blog Sharing Platform",
      description:
        "Blog sharing platform with advanced search, user profiles, and hashtag system. Built with Next.js 13+, MongoDB, and Tailwind CSS. Features Google OAuth authentication, full CRUD blog management, real-time filtering, clipboard copy functionality, and immersive 3D background using Spline.",
      tech: [
        "Next.js",
        "Next-Auth",
        "Spline",
        "Atlas Database",
        "Vercel",
        "MERN",
      ],
      live: "https://sherify.vercel.app/",
      code: "https://github.com/Zuhair-CS/Sherify",
      src: "/images/123.png",
    },
    {
      name: "WANDERLUST",
      type: "Property Listing Platform",
      description:
        "Travel platform with destination listings, reviews, and image uploads. Built with Node.js, Express.js, MongoDB, and EJS. Features secure user authentication with Passport.js, full CRUD listings, Mapbox API integration for location mapping, image storage via Cloudinary, responsive EJS templates with Bootstrap, and scalable MVC architecture.",
      tech: [
        "Express.js",
        "Node.js",
        "MERN",
        "Passport.js",
        "Mapbox",
        "Render",
      ],
      live: "https://wanderlust-j3s6.onrender.com/",
      code: "https://github.com/Zuhair-CS/Wanderlust",
      src: "/images/123.png",
    },
    {
      name: "AI WEB SCRAPER",
      type: "Apify + Next.js integration",
      description:
        "Runs a custom Apify actor to scrape a page and summarize H1—H6 headings. Advanced web scraping and analysis tool with modern UI.",
      tech: ["Apify", "Next.js", "Next.js API routes"],
      live: "https://apify-implementation.vercel.app/",
      code: "https://github.com/Zuhair-CS/Apify_Implementation",
      src: "/images/123.png",
    },
  ];

  return (
    <section id="projects" className="py-10">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedContainer>
          <div className="flex items-center mb-20">
            <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <h2 className="text-5xl font-bold text-white ml-4">Projects</h2>

          </div>
        </AnimatedContainer>
        <ExpandableCardDemo projects={projects} />
      </div>
    </section>
  );
}
