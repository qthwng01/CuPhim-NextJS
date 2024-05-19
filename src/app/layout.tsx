import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'

import RecoilProvider from '@/stores/RecoilProvider'

import '@/styles/style.css'
import '@/styles/bootstrap.min.css'
import '@/styles/nice-select.css'
import '@/styles/slicknav.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cú Phim - Xem Phim HD Cả Đêm',
  description: 'Xem Phim Full HD, Phim Lẻ, Phim Bộ, Phim Gì Cũng Có Tại Cú Phim',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <RecoilProvider>
          <Header />
          <div className="main__layout">{children}</div>
          <Footer />
        </RecoilProvider>
      </body>
    </html>
  )
}
