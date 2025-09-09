"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { GlowCard } from "./spotlight-cards";
import Image from "next/image";

// Updated interface to match your project structure
interface Project {
  name: string;
  type: string;
  description: string;
  tech: string[];
  live: string;
  code: string;
  src: string;
}

interface ExpandableCardDemoProps {
  projects: Project[];
}

export function ExpandableCardDemo({ projects }: ExpandableCardDemoProps) {
  const [active, setActive] = useState<Project | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full z-10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.name}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex bg-black p-1 absolute top-8 right-4 items-center justify-center rounded-full h-8 w-8 shadow-lg z-[110]"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.name}-${id}`}
              ref={ref}
              className="relative w-full max-w-[50rem] h-full md:h-fit md:max-h-[90%] flex flex-col bg-gray-900 dark:bg-gray-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.name}-${id}`}>
                <Image
                  src={active.src}
                  alt={active.name}
                  width={200}
                  height={200}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="flex-1">
                    <div className="flex flex-col items-start mb-3">
                      <motion.h3
                        layoutId={`title-${active.name}-${id}`}
                        className="font-bold text-neutral-200 dark:text-neutral-200 text-xl"
                      >
                        {active.name}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.type}-${id}`}
                        className="text-neutral-400 dark:text-neutral-400 text-base font-medium"
                      >
                        {active.type}
                      </motion.p>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.live}
                      target="_blank"
                      
                    >
                      <GlowCard
                      className="px-3 py-2">
                      Live Demo
                      </GlowCard>
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.code}
                      target="_blank"
                    >
                      <GlowCard
                      className="px-3 py-2">
                      Code
                      </GlowCard>
                    </motion.a>
                  </div>
                </div>
                {/* Tech stack display */}
                    <div className="flex flex-wrap gap-1 mb-4 ml-4">
                      {active.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm bg-blue-900 dark:bg-blue-900 text-blue-200 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    <p>{active.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <ul className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-8">
        {projects.map((project) => (
          <GlowCard
            key={project.name}
            glowColor="blue"
            className="cursor-pointer mx-auto p-4 w-[100%] h-[100%]"
          >
            <motion.div
              layoutId={`card-${project.name}-${id}`}
              key={project.name}
              onClick={() => setActive(project)}
              className="flex flex-col rounded-xl cursor-pointer transition-colors duration-200 h-full"
            >
              <div className="flex flex-col w-full">
                <motion.div layoutId={`image-${project.name}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={project.src}
                    alt={project.name}
                    className="h-40 w-full rounded-lg object-cover object-top"
                  />
                </motion.div>

                <div className="flex flex-col h-52 pt-2 justify-start">
                  {/* Title and Type on same line */}
                <div className="flex items-baseline gap-2 mb-3">
                  <motion.h3
                    layoutId={`title-${project.name}-${id}`}
                    className="font-bold text-neutral-200 dark:text-neutral-200 text-xl mt-2 leading-tight"
                  >
                    {project.name}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${project.type}-${id}`}
                    className="text-neutral-400 dark:text-neutral-400 text-md font-medium"
                  >
                    - {project.type}
                  </motion.p>
                </div>
                  
                  {/* Tech stack preview - show first 3 */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-900 dark:bg-blue-900 text-blue-200 dark:text-blue-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs bg-gray-800 dark:bg-gray-800 text-gray-400 dark:text-gray-400 rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Description with truncation */}
                  <div className="flex-1 mb-3">
                    <p className="text-gray-300 dark:text-gray-300 text-sm font-semibold leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Learn More link */}
                  <div className="mt-auto">
                    <span className="text-gray-200 dark:text-gray-200 text-sm font-medium cursor-pointer">
                      Learn More →
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </GlowCard>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[80px] w-[80px] text-white cursor-pointer"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};