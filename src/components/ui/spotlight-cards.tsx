import React, { useEffect, useRef, ReactNode, useState } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
}

const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  width,
  height,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip pointer tracking on mobile
    if (isMobile) return;

    const syncPointer = (e: PointerEvent) => {
      const { clientX: x, clientY: y } = e;
      
      if (cardRef.current) {
        cardRef.current.style.setProperty('--card-x', x.toFixed(2));
        cardRef.current.style.setProperty('--card-xp', (x / window.innerWidth).toFixed(2));
        cardRef.current.style.setProperty('--card-y', y.toFixed(2));
        cardRef.current.style.setProperty('--card-yp', (y / window.innerHeight).toFixed(2));
      }
    };

    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, [isMobile]);

  const { base, spread } = {base: 240, spread: 200};

  const getInlineStyles = () => {
    const baseStyles = {
      "--card-base": base,
      "--card-spread": spread,
      "--card-radius": "14",
      "--card-border": "3",
      '--card-backdrop': 'hsl(210 100% 60% / 0.12)',
      "--card-backup-border": "var(--card-backdrop)",
      "--card-size": "200",
      "--card-outer": "1",
      "--card-border-size": "calc(var(--card-border, 2) * 1px)",
      "--card-spotlight-size": "calc(var(--card-size, 150) * 1px)",
      "--card-hue": base,
      backgroundColor: "var(--card-backdrop, transparent)",
      border: "var(--card-border-size) solid var(--card-backup-border)",
      position: "relative",
      touchAction: "none",
    } as React.CSSProperties;

    // Only add background effects on desktop
    if (!isMobile) {
      baseStyles.backgroundImage = `radial-gradient(
        var(--card-spotlight-size) var(--card-spotlight-size) at
        calc(var(--card-x, 0) * 1px)
        calc(var(--card-y, 0) * 1px),
        hsl(
        var(--card-hue, 210)
        calc(var(--saturation, 100) * 1%)
        calc(var(--lightness, 70) * 1%) /
        var(--bg-spot-opacity, 0.1)
        ),
        transparent
      )`;
      baseStyles.backgroundSize = "calc(100% + (2 * var(--card-border-size))) calc(100% + (2 * var(--card-border-size)))";
      baseStyles.backgroundPosition = "50% 50%";
      baseStyles.backgroundAttachment = "fixed";
    }

    // Add width and height if provided
    if (width !== undefined) {
      baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    }
    if (height !== undefined) {
      baseStyles.height = typeof height === 'number' ? `${height}px` : height;
    }

    return baseStyles;
  };

  const beforeAfterStyles = `
    /* Desktop styles */
    @media (min-width: 769px) {
      [data-glow-card]::before,
      [data-glow-card]::after {
        pointer-events: none;
        content: "";
        position: absolute;
        inset: calc(var(--card-border-size) * -1);
        border: var(--card-border-size) solid transparent;
        border-radius: calc(var(--card-radius) * 1px);
        background-attachment: fixed;
        background-size: calc(100% + (2 * var(--card-border-size))) calc(100% + (2 * var(--card-border-size)));
        background-repeat: no-repeat;
        background-position: 50% 50%;
        mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
      }
      
      [data-glow-card]::before {
        background-image: radial-gradient(
          calc(var(--card-spotlight-size) * 0.75) calc(var(--card-spotlight-size) * 0.75) at
          calc(var(--card-x, 0) * 1px)
          calc(var(--card-y, 0) * 1px),
          hsl(var(--card-hue, 210) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 50) * 1%) / var(--border-spot-opacity, 1)), transparent 100%
        );
        filter: brightness(2);
      }
      
      [data-glow-card]::after {
        background-image: radial-gradient(
          calc(var(--card-spotlight-size) * 0.5) calc(var(--card-spotlight-size) * 0.5) at
          calc(var(--card-x, 0) * 1px)
          calc(var(--card-y, 0) * 1px),
          hsl(220 100% 100% / var(--border-light-opacity, 1)), transparent 100%
        );
      }
      
      [data-glow-card] [data-glow-card-inner] {
        position: absolute;
        inset: 0;
        will-change: filter;
        opacity: var(--card-outer, 1);
        border-radius: calc(var(--card-radius) * 1px);
        border-width: calc(var(--card-border-size) * 20);
        filter: blur(calc(var(--card-border-size) * 10));
        background: none;
        pointer-events: none;
        border: none;
      }
      
      [data-glow-card] > [data-glow-card-inner]::before {
        inset: -10px;
        border-width: 10px;
      }
    }

    /* Mobile styles - Plain glass card */
    @media (max-width: 768px) {
      [data-glow-card]::before,
      [data-glow-card]::after {
        display: none;
      }
      
      [data-glow-card] [data-glow-card-inner] {
        display: none;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow-card
        style={getInlineStyles()}
        className={`
          rounded-2xl 
          relative 
          grid 
          grid-rows-[1fr_auto] 
          shadow-[0_1rem_2rem_-1rem_black] 
          backdrop-blur-[5px]
          ${className}
        `}
      >
        <div ref={innerRef} data-glow-card-inner></div>
        {children}
      </div>
    </>
  );
};

export { GlowCard }