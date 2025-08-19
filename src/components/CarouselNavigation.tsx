"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  name: string;
  type: string;
  description: string;
  tech: string[];
  live: string;
  code: string;
}

interface CarouselNavigationProps {
  projects: Project[];
}

export default function CarouselNavigation({ projects }: CarouselNavigationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-play functionality
  useEffect(() => {
    if (paused || projects.length <= 1 || isAnimating) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, paused, projects.length, isAnimating]);

  // Get the position for each card based on its relationship to current index
  const getCardPosition = (cardIndex: number) => {
    const diff = cardIndex - currentIndex;
    const totalCards = projects.length;
    
    // Handle wrap-around for infinite loop
    let position = diff;
    if (diff > totalCards / 2) {
      position = diff - totalCards;
    } else if (diff < -totalCards / 2) {
      position = diff + totalCards;
    }
    
    return position;
  };

  // Get transform values based on position
  const getTransformValues = (position: number) => {
    switch (position) {
      case -1: // Left card
        return {
          x: "-65%",
          scale: 0.8,
          opacity: 0.5,
          zIndex: 1
        };
      case 0: // Center card
        return {
          x: "0%",
          scale: 1,
          opacity: 1,
          zIndex: 10
        };
      case 1: // Right card
        return {
          x: "65%",
          scale: 0.8,
          opacity: 0.5,
          zIndex: 1
        };
      default: // Hidden cards
        return {
          x: position < 0 ? "-120%" : "120%",
          scale: 0.6,
          opacity: 0,
          zIndex: 0
        };
    }
  };

  return (
    <div 
      className="relative w-full overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        disabled={isAnimating}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 group disabled:opacity-50 md:left-4 lg:left-6"
        aria-label="Previous project"
      >
        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full shadow-xl transition-all duration-300 group-hover:scale-110 group-disabled:hover:scale-100">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>

      <button
        onClick={goToNext}
        disabled={isAnimating}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 group disabled:opacity-50 md:right-4 lg:right-6"
        aria-label="Next project"
      >
        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-full shadow-xl transition-all duration-300 group-hover:scale-110 group-disabled:hover:scale-100">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>


      {/* Carousel Container */}
      <div className="relative flex items-center justify-center h-96 mx-auto max-w-7xl px-20">
        {projects.map((project, index) => {
          const position = getCardPosition(index);
          const transforms = getTransformValues(position);
          const isClickable = position === -1 || position === 1;
          
          return (
            <motion.div
              key={index}
              className={`absolute w-80 md:w-176 md:h-full flex items-center justify-center transition-all duration-75 ${
                isClickable ? 'cursor-pointer' : ''
              }`}
              initial={false}
              animate={transforms}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              onClick={() => {
                if (position === -1) {
                  goToPrevious();
                } else if (position === 1) {
                  goToNext();
                }
              }}
              style={{ zIndex: transforms.zIndex }}
            >
              <div className="w-full">
                <ProjectCard project={project} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Indicator Dots */}
      <div className="flex justify-center space-x-3 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-300 disabled:opacity-50 ${
              index === currentIndex
                ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg"
                : "bg-gray-600 hover:bg-gray-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {!paused && !isAnimating && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            key={`progress-${currentIndex}`}
          />
        </div>
      )}

      {/* Loading indicator during animation */}
      {isAnimating && (
        <div className="absolute top-4 right-4 z-30">
          <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
}