"use client";

import { useState } from "react";
import Link from "next/link";

const mockAssets = {
  models: [
    { id: 1, title: "Modern Living Room", downloadedAt: "15/03/2024", size: "150 MB", format: ".max .fbx", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80" },
    { id: 2, title: "Scandinavian Bedroom", downloadedAt: "10/03/2024", size: "200 MB", format: ".max .obj", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80" },
  ],
  courses: [
    { id: 1, title: "3ds Max Cơ Bản Đến Nâng Cao", progress: 35, totalLessons: 120, doneLessons: 42, lastWatched: "Bài 12: Modifiers", enrolledAt: "01/03/2024", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80" },
    { id: 2, title: "Vray Rendering Mastery", progress: 60, totalLessons: 80, doneLessons: 48, lastWatched: "Bài 18: Advanced Lighting", enrolledAt: "20/02/2024", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80" },
  ],
};

export default function MyAssetsPage() {
  const [activeTab, setActiveTab] = useState<"models" | "courses">("courses");

  const avgProgress = Math.round(
    mockAssets.courses.reduce((s, c) => s + c.progress, 0) / mockAssets.courses.length
  );

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10 max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">Tài Sản Của Tôi</h1>
          <p className="text-sm text-foreground/50">Quản lý models đã mua và khóa học đang học</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: "Models đã mua", value: mockAssets.models.length, color: "text-primary", icon: "📦" },
            { label: "Khóa học", value: mockAssets.courses.length, color: "text-accent", icon: "🎓" },
            { label: "Tiến độ TB", value: `${avgProgress}%`, color: "text-primary", icon: "📈" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-surface/40 p-3 sm:p-5 flex items-center gap-2 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/5 flex items-center justify-center text-lg sm:text-xl flex-shrink-0">{s.icon}</div>
              <div className="min-w-0">
                <div className={`text-xl sm:text-2xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-foreground/50 truncate">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/10 mb-6 gap-1">
          {[
            { key: "models", label: `Models đã mua`, count: mockAssets.models.length },
            { key: "courses", label: `Khóa học của tôi`, count: mockAssets.courses.length },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as "models" | "courses")}
              className={`px-5 py-3 text-sm font-medium border-b-2 transition-all -mb-px ${
                activeTab === tab.key
                  ? "text-primary border-primary"
                  : "text-foreground/50 border-transparent hover:text-foreground/80"
              }`}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${activeTab === tab.key ? "bg-primary/15 text-primary" : "bg-white/8 text-foreground/40"}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Models Tab */}
        {activeTab === "models" && (
          <div className="space-y-3">
            {mockAssets.models.map((model) => (
              <div key={model.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-2xl border border-white/10 bg-surface/30 hover:border-primary/40 transition-all group">
                <div className="w-full h-40 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/8">
                  <img src={model.image} alt={model.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{model.title}</h3>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/45">
                    <span>📦 {model.size}</span>
                    <span>{model.format}</span>
                    <span>📅 {model.downloadedAt}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link href={`/models/${model.id}`} className="flex-1 sm:flex-none text-center px-4 py-2 text-xs rounded-xl border border-white/15 text-foreground/60 hover:border-primary/50 hover:text-primary transition-all">
                    Xem chi tiết
                  </Link>
                  <button className="flex-1 sm:flex-none px-4 py-2 text-xs rounded-xl bg-primary/15 text-primary border border-primary/30 hover:bg-primary hover:text-black transition-all font-semibold">
                    Tải xuống
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Courses Tab */}
        {activeTab === "courses" && (
          <div className="space-y-3">
            {mockAssets.courses.map((course) => (
              <div key={course.id} className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-5 rounded-2xl border border-white/10 bg-surface/30 hover:border-primary/40 transition-all group">
                {/* Thumbnail */}
                <div className="w-full h-44 sm:w-20 sm:h-20 rounded-xl overflow-hidden flex-shrink-0 border border-white/8">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 space-y-2">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{course.title}</h3>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-700"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-primary flex-shrink-0">{course.progress}%</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-foreground/45">
                    <span className="truncate max-w-[180px] sm:max-w-none">📖 {course.lastWatched}</span>
                    <span>{course.doneLessons}/{course.totalLessons} bài</span>
                    <span>📅 {course.enrolledAt}</span>
                  </div>
                </div>

                {/* Action */}
                <div className="flex-shrink-0">
                  <Link
                    href={`/courses/${course.id}/learn`}
                    className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-xl bg-primary text-black text-sm font-bold hover:bg-primary/90 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    Tiếp tục học
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
