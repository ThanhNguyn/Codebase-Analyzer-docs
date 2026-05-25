export default function Footer() {
  return (
    <footer className="border-t border-border-default py-10 px-4 sm:px-6 text-center relative z-[1]">
      <div className="max-w-[1080px] mx-auto">
        <p className="font-mono text-[0.8rem] text-txt-muted">Codebase Analyzer — OOP Project Documentation</p>
        <div className="flex justify-center gap-5 mt-3">
          <a href="https://github.com/ThanhNguyn/Codebase-Analyzer" target="_blank" className="font-mono text-[0.78rem] text-txt-dim hover:text-accent transition-colors duration-200 cursor-pointer">GitHub</a>
          <a href="https://github.com/ThanhNguyn/Codebase-Analyzer/releases" target="_blank" className="font-mono text-[0.78rem] text-txt-dim hover:text-accent transition-colors duration-200 cursor-pointer">Releases</a>
          <a href="https://thanhnguyn.github.io/Codebase-Analyzer-docs/" className="font-mono text-[0.78rem] text-txt-dim hover:text-accent transition-colors duration-200 cursor-pointer">Docs</a>
        </div>
      </div>
    </footer>
  );
}
