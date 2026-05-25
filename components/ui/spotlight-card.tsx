"use client";
import React, { useState, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function SpotlightCard({
  children,
  className,
  glowColor = "rgba(34, 197, 94, 0.15)",
  ...props
}: SpotlightCardProps) {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse movements
  const springConfig = { damping: 25, stiffness: 250 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border-default bg-gradient-to-b from-bg-surface to-bg-surface/60 p-6 transition-all duration-300 hover:border-border-lit hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] group",
        className
      )}
      {...props}
    >
      {/* Glow effect tracking the mouse */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${smoothX}px ${smoothY}px, ${glowColor}, transparent 80%)`,
        }}
      />

      {/* Subtle border highlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-accent/30"
        style={{
          maskImage: `radial-gradient(120px circle at ${smoothX}px ${smoothY}px, white, transparent)`,
          WebkitMaskImage: `radial-gradient(120px circle at ${smoothX}px ${smoothY}px, white, transparent)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
