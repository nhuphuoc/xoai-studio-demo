"use client";

import { useState } from "react";

const mockAssets = {
  models: [
    {
      id: 1,
      title: "Modern Living Room",
      downloadedAt: "2024-03-15",
      size: "150 MB",
    },
    {
      id: 2,
      title: "Scandinavian Bedroom",
      downloadedAt: "2024-03-10",
      size: "200 MB",
    },
  ],
  courses: [
    {
      id: 1,
      title: "3ds Max Cơ Bản Đến Nâng Cao",
      progress: 35,
      lastWatched: "Bài 12: Modifiers",
      enrolledAt: "2024-03-01",
    },
    {
      id: 2,
      title: "Vray Rendering Mastery",
      progress: 60,
      lastWatched: "Bài 18: Advanced Lighting",
      enrolledAt: "2024-02-20",
    },
  ],
};

export default function MyAssetsPage() {
  const [activeTab, setActiveTab] = useState<"models" | "courses">("models");

  return (
    <div className="pt-20 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">
            Tài Sản Của Tôi
          </h1>
          <p className="text-foreground/70">
            Quản lý models đã mua và khóa học đang học
          </p>
        </div>

        {/* Tabs */}
        <div className="glassmorphism rounded-lg overflow-hidden">
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab("models")}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${
                activeTab === "models"
                  ? "bg-primary/10 text-primary border-b-2 border-primary"
                  : "text-foreground/60 hover:text-foreground hover:bg-surface/50"
              }`}
            >
              Models đã mua ({mockAssets.models.length})
            </button>
            <button
              onClick={() => setActiveTab("courses")}
              className={`flex-1 px-6 py-4 font-semibold transition-all ${
                activeTab === "courses"
                  ? "bg-primary/10 text-primary border-b-2 border-primary"
                  : "text-foreground/60 hover:text-foreground hover:bg-surface/50"
              }`}
            >
              Khóa học của tôi ({mockAssets.courses.length})
            </button>
          </div>

          <div className="p-6">
            {/* Models Tab */}
            {activeTab === "models" && (
              <div className="space-y-4">
                {mockAssets.models.length > 0 ? (
                  mockAssets.models.map((model) => (
                    <div
                      key={model.id}
                      className="glassmorphism rounded-lg p-6 hover:border-primary transition-all"
                    >
                      <div className="flex items-center gap-6">
                        {/* Thumbnail */}
                        <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-4xl opacity-30">🏠</span>
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{model.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-foreground/60">
                            <span>📦 {model.size}</span>
                            <span>📅 Tải về: {model.downloadedAt}</span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                          <button className="px-6 py-2 bg-primary/20 text-primary rounded-lg hover:bg-primary hover:text-black transition-all font-semibold">
                            Tải lại
                          </button>
                          <button className="px-6 py-2 bg-accent/20 text-accent rounded-lg hover:bg-accent hover:text-black transition-all font-semibold">
                            Xem chi tiết
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4 opacity-30">📦</div>
                    <p className="text-foreground/60 mb-4">
                      Bạn chưa mua model nào
                    </p>
                    <button className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:neon-glow-blue transition-all">
                      Khám phá Models
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Courses Tab */}
            {activeTab === "courses" && (
              <div className="space-y-4">
                {mockAssets.courses.length > 0 ? (
                  mockAssets.courses.map((course) => (
                    <div
                      key={course.id}
                      className="glassmorphism rounded-lg p-6 hover:border-accent transition-all"
                    >
                      <div className="flex items-center gap-6">
                        {/* Thumbnail */}
                        <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-4xl opacity-30">📚</span>
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-primary to-accent"
                                  style={{ width: `${course.progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm font-medium text-accent">
                                {course.progress}%
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-foreground/60">
                              <span>📖 {course.lastWatched}</span>
                              <span>📅 Bắt đầu: {course.enrolledAt}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action */}
                        <div>
                          <button className="px-6 py-3 bg-accent text-black font-bold rounded-lg neon-glow-green hover:scale-105 transition-all">
                            Tiếp tục học
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4 opacity-30">📚</div>
                    <p className="text-foreground/60 mb-4">
                      Bạn chưa đăng ký khóa học nào
                    </p>
                    <button className="px-6 py-3 bg-accent text-black font-semibold rounded-lg neon-glow-green transition-all">
                      Xem khóa học
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glassmorphism rounded-lg p-6 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-3xl font-bold text-primary mb-1">
              {mockAssets.models.length}
            </div>
            <div className="text-sm text-foreground/60">Models đã mua</div>
          </div>

          <div className="glassmorphism rounded-lg p-6 text-center">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-bold text-accent mb-1">
              {mockAssets.courses.length}
            </div>
            <div className="text-sm text-foreground/60">Khóa học đang học</div>
          </div>

          <div className="glassmorphism rounded-lg p-6 text-center">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold text-primary mb-1">
              {Math.round(
                mockAssets.courses.reduce((sum, c) => sum + c.progress, 0) /
                  mockAssets.courses.length
              )}%
            </div>
            <div className="text-sm text-foreground/60">Tiến độ trung bình</div>
          </div>
        </div>
      </div>
    </div>
  );
}
