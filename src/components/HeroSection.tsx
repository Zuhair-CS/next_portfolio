"use client";

import { motion } from "framer-motion";
import { FlipWords } from "./ui/flip-words";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <motion.h1
          className="text-7xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I&apos;m Zuhair
        </motion.h1>
        <motion.div
          className="mt-6 text-lg md:text-4xl text-gray-300 max-w-xl mx-auto flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <span className="mr-2">I am a</span>
          <FlipWords words={["Web Developer", "Devops Enthusiast", "Tech Lover", "Software Devloper"]}/>
        </motion.div>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          I build modern, performant web applications with Next.js, TypeScript, and other cutting-edge technologies.
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-blue-500 hover:border-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          View My Work
        </motion.a>
      </div>
    </section>
  );
}