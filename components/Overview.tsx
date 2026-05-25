"use client";
import { FadeUp, StaggerContainer, StaggerItem } from "./ui/motion-wrappers";
import { SpotlightCard } from "./ui/spotlight-card";

export default function Overview() {
  return (
    <section className="py-20 px-4 sm:px-6 relative bg-bg-deep" id="overview">
      <div className="max-w-[1080px] mx-auto">
        <FadeUp>
          <div className="section-tag">Overview</div>
          <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-4 text-txt">
            Mục tiêu &amp; Đối tượng sử dụng
          </h2>
          <p className="text-[1.05rem] text-txt-dim max-w-[640px] leading-relaxed mb-10">
            Tổng quan nhiệm vụ thiết kế công cụ đo lường và thống kê mã nguồn cục bộ, hỗ trợ hai phương thức tương tác chính.
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <SpotlightCard glowColor="rgba(34, 197, 94, 0.12)" className="border-l-[3px] border-l-accent">
              <div className="font-mono text-[0.88rem] font-bold mb-3 text-accent tracking-wider uppercase">Mục tiêu dự án</div>
              <p className="text-[0.92rem] text-txt-dim leading-relaxed">
                Xây dựng bộ công cụ Codebase Analyzer với cấu trúc hướng đối tượng chặt chẽ. Hỗ trợ song song cả hai giao diện: <strong className="text-txt">Desktop UI (Electron)</strong> hiện đại và <strong className="text-txt">CLI Mode</strong> tinh gọn. Quét đệ quy nhanh chóng, lọc chính xác các tệp tin, dòng trống và chú thích mã nguồn.
              </p>
            </SpotlightCard>
            
            <SpotlightCard glowColor="rgba(59, 130, 246, 0.12)" className="border-l-[3px] border-l-neon-blue">
              <div className="font-mono text-[0.88rem] font-bold mb-3 text-neon-blue tracking-wider uppercase">Đối tượng người dùng</div>
              <p className="text-[0.92rem] text-txt-dim leading-relaxed">
                Sinh viên chuyên ngành CNTT đang thực hiện đồ án, kỹ sư phần mềm chuyên nghiệp cần thống kê quy mô dự án trước khi refactor, hoặc quản lý dự án muốn đo lường năng suất lập trình thực tế một cách độc lập và bảo mật cục bộ.
              </p>
            </SpotlightCard>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Quét thư mục", desc: "Duyệt đệ quy thư mục cực nhanh, tự động phát hiện file mã nguồn hợp lệ, thông minh loại trừ thư mục nhiễu.", color: "bg-accent/10 text-accent", glow: "rgba(34, 197, 94, 0.15)" },
            { title: "Phân tích ngôn ngữ", desc: "Tự động nhận diện ngôn ngữ theo phần mở rộng mở rộng (extension), kích hoạt parser đa hình tương ứng.", color: "bg-neon-blue/10 text-neon-blue", glow: "rgba(59, 130, 246, 0.15)" },
            { title: "Đếm comment", desc: "Bóc tách chính xác chú thích dòng đơn và dòng khối (multi-line comments) theo cú pháp riêng biệt.", color: "bg-neon-purple/10 text-neon-purple", glow: "rgba(167, 139, 250, 0.15)" },
            { title: "Xuất báo cáo", desc: "Tự động tạo báo cáo chuyên nghiệp định dạng Markdown hỗ trợ biểu đồ và số liệu tổng quan dự án.", color: "bg-neon-amber/10 text-neon-amber", glow: "rgba(245, 158, 11, 0.15)" },
          ].map((f, idx) => (
            <StaggerItem key={idx}>
              <SpotlightCard glowColor={f.glow} className="h-full flex flex-col justify-between">
                <div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-5 ${f.color}`}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <div className="font-mono text-[0.95rem] font-bold mb-2.5 text-txt">{f.title}</div>
                  <div className="text-[0.88rem] text-txt-dim leading-relaxed">{f.desc}</div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
