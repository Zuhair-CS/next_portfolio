import React, { useEffect, useRef, ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
}

const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  className = "",
  onClick,
  width,
  height,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let progress = 0;
    let animationFrame: number;

    const animate = () => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      const perimeter = 2 * (w + h);
      const speed = 3; // px per frame
      progress = (progress + speed) % perimeter;

      let x = 0, y = 0;

      if (progress < w) {
        x = rect.left + progress;
        y = rect.top;
      } else if (progress < w + h) {
        x = rect.right;
        y = rect.top + (progress - w);
      } else if (progress < 2 * w + h) {
        x = rect.right - (progress - (w + h));
        y = rect.bottom;
      } else {
        x = rect.left;
        y = rect.bottom - (progress - (2 * w + h));
      }

      // Update CSS variables
      buttonRef.current.style.setProperty("--x", x.toFixed(2));
      buttonRef.current.style.setProperty("--y", y.toFixed(2));

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const { base, spread } = { base: 240, spread: 120 };

  const getInlineStyles = () => {
    const baseStyles = {
      "--base": base,
      "--spread": spread,
      "--radius": "10",
      "--border": "3",
      "--backdrop": "hsl(210 100% 60% / 0.12)",
      "--backup-border": "var(--backdrop)",
      "--size": "200",
      "--outer": "1",
      "--border-size": "calc(var(--border, 2) * 1px)",
      "--spotlight-size": "calc(var(--size, 150) * 0.3px)",
      "--hue": base,
      backgroundColor: "var(--backdrop, transparent)",
      border: "var(--border-size) solid var(--backup-border)",
      position: "relative",
      touchAction: "none",
    } as React.CSSProperties;

    if (width !== undefined) {
      baseStyles.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === "number" ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: calc(var(--radius) * 1px);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }
  
  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(var(--hue, 210) 100% 50% / 1),
      transparent 100%
    );
    filter: brightness(1.5);
  }
  
  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.35) calc(var(--spotlight-size) * 0.35) at
      calc(var(--x, 0) * 1px)
      calc(var(--y, 0) * 1px),
      hsl(220 100% 100% / 1),
      transparent 100%
    );
  }
`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <button
        ref={buttonRef}
        data-glow
        style={getInlineStyles()}
        onClick={onClick}
        className={`rounded-lg relative shadow-[0_1rem_2rem_-1rem_black] backdrop-blur-[5px] px-6 py-3 text-lg font-medium text-white cursor-pointer ${className}`}
      >
        <div ref={innerRef} data-glow></div>
        {children}
      </button>
    </>
  );
};

export { GlowButton };
