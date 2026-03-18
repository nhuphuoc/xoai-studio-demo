import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface/50 mt-20">
      {/* CTA Banner Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  <span className="text-primary">JOIN US</span>
                </h2>
                <p className="text-xl text-foreground/80 mb-2">
                  Cung cấp các khóa học diễn họa nội thất
                </p>
                <p className="text-lg text-accent font-semibold">
                  3ds Max • AutoCAD • Vray • Corona
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glassmorphism rounded-lg p-4 border-primary/20 hover:border-primary transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Học online hoặc offline</div>
                      <div className="text-sm text-foreground/60">Linh hoạt thời gian</div>
                    </div>
                  </div>
                </div>

                <div className="glassmorphism rounded-lg p-4 border-accent/20 hover:border-accent transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-accent">Nhận thiết kế nội thất</div>
                      <div className="text-sm text-foreground/60">Chuyên nghiệp, uy tín</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="glassmorphism rounded-xl p-8 border-primary/30">
              <h3 className="text-2xl font-bold text-primary mb-6">CONTACT NOW!</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Họ và tên</label>
                  <input
                    type="text"
                    placeholder="Nhập họ tên của bạn"
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                  <input
                    type="tel"
                    placeholder="0905.000.888"
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="xoistudio2020@gmail.com"
                    className="w-full px-4 py-3 bg-surface border border-white/10 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-black font-bold rounded-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/50"
                >
                  Gửi thông tin
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/xoi-studio-logo.png"
                alt="Xoi Studio"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Nền tảng học tập 3D và marketplace chuyên nghiệp.
              Nâng tầm kỹ năng diễn họa của bạn.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:0905000888" className="hover:text-primary transition-colors">
                  0905.000.888
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:xoistudio2020@gmail.com" className="hover:text-primary transition-colors">
                  xoistudio2020@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glassmorphism flex items-center justify-center hover:border-primary transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glassmorphism flex items-center justify-center hover:border-primary transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full glassmorphism flex items-center justify-center hover:border-primary transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Dịch vụ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Khóa học 3ds Max
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Khóa học AutoCAD
                </Link>
              </li>
              <li>
                <Link href="/models" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Thư viện 3D Models
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Thiết kế nội thất
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Hướng dẫn thanh toán
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Chính sách đổi trả
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Liên kết</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/my-assets" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Tài sản của tôi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-accent">▸</span>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © 2024 Xoi Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-foreground/60">
            <Link href="#" className="hover:text-primary transition-colors">
              Chính sách bảo mật
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Điều khoản dịch vụ
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
