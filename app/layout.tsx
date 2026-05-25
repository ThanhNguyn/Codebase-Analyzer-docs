import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Codebase Analyzer — Tài liệu OOP',
  description: 'Tài liệu kỹ thuật dự án Codebase Analyzer — BTL Lập Trình Hướng Đối Tượng',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2322c55e' stroke-width='2'><polyline points='16 18 22 12 16 6'/><polyline points='8 6 2 12 8 18'/></svg>",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  )
}
