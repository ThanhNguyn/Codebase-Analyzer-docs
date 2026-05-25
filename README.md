# 📚 Codebase Analyzer — Interactive Documentation Portal

> Trang web tài liệu kỹ thuật tương tác đầy đủ cho dự án **Codebase Analyzer**
> Bài tập lớn môn Lập Trình Hướng Đối Tượng (OOP)

Cổng thông tin tài liệu được xây dựng bằng **Vite + TailwindCSS v4** với giao diện Terminal Dark Theme, hỗ trợ phân tích thiết kế OOP, cấu trúc Class Diagram và Use Case Diagram chuẩn hóa, trực quan hóa luồng xử lý mã nguồn.

---

## 👥 404 Team Not Found

| Họ và Tên | MSSV | Vai trò |
|---|---|---|
| **Nguyễn Tuấn Thành** | `25112107` | 👑 Trưởng nhóm |
| **Đoàn Ngọc Bích** | `25112138` | Thành viên |
| **Nguyễn Đăng Khoa** | `25112163` | Thành viên |

---

## 🛠️ Hướng dẫn Chạy Local

1. **Cài đặt các dependency:**
   ```bash
   npm install
   ```

2. **Chạy server dev (local):**
   ```bash
   npm run dev
   ```

3. **Build phiên bản Production:**
   ```bash
   npm run build
   ```

---

## 🚀 Cấu hình GitHub Pages

Dự án đã được cấu hình sẵn đường dẫn `base: '/Codebase-Analyzer-docs/'` trong `vite.config.js` để deploy lên GitHub Pages cực kỳ mượt mà.

### Các bước deploy:
1. Đảm bảo toàn bộ thay đổi đã được commit và push lên nhánh chính (`main`).
2. Build code static mới nhất:
   ```bash
   npm run build
   ```
3. Đẩy thư mục `dist` lên nhánh `gh-pages` của GitHub để kích hoạt Pages tự động. Bạn có thể sử dụng package `gh-pages` để deploy nhanh chỉ bằng 1 câu lệnh:
   ```bash
   npx gh-pages -d dist
   ```
4. Vào phần **Settings > Pages** trong repository GitHub và chuyển source sang nhánh `gh-pages` (nếu chưa chuyển).
