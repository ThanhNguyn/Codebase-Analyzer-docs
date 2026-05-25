"use client";
import { FadeUp } from "./ui/motion-wrappers";

const langs = [
  { name: "C++", color: "#3b82f6", ext: ".cpp, .hpp, .cxx, .cc, .hxx, .hh", cls: "CppAnalyzer" },
  { name: "C", color: "#6366f1", ext: ".c, .h", cls: "CAnalyzer" },
  { name: "Python", color: "#eab308", ext: ".py", cls: "PythonAnalyzer" },
  { name: "Java", color: "#ef4444", ext: ".java", cls: "JavaAnalyzer" },
  { name: "C#", color: "#a78bfa", ext: ".cs", cls: "CSharpAnalyzer" },
  { name: "JavaScript", color: "#f59e0b", ext: ".js, .jsx, .mjs, .cjs", cls: "JavaScriptAnalyzer" },
  { name: "TypeScript", color: "#22d3ee", ext: ".ts, .tsx, .mts, .cts", cls: "TypeScriptAnalyzer" },
  { name: "HTML", color: "#f97316", ext: ".html, .htm", cls: "HtmlAnalyzer" },
  { name: "CSS", color: "#ec4899", ext: ".css", cls: "CssAnalyzer" },
];

export default function Languages() {
  return (
    <section className="py-16 px-4 sm:px-6" id="languages">
      <div className="max-w-[1080px] mx-auto">
        <FadeUp>
          <div className="section-tag">Languages</div>
          <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-4 text-txt">Supported Languages</h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="table-wrap mt-6">
            <table>
              <thead><tr><th>Ngôn ngữ</th><th>Extensions</th><th>Analyzer Class</th></tr></thead>
              <tbody>
                {langs.map((l) => (
                  <tr key={l.name}>
                    <td><span className="lang-dot" style={{ background: l.color }} />{l.name}</td>
                    <td className="font-mono text-[0.82rem]">{l.ext}</td>
                    <td className="font-mono text-[0.82rem]">{l.cls}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
