"use client";
import { FC } from "react";
import { motion } from "framer-motion";

const AboutMe: FC = () => {
  return (
    <section
      id="about"
      className="py-20 max-w-5xl mx-auto px-6"
    >
      {/* Header */}
      <div className="flex items-center mb-16">
        <h2 className="text-5xl font-bold text-white mr-4">About Me.</h2>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-10 rounded-3xl shadow-xl border border-gray-700"
      >
        <p className="text-lg text-gray-300 leading-relaxed cursor-default">
          I&apos;m a full-stack developer who loves building things that feel alive on the web — from sleek UIs polished with Tailwind and Shadcn to smart apps powered by AI. I&apos;m the kind of person who gets just as excited about debugging a tricky bug as I do about finally shipping a feature that makes someone&apos;s life easier. Curiosity drives me, and breaking things (and fixing them) is half the fun. <br /><br />

When I&apos;m not deep in code, you&apos;ll probably find me on the basketball court perfecting my jump shot, at the piano figuring out a new piece, or diving into yet another online course just to see what I can learn next.<br /><br />

I like creating projects that are not only functional, but also bring a bit of joy to the people who use them. Always curious, always experimenting — if you&apos;re building something cool (or just want to talk hoops, music, or code), I&apos;m all ears. 🏀🎹💻<br /><br />
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
