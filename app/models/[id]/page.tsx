"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ModelDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [countdown, setCountdown] = useState(300); // 5 minutes
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);

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
            <div className="glassmorphism rounded-lg overflow-hidden aspect-[4/3] flex items-center justify-center">
              <div className="text-9xl opacity-30">🏠</div>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="glassmorphism rounded-lg aspect-square flex items-center justify-center cursor-pointer hover:border-primary transition-all"
                >
                  <span className="text-2xl opacity-30">🏠</span>
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
                className="w-full py-4 bg-accent text-black font-bold rounded-lg neon-glow-green hover:scale-105 transition-all duration-300"
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
