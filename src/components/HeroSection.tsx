"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black">
      <div className="text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hi, I'm <span className="text-blue-400">Zuhair</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
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