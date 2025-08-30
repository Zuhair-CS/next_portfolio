/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the left side
 * Mobile navbar is better positioned at bottom right.
 **/
"use client";

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn("fixed top-4 left-4 z-50 block md:hidden", className)}>
  <AnimatePresence>
    {open && (
      <motion.div
        layoutId="nav"
        className="absolute left-0 top-full mt-2 flex flex-col gap-2"
      >
      {items.map((item, idx) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          // Closing: reverse order (last leaves first)
          exit={{
            opacity: 0,
            y: 10,
            transition: { delay: (items.length - 1 - idx) * 0.05 },
          }}
          // Opening: normal order (first enters first)
          transition={{ delay: idx * 0.05 }}
        >
        <a
          href={item.href}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 dark:bg-gray-800"
        >
          <div className="h-6 w-6">{item.icon}</div>
        </a>
        </motion.div>
      ))}
      </motion.div>
    )}
  </AnimatePresence>

  <button
    onClick={() => setOpen(!open)}
    className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 dark:bg-gray-800"
  >
    <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
  </button>
</div>

  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const mouseY = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.pageY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "fixed left-4 top-1/2 -translate-y-1/2 z-50 " + // Left side, vertically centered
        "hidden w-20 flex-col items-start gap-4 rounded-2xl " +     // w-20 for vertical layout
        "bg-[#0F172A]/80 backdrop-blur-lg border border-gray-700/60 " +
        "py-6 pl-4 pr-4 shadow-xl md:flex",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseY={mouseY} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseY,
  title,
  icon,
  href,
}: {
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [50, 85, 50]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [50, 85, 50]);
  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [30, 40, 30]);
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [30, 40, 30],
  );

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-800 dark:bg-gray-800"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: -10, y: "-50%" }}
              animate={{ opacity: 1, x: 0, y: "-50%" }}
              exit={{ opacity: 0, x: -5, y: "-50%" }}
              className="absolute left-full top-1/2 ml-2 w-fit rounded-md border border-gray-700 bg-gray-800 dark:bg-gray-800 px-2 py-1 text-s whitespace-nowrap text-neutral-700 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}