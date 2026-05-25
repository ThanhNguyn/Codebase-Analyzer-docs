"use client";
import { FadeUp } from "./ui/motion-wrappers";
import { motion } from "framer-motion";

const steps = ["Input Path", "Directory\nScanner", "Filter &\nIgnore", "Create\nAnalyzer", "analyze()", "Aggregate\nStats", "Report\nOutput"];

export default function Pipeline() {
  return (
    <section className="py-16 px-4 sm:px-6" id="pipeline">
      <div className="max-w-[1080px] mx-auto">
        <FadeUp>
          <div className="section-tag">Pipeline</div>
          <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-4 text-txt">Analysis Pipeline</h2>
          <p className="text-[1.05rem] text-txt-dim max-w-[640px] leading-relaxed">Quy trình phân tích từ input path đến report output.</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="flex items-center gap-0 overflow-x-auto py-6 mt-6">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center">
                <motion.div
                  className="flex flex-col items-center gap-2 min-w-[120px] px-4 cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="pipeline-icon"><svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg></div>
                  <div className="font-mono text-[0.75rem] text-txt-dim text-center whitespace-pre-line">{s}</div>
                </motion.div>
                {i < steps.length - 1 && <div className="text-border-lit text-[1.2rem] shrink-0 -mx-1 pb-6">→</div>}
              </div>
            ))}
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <div className="code-window mt-8">
            <div className="code-bar"><span className="font-mono text-[0.75rem] text-txt-muted">main.cpp — Entry Point</span></div>
            <pre className="p-5 overflow-x-auto font-mono text-[0.82rem] leading-[1.8] text-txt-dim">
{`cba::DirectoryScanner scanner(targetDir);
scanner.scanDirectory();    // Quét đệ quy
scanner.runAnalysis();     // Gọi analyze() cho mỗi file

cba::ReportGenerator reportGen(scanner);
reportGen.printConsoleReport();
reportGen.generateMarkdownReport("codebase_report.md");`}
            </pre>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
