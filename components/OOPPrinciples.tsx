"use client";
import { FadeUp, StaggerContainer, StaggerItem } from "./ui/motion-wrappers";

const principles = [
  { name: "Abstraction", color: "text-accent", desc: "FileAnalyzer định nghĩa interface chung cho tất cả analyzer. Các phương thức analyze(), languageName(), language() là pure virtual.", code: "virtual void analyze() = 0;" },
  { name: "Inheritance", color: "text-neon-blue", desc: "Các analyzer cụ thể (CppAnalyzer, PythonAnalyzer, ...) kế thừa từ FileAnalyzer, tái sử dụng logic chung và mở rộng riêng.", code: "class CppAnalyzer : public FileAnalyzer { ... };" },
  { name: "Polymorphism", color: "text-neon-purple", desc: "analyze() được gọi thông qua con trỏ base class (unique_ptr<FileAnalyzer>), runtime quyết định hàm nào được thực thi.", code: "vector<unique_ptr<FileAnalyzer>> files;" },
  { name: "Encapsulation", color: "text-neon-amber", desc: "Dữ liệu (codeLines_, commentLines_, blankLines_) là protected. Truy cập qua getter với [[nodiscard]] attribute.", code: "[[nodiscard]] std::size_t codeLines() const noexcept;" },
];

export default function OOPPrinciples() {
  return (
    <section className="py-16 px-4 sm:px-6" id="oop">
      <div className="max-w-[1080px] mx-auto">
        <FadeUp>
          <div className="section-tag">OOP Design</div>
          <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-4 text-txt">OOP Principles</h2>
          <p className="text-[1.05rem] text-txt-dim max-w-[640px] leading-relaxed">Minh họa đầy đủ 4 nguyên lý cốt lõi của Object-Oriented Programming.</p>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {principles.map((p) => (
            <StaggerItem key={p.name}>
              <div className="principle">
                <div className={`font-mono font-semibold text-[0.95rem] mb-1.5 ${p.color}`}>{p.name}</div>
                <div className="text-[0.88rem] text-txt-dim">{p.desc}</div>
                <div className="mt-2.5 font-mono text-[0.78rem] text-txt-muted bg-bg-raised px-3 py-2 rounded">{p.code}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
