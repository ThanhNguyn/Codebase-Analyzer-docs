"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BackgroundBeams({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const beams = Array.from({ length: 6 }, (_, i) => ({
    left: `${10 + i * 16}%`,
    delay: i * 0.8,
    duration: 6 + i * 2,
    height: `${60 + i * 8}%`,
  }));

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className || ""}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Radial glow */}
        <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(ellipse,rgba(34,197,94,0.1)_0%,rgba(59,130,246,0.04)_40%,transparent_70%)]" />
        {/* Beam lines */}
        {beams.map((beam, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-px"
            style={{ left: beam.left, height: beam.height }}
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: [0.05, 0.2, 0.05], scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: beam.duration, delay: beam.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-full h-full bg-gradient-to-t from-accent/30 via-accent/10 to-transparent" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
