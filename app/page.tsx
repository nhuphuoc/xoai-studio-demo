"use client";

import Link from "next/link";
import { AnimatedBackground } from "@/components/animated-background";
import { AnimatedCounter } from "@/components/animated-counter";
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
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Animated Title */}
            <h1
              className={`text-5xl md:text-7xl font-bold gradient-text transition-all duration-1000 ${
                mounted ? "animate-slide-down" : "opacity-0"
              }`}
              style={{
                backgroundSize: "200% 200%",
                animation: "gradient-shift 8s ease infinite",
              }}
            >
              Nâng Tầm Diễn Họa 3D
            </h1>

            {/* Animated Subtitle */}
            <p
              className={`text-xl md:text-2xl text-foreground/80 transition-all duration-1000 delay-200 ${
                mounted ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Khóa học 3ds Max & AutoCAD chuyên nghiệp
              <br />
              <span className="inline-block mt-2 text-primary animate-shimmer bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" style={{ backgroundSize: "200% 100%" }}>
                Kho tài nguyên 3D phong phú - Miễn phí & Premium
              </span>
            </p>

            {/* Animated Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 transition-all duration-1000 delay-500 ${
                mounted ? "animate-slide-up" : "opacity-0"
              }`}
            >
              <Link
                href="/courses"
                className="group px-8 py-4 bg-primary text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Khám phá khóa học</span>
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 animate-glow-pulse"></div>
              </Link>
              <Link
                href="/models"
                className="group px-8 py-4 glassmorphism border-primary/50 font-semibold rounded-lg hover:border-primary transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">Xem thư viện Models</span>
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="pt-12 animate-bounce-slow">
              <div className="mx-auto w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-primary rounded-full animate-pulse-neon"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { end: 500, suffix: "+", label: "Models" },
              { end: 1200, suffix: "+", label: "Học viên" },
              { end: 50, suffix: "+", label: "Khóa học" },
              { end: 98, suffix: "%", label: "Hài lòng" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center glassmorphism rounded-lg p-6 hover:border-primary transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Models Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 animate-slide-up">
              Models Nổi Bật
            </h2>
            <p className="text-foreground/70 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Tài nguyên 3D chất lượng cao cho mọi dự án
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={item}
                className="group relative glassmorphism rounded-lg overflow-hidden hover:border-accent transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Placeholder Image */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl opacity-30 group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12">
                    🏠
                  </div>

                  {/* Shimmer Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
                      style={{ backgroundSize: "200% 100%" }}
                    ></div>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-3 right-3 animate-pulse-neon">
                  <span className="px-3 py-1 bg-accent text-black text-xs font-bold rounded-full shadow-neon-green-sm">
                    FREE
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2 relative">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    Modern Interior Scene {item}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <span>🎨 Vray</span>
                    <span>•</span>
                    <span>📦 150 MB</span>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <Link
              href="/models"
              className="group inline-block px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Xem tất cả Models</span>
              <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              <span className="relative z-10 ml-2 inline-block group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto glassmorphism rounded-xl p-8 neon-glow-blue animate-scale-in">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center animate-slide-down">
              Về Xoi Studio
            </h2>

            <div className="space-y-4 text-foreground/90 leading-relaxed animate-fade-in">
              <p className="animate-slide-up" style={{ animationDelay: "100ms" }}>
                Chào mừng các bạn đến với{" "}
                <strong className="text-primary relative inline-block group">
                  Xoi Studio
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                </strong>{" "}
                - nơi khơi nguồn đam mê diễn họa 3D!
              </p>

              <p className="animate-slide-up" style={{ animationDelay: "200ms" }}>
                Chúng tôi cung cấp các khóa học{" "}
                <strong className="text-accent">3ds Max</strong> và{" "}
                <strong className="text-accent">AutoCAD</strong> từ cơ bản đến nâng cao, cùng kho
                tài nguyên 3D models phong phú để hỗ trợ các dự án của bạn.
              </p>

              <div
                className="relative inline-block mt-6 animate-scale-in"
                style={{ animationDelay: "400ms" }}
              >
                <div className="absolute -inset-2 bg-accent/50 rounded-lg blur-md animate-glow-pulse"></div>
                <div className="relative px-6 py-3 bg-accent text-black font-bold rounded-lg hover:scale-105 transition-transform cursor-pointer">
                  🎁 Ưu đãi đặc biệt cho 20 học viên đầu tiên!
                </div>
              </div>

              <p className="text-sm text-foreground/70 italic mt-4 animate-fade-in" style={{ animationDelay: "500ms" }}>
                Đăng ký ngay để không bỏ lỡ cơ hội học tập với giá ưu đãi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50"></div>

        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold animate-slide-up bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent" style={{ backgroundSize: "200% 100%", animation: "gradient-shift 5s ease infinite" }}>
              Sẵn sàng bắt đầu?
            </h2>

            <p className="text-xl text-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "100ms" }}>
              Tham gia cộng đồng những người đam mê 3D và nâng cao kỹ năng của bạn ngay hôm nay
            </p>

            <div className="pt-6 animate-scale-in" style={{ animationDelay: "200ms" }}>
              <button className="group relative px-12 py-4 bg-accent text-black text-lg font-bold rounded-lg hover:scale-110 transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Tham gia ngay</span>
                <div className="absolute inset-0 bg-accent animate-glow-pulse"></div>

                {/* Particles on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </button>
            </div>

            {/* Features Icons */}
            <div className="flex justify-center gap-8 pt-8 flex-wrap">
              {[
                { icon: "🎨", text: "3ds Max" },
                { icon: "📐", text: "AutoCAD" },
                { icon: "💎", text: "Vray" },
                { icon: "⚡", text: "Corona" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 glassmorphism px-6 py-4 rounded-lg hover:border-primary transition-all duration-300 animate-float cursor-pointer group"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform">{item.icon}</span>
                  <span className="text-sm text-foreground/70 group-hover:text-primary transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
