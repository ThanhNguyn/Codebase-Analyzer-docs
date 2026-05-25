"use client";
import { FadeUp, StaggerContainer, StaggerItem } from "./ui/motion-wrappers";
import { SpotlightCard } from "./ui/spotlight-card";

const techs = [
  { name: "C++23 Standard", color: "text-neon-blue", glow: "rgba(59, 130, 246, 0.12)", desc: "Sử dụng tính năng hiện đại như std::filesystem, std::unique_ptr, các container chuẩn tối ưu hóa cao." },
  { name: "CMake 3.20+", color: "text-neon-cyan", glow: "rgba(34, 211, 238, 0.12)", desc: "Hệ thống quản lý biên dịch liên nền tảng mạnh mẽ, tự động hóa toàn diện quy trình kiểm thử và đóng gói." },
  { name: "Electron Shell", color: "text-neon-purple", glow: "rgba(167, 139, 250, 0.12)", desc: "Tạo shell app máy tính hiệu năng cao, tích hợp IPC giao tiếp trực tiếp với động cơ C++ nguyên bản." },
  { name: "React + TS", color: "text-accent", glow: "rgba(34, 197, 94, 0.12)", desc: "Giao diện người dùng hướng thành phần modular hóa cao độ, đảm bảo an toàn kiểu dữ liệu tuyệt đối." },
  { name: "Vite Bundler", color: "text-neon-amber", glow: "rgba(245, 158, 11, 0.12)", desc: "Môi trường phát triển cực nhanh với Hot Module Replacement, biên dịch code Front-End tức thì." },
  { name: "GitHub Workflows", color: "text-neon-red", glow: "rgba(239, 68, 68, 0.12)", desc: "Tích hợp tích hợp liên tục CI/CD, tự động xây dựng bản cài đặt nhị phân cho Windows, macOS và Linux." },
];

const libs = [
  { name: "<filesystem>", color: "text-accent", glow: "rgba(34, 197, 94, 0.1)", desc: "Duyệt đệ quy cây thư mục cực kỳ an toàn, tối ưu hóa I/O cấp hệ thống cho hiệu suất vượt trội." },
  { name: "<memory>", color: "text-neon-cyan", glow: "rgba(34, 211, 238, 0.1)", desc: "Quản lý tài nguyên bộ nhớ tự động bằng con trỏ thông minh độc quyền, triệt tiêu rủi ro rò rỉ bộ nhớ." },
  { name: "<string> & <algorithm>", color: "text-neon-amber", glow: "rgba(245, 158, 11, 0.1)", desc: "Thuật toán xử lý chuỗi tối ưu hóa cao, bỏ qua các khoảng trắng và ký tự trống bằng Iterator hiệu năng cao." },
];

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 relative bg-bg-deep" id="tech">
      <div className="max-w-[1080px] mx-auto">
        <FadeUp>
          <div className="section-tag">Tech Stack</div>
          <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-4 text-txt">
            Công nghệ sử dụng
          </h2>
          <p className="text-[1.05rem] text-txt-dim max-w-[640px] leading-relaxed mb-10">
            Sự kết hợp hoàn hảo giữa hiệu năng xử lý gốc của C++ và trải nghiệm mượt mà của công nghệ web hiện đại.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((t, idx) => (
            <StaggerItem key={idx}>
              <SpotlightCard glowColor={t.glow} className="h-full">
                <div className={`font-mono text-[1.05rem] font-bold mb-3 ${t.color}`}>{t.name}</div>
                <div className="text-[0.88rem] text-txt-dim leading-relaxed">{t.desc}</div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3}>
          <div className="mt-16 pt-8 border-t border-border-default/30">
            <h3 className="font-mono text-[1.15rem] font-bold mb-3 text-txt">Core Libraries</h3>
            <p className="text-[0.92rem] text-txt-dim mb-8">
              Các thư viện chuẩn của ngôn ngữ C++ được khai thác sâu để xây dựng lõi phân tích mã nguồn.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {libs.map((l, idx) => (
                <SpotlightCard key={idx} glowColor={l.glow} className="bg-bg-surface/50 border border-border-default">
                  <div className={`font-mono text-[0.95rem] font-bold mb-3.5 ${l.color}`}>{l.name}</div>
                  <div className="text-[0.85rem] text-txt-dim leading-relaxed">{l.desc}</div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
