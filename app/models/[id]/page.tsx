"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ModelDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 minutes
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
    "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
  ];

  useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  // Countdown timer
  useEffect(() => {
    if (!showPaymentModal) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showPaymentModal]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You can add a toast notification here
  };

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!resolvedParams) {
    return null;
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-foreground/60">
          <Link href="/models" className="hover:text-primary transition-colors">
            Models
          </Link>
          <span>/</span>
          <span className="text-foreground">Modern Living Room</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Image Carousel */}
          <div className="space-y-4">
            <div className="relative glassmorphism rounded-lg overflow-hidden aspect-[4/3] bg-surface group">
              <img
                src={images[activeImageIndex]}
                alt="Modern Living Room"
                className="w-full h-full object-cover transition-opacity duration-300"
              />

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glassmorphism flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glassmorphism flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
              >
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full glassmorphism text-sm">
                {activeImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`glassmorphism rounded-lg aspect-square overflow-hidden cursor-pointer transition-all bg-surface ${
                    activeImageIndex === i ? "border-2 border-primary" : "hover:border-primary"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details & Purchase */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Modern Living Room</h1>
              <p className="text-foreground/70">
                Mô hình phòng khách hiện đại với đầy đủ nội thất và ánh sáng tự nhiên
              </p>
            </div>

            {/* Price */}
            <div className="glassmorphism rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-foreground/70">Giá:</span>
                <span className="text-3xl font-bold text-accent">500.000đ</span>
              </div>

              <button
                onClick={() => setShowPaymentModal(true)}
                className="w-full py-4 bg-accent text-black font-bold rounded-lg hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/50"
              >
                Mua ngay
              </button>

              <p className="text-xs text-center text-foreground/50 mt-3">
                Thanh toán an toàn qua VietQR
              </p>
            </div>

            {/* Technical Details */}
            <div className="glassmorphism rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Thông tin kỹ thuật
              </h2>

              <table className="w-full text-sm">
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="py-3 text-foreground/70">Phần mềm</td>
                    <td className="py-3 text-right font-medium">3ds Max 2022</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-foreground/70">Renderer</td>
                    <td className="py-3 text-right font-medium">Vray 5.0</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-foreground/70">Polygons</td>
                    <td className="py-3 text-right font-medium">1.2M</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-foreground/70">Textures</td>
                    <td className="py-3 text-right font-medium">4K PBR</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-foreground/70">Kích thước</td>
                    <td className="py-3 text-right font-medium">150 MB</td>
                  </tr>
                  <tr>
                    <td className="py-3 text-foreground/70">Định dạng</td>
                    <td className="py-3 text-right font-medium">.max, .fbx, .obj</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Features */}
            <div className="glassmorphism rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Bao gồm
              </h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>File 3D hoàn chỉnh</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Textures & Materials</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Lighting setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Camera angles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-accent">✓</span>
                  <span>Hỗ trợ kỹ thuật</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Models Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Similar Models</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              {
                id: 1,
                title: "Eichholtz Nova Nickel",
                image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80",
                isPro: true,
                comments: 0,
                likes: 0,
              },
              {
                id: 2,
                title: "Brage",
                image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80",
                isPro: true,
                comments: 3,
                likes: 6,
              },
              {
                id: 3,
                title: "Classic Glass Chandelier",
                image: "https://images.unsplash.com/photo-1534449017125-41a7c7fbf643?w=400&q=80",
                isPro: true,
                comments: 0,
                likes: 5,
              },
              {
                id: 4,
                title: "Addis Diamond Chandelier",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
                isPro: true,
                comments: 0,
                likes: 3,
              },
              {
                id: 5,
                title: "Velvet covered chandelier",
                image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=400&q=80",
                isPro: true,
                comments: 0,
                likes: 2,
              },
              {
                id: 6,
                title: "Quintiesse Saucer pendant",
                image: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?w=400&q=80",
                isPro: true,
                comments: 0,
                likes: 0,
              },
            ].map((model) => (
              <Link
                key={model.id}
                href={`/models/${model.id}`}
                className="group glassmorphism rounded-lg overflow-hidden hover:border-primary transition-all"
              >
                {/* Image */}
                <div className="relative aspect-square bg-surface overflow-hidden">
                  <img
                    src={model.image}
                    alt={model.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                </div>

                {/* Info */}
                <div className="p-3 space-y-2">
                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {model.title}
                  </h3>

                  <div className="flex items-center justify-between text-xs">
                    {model.isPro && (
                      <span className="px-2 py-0.5 bg-accent text-black font-bold rounded">
                        PRO
                      </span>
                    )}

                    <div className="flex items-center gap-2 text-foreground/60 ml-auto">
                      {model.comments > 0 && (
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" />
                          </svg>
                          <span>{model.comments}</span>
                        </div>
                      )}

                      {model.likes > 0 && (
                        <div className="flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                          <span>{model.likes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="px-8 py-3 glassmorphism border-primary/50 font-semibold rounded-lg hover:border-primary transition-all">
              Show more
            </button>
          </div>
        </section>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glassmorphism rounded-xl max-w-md w-full p-6 space-y-6 neon-glow-blue">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary">Thanh toán</h2>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            {/* QR Code Placeholder */}
            <div className="bg-white rounded-lg p-4 flex items-center justify-center">
              <div className="text-center">
                <div className="w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                </div>
                <p className="text-black mt-2 text-sm">Quét mã QR để thanh toán</p>
              </div>
            </div>

            {/* Countdown */}
            <div className="text-center">
              <p className="text-foreground/70 text-sm mb-2">Thời gian còn lại:</p>
              <p className="text-3xl font-bold text-accent">{formatTime(countdown)}</p>
            </div>

            {/* Payment Info */}
            <div className="space-y-3">
              <div className="glassmorphism rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-xs text-foreground/60 mb-1">Số tài khoản</p>
                    <p className="font-mono font-semibold">9876543210</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard("9876543210")}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded hover:bg-primary/30 transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="glassmorphism rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-xs text-foreground/60 mb-1">Mã giao dịch</p>
                    <p className="font-mono font-semibold">XS{resolvedParams.id}ABC123</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(`XS${resolvedParams.id}ABC123`)}
                    className="px-3 py-1 bg-primary/20 text-primary text-sm rounded hover:bg-primary/30 transition-colors"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="glassmorphism rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground/70">Số tiền</span>
                  <span className="text-xl font-bold text-accent">500.000đ</span>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="text-center p-4 bg-primary/10 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <p className="text-sm font-medium">Đang chờ thanh toán...</p>
              </div>
              <p className="text-xs text-foreground/60">
                Hệ thống sẽ tự động xác nhận và chuyển hướng
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
