"use client";

import Link from "next/link";
import { AnimatedBackground } from "@/components/animated-background";
import { AnimatedCounter } from "@/components/animated-counter";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center grid-bg overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1
              className={`text-5xl md:text-7xl font-bold gradient-text transition-all duration-1000 py-2 leading-tight ${
                mounted ? "animate-slide-down" : "opacity-0"
              }`}
              style={{ backgroundSize: "200% 200%", animation: "gradient-shift 8s ease infinite" }}
            >
              Nâng Tầm Kiến Trúc 3D
            </h1>

            <div className={`transition-all duration-1000 delay-200 ${mounted ? "animate-fade-in" : "opacity-0"} space-y-2`}>
              <p className="text-base sm:text-lg md:text-2xl text-foreground/80">
                Khóa học 3ds Max & AutoCAD chuyên nghiệp
              </p>
              <p className="text-sm sm:text-base md:text-xl animate-shimmer bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" style={{ backgroundSize: "200% 100%" }}>
                Kho tài nguyên 3D phong phú · Miễn phí & Premium
              </p>
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 transition-all duration-1000 delay-500 ${mounted ? "animate-slide-up" : "opacity-0"}`}>
              <Link href="/courses" className="group px-8 py-4 bg-primary text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">Khám phá khóa học</span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 animate-glow-pulse"></div>
              </Link>
              <Link href="/models" className="group px-8 py-4 glassmorphism border-primary/50 font-semibold rounded-lg hover:border-primary transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10">Xem thư viện Models</span>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>

            <div className="pt-12 animate-bounce-slow">
              <div className="mx-auto w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-primary rounded-full animate-pulse-neon"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-accent/8 to-primary/8"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { end: 500, suffix: "+", label: "Models" },
              { end: 1200, suffix: "+", label: "Học viên" },
              { end: 50, suffix: "+", label: "Khóa học" },
              { end: 98, suffix: "%", label: "Hài lòng" },
            ].map((stat, index) => (
              <AnimateOnScroll key={index} delay={index * 100}>
                <div className="text-center glassmorphism rounded-lg p-6 hover:border-primary transition-all duration-300 group">
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Models Nổi Bật</h2>
            <p className="text-foreground/70">Tài nguyên 3D chất lượng cao cho mọi dự án</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80" },
              { id: 2, img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80" },
              { id: 3, img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80" },
              { id: 4, img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" },
            ].map((item, index) => (
              <AnimateOnScroll key={item.id} delay={index * 80}>
                <Link href={`/models/${item.id}`} className="group relative glassmorphism rounded-lg overflow-hidden hover:border-accent transition-all duration-500 cursor-pointer block">
                  <div className="relative aspect-[4/3] bg-surface overflow-hidden">
                    <img src={item.img} alt={`Modern Interior Scene ${item.id}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ backgroundSize: "200% 100%" }}></div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 animate-pulse-neon">
                    <span className="px-3 py-1 bg-accent text-black text-xs font-bold rounded-full shadow-neon-green-sm">FREE</span>
                  </div>
                  <div className="p-4 space-y-2 relative">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Modern Interior Scene {item.id}</h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <span>🎨 Vray</span>
                      <span>•</span>
                      <span>📦 150 MB</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center mt-12">
            <Link href="/models" className="group inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 relative overflow-hidden">
              <span className="relative z-10">Xem tất cả Models</span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="relative z-10 ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Portfolio Gallery Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0d1a2e] to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(0,212,255,0.08)_0%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <span className="text-primary text-sm font-bold uppercase tracking-wide">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Dự Án Nổi Bật</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">Những sản phẩm diễn họa 3D chất lượng cao từ đội ngũ và học viên</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" style={{ gridAutoRows: "220px" }}>
            {[
              { img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", rowSpan: 2, title: "Living Room Design" },
              { img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", rowSpan: 1, title: "Bedroom Interior" },
              { img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80", rowSpan: 1, title: "Kitchen Space" },
              { img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", rowSpan: 2, title: "Office Design" },
              { img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80", rowSpan: 1, title: "Dining Area" },
              { img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80", rowSpan: 1, title: "Bathroom Luxury" },
              { img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80", rowSpan: 2, title: "Modern Apartment" },
              { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", rowSpan: 1, title: "Minimalist Living" },
            ].map((item, index) => (
              <AnimateOnScroll
                key={index}
                delay={index * 60}
                direction="none"
                className="group relative glassmorphism rounded-xl overflow-hidden cursor-pointer border border-white/10 hover:border-primary/60 transition-all duration-500"
                style={{ gridRow: `span ${item.rowSpan}` }}
              >
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl ring-1 ring-primary/50 shadow-[inset_0_0_20px_rgba(0,212,255,0.1)]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full border border-primary/50">3ds Max</span>
                      <span className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded-full border border-accent/50">Vray</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-3 glassmorphism border-primary/50 font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-all group">
              <span>Xem thêm dự án</span>
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* Customer Showcase Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <AnimateOnScroll className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
              <span className="text-accent text-sm font-bold uppercase tracking-wide">Học viên</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Sản Phẩm Từ Học Viên</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">Những tác phẩm xuất sắc từ các khóa học tại Xoi Studio</p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Nguyễn Văn A", course: "Khóa học 3ds Max Pro", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80", avatar: "https://i.pravatar.cc/150?img=1", testimonial: "Khóa học rất bổ ích, giảng viên tận tâm. Sau 3 tháng tôi đã có thể làm được những dự án thực tế." },
              { name: "Trần Thị B", course: "AutoCAD Kiến Trúc", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80", avatar: "https://i.pravatar.cc/150?img=2", testimonial: "Nội dung chi tiết, dễ hiểu. Tôi đã chuyển nghề và có thu nhập ổn định nhờ kỹ năng học được." },
              { name: "Lê Minh C", course: "Vray Rendering Master", image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80", avatar: "https://i.pravatar.cc/150?img=3", testimonial: "Chất lượng render của tôi đã cải thiện rõ rệt. Giờ tôi tự tin nhận các dự án lớn." },
            ].map((item, index) => (
              <AnimateOnScroll key={index} delay={index * 120}>
                <div className="group glassmorphism rounded-xl overflow-hidden hover:border-accent transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4">
                      <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border-2 border-primary" />
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-sm text-accent">{item.course}</p>
                      </div>
                    </div>
                    <p className="text-foreground/80 text-sm leading-relaxed italic">"{item.testimonial}"</p>
                    <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-foreground/60">Học viên đã hoàn thành khóa học</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/40 to-background"></div>
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent/8 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <AnimateOnScroll direction="left" className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-primary text-sm font-semibold uppercase tracking-widest">Về chúng tôi</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Nơi đam mê<br />
                  <span className="gradient-text">3D trở thành</span><br />
                  sự nghiệp
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Xoi Studio là trung tâm đào tạo diễn họa 3D chuyên nghiệp, cung cấp khóa học{" "}
                  <span className="text-primary font-semibold">3ds Max</span> &{" "}
                  <span className="text-accent font-semibold">AutoCAD</span> từ cơ bản đến nâng cao — cùng kho tài nguyên models phong phú cho mọi dự án.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "🎓", title: "Đào tạo bài bản", desc: "Giáo trình chuẩn, cập nhật theo xu hướng ngành" },
                  { icon: "💼", title: "Thực chiến dự án thực tế", desc: "Học qua dự án thực, portfolio chuyên nghiệp" },
                  { icon: "🛋️", title: "Kho models 3D phong phú", desc: "500+ models nội thất chất lượng cao sẵn dùng" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-surface border border-white/10 group-hover:border-primary/50 flex items-center justify-center text-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-sm text-foreground/60 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative px-7 py-3.5 bg-accent text-black font-bold rounded-lg group-hover:scale-[1.02] transition-transform text-sm">
                    🎁 Ưu đãi 20 học viên đầu tiên
                  </div>
                </div>
                <a href="/courses" className="px-7 py-3.5 glassmorphism border-primary/40 hover:border-primary text-primary font-semibold rounded-lg transition-all duration-300 text-sm text-center">
                  Xem khóa học →
                </a>
              </div>
            </AnimateOnScroll>

            {/* Right */}
            <AnimateOnScroll direction="right" className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Models 3D", color: "primary", icon: "📦" },
                { value: "50+", label: "Khóa học", color: "accent", icon: "🎓" },
                { value: "1200+", label: "Học viên", color: "primary", icon: "👨‍🎨" },
                { value: "98%", label: "Hài lòng", color: "accent", icon: "⭐" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`glassmorphism rounded-2xl p-6 border ${item.color === "primary" ? "border-primary/20 hover:border-primary/50 hover:shadow-[0_0_25px_rgba(0,212,255,0.1)]" : "border-accent/20 hover:border-accent/50 hover:shadow-[0_0_25px_rgba(57,255,20,0.1)]"} transition-all duration-300 group cursor-default`}
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <div className={`text-3xl font-bold mb-1 ${item.color === "primary" ? "text-primary" : "text-accent"}`}>{item.value}</div>
                  <div className="text-sm text-foreground/60">{item.label}</div>
                </div>
              ))}
              <div className="col-span-2 glassmorphism rounded-2xl p-5 border border-white/10 hover:border-primary/30 transition-all duration-300 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-2xl flex-shrink-0">📍</div>
                <div>
                  <p className="text-sm font-semibold text-white">Học online & offline tại studio</p>
                  <p className="text-xs text-foreground/50 mt-0.5">Linh hoạt theo lịch của bạn · Hỗ trợ 1-1 với giảng viên</p>
                </div>
              </div>
            </AnimateOnScroll>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-[#050d1a] to-background"></div>
        <div className="absolute inset-0 grid-bg opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(0,212,255,0.10)_0%,rgba(57,255,20,0.04)_50%,transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-primary/8 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-accent/8 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" style={{ backgroundSize: "200% 100%", animation: "gradient-shift 5s ease infinite" }}>
              Sẵn sàng bắt đầu?
            </h2>

            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Tham gia cộng đồng những người đam mê 3D và nâng cao kỹ năng của bạn ngay hôm nay
            </p>

            <div className="pt-6">
              <div className="relative inline-block group cursor-pointer">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="relative px-12 py-4 bg-accent text-black text-lg font-bold rounded-xl hover:scale-105 transition-transform duration-300 overflow-hidden">
                  <span className="relative z-10">Tham gia ngay</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {mounted && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      {[
                        { top: "20%", left: "15%" },
                        { top: "60%", left: "85%" },
                        { top: "40%", left: "25%" },
                        { top: "80%", left: "70%" },
                        { top: "30%", left: "55%" },
                        { top: "70%", left: "40%" },
                      ].map((pos, i) => (
                        <div key={i} className="absolute w-1 h-1 bg-white rounded-full animate-ping" style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                    </div>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-center gap-6 pt-8 flex-wrap">
              {[
                { icon: "🎨", text: "3ds Max" },
                { icon: "📐", text: "AutoCAD" },
                { icon: "💎", text: "Vray" },
                { icon: "⚡", text: "Corona" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 px-6 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/8 transition-all duration-300 animate-float cursor-pointer group"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform inline-block">{item.icon}</span>
                  <span className="text-sm text-foreground/60 group-hover:text-primary transition-colors font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
}
