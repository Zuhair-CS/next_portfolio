"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
  repo: string;
  image: string;
  reverse?: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  tagline,
  description,
  tech,
  link,
  repo,
  image,
  reverse = false,
}) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <div className="md:w-1/2 relative h-64 md:h-auto">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Details */}
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-zinc-500">{tagline}</p>
        <p className="mt-2 text-zinc-700">{description}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {tech.map((t, j) => (
            <span
              key={j}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4">
          <a
            href={link}
            className="text-sm text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
          <a
            href={repo}
            className="text-sm text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
