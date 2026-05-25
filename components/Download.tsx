"use client";
import { FadeUp } from "./ui/motion-wrappers";
import { SpotlightCard } from "./ui/spotlight-card";

export default function Download() {
  return (
    <section className="py-20 px-4 sm:px-6 relative bg-bg-deep" id="download">
      <div className="max-w-[1080px] mx-auto">
        <FadeUp>
          <div className="section-tag">Download</div>
          <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-4 text-txt">
            Tải về &amp; Cài đặt
          </h2>
          <p className="text-[1.05rem] text-txt-dim max-w-[640px] leading-relaxed mb-10">
            Tải trực tiếp bộ cài đặt ứng dụng máy tính hoặc tự tay biên dịch phiên bản CLI engine từ mã nguồn.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard glowColor="rgba(34, 197, 94, 0.15)" className="flex flex-col justify-between h-full">
              <div>
                <div className="font-mono text-[1.1rem] font-bold mb-3.5 text-accent uppercase tracking-wider">
                  Desktop App (Recommended)
                </div>
                <div className="text-[0.92rem] text-txt-dim leading-relaxed mb-6">
                  Giao diện đồ họa tương tác cao, quản lý các dự án phân tích bằng Dashboard thông minh, vẽ biểu đồ phân phối trực quan và xuất báo cáo PDF/Markdown tức thì chỉ với một cú nhấp chuột.
                </div>
              </div>
              <div>
                <a 
                  href="https://github.com/ThanhNguyn/Codebase-Analyzer/releases/latest" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 font-mono text-[0.85rem] font-bold px-6 py-3 rounded-lg cursor-pointer transition-all duration-[250ms] bg-accent text-bg-deep border border-accent hover:bg-transparent hover:text-accent hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                >
                  Download Latest Release
                </a>
              </div>
            </SpotlightCard>

            <SpotlightCard glowColor="rgba(34, 211, 238, 0.12)" className="h-full">
              <div className="font-mono text-[1.1rem] font-bold mb-3.5 text-neon-cyan uppercase tracking-wider">
                CLI Mode (Build from Source)
              </div>
              <div className="code-window">
                <div className="code-bar">
                  <span className="font-mono text-[0.7rem] text-txt-muted tracking-wide">Developer Terminal</span>
                </div>
                <pre className="p-4 overflow-x-auto font-mono text-[0.8rem] leading-[1.8] text-txt-dim select-all">
{`git clone https://github.com/ThanhNguyn/Codebase-Analyzer.git
cd Codebase-Analyzer
cmake -S . -B build
cmake --build build
./build/codebase-analyzer ./your-project`}
                </pre>
              </div>
            </SpotlightCard>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
