"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80; // 80px offset for nav
      window.scrollTo({
        top,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-gray-900 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-blue-400 tracking-wide hover:scale-105 transition-transform"
        >
          Zuhair Ahmad
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-gray-300 font-semibold tracking-wide">
          {["Projects", "Experience", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleSmoothScroll(e, `#${item.toLowerCase()}`)}
              className="relative text-lg hover:text-blue-400 transition-colors duration-200 
                         after:content-[''] after:absolute after:left-0 after:-bottom-1 
                         after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all 
                         after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-300 hover:text-white transition-colors"
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg px-6 py-4 space-y-4 text-gray-300 border-t border-gray-700">
          {["Projects", "Experience", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleSmoothScroll(e, `#${item.toLowerCase()}`)}
              className="block text-lg font-semibold tracking-wide hover:text-blue-400 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
