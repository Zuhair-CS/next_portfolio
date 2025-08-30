import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconPhone,
    IconHome,
    IconTool,
    IconFileStar,
    IconFileCode,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300 transition-transform" />
      ),
      href: "#",
    },
    {
      title: "Experience",
      icon: (
        <IconFileStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
        {
      title: "Projects",
      icon: (
        <IconFileCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Skills",
      icon: (
        <IconTool className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Contact",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
  ];
  return (

      <FloatingDock// only for demo, remove for production
        items={links}
      />
  );
}
