"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function ModelDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [countdown, setCountdown] = useState(300);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [descExpanded, setDescExpanded] = useState(false);
  const [liked, setLiked] = useState(false);

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
    <div className="pt-20 min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="border-b border-white/8">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm text-foreground/50">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
          </svg>
          <Link href="/models" className="hover:text-primary transition-colors">3D Models</Link>
          <span>/</span>
          <span className="text-foreground/70">Phòng khách / Nội thất</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-5">

            {/* Image viewer: vertical thumbs + main image */}
            <div className="flex gap-3">
              {/* Vertical thumbnails */}
              <div className="hidden md:flex flex-col gap-2 w-[72px] flex-shrink-0">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-full aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === i
                        ? "border-primary shadow-[0_0_10px_rgba(0,212,255,0.4)]"
                        : "border-white/10 opacity-50 hover:opacity-80 hover:border-white/30"
                    }`}
                  >
                    <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="relative flex-1 rounded-xl overflow-hidden bg-[#0d0d18] group" style={{ aspectRatio: "4/3" }}>
                <img
                  src={images[activeImageIndex]}
                  alt="Modern Living Room"
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-primary/60"
                >
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15 19l-7-7 7-7"/>
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-primary/60"
                >
                  <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7"/>
                  </svg>
                </button>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-xs text-white/70">
                  {activeImageIndex + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Mobile thumbnails row */}
            <div className="flex md:hidden gap-2">
              {images.map((img, i) => (
                <button key={i} onClick={() => setActiveImageIndex(i)}
                  className={`w-16 aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImageIndex === i ? "border-primary" : "border-white/10 opacity-50"}`}>
                  <img src={img} alt="" className="w-full h-full object-cover"/>
                </button>
              ))}
            </div>

          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">

            {/* Author */}
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-black font-bold text-lg flex-shrink-0">
                M
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-sm">MinhDesign3D</span>
                  <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-xs text-foreground/50">128 followers</span>
              </div>
              <button className="px-3 py-1.5 rounded-lg border border-primary/40 text-primary text-xs hover:bg-primary/10 transition-colors">
                Follow
              </button>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-xl font-bold leading-snug">Modern Living Room</h1>
            </div>

            {/* Price + actions */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 bg-accent text-black text-xs font-bold rounded">PRO</span>
                <span className="text-2xl font-bold text-accent">500.000đ</span>
                <span className="text-xs text-foreground/40">Royalty free</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-accent text-black font-bold rounded-xl text-sm hover:bg-accent/90 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                  </svg>
                  Thêm vào giỏ
                </button>
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-1.5 px-4 py-3 rounded-xl border text-sm font-medium transition-all ${liked ? "border-red-500/50 text-red-400 bg-red-500/10" : "border-white/15 text-foreground/60 hover:border-white/30"}`}
                >
                  <svg className={`w-4 h-4 ${liked ? "fill-red-400" : "fill-none"}`} stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                  </svg>
                  34
                </button>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <svg className="w-3 h-3 text-foreground/30" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-xs text-foreground/35">Thanh toán an toàn qua VietQR</span>
              </div>
            </div>

            {/* Tech specs table */}
            <div className="rounded-xl border border-white/10 overflow-hidden text-sm">
              {[
                { label: "Platform", value: "3dsMax 2022 + obj" },
                { label: "Render", value: "Vray 5.0" },
                { label: "Size", value: "150 MB" },
                { label: "Polygons", value: "1.2M" },
                { label: "Style", value: "Hiện đại" },
                { label: "Materials", value: "Vải, Gỗ, Kim loại" },
                { label: "Colors", value: "3 phối màu" },
              ].map((row, i) => (
                <div key={row.label} className={`flex items-center justify-between px-4 py-2.5 ${i % 2 === 0 ? "bg-surface/80" : "bg-surface/40"}`}>
                  <span className="text-foreground/50">{row.label}</span>
                  <span className="font-medium text-foreground/90 text-right">{row.value}</span>
                </div>
              ))}
            </div>

            {/* Published + description */}
            <div className="space-y-2">
              <p className="text-xs text-foreground/40">Published 16 Tháng 3, 2026</p>
              <div className={`text-sm text-foreground/70 leading-relaxed overflow-hidden transition-all ${descExpanded ? "" : "line-clamp-3"}`}>
                Bộ sưu tập nội thất phòng khách phong cách hiện đại bao gồm sofa, bàn trà, kệ sách trang trí và các phụ kiện nhỏ. Tất cả vật liệu đã được setup sẵn cho Corona Renderer. Phù hợp với các dự án thiết kế nội thất cao cấp.
              </div>
              <button onClick={() => setDescExpanded(!descExpanded)} className="text-primary text-xs hover:underline flex items-center gap-1">
                {descExpanded ? "Thu gọn" : "Xem thêm"}
                <svg className={`w-3 h-3 transition-transform ${descExpanded ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {["phòng khách", "hiện đại", "V-Ray", "sofa", "nội thất", "3ds Max"].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full border border-white/10 text-foreground/50 bg-surface/50 hover:border-primary/40 hover:text-primary transition-all cursor-pointer">
                  {tag}
                </span>
              ))}
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
                image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&q=80",
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
