"use client";
import { FadeUp } from "./ui/motion-wrappers";

export default function UseCases() {
  return (
    <>
      <section className="py-16 px-4 sm:px-6" id="usecase">
        <div className="max-w-[1080px] mx-auto">
          <FadeUp>
            <div className="section-tag">Use Cases</div>
            <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-4 text-txt">Use Case Diagram</h2>
            <p className="text-[1.05rem] text-txt-dim max-w-[640px] leading-relaxed">Sơ đồ Use Case mô tả các tương tác chính giữa người dùng và hệ thống.</p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <div className="flex justify-center mt-8">
              <div className="code-window max-w-[600px] w-full">
                <div className="code-bar"><span className="font-mono text-[0.75rem] text-txt-muted">UML — Use Case Diagram</span></div>
                <div className="p-4 flex justify-center bg-bg-deep">
                  <img src="/Codebase-Analyzer-docs/images/usecase-diagram.png" alt="Use Case Diagram" className="max-w-full h-auto rounded" loading="lazy" />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
      <section className="py-16 px-4 sm:px-6" id="usecases-detail">
        <div className="max-w-[1080px] mx-auto">
          <FadeUp>
            <div className="section-tag">Feature Matrix</div>
            <h2 className="font-mono text-[clamp(1.6rem,4vw,2.4rem)] font-bold leading-tight mb-4 text-txt">Use Cases Detail</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="table-wrap mt-6">
              <table>
                <thead><tr><th>Mã</th><th>Tên Use Case</th><th>Mô tả chức năng</th></tr></thead>
                <tbody>
                  <tr><td className="font-mono text-[0.82rem] text-accent">UC-01</td><td className="font-semibold">Chọn thư mục &amp; Bộ lọc</td><td className="text-txt-dim text-[0.88rem]">Người dùng chọn thư mục source code bằng Desktop UI hoặc truyền đường dẫn qua CLI. Hệ thống chỉ bắt đầu phân tích khi có đường dẫn hợp lệ và tự động kích hoạt bộ lọc file/folder nhiễu.</td></tr>
                  <tr><td className="font-mono text-[0.82rem] text-accent">UC-02</td><td className="font-semibold">Quét đệ quy cây thư mục</td><td className="text-txt-dim text-[0.88rem]">Hệ thống tự động càn quét toàn bộ cấu trúc cây thư mục con, thu thập các tệp tin hợp lệ và khởi tạo các đối tượng phân tích đa hình tương ứng.</td></tr>
                  <tr><td className="font-mono text-[0.82rem] text-accent">UC-03</td><td className="font-semibold">Phân tích nội dung mã nguồn</td><td className="text-txt-dim text-[0.88rem]">Đọc từng dòng tệp tin, áp dụng thuật toán loại bỏ khoảng trắng thừa để bóc tách chính xác các dòng trống, dòng comment của từng ngôn ngữ cụ thể.</td></tr>
                  <tr><td className="font-mono text-[0.82rem] text-accent">UC-04</td><td className="font-semibold">Tổng hợp và xuất báo cáo</td><td className="text-txt-dim text-[0.88rem]">Module báo cáo tổng hợp toàn bộ số liệu, hiển thị kết quả trong Desktop UI hoặc Console, đồng thời ghi dữ liệu vào tệp Markdown <code className="text-accent">codebase_report.md</code>.</td></tr>
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
