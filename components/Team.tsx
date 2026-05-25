"use client";
import { FadeUp } from "./ui/motion-wrappers";
import { SpotlightCard } from "./ui/spotlight-card";

const members = [
  { role: "Leader", name: "Nguyễn Tuấn Thành", id: "25112107", color: "text-accent", glow: "rgba(34, 197, 94, 0.15)" },
  { role: "Member", name: "Đoàn Ngọc Bích", id: "25112138", color: "text-neon-blue", glow: "rgba(59, 130, 246, 0.15)" },
  { role: "Member", name: "Nguyễn Đăng Khoa", id: "25112163", color: "text-neon-purple", glow: "rgba(167, 139, 250, 0.15)" },
];

export default function Team() {
  return (
    <section className="py-24 px-4 sm:px-6 relative bg-bg-deep overflow-hidden" id="author">
      {/* Background soft glow behind team */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(34,197,94,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1080px] mx-auto text-center relative z-10">
        <FadeUp>
          <div className="section-tag justify-center">Team</div>
          <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-3 text-txt">
            404 Team Not Found
          </h2>
          <p className="text-txt-dim text-[0.92rem] mb-12 uppercase tracking-widest font-mono">
            Bài tập lớn Lập Trình Hướng Đối Tượng (OOP)
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[800px] mx-auto">
            {members.map((m, idx) => (
              <SpotlightCard key={idx} glowColor={m.glow} className="text-center bg-bg-surface/30">
                <div className={`${m.color} font-mono text-[0.72rem] font-bold tracking-wider uppercase mb-4 flex items-center justify-center gap-1.5`}>
                  {m.role === "Leader" && (
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M2.5 7.5l4 8.5h11l4-8.5-4.5 4-5-6-5 6z"/>
                      <rect x="5" y="17" width="14" height="2" rx="1"/>
                    </svg>
                  )}
                  {m.role}
                </div>
                <h3 className="font-sans font-bold text-[1.1rem] text-txt mb-1">{m.name}</h3>
                <p className="font-mono text-txt-muted text-[0.82rem]">{m.id}</p>
              </SpotlightCard>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
