"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function CardHoverEffect({ items, className }: { items: { title: string; description: string; icon?: React.ReactNode }[]; className?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group p-[28px] rounded-lg border border-border-default bg-gradient-to-br from-bg-surface to-bg-surface/80 cursor-default overflow-hidden"
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence>
            {hovered === idx && (
              <motion.span
                className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-neon-cyan/[0.04] to-transparent rounded-lg"
                layoutId="cardHover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
          {/* Top glow line */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered === idx ? 1 : 0 }}
            transition={{ duration: 0.25 }}
          />
          <div className="relative z-10">
            {item.icon && <div className="mb-4">{item.icon}</div>}
            <div className="font-mono text-[1rem] font-semibold mb-2">{item.title}</div>
            <div className="text-[0.9rem] text-txt-dim leading-relaxed">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
