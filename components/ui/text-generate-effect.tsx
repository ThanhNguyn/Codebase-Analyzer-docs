"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function TextGenerateEffect({ words, className }: { words: string; className?: string }) {
  const [mounted, setMounted] = useState(false);
  const wordArray = words.split(" ");

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <span className={className}>{words}</span>;

  return (
    <span className={cn("inline", className)}>
      {wordArray.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.4, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
