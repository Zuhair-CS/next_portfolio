"use client";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedContainerProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedContainer: FC<AnimatedContainerProps> = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
