"use client";
import { FadeUp } from "./ui/motion-wrappers";

const faMembers = [
  { vis: "protected", name: "filePath_ : filesystem::path" },
  { vis: "protected", name: "fileName_ : string" },
  { vis: "protected", name: "fileSize_ : uintmax_t" },
  { vis: "protected", name: "codeLines_ : size_t" },
  { vis: "protected", name: "commentLines_ : size_t" },
  { vis: "protected", name: "blankLines_ : size_t" },
];
const faMethods = [
  { vis: "public", name: 'analyze() : void «pure virtual»' },
  { vis: "public", name: 'languageName() : string «pure virtual»' },
  { vis: "public", name: 'language() : Language «pure virtual»' },
  { vis: "public", name: 'totalLines() : size_t' },
  { vis: "public", name: 'filePath() : const path&' },
  { vis: "public", name: 'fileName() : const string&' },
  { vis: "public", name: 'codeLines() : size_t [[nodiscard]]' },
  { vis: "public", name: 'commentLines() : size_t [[nodiscard]]' },
  { vis: "public", name: 'blankLines() : size_t [[nodiscard]]' },
  { vis: "private", name: 'isBlank(line) : bool «static»' },
  { vis: "private", name: 'trim(s) : void «static»' },
];
const children = ["CppAnalyzer","CAnalyzer","PythonAnalyzer","JavaAnalyzer","CSharpAnalyzer","JavaScriptAnalyzer","TypeScriptAnalyzer","WebAnalyzer","HtmlAnalyzer","CssAnalyzer"];
const dsMembers = [
  { vis:"private", name:"rootPath_ : filesystem::path" }, { vis:"private", name:"files_ : vector<unique_ptr<FileAnalyzer>>" },
  { vis:"private", name:"ignoredDirectories_ : size_t" }, { vis:"private", name:"ignoredFiles_ : size_t" },
  { vis:"private", name:"unsupportedFiles_ : size_t" }, { vis:"private", name:"defaultIgnoreRules_ : vector<string>" },
  { vis:"private", name:"gitignoreRules_ : vector<string>" }, { vis:"private", name:"appliedIgnoreRules_ : vector<string>" },
];
const dsMethods = [
  { vis:"public", name:"scanDirectory() : void" }, { vis:"public", name:"runAnalysis() : void" },
  { vis:"public", name:"getFiles() : const vector&" }, { vis:"public", name:"getRootPath() : const path&" },
  { vis:"public", name:"ignoredDirectoriesCount() : size_t" }, { vis:"public", name:"ignoredFilesCount() : size_t" },
  { vis:"public", name:"unsupportedFilesCount() : size_t" }, { vis:"public", name:"gitignoreRules() : const vector&" },
  { vis:"public", name:"appliedIgnoreRules() : const vector&" }, { vis:"private", name:"loadIgnoreRules() : void" },
  { vis:"private", name:"shouldIgnore(path, isDir) : bool" }, { vis:"private", name:"createAnalyzer(path) : unique_ptr" },
];

function ClassBox({ title, abstract, members, methods }: { title: string; abstract?: boolean; members: {vis:string;name:string}[]; methods: {vis:string;name:string}[] }) {
  return (
    <div className="class-box w-full">
      <div className={`class-box-header ${abstract ? "abstract" : ""}`}>{abstract ? "«abstract» " : ""}{title}</div>
      <div className="class-box-body">{members.map((m,i)=><div key={i} className={`member ${m.vis}`}>{m.name}</div>)}</div>
      <hr className="border-t border-border-default m-0" />
      <div className="class-box-body">{methods.map((m,i)=><div key={i} className={`member ${m.vis}`}>{m.name}</div>)}</div>
    </div>
  );
}

export default function ClassDiagram() {
  return (
    <section className="py-16 px-4 sm:px-6" id="classes">
      <div className="max-w-[1080px] mx-auto">
        <FadeUp>
          <div className="section-tag">Class Diagram</div>
          <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-4 text-txt">Class Diagram</h2>
          <p className="text-[1.05rem] text-txt-dim max-w-[640px] leading-relaxed">Cấu trúc class chính trong namespace <code className="text-accent">cba</code> — trích từ source code thực tế.</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="flex justify-center mt-8">
            <div className="code-window max-w-[720px] w-full">
              <div className="code-bar"><span className="font-mono text-[0.75rem] text-txt-muted">UML — Class Diagram</span></div>
              <div className="p-4 flex justify-center bg-bg-deep">
                <img src="/Codebase-Analyzer-docs/images/class-diagram.png" alt="UML Class Diagram" className="max-w-full h-auto rounded" loading="lazy" />
              </div>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h3 className="font-mono text-[1.1rem] font-semibold mt-12 mb-2 text-txt">Interactive Detail View</h3>
          <p className="text-[0.92rem] text-txt-muted mb-6">Chi tiết members và methods của từng class — hover để highlight.</p>
          <div className="flex flex-col items-center gap-4">
            <div className="min-w-[320px] max-w-[500px] w-full"><ClassBox title="FileAnalyzer" abstract members={faMembers} methods={faMethods} /></div>
            <div className="flex flex-wrap gap-3 justify-center">
              {children.map(c => <div key={c} className="child-node">{c}</div>)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            <ClassBox title="DirectoryScanner" members={dsMembers} methods={dsMethods} />
            <ClassBox title="ReportGenerator" members={[{vis:"private",name:"scanner_ : const DirectoryScanner&"}]} methods={[{vis:"public",name:"printConsoleReport() : void"},{vis:"public",name:"generateMarkdownReport(path) : void"}]} />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
