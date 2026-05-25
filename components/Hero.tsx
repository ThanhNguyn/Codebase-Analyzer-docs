"use client";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./ui/background-beams";
import { Spotlight } from "./ui/spotlight";

const tags = [
  { label: "C++23 Core Engine" },
  { label: "Electron Native UI" },
  { label: "React & TypeScript" },
  { label: "Tailwind CSS Styling" },
];

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center pt-28 pb-16 px-4 sm:px-6 relative overflow-hidden bg-bg-deep">
      {/* Dynamic Cone Spotlight from top-left */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(34, 255, 94, 0.12)" />
      
      <BackgroundBeams />

      {/* Mask layer to blend grid and spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_20%,#060a10_80%)] pointer-events-none" />

      <div className="max-w-[1080px] mx-auto w-full relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Hero text */}
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 font-mono text-[0.75rem] text-accent mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              v1.0.0 — Official Release
            </motion.div>

            <h1 className="font-sans text-[clamp(2.2rem,5vw,3.8rem)] font-extrabold leading-[1.1] tracking-tight mb-6">
              <span className="block text-txt">Phân tích Source Code</span>
              <span className="block bg-gradient-to-r from-accent via-neon-cyan to-neon-blue bg-clip-text text-transparent">
                Chuẩn chỉ &amp; Tốc độ
              </span>
            </h1>

            <p className="text-[1.05rem] text-txt-dim leading-relaxed max-w-[500px] mb-8">
              Codebase Analyzer cung cấp giải pháp bóc tách chỉ số mã nguồn cục bộ tối ưu vượt trội. Tích hợp động cơ C++23 đa luồng cùng giao diện Desktop sang trọng, mượt mà.
            </p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }} 
              className="flex gap-4 flex-wrap"
            >
              <a 
                className="inline-flex items-center gap-2 font-mono text-[0.85rem] font-semibold px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 bg-accent text-bg-deep border border-accent hover:bg-transparent hover:text-accent hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]" 
                href="https://github.com/ThanhNguyn/Codebase-Analyzer" 
                target="_blank"
              >
                Get Started GitHub
              </a>
              <a 
                className="inline-flex items-center gap-2 font-mono text-[0.85rem] font-semibold px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 bg-transparent text-txt border border-border-default hover:border-txt-dim hover:bg-white/5" 
                href="#overview"
              >
                Xem tài liệu ↓
              </a>
            </motion.div>
          </div>

          {/* Interactive Terminal Window */}
          <div className="flex-1 w-full max-w-[540px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-surface/90 backdrop-blur-md border border-border-default rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(34,197,94,0.03)] hover:border-accent/30 transition-colors duration-500"
            >
              {/* Windows control bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-bg-raised border-b border-border-default">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-neon-red/80 hover:bg-neon-red transition-colors" />
                  <span className="w-3 h-3 rounded-full bg-neon-amber/80 hover:bg-neon-amber transition-colors" />
                  <span className="w-3 h-3 rounded-full bg-accent/80 hover:bg-accent transition-colors" />
                </div>
                <span className="font-mono text-[0.7rem] text-txt-dim tracking-wide select-none">bash — cba@engine</span>
                <div className="w-12" />
              </div>

              {/* Terminal content - Default state in English for high-end professionalism */}
              <div className="p-6 sm:p-8 font-mono text-[0.85rem] leading-8 text-txt-dim">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-accent">$</span>
                  <span className="text-neon-cyan font-medium">./codebase-analyzer</span>
                  <span className="text-txt-muted">--path=[pending]</span>
                </div>
                
                <div className="text-txt-muted italic mb-4"># Waiting for target directory path...</div>

                <div className="space-y-1.5 border-l-2 border-border-default pl-3 py-1 text-txt-muted">
                  <div>Scanned directory tree: <span className="text-txt-muted">0 files</span></div>
                  <div>Filter status: <span className="text-txt-muted">Idle</span></div>
                  <div>Detected languages: <span className="text-txt-muted">None</span></div>
                </div>

                <div className="mt-4 pt-3 border-t border-border-default/50 space-y-1 text-[0.82rem] text-txt-muted">
                  <div className="flex justify-between">
                    <span>Lines of Code (LoC):</span>
                    <span>0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comments Count:</span>
                    <span>0 (0.0%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Blank Lines:</span>
                    <span>0</span>
                  </div>
                </div>

                <div className="mt-4 text-txt-muted flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-txt-muted animate-pulse" />
                  Ready to analyze codebase...
                </div>

                <div className="mt-3 flex items-center gap-1">
                  <span className="text-accent">$</span>
                  <span className="animate-blink text-accent text-[1.1rem]">▌</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Tags footer */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.8 }} 
          className="flex flex-wrap justify-center lg:justify-start gap-3 mt-16 border-t border-border-default/30 pt-8"
        >
          {tags.map((t, idx) => (
            <span 
              key={idx} 
              className="inline-flex items-center gap-1.5 font-mono text-[0.78rem] px-4 py-2 rounded-full bg-bg-surface/50 border border-border-default text-txt-dim transition-all duration-300 hover:border-accent/40 hover:text-txt cursor-default"
            >
              {t.label}
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
