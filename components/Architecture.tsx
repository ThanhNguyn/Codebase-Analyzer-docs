"use client";
import { FadeUp } from "./ui/motion-wrappers";

export default function Architecture() {
  return (
    <section className="py-16 px-4 sm:px-6" id="architecture">
      <div className="max-w-[1080px] mx-auto">
        <FadeUp>
          <div className="section-tag">Architecture</div>
          <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-4 text-txt">System Architecture</h2>
          <p className="text-[1.05rem] text-txt-dim max-w-[640px] leading-relaxed">Chia thành 2 layer chính: C++ CLI Core xử lý phân tích và Desktop UI hiển thị kết quả.</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <div className="card">
              <div className="font-mono text-[1rem] font-semibold mb-3 text-neon-cyan">C++ CLI Core</div>
              <div className="text-[0.9rem] text-txt-dim leading-relaxed space-y-3">
                <p><strong className="text-txt">DirectoryScanner</strong> — Quét đệ quy, lọc thư mục noise (.git, node_modules, build...), hỗ trợ .gitignore rules</p>
                <p><strong className="text-txt">FileAnalyzer (Abstract)</strong> — Base class với pure virtual analyze(), languageName(), language()</p>
                <p><strong className="text-txt">Language Analyzers</strong> — CppAnalyzer, CAnalyzer, PythonAnalyzer, JavaAnalyzer, CSharpAnalyzer, JavaScriptAnalyzer, TypeScriptAnalyzer, WebAnalyzer, HtmlAnalyzer, CssAnalyzer</p>
                <p><strong className="text-txt">ReportGenerator</strong> — Xuất console + Markdown report</p>
              </div>
            </div>
            <div className="card">
              <div className="font-mono text-[1rem] font-semibold mb-3 text-accent">Desktop UI</div>
              <div className="text-[0.9rem] text-txt-dim leading-relaxed space-y-3">
                <p><strong className="text-txt">Electron</strong> — Main process, window management, file system access</p>
                <p><strong className="text-txt">React + TypeScript</strong> — Frontend components, type safety</p>
                <p><strong className="text-txt">Vite</strong> — Build tool, Hot Module Replacement</p>
                <p><strong className="text-txt">Tailwind CSS</strong> — Styling framework</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
