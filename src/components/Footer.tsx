"use client";
import { FC } from "react";
import { motion } from "framer-motion";

const AnimatedContainer: FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <AnimatedContainer>
          <p className="text-gray-400 mb-4">
            © 2025 Zuhair Ahmad. Built with React, TypeScript, and lots of ☕
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </AnimatedContainer>
      </div>
    </footer>
  );
};

export default Footer;