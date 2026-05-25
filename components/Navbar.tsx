"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#architecture", label: "Architecture" },
  { href: "#oop", label: "OOP" },
  { href: "#classes", label: "Classes" },
  { href: "#languages", label: "Languages" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#tech", label: "Tech" },
  { href: "#download", label: "Download" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-bg-deep/82 backdrop-blur-xl border-b border-border-default h-14 transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_30px_rgba(0,0,0,0.4)]" : ""}`}>
        <div className="max-w-[1280px] mx-auto h-full flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5 font-mono font-semibold text-[0.95rem] text-txt cursor-pointer">
            <span className="text-accent">~/</span>codebase-analyzer<span className="text-txt-dim font-normal">/docs</span>
          </div>
          <ul className="hidden md:flex gap-1 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-mono text-[0.78rem] text-txt-dim px-3 py-1.5 rounded-md transition-all duration-200 hover:text-accent hover:bg-accent/[0.08] tracking-wide cursor-pointer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="md:hidden bg-transparent border-none cursor-pointer w-8 h-8 relative" aria-label="Menu" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className={`block w-5 h-0.5 bg-txt-dim absolute left-1.5 transition-all duration-300 ${mobileOpen ? "rotate-45 top-[15px]" : "top-[9px]"}`} />
            <span className={`block w-5 h-0.5 bg-txt-dim absolute left-1.5 top-[15px] transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-txt-dim absolute left-1.5 transition-all duration-300 ${mobileOpen ? "-rotate-45 top-[15px]" : "top-[21px]"}`} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden fixed top-14 left-0 right-0 bg-bg-deep/96 backdrop-blur-xl border-b border-border-default px-6 py-4 z-40"
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2.5 font-mono text-[0.85rem] text-txt-dim border-b border-border-default hover:text-accent transition-colors duration-200 cursor-pointer">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
