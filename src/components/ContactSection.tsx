"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { Mail, Github } from "lucide-react";

const AnimatedContainer: FC<{ delay?: number; children: React.ReactNode }> = ({
  delay = 0,
  children,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay / 1000, duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

const ContactSection: FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedContainer>
          <h2 className="text-5xl font-bold text-white mb-8">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with talented people. Let's
            create something extraordinary together!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:zuhair2945@gmail.com"
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3 border border-blue-500 hover:border-blue-400"
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
            <a
              href="#"
              className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-400 hover:text-gray-900 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-3"
            >
              <Github size={20} />
              <span>View GitHub</span>
            </a>
          </div>
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default ContactSection;